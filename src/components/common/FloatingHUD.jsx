'use client';

import React, { useState, useEffect } from 'react';
import GeminiChatbot from './GeminiChatbot';

const FloatingHUD = ({ stars = 1250, diamonds = 45 }) => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <div className="fixed top-24 right-6 flex flex-col items-end gap-3 z-40 group/hud">
        {/* Unified HUD Container */}
        <div className="flex flex-col gap-2 items-end">
          
          {/* Stats Bar (Stars) */}
          <div className="bg-white/95 backdrop-blur-md px-4 py-2 rounded-2xl shadow-xl border-2 border-sky-100 flex items-center gap-3 transition-all hover:scale-105 hover:border-sky-300">
            <span className="text-xl">⭐</span>
            <span className="font-black text-sky-600 text-lg tabular-nums">
              {stars.toLocaleString('en-US')}
            </span>
          </div>

          {/* Stats Bar (Diamonds) */}
          <div className="bg-white/95 backdrop-blur-md px-4 py-2 rounded-2xl shadow-xl border-2 border-sky-100 flex items-center gap-3 transition-all hover:scale-105 hover:border-sky-300">
            <span className="text-xl">💎</span>
            <span className="font-black text-indigo-600 text-lg tabular-nums">
              {diamonds.toLocaleString('en-US')}
            </span>
          </div>

          {/* AI Assistant Integrated Button */}
          <button 
            onClick={() => setIsChatOpen(true)}
            className="mt-2 group/ai relative flex items-center gap-3 bg-gradient-to-r from-sky-400 to-indigo-600 p-1 rounded-2xl shadow-2xl hover:shadow-sky-300/50 transition-all duration-300 hover:scale-110 active:scale-95"
          >
            <div className="bg-white rounded-xl px-4 py-3 flex items-center gap-3">
              <span className="text-2xl group-hover/ai:rotate-12 transition-transform duration-300">🤖</span>
              <div className="flex flex-col items-start leading-tight">
                <span className="text-[10px] font-black text-indigo-400 uppercase tracking-tighter">AI Assistant</span>
                <span className="text-sm font-black text-slate-700">Hỏi tớ nhé!</span>
              </div>
            </div>
            <div className="absolute -top-1 -right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
            </div>
          </button>
        </div>
      </div>

      <GeminiChatbot 
        isOpen={isChatOpen} 
        onClose={() => setIsChatOpen(false)} 
      />
    </>
  );
};

export default FloatingHUD;