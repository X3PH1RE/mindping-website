
import React, { useEffect } from 'react';
import HeroSection from '@/components/HeroSection';
import ValuePropSection from '@/components/ValuePropSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import Footer from '@/components/Footer';

const Index: React.FC = () => {
  useEffect(() => {
    document.title = "MeetingBuddy - Never Forget What Was Discussed in Meetings";
  }, []);

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 left-0 right-0 z-50 py-4 px-6 bg-background/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="font-bold text-xl">
            <span className="gradient-text">MeetingBuddy</span>
          </div>
          
          <nav className="hidden md:flex space-x-6">
            <a href="#" className="text-neutral-dark hover:text-purple transition-colors animated-underline">Features</a>
            <a href="#" className="text-neutral-dark hover:text-purple transition-colors animated-underline">Pricing</a>
            <a href="#" className="text-neutral-dark hover:text-purple transition-colors animated-underline">About</a>
          </nav>
          
          <div>
            <button className="bg-purple/10 hover:bg-purple/20 text-purple font-medium px-6 py-2 rounded-full transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </header>
      
      <main>
        <HeroSection />
        <ValuePropSection />
        <HowItWorksSection />
        <TestimonialsSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
