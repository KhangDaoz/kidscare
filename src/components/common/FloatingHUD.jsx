import React from 'react';

const FloatingHUD = ({ stars = 1250, diamonds = 45 }) => {
  return (
    <div className="fixed top-32 right-6 flex flex-col gap-4 z-40">
      <div className="bg-white/90 backdrop-blur-md p-4 rounded-3xl shadow-xl border-4 border-blue-100 flex items-center gap-4">
        <span className="text-2xl">⭐</span>
        <span className="font-black text-blue-600 text-xl">{stars.toLocaleString()}</span>
      </div>
      <div className="bg-white/90 backdrop-blur-md p-4 rounded-3xl shadow-xl border-4 border-blue-100 flex items-center gap-4">
        <span className="text-2xl">💎</span>
        <span className="font-black text-blue-600 text-xl">{diamonds.toLocaleString()}</span>
      </div>
    </div>
  );
};

export default FloatingHUD;