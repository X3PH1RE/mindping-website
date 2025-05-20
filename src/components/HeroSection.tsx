
import React from 'react';
import { ArrowDown } from 'lucide-react';
import FloatingElements from './FloatingElements';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center py-20 px-4">
      <FloatingElements />
      
      <div className="max-w-5xl mx-auto text-center z-10">
        <h1 className="mb-8 animate-fade-in">
          <span className="font-bold block mb-2">80% of professionals</span>
          <div className="inline-block text-gradient-teal font-bold mx-1">Forget</div>
          <span className="font-bold">what was discussed in meetings.</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 text-neutral-dark opacity-80 animate-fade-in-delayed">
          Most tools help you catch up. We help you keep up.
        </p>
        
        <button className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-4 rounded-full text-lg font-medium transition-all transform hover:-translate-y-1 hover:shadow-lg animate-fade-in-delayed">
          Get the Extension
        </button>
        
        <div className="mt-16 flex justify-center animate-fade-in-delayed">
          <a href="#value-props" className="flex flex-col items-center text-neutral-dark hover:text-teal-600 transition-colors">
            <span className="mb-2">Learn more</span>
            <ArrowDown size={18} className="animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
