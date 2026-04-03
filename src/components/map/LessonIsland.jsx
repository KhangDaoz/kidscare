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
          group relative p-8 rounded-[2rem] border-[6px] transition-all cursor-pointer 
          w-72 h-72 flex flex-col items-center justify-center text-center 
          hover:-translate-y-2 
          ${isImageIcon ? 'bg-cover bg-center' : THEME_STYLES[theme] || THEME_STYLES.blue}
          ${locked ? 'opacity-75 grayscale-[20%] cursor-not-allowed' : 'hover:scale-105'}
        `}
        style={isImageIcon ? { backgroundImage: `url(${icon})` } : {}}
      >
        {/* Biểu tượng emoji (nếu không phải ảnh) */}
        {!isImageIcon && (
          <span className="text-8xl mb-4 group-hover:scale-125 transition-transform">{icon}</span>
        )}
        
        {/* Overlay tối cho text khi dùng ảnh */}
        {isImageIcon && (
          <div className="absolute inset-0 bg-black/30 rounded-[2rem]"></div>
        )}
        
        {/* Tên bài học */}
        <h3 className="font-headline font-extrabold text-white text-2xl tracking-tight drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)] relative z-10">
          {title}
        </h3>
        
        {/* Badge Hoàn thành 100% */}
        {progress > 0 && !locked && (
          <div className="absolute -top-4 -right-4 bg-green-500 text-white font-black px-4 py-2 rounded-full border-4 border-white shadow-md">
            {progress}%
          </div>
        )}

        {/* Lớp phủ màn đen vầ Ổ khóa khi khoá */}
        {locked && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/10 rounded-[2rem]">
            <span className="material-symbols-outlined text-white text-6xl">lock</span>
          </div>
        )}
      </button>
    </div>
  );
};

export default LessonIsland;