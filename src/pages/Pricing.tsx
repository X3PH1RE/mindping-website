
import React from 'react';
import { Check, Star, Zap, Crown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const Pricing = () => {
  const pricingTiers = [
    {
      name: "Cold Pitch",
      price: "Free",
      description: "Perfect for getting started with basic meeting assistance",
      icon: <Star className="w-6 h-6" />,
      features: [
        "Basic meeting transcription",
        "Simple note-taking",
        "5 meetings per month",
        "Basic export options",
        "Email support"
      ],
      buttonText: "Get Started Free",
      popular: false,
      gradient: "from-gray-400 to-gray-600"
    },
    {
      name: "Warm Lead",
      price: "$29",
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
      gradient: "from-amber-400 to-orange-500"
    },
    {
      name: "Closed Deal",
      price: "$99",
      period: "/month",
      description: "For established freelancers managing multiple clients",
      icon: <Crown className="w-6 h-6" />,
      features: [
        "Everything in Warm Lead",
        "AI-powered insights & analytics",
        "Custom branding on exports",
        "Team collaboration features",
        "Advanced client reporting",
        "API access",
        "Custom integrations",
        "Dedicated account manager",
        "White-label options"
      ],
      buttonText: "Go Pro",
      popular: false,
      gradient: "from-purple-500 to-purple-700"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 py-4 px-6 bg-background/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="font-bold text-xl flex items-center">
            <span className="text-gradient-orange">MindPing</span>
          </div>
          
          <nav className="hidden md:flex space-x-6">
            <a href="/" className="text-neutral-dark hover:text-amber-500 transition-colors animated-underline">Home</a>
            <a href="/pricing" className="text-amber-600 font-medium">Pricing</a>
          </nav>
          
          <div>
            <Button className="bg-amber-500 hover:bg-amber-600">
              Login
            </Button>
          </div>
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
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <Card 
                key={tier.name} 
                className={`relative overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
                  tier.popular ? 'scale-105 border-amber-400 border-2' : ''
                }`}
              >
                {tier.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-amber-400 to-orange-500 text-white text-center py-2 text-sm font-medium">
                    Most Popular
                  </div>
                )}
                
                <CardHeader className={tier.popular ? 'pt-12' : ''}>
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
                  <Button 
                    className={`w-full ${
                      tier.popular 
                        ? 'bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600' 
                        : ''
                    }`}
                    variant={tier.popular ? 'default' : 'outline'}
                  >
                    {tier.buttonText}
                  </Button>
                </CardFooter>
              </Card>
            ))}
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
                <p className="text-neutral-dark">We accept all major credit cards, PayPal, and bank transfers for annual plans.</p>
              </div>
              <div className="text-left">
                <h3 className="font-semibold mb-2">Can I cancel anytime?</h3>
                <p className="text-neutral-dark">Absolutely. Cancel your subscription at any time with no questions asked.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Pricing;
