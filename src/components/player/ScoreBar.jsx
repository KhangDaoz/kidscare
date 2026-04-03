import React from 'react';

const ScoreBar = ({ score = 0, maxScore = 20 }) => {
  const percentage = maxScore > 0 ? (score / maxScore) * 100 : 0;
  
  return (
    <div className="fixed left-4 top-4 z-40 rounded-2xl border-2 border-blue-300 bg-white/90 p-3 shadow-xl backdrop-blur-md sm:left-6 sm:top-6 sm:border-3 sm:p-5">
      <div className="flex items-center gap-2 sm:gap-4">
        <span className="text-2xl sm:text-3xl">⭐</span>
        <div className="flex flex-col gap-2">
          <span className="font-headline text-sm font-bold text-blue-600 sm:text-lg">
            {score} / {maxScore}
          </span>
          <div className="h-2.5 w-24 overflow-hidden rounded-full border-2 border-blue-200 bg-gray-300 sm:h-3 sm:w-32">
            <div 
              className="h-full bg-gradient-to-r from-yellow-400 via-green-400 to-blue-500 transition-all duration-300"
              style={{ width: `${percentage}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScoreBar;