import React from 'react';

const ChildrenBottomNav = () => {
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-lg rounded-[2.5rem] border-8 border-white/50 dark:border-slate-800/50 flex justify-around items-center py-4 bg-white/40 shadow-[0_30px_60px_-12px_rgba(0,0,0,0.2)] z-50">
      
      <button className="flex flex-col items-center justify-center bg-gradient-to-br from-green-400 to-green-600 text-white rounded-full p-4 scale-110 -translate-y-4 shadow-lg shadow-green-200 hover:opacity-100 hover:scale-105 transition-all">
        <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>map</span>
        <span className="font-label font-bold text-[10px] uppercase tracking-widest mt-1">Map</span>
      </button>

      <button className="flex flex-col items-center justify-center text-blue-500 dark:text-blue-300 p-2 opacity-80 hover:opacity-100 hover:scale-105 transition-all">
        <span className="material-symbols-outlined">explore</span>
        <span className="font-label font-bold text-[10px] uppercase tracking-widest mt-1">Quests</span>
      </button>

      <button className="flex flex-col items-center justify-center text-blue-500 dark:text-blue-300 p-2 opacity-80 hover:opacity-100 hover:scale-105 transition-all">
        <span className="material-symbols-outlined">group</span>
        <span className="font-label font-bold text-[10px] uppercase tracking-widest mt-1">Friends</span>
      </button>

      <button className="flex flex-col items-center justify-center text-blue-500 dark:text-blue-300 p-2 opacity-80 hover:opacity-100 hover:scale-105 transition-all">
        <span className="material-symbols-outlined">local_mall</span>
        <span className="font-label font-bold text-[10px] uppercase tracking-widest mt-1">Shop</span>
      </button>

    </div>
  );
};

export default ChildrenBottomNav;