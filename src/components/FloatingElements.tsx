
import React from 'react';

const FloatingElements: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Purple circle */}
      <div className="absolute top-32 right-10 md:right-32 w-16 h-16 bg-purple/20 rounded-full animate-float"></div>
      
      {/* Light purple square */}
      <div className="absolute top-64 left-8 md:left-24 w-12 h-12 bg-purple-light/30 rounded-xl rotate-12 animate-float-delayed"></div>
      
      {/* Dark purple circle */}
      <div className="absolute bottom-48 left-16 md:left-40 w-10 h-10 bg-purple-dark/20 rounded-full animate-float-slow"></div>
      
      {/* Purple ring */}
      <div className="absolute bottom-32 right-20 md:right-64 w-20 h-20 border-2 border-purple/30 rounded-full animate-float-delayed"></div>
      
      {/* Small dot */}
      <div className="absolute top-1/2 left-1/4 w-4 h-4 bg-purple/40 rounded-full animate-float-slow"></div>
    </div>
  );
};

export default FloatingElements;
