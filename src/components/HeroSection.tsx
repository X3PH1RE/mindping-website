
import React, { useState, useEffect } from 'react';
import { ArrowDown, EyeOff } from 'lucide-react';
import FloatingElements from './FloatingElements';

const HeroSection: React.FC = () => {
  // State to control the blur effect animation
  const [blurAmount, setBlurAmount] = useState(4);
  
  // Effect to animate the blur periodically
  useEffect(() => {
    const interval = setInterval(() => {
      setBlurAmount(prev => (prev === 4 ? 2 : 4));
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center py-20 px-4">
      <FloatingElements />
      
      <div className="max-w-5xl mx-auto text-center z-10">
        <h1 className="mb-8 animate-fade-in">
          <span className="font-bold block mb-2">80% of professionals</span>
          <div className="relative inline-flex items-center">
            <div 
              className="inline-block text-gradient-orange font-bold mx-1 py-1"
              style={{ 
                filter: `blur(${blurAmount}px)`,
                transition: 'filter 1.5s ease-in-out'
              }}
            >
              Forget
            </div>
            <EyeOff 
              size={24} 
              className="absolute -right-8 top-1/2 transform -translate-y-1/2 text-amber-500 opacity-70"
            />
          </div>
          <span className="font-bold">what was discussed in meetings.</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 text-neutral-dark opacity-80 animate-fade-in-delayed">
          Most tools help you catch up. We help you keep up.
        </p>
        
        <button className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-full text-lg font-medium transition-all transform hover:-translate-y-1 hover:shadow-lg animate-fade-in-delayed">
          Get the Extension
        </button>
        
        <div className="mt-16 flex justify-center animate-fade-in-delayed">
          <a href="#value-props" className="flex flex-col items-center text-neutral-dark hover:text-amber-600 transition-colors">
            <span className="mb-2">Learn more</span>
            <ArrowDown size={18} className="animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
