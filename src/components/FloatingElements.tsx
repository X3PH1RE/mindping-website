
import React from 'react';

const FloatingElements: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Primary gradient circle */}
      <div className="absolute top-32 right-10 md:right-32 w-20 h-20 bg-gradient-to-br from-amber-500 to-orange-400 rounded-full blur-sm animate-float"></div>
      
      {/* Secondary polygon */}
      <div className="absolute top-64 left-8 md:left-24 w-16 h-16 bg-gradient-to-tr from-amber-400/30 to-orange-500/20 rounded-lg rotate-45 animate-float-delayed"></div>
      
      {/* Accent circle */}
      <div className="absolute bottom-48 left-16 md:left-40 w-12 h-12 bg-gradient-to-r from-orange-600/40 to-amber-500/30 rounded-full blur-sm animate-float-slow"></div>
      
      {/* Ring with gradient border */}
      <div className="absolute bottom-32 right-20 md:right-64 w-24 h-24 rounded-full bg-gradient-to-tr from-transparent to-transparent p-0.5 animate-float-delayed">
        <div className="w-full h-full rounded-full border-2 border border-amber-500/30"></div>
      </div>
      
      {/* Small pulsing dot */}
      <div className="absolute top-1/2 left-1/4 w-4 h-4 bg-gradient-to-r from-orange-400/60 to-amber-500/70 rounded-full pulse animate-float-slow"></div>
      
      {/* Large transparent ring */}
      <div className="absolute bottom-1/4 right-1/3 w-40 h-40 border border-amber-500/10 rounded-full animate-float"></div>
      
      {/* Freelancer icon element */}
      <div className="absolute top-32 left-1/4 w-16 h-16 bg-amber-50/80 rounded-lg p-3 backdrop-blur-sm animate-float-slow">
        <div className="text-amber-600 text-2xl flex items-center justify-center h-full">
          💼
        </div>
      </div>
      
      {/* Dollar/Money element for freelancers */}
      <div className="absolute bottom-40 right-1/4 w-14 h-14 bg-amber-50/80 rounded-full p-3 backdrop-blur-sm animate-float">
        <div className="text-amber-600 text-2xl flex items-center justify-center h-full">
          💰
        </div>
      </div>
      
      {/* 3D Elements - Cube perspective effect */}
      <div className="absolute top-1/3 right-1/4 w-16 h-16 animate-float-slow">
        <div className="relative w-full h-full preserve-3d rotate-y-45 rotate-x-45">
          <div className="absolute inset-0 border-2 border-amber-500/50 transform translate-z-8"></div>
          <div className="absolute inset-0 border-2 border-orange-400/40 transform -translate-z-8"></div>
          <div className="absolute top-0 left-0 right-0 h-0 border-t-2 border-amber-400/40"></div>
          <div className="absolute bottom-0 left-0 right-0 h-0 border-t-2 border-orange-500/40"></div>
          <div className="absolute inset-0 flex items-center justify-center text-amber-600 transform translate-z-4">
            <span className="text-lg">📈</span>
          </div>
        </div>
      </div>

      {/* 3D floating card representing a client invoice */}
      <div className="absolute top-2/3 right-1/4 w-28 h-20 bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl border border-amber-200 transform rotate-12 animate-float-delayed backdrop-blur-sm p-2">
        <div className="w-full h-1 bg-amber-300 mb-1 rounded-full"></div>
        <div className="w-3/4 h-1 bg-amber-200 mb-3 rounded-full"></div>
        <div className="text-xs text-amber-800">Invoice #1234</div>
        <div className="text-sm font-bold text-amber-900">$1,500.00</div>
      </div>
      
      {/* Calendar card for scheduling */}
      <div className="absolute top-1/4 right-1/5 w-24 h-20 bg-white/80 rounded-lg shadow-md transform -rotate-6 animate-float backdrop-blur-sm p-2">
        <div className="w-full h-3 bg-amber-500 rounded-t-sm"></div>
        <div className="grid grid-cols-4 gap-1 mt-1">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="w-3 h-3 bg-amber-100 rounded-sm"></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FloatingElements;
