
import React, { useEffect } from 'react';
import HeroSection from '@/components/HeroSection';
import ValuePropSection from '@/components/ValuePropSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import Footer from '@/components/Footer';
import { Briefcase } from 'lucide-react';

const Index: React.FC = () => {
  useEffect(() => {
    document.title = "MindPing - Never Forget What Was Discussed in Meetings";
  }, []);

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 left-0 right-0 z-50 py-4 px-6 bg-background/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="font-bold text-xl flex items-center">
            <span className="text-gradient-orange">MindPing</span>
          </div>
          
          <nav className="hidden md:flex space-x-6">
            <a href="#value-props" className="text-neutral-dark hover:text-amber-500 transition-colors animated-underline">Features</a>
            <a href="#how-it-works" className="text-neutral-dark hover:text-amber-500 transition-colors animated-underline">How It Works</a>
            <a href="#testimonials" className="text-neutral-dark hover:text-amber-500 transition-colors animated-underline">Testimonials</a>
          </nav>
          
          <div>
            <button className="bg-amber-500/10 hover:bg-amber-500/20 text-amber-700 font-medium px-6 py-2 rounded-full transition-colors flex items-center">
              <Briefcase size={16} className="mr-2" />
              Get Started
            </button>
          </div>
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
    </div>
  );
};

export default Index;
