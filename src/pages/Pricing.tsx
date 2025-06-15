
import React, { useState, useEffect } from 'react';
import { Check, Star, Zap, Crown, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import AuthDialog from '@/components/AuthDialog';
import MobileNav from '@/components/MobileNav';
import { useAuth } from '@/hooks/useAuth';
import { useProfile } from '@/hooks/useProfile';
import { useToast } from '@/hooks/use-toast';

declare global {
  interface Window {
    Razorpay: any;
  }
}

const API_BASE = 'https://mindping-website-backend.onrender.com';

const Pricing = () => {
  const [loading, setLoading] = useState<string | null>(null);
  const [showAuthDialog, setShowAuthDialog] = useState(false);
  const { user, loading: authLoading, signOut } = useAuth();
  const { profile, loading: profileLoading, updateRole, isPro } = useProfile(user);
  const { toast } = useToast();

  useEffect(() => {
    // Load Razorpay script
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleSubscription = async (amount: number, planName: string) => {
    if (!user) {
      setShowAuthDialog(true);
      return;
    }

    try {
      setLoading(planName);
      const response = await fetch(`${API_BASE}/api/create-order`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount,
          planName,
        }),
      });
      const order = await response.json();
      
      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID,
        amount: order.amount,
        currency: order.currency,
        name: 'MindPing',
        description: `${planName} Subscription`,
        order_id: order.id,
        handler: async function (response: any) {
          try {
            const verifyResponse = await fetch(`${API_BASE}/api/verify-payment`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
              }),
            });
            const verification = await verifyResponse.json();
            
            if (verification.verified) {
              // Update user role to pro in Supabase
              const success = await updateRole('pro', response.razorpay_payment_id);
              
              if (success) {
                toast({
                  title: "Payment Successful!",
                  description: "You are now a Pro user! Enjoy your premium features.",
                });
                // Redirect to success page or stay on pricing
                window.location.href = '/success';
              } else {
                toast({
                  title: "Payment Successful",
                  description: "Payment verified but there was an issue updating your account. Please contact support.",
                  variant: "destructive",
                });
              }
            } else {
              toast({
                title: "Payment Failed",
                description: "Payment verification failed. Please contact support.",
                variant: "destructive",
              });
            }
          } catch (error) {
            console.error('Error:', error);
            toast({
              title: "Payment Error",
              description: "Error verifying payment. Please contact support.",
              variant: "destructive",
            });
          }
        },
        prefill: {
          name: '',
          email: user?.email || '',
          contact: '',
        },
        theme: {
          color: '#F59E0B',
        },
      };
      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch (error) {
      console.error('Error:', error);
      toast({
        title: "Error",
        description: "Error initiating payment. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(null);
    }
  };

  const handleAuthSuccess = () => {
    toast({
      title: "Success",
      description: "You can now purchase a subscription!",
    });
  };

  const handleSignOut = async () => {
    try {
      await signOut();
      toast({
        title: "Signed Out",
        description: "You have been signed out successfully.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Error signing out. Please try again.",
        variant: "destructive",
      });
    }
  };

  const pricingTiers = [
    {
      name: "Cold Pitch",
      price: "Free",
      description: "Perfect for getting started with basic meeting assistance",
      icon: <Star className="w-6 h-6" />,
      features: [
        "Basic meeting transcription",
        "Simple note-taking",
        "5 meetings of 30 minutes each per month",
        "Basic export options",
        "Email support"
      ],
      buttonText: "Get Started Free",
      popular: false,
      gradient: "from-gray-400 to-gray-600",
      amount: 0
    },
    {
      name: "Warm Lead",
      price: "₹749",
      period: "/month",
      description: "Ideal for active freelancers building client relationships",
      icon: <Zap className="w-6 h-6" />,
      features: [
        "Advanced AI transcription",
        "Smart action items extraction",
        "Unlimited meetings",
        "Client-specific folders",
        "Follow-up reminders",
        "Multiple export formats",
        "Priority support",
        "Integration with calendar apps"
      ],
      buttonText: "Start Warm Lead",
      popular: true,
      gradient: "from-amber-400 to-orange-500",
      amount: 749
    },
    {
      name: "Closed Deal",
      price: "Coming Soon",
      period: "",
      description: "For established freelancers managing multiple clients",
      icon: <Crown className="w-6 h-6" />,
      features: [
        "Everything in Warm Lead",
        "AI-powered insights & analytics",
        "Custom branding on exports",
        "Team collaboration features",
        "Advanced client reporting",
        "Custom integrations",
        "White-label options"
      ],
      buttonText: "Coming Soon",
      popular: false,
      gradient: "from-purple-500 to-purple-700",
      amount: 0
    }
  ];

  if (authLoading || profileLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-amber-500 mx-auto"></div>
          <p className="mt-2 text-neutral-dark">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 py-4 px-6 bg-background/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="font-bold text-xl flex items-center min-w-[220px]">
            <span className="text-gradient-orange">MindPing</span>
          </div>
          <nav className="hidden md:flex flex-1 justify-center space-x-6">
            <a href="/" className="text-neutral-dark hover:text-amber-500 transition-colors animated-underline">Home</a>
            <a href="/pricing" className="text-amber-600 font-medium">Pricing</a>
          </nav>
          <div className="hidden md:flex items-center gap-3 min-w-[120px] justify-end">
            {user ? (
              <div className="flex items-center gap-3">
                <div className="text-right">
                  <span className="text-sm text-neutral-dark hidden sm:block">
                    {user.email}
                  </span>
                  {profile && (
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      isPro ? 'bg-amber-100 text-amber-800' : 'bg-gray-100 text-gray-600'
                    }`}>
                      {isPro ? 'Pro' : 'Free'}
                    </span>
                  )}
                </div>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={handleSignOut}
                  className="flex items-center gap-2"
                >
                  <LogOut className="w-4 h-4" />
                  Sign Out
                </Button>
              </div>
            ) : (
              <Button className="bg-amber-500 hover:bg-amber-600" onClick={() => setShowAuthDialog(true)}>
                Login
              </Button>
            )}
          </div>

          <MobileNav 
            user={user}
            onAuthClick={() => setShowAuthDialog(true)}
            onSignOut={handleSignOut}
            currentPage="pricing"
          />
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-24">
        <div className="max-w-7xl mx-auto px-4 py-16">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Choose Your <span className="text-gradient-orange">Success Path</span>
            </h1>
            <p className="text-xl text-neutral-dark max-w-2xl mx-auto">
              From cold pitches to closed deals, we have the perfect plan to accelerate your freelance journey
            </p>
            {!user && (
              <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-lg max-w-md mx-auto">
                <p className="text-amber-800 text-sm">
                  <strong>Note:</strong> Please sign in to purchase a subscription
                </p>
              </div>
            )}
            {user && isPro && (
              <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg max-w-md mx-auto">
                <p className="text-green-800 text-sm">
                  <strong>🎉 You are a Pro user!</strong> Enjoy all premium features.
                </p>
              </div>
            )}
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingTiers.map((tier) => {
              const isCurrentPlan = (tier.name === "Cold Pitch" && !isPro) || 
                                   (tier.name === "Warm Lead" && isPro);
              
              return (
                <Card 
                  key={tier.name} 
                  className={`relative overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
                    tier.popular ? 'scale-105 border-amber-400 border-2' : ''
                  } ${isCurrentPlan ? 'ring-2 ring-green-500' : ''}`}
                >
                  {tier.popular && (
                    <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-amber-400 to-orange-500 text-white text-center py-2 text-sm font-medium">
                      Most Popular
                    </div>
                  )}
                  
                  {isCurrentPlan && (
                    <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-green-400 to-green-500 text-white text-center py-2 text-sm font-medium">
                      Your Current Plan
                    </div>
                  )}
                  
                  <CardHeader className={tier.popular || isCurrentPlan ? 'pt-12' : ''}>
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${tier.gradient} flex items-center justify-center text-white mb-4`}>
                      {tier.icon}
                    </div>
                    <CardTitle className="text-2xl font-bold">{tier.name}</CardTitle>
                    <CardDescription className="text-neutral-dark">{tier.description}</CardDescription>
                    <div className="mt-4">
                      <span className="text-4xl font-bold">{tier.price}</span>
                      {tier.period && <span className="text-neutral text-lg">{tier.period}</span>}
                    </div>
                  </CardHeader>

                  <CardContent>
                    <ul className="space-y-3">
                      {tier.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-3">
                          <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>

                  <CardFooter>
                    {tier.buttonText === 'Coming Soon' ? (
                      <button
                        className="w-full h-11 bg-gradient-to-r from-purple-500 to-purple-700 text-white opacity-80 cursor-not-allowed animate-pulse rounded-md font-semibold text-base select-none border-none outline-none flex items-center justify-center"
                        style={{ pointerEvents: 'none' }}
                        tabIndex={-1}
                      >
                        Coming Soon
                      </button>
                    ) : isCurrentPlan ? (
                      <Button 
                        className="w-full"
                        variant="outline"
                        disabled
                      >
                        Current Plan
                      </Button>
                    ) : (
                      <Button 
                        className={`w-full ${
                          tier.popular 
                            ? 'bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600' 
                            : ''
                        }`}
                        variant={tier.popular ? 'default' : 'outline'}
                        onClick={() => handleSubscription(tier.amount, tier.name)}
                        disabled={loading === tier.name || !user}
                      >
                        {loading === tier.name ? 'Processing...' : tier.buttonText}
                      </Button>
                    )}
                  </CardFooter>
                </Card>
              );
            })}
          </div>

          {/* FAQ Section */}
          <div className="mt-20 text-center">
            <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
              <div className="text-left">
                <h3 className="font-semibold mb-2">Can I switch between plans?</h3>
                <p className="text-neutral-dark">Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.</p>
              </div>
              <div className="text-left">
                <h3 className="font-semibold mb-2">Is there a free trial?</h3>
                <p className="text-neutral-dark">Our Cold Pitch plan is completely free forever. Paid plans include a 14-day free trial.</p>
              </div>
              <div className="text-left">
                <h3 className="font-semibold mb-2">What payment methods do you accept?</h3>
                <p className="text-neutral-dark">We accept all major credit cards, UPI, netbanking, and popular wallets through Razorpay.</p>
              </div>
              <div className="text-left">
                <h3 className="font-semibold mb-2">Can I cancel anytime?</h3>
                <p className="text-neutral-dark">Absolutely. Cancel your subscription at any time with no questions asked.</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Auth Dialog */}
      <AuthDialog 
        open={showAuthDialog} 
        onOpenChange={setShowAuthDialog}
        onSuccess={handleAuthSuccess}
      />
    </div>
  );
};

export default Pricing;
