import React from 'react';

const ScoreBar = ({ score = 0, maxScore = 20 }) => {
  const percentage = maxScore > 0 ? (score / maxScore) * 100 : 0;
  
  return (
    <div className="fixed top-6 left-6 z-40 bg-white/90 backdrop-blur-md p-5 rounded-2xl shadow-xl border-3 border-blue-300">
      <div className="flex items-center gap-4">
        <span className="text-3xl">⭐</span>
        <div className="flex flex-col gap-2">
          <span className="font-headline font-bold text-lg text-blue-600">
            {score} / {maxScore}
          </span>
          <div className="w-32 h-3 bg-gray-300 rounded-full overflow-hidden border-2 border-blue-200">
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