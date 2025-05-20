
import React from 'react';

const FloatingElements: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Primary gradient circle */}
      <div className="absolute top-32 right-10 md:right-32 w-20 h-20 bg-gradient-to-br from-teal-500 to-cyan-400 rounded-full blur-sm animate-float"></div>
      
      {/* Secondary polygon */}
      <div className="absolute top-64 left-8 md:left-24 w-16 h-16 bg-gradient-to-tr from-teal-400/30 to-cyan-500/20 rounded-lg rotate-45 animate-float-delayed"></div>
      
      {/* Accent circle */}
      <div className="absolute bottom-48 left-16 md:left-40 w-12 h-12 bg-gradient-to-r from-cyan-600/40 to-teal-500/30 rounded-full blur-sm animate-float-slow"></div>
      
      {/* Ring with gradient border */}
      <div className="absolute bottom-32 right-20 md:right-64 w-24 h-24 rounded-full bg-gradient-to-tr from-transparent to-transparent p-0.5 animate-float-delayed">
        <div className="w-full h-full rounded-full border-2 border-teal-gradient"></div>
      </div>
      
      {/* Small pulsing dot */}
      <div className="absolute top-1/2 left-1/4 w-4 h-4 bg-gradient-to-r from-cyan-400/60 to-teal-500/70 rounded-full pulse animate-float-slow"></div>
      
      {/* Large transparent ring */}
      <div className="absolute bottom-1/4 right-1/3 w-40 h-40 border border-teal-500/10 rounded-full animate-float"></div>
      
      {/* 3D Elements - Cube perspective effect */}
      <div className="absolute top-1/3 right-1/4 w-16 h-16 animate-float-slow">
        <div className="relative w-full h-full preserve-3d rotate-y-45 rotate-x-45">
          <div className="absolute inset-0 border-2 border-teal-500/30 transform translate-z-8"></div>
          <div className="absolute inset-0 border-2 border-cyan-400/20 transform -translate-z-8"></div>
          <div className="absolute top-0 left-0 right-0 h-0 border-t-2 border-teal-400/40"></div>
          <div className="absolute bottom-0 left-0 right-0 h-0 border-t-2 border-cyan-500/40"></div>
        </div>
      </div>

      {/* 3D floating card */}
      <div className="absolute top-2/3 right-1/4 w-24 h-16 bg-gradient-to-br from-cyan-500/10 to-teal-400/5 rounded-xl border border-teal-500/20 transform rotate-12 animate-float-delayed backdrop-blur-sm"></div>
    </div>
  );
};

export default FloatingElements;
