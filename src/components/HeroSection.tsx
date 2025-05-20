
import { ArrowDown } from 'lucide-react';
import React from 'react';
import AnimatedArrow from './AnimatedArrow';
import FloatingElements from './FloatingElements';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center py-20 px-4">
      <FloatingElements />
      
      <div className="max-w-5xl mx-auto text-center z-10">
        <h1 className="mb-8 animate-fade-in">
          <span className="font-bold block mb-2">80% of professionals</span>
          <div className="flex items-center justify-center">
            <span className="relative inline-block px-4 py-1 mr-3 bg-secondary rounded-md">____</span>
            <AnimatedArrow className="mx-3" />
            <span className="text-purple-dark font-bold">Forget</span>
          </div>
          <span className="font-bold block mt-2">what was discussed in meetings.</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 text-neutral-dark opacity-80 animate-fade-in-delayed">
          Most tools help you catch up. We help you keep up.
        </p>
        
        <button className="bg-purple hover:bg-purple-dark text-white px-8 py-4 rounded-full text-lg font-medium transition-all transform hover:-translate-y-1 hover:shadow-lg animate-fade-in-delayed">
          Get the Extension
        </button>
        
        <div className="mt-16 animate-fade-in-delayed">
          <button className="flex items-center mx-auto text-neutral hover:text-neutral-dark transition-colors">
            <span className="mr-2">Learn more</span>
            <ArrowDown size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
