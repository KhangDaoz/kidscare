import React from 'react';

const MapMascot = () => {
  return (
    <div className="flex justify-center my-[-40px] z-20">
      <div className="relative">
        {/* Vòng xoay ngoài cùng (hiệu ứng bello-ring) */}
        <div className="bello-ring absolute -inset-6 border-[8px] border-dashed border-sky-400 rounded-full"></div>
        
        {/* Avatar */}
        <div className="w-32 h-32 bg-white rounded-full p-2 shadow-2xl relative z-20 border-4 border-blue-100 flex items-center justify-center overflow-hidden">
          <img 
            alt="Nhân vật" 
            className="w-full h-full object-cover" 
            src="/images/avatar.png"
          />
        </div>

        {/* Tên nhân vật */}
        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-white px-4 py-1 rounded-full shadow-lg border-2 border-blue-500 font-black text-blue-600 text-sm z-30">
          Bi
        </div>
      </div>
    </div>
  );
};

export default MapMascot;