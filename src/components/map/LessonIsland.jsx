import React from 'react';

const THEME_STYLES = {
  blue: 'bg-[#4285F4] border-blue-300 shadow-[0_20px_0_0_#1a73e8]',
  red: 'bg-[#EA4335] border-red-300 shadow-[0_20px_0_0_#d93025]',
  green: 'bg-[#34A853] border-green-300 shadow-[0_20px_0_0_#1e8e3e]',
  yellow: 'bg-[#FBBC05] border-yellow-200 shadow-[0_20px_0_0_#f9ab00]'
};

const ALIGN_STYLES = {
  start: 'md:justify-start',
  end: 'md:justify-end',
  center: 'md:justify-center'
};

const LessonIsland = ({ lesson, onLessonClick }) => {
  const { title, icon, theme, progress, locked, align, id } = lesson;
  const isImageIcon = icon && icon.includes('/');
  
  return (
    <div className={`flex justify-center ${ALIGN_STYLES[align] || 'md:justify-start'}`}>
      <button
        onClick={() => !locked && onLessonClick && onLessonClick(id)}
        disabled={locked}
        className={`
          group relative h-56 w-56 cursor-pointer rounded-[2rem] border-4 p-6 text-center transition-all
          sm:h-64 sm:w-64 sm:p-7 md:h-72 md:w-72 md:border-[6px] md:p-8
          flex flex-col items-center justify-center
          hover:-translate-y-2 
          ${isImageIcon ? 'bg-cover bg-center' : THEME_STYLES[theme] || THEME_STYLES.blue}
          ${locked ? 'opacity-75 grayscale-[20%] cursor-not-allowed' : 'hover:scale-105'}
        `}
        style={isImageIcon ? { backgroundImage: `url(${icon})` } : {}}
      >
        {/* Biểu tượng emoji (nếu không phải ảnh) */}
        {!isImageIcon && (
          <span className="mb-3 text-6xl transition-transform group-hover:scale-125 sm:mb-4 sm:text-7xl md:text-8xl">{icon}</span>
        )}
        
        {/* Overlay tối cho text khi dùng ảnh */}
        {isImageIcon && (
          <div className="absolute inset-0 bg-black/30 rounded-[2rem]"></div>
        )}
        
        {/* Tên bài học */}
        <h3 className="relative z-10 text-xl font-extrabold tracking-tight text-white drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)] sm:text-2xl">
          {title}
        </h3>
        
        {/* Badge Hoàn thành 100% */}
        {progress > 0 && !locked && (
          <div className="absolute -right-2 -top-2 rounded-full border-2 border-white bg-green-500 px-3 py-1 text-xs font-black text-white shadow-md sm:-right-4 sm:-top-4 sm:border-4 sm:px-4 sm:py-2 sm:text-base">
            {progress}%
          </div>
        )}

        {/* Lớp phủ màn đen vầ Ổ khóa khi khoá */}
        {locked && (
          <div className="absolute inset-0 flex items-center justify-center rounded-[2rem] bg-black/10">
            <span className="material-symbols-outlined text-5xl text-white sm:text-6xl">lock</span>
          </div>
        )}
      </button>
    </div>
  );
};

export default LessonIsland;