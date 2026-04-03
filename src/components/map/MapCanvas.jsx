import React from 'react';
import { lessonsData } from '../../constants/mockMapData';
import LessonIsland from './LessonIsland';
import MapMascot from './MapMascot';

const MapCanvas = ({ onLessonSelect }) => {
  return (
    <main className="relative flex min-h-[1500px] w-full flex-col items-center overflow-hidden px-2 pb-40 pt-24 sm:min-h-[1800px] sm:px-4 sm:pt-28 md:min-h-[2000px] md:pb-48 md:pt-32">
      
      {/* 🎭 LỚP NỀN: Mây, Cây và Sao trang trí */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-40 left-[10%] opacity-80"><span className="text-6xl">☁️</span></div>
        <div className="absolute top-80 right-[15%] opacity-60"><span className="text-8xl text-white">☁️</span></div>
        <div className="absolute top-[600px] left-[5%] opacity-70"><span className="text-7xl">☁️</span></div>
        <div className="absolute top-[1200px] right-[10%] opacity-90"><span className="text-6xl">☁️</span></div>
        
        <div className="absolute top-[450px] left-[25%]"><span className="text-4xl">🌳</span></div>
        <div className="absolute top-[900px] right-[30%]"><span className="text-4xl">🌲</span></div>
        
        <div className="absolute top-[1500px] left-[20%]"><span className="text-3xl text-yellow-400">⭐</span></div>
        <div className="absolute top-[200px] right-[25%]"><span className="text-3xl text-yellow-400">✨</span></div>
      </div>

      {/* 🎨 ĐƯỜNG SVG (Con đường uốn lượn) */}
      <svg className="absolute top-0 left-0 w-full h-full pointer-events-none z-0" preserveAspectRatio="none" viewBox="0 0 1000 2000">
        <defs>
          <linearGradient id="pathGradient" x1="0%" x2="0%" y1="0%" y2="100%">
            <stop offset="0%" style={{stopColor: '#4285F4'}}></stop>
            <stop offset="20%" style={{stopColor: '#EA4335'}}></stop>
            <stop offset="40%" style={{stopColor: '#FBBC05'}}></stop>
            <stop offset="60%" style={{stopColor: '#34A853'}}></stop>
            <stop offset="80%" style={{stopColor: '#4285F4'}}></stop>
            <stop offset="100%" style={{stopColor: '#EA4335'}}></stop>
          </linearGradient>
          <filter height="140%" id="puffyShadow" width="140%" x="-20%" y="-20%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="15"></feGaussianBlur>
            <feOffset dx="0" dy="10"></feOffset>
            <feComponentTransfer>
              <feFuncA slope="0.3" type="linear"></feFuncA>
            </feComponentTransfer>
            <feMerge>
              <feMergeNode></feMergeNode>
              <feMergeNode in="SourceGraphic"></feMergeNode>
            </feMerge>
          </filter>
        </defs>
        <path 
          className="puffy-path" 
          d="M500,200 C700,400 300,600 500,800 C700,1000 300,1200 500,1400 C700,1600 300,1800 500,2000" 
          fill="none" 
          filter="url(#puffyShadow)" 
          stroke="url(#pathGradient)" 
          strokeLinecap="round" 
          strokeWidth="24">
        </path>
      </svg>

      {/* 🏝 LỚP ĐẢO (Hiển thị các bài học dọc theo map) */}
      <div className="relative z-10 flex w-full max-w-4xl flex-col gap-24 px-3 sm:gap-32 sm:px-4 md:gap-[180px] md:px-6">
        {lessonsData.map((lesson) => (
          <React.Fragment key={lesson.id}>
            {/* Component Cục Đảo Đơn Lẻ */}
            <LessonIsland lesson={lesson} onLessonClick={onLessonSelect} />
            
            {/* Hiển thị Mascot nếu đây là bài học hiện tại */}
            {lesson.isCurrent && <MapMascot />}
          </React.Fragment>
        ))}
      </div>

    </main>
  );
};

export default MapCanvas;