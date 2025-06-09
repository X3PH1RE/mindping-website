
import React, { useEffect, useState } from 'react';
import HeroSection from '@/components/HeroSection';
import ValuePropSection from '@/components/ValuePropSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import Footer from '@/components/Footer';
import MobileNav from '@/components/MobileNav';
import AuthDialog from '@/components/AuthDialog';
import { Briefcase } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';

const Index: React.FC = () => {
  const [showAuthDialog, setShowAuthDialog] = useState(false);
  const { user, signOut } = useAuth();

  useEffect(() => {
    document.title = "MindPing - Never Forget What Was Discussed in Meetings";
  }, []);

  const handleAuthClick = () => {
    setShowAuthDialog(true);
  };

  const handleSignOut = async () => {
    try {
      await signOut();
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 left-0 right-0 z-50 py-4 px-6 bg-background/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="font-bold text-xl flex items-center">
            <span className="text-gradient-orange">MindPing</span>
          </div>
          
          <nav className="hidden md:flex space-x-6 flex-1 justify-center">
            <a href="#value-props" className="text-neutral-dark hover:text-amber-500 transition-colors animated-underline">Features</a>
            <a href="#how-it-works" className="text-neutral-dark hover:text-amber-500 transition-colors animated-underline">How It Works</a>
            <a href="#testimonials" className="text-neutral-dark hover:text-amber-500 transition-colors animated-underline">Testimonials</a>
            <a href="/pricing" className="text-neutral-dark hover:text-amber-500 transition-colors animated-underline">Pricing</a>
          </nav>
          
          <div className="hidden md:block">
            <button 
              onClick={handleAuthClick}
              className="bg-amber-500/10 hover:bg-amber-500/20 text-amber-700 font-medium px-6 py-2 rounded-full transition-colors flex items-center"
            >
              <Briefcase size={16} className="mr-2" />
              Get Started
            </button>
          </div>

          <MobileNav 
            user={user}
            onAuthClick={handleAuthClick}
            onSignOut={handleSignOut}
            currentPage="home"
          />
        </div>
      </header>
      
      <main>
        <HeroSection />
        <div id="value-props">
          <ValuePropSection />
        </div>
        <div id="how-it-works">
          <HowItWorksSection />
        </div>
        <div id="testimonials">
          <TestimonialsSection />
        </div>
      </main>
      
      <Footer />
      
      <AuthDialog 
        open={showAuthDialog} 
        onOpenChange={setShowAuthDialog}
      />
    </div>
  );
};

export default Index;
