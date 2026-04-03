import React from 'react';

const FloatingHUD = ({ stars = 1250, diamonds = 45 }) => {
  return (
    <div className="fixed right-3 top-20 z-40 flex gap-2 sm:right-4 sm:top-24 sm:flex-col sm:gap-3">
      <div className="flex items-center gap-2 rounded-2xl border-2 border-blue-100 bg-white/90 px-3 py-2 shadow-lg backdrop-blur-md sm:gap-3 sm:rounded-3xl sm:border-4 sm:px-4 sm:py-3">
        <span className="text-lg sm:text-2xl">⭐</span>
        <span className="text-sm font-black text-blue-600 sm:text-xl">{stars.toLocaleString()}</span>
      </div>
      <div className="flex items-center gap-2 rounded-2xl border-2 border-blue-100 bg-white/90 px-3 py-2 shadow-lg backdrop-blur-md sm:gap-3 sm:rounded-3xl sm:border-4 sm:px-4 sm:py-3">
        <span className="text-lg sm:text-2xl">💎</span>
        <span className="text-sm font-black text-blue-600 sm:text-xl">{diamonds.toLocaleString()}</span>
      </div>
    </div>
  );
};

export default FloatingHUD;