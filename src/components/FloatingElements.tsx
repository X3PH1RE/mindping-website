
import React from 'react';

const FloatingElements: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Primary gradient circle */}
      <div className="absolute top-32 right-10 md:right-32 w-20 h-20 bg-gradient-to-br from-primary to-purple-light rounded-full blur-sm animate-float"></div>
      
      {/* Secondary polygon */}
      <div className="absolute top-64 left-8 md:left-24 w-16 h-16 bg-gradient-to-tr from-primary/30 to-purple/20 rounded-lg rotate-45 animate-float-delayed"></div>
      
      {/* Accent circle */}
      <div className="absolute bottom-48 left-16 md:left-40 w-12 h-12 bg-gradient-to-r from-purple-dark/40 to-primary/30 rounded-full blur-sm animate-float-slow"></div>
      
      {/* Ring with gradient border */}
      <div className="absolute bottom-32 right-20 md:right-64 w-24 h-24 rounded-full bg-gradient-to-tr from-transparent to-transparent p-0.5 animate-float-delayed">
        <div className="w-full h-full rounded-full border-2 border-gradient"></div>
      </div>
      
      {/* Small pulsing dot */}
      <div className="absolute top-1/2 left-1/4 w-4 h-4 bg-gradient-to-r from-purple/60 to-primary/70 rounded-full pulse animate-float-slow"></div>
      
      {/* Large transparent ring */}
      <div className="absolute bottom-1/4 right-1/3 w-40 h-40 border border-primary/10 rounded-full animate-float"></div>
    </div>
  );
};

export default FloatingElements;
