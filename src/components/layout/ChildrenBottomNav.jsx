import React from 'react';

const ChildrenBottomNav = () => {
  return (
    <div className="fixed bottom-4 left-1/2 z-50 flex w-[94%] max-w-lg -translate-x-1/2 items-center justify-around rounded-[2rem] border-4 border-white/50 bg-white/55 py-2.5 shadow-[0_30px_60px_-12px_rgba(0,0,0,0.2)] backdrop-blur-md sm:bottom-6 sm:w-[90%] sm:rounded-[2.5rem] sm:border-8 sm:py-4" style={{ paddingBottom: 'max(0.625rem, env(safe-area-inset-bottom))' }}>
      
      <button className="-translate-y-3 flex scale-105 flex-col items-center justify-center rounded-full bg-gradient-to-br from-green-400 to-green-600 p-3 text-white shadow-lg shadow-green-200 transition-all hover:scale-105 hover:opacity-100 sm:-translate-y-4 sm:p-4 sm:scale-110">
        <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>map</span>
        <span className="font-label font-bold text-[10px] uppercase tracking-widest mt-1">Map</span>
      </button>

      <button className="flex flex-col items-center justify-center p-2 text-blue-500 opacity-80 transition-all hover:scale-105 hover:opacity-100">
        <span className="material-symbols-outlined">explore</span>
        <span className="font-label font-bold text-[10px] uppercase tracking-widest mt-1">Quests</span>
      </button>

      <button className="flex flex-col items-center justify-center p-2 text-blue-500 opacity-80 transition-all hover:scale-105 hover:opacity-100">
        <span className="material-symbols-outlined">group</span>
        <span className="font-label font-bold text-[10px] uppercase tracking-widest mt-1">Friends</span>
      </button>

      <button className="flex flex-col items-center justify-center p-2 text-blue-500 opacity-80 transition-all hover:scale-105 hover:opacity-100">
        <span className="material-symbols-outlined">local_mall</span>
        <span className="font-label font-bold text-[10px] uppercase tracking-widest mt-1">Shop</span>
      </button>

    </div>
  );
};

export default ChildrenBottomNav;