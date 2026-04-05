import React from 'react';

const FinalResultPanel = ({ score, maxScore, onPlayAgain, onBackToMap }) => {
  const percentage = maxScore > 0 ? Math.round((score / maxScore) * 100) : 0;
  const isPerfect = score === maxScore;
  const isGood = score >= (maxScore * 0.7);

  let emoji = '😊';
  let message = 'Cố gắng lên!';

  if (isPerfect) {
    emoji = '🌟';
    message = 'Tuyệt vời lắm!';
  } else if (isGood) {
    emoji = '🎉';
    message = 'Rất tốt!';
  }

  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/50 p-3 backdrop-blur-sm sm:p-4">
      <div className="w-full max-w-2xl rounded-3xl border-4 border-yellow-300 bg-white/95 p-5 text-center shadow-2xl backdrop-blur-md sm:p-8">
        
        {/* Emoji lớn */}
        <span className="mb-4 block text-6xl animate-bounce sm:text-8xl">{emoji}</span>

        {/* Tiêu đề kết quả */}
        <h2 className="mb-6 font-headline text-2xl font-black text-blue-700 sm:text-4xl">
          {message}
        </h2>

        {/* Điểm số */}
        <div className="mb-6 rounded-2xl bg-gradient-to-r from-blue-100 to-purple-100 p-4 sm:mb-8 sm:p-6">
          <p className="font-label text-gray-600 text-sm mb-3">Điểm của bạn</p>
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="font-headline text-5xl font-black text-blue-600 sm:text-6xl">
              {score}
            </span>
            <span className="font-headline text-2xl font-bold text-gray-400 sm:text-3xl">
              / {maxScore}
            </span>
          </div>
          
          {/* Thanh tiến trình */}
          <div className="w-full h-5 bg-gray-300 rounded-full overflow-hidden mb-3 border-2 border-gray-400">
            <div 
              className={`h-full transition-all duration-500 ${
                isPerfect ? 'bg-green-500' : isGood ? 'bg-yellow-500' : 'bg-orange-400'
              }`}
              style={{ width: `${percentage}%` }}
            ></div>
          </div>
          <p className="text-lg font-bold text-gray-700">{percentage}%</p>
        </div>

        {/* Nút hành động */}
        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={onPlayAgain}
            className="flex-1 rounded-2xl border-2 border-white bg-gradient-to-r from-blue-400 to-blue-500 px-5 py-3 text-base font-bold text-white shadow-lg transition-transform hover:scale-105 sm:border-3 sm:px-6 sm:py-4 sm:text-lg"
          >
            🔄 Chơi lại
          </button>
          <button
            onClick={onBackToMap}
            className="flex-1 rounded-2xl border-2 border-white bg-gradient-to-r from-purple-400 to-pink-500 px-5 py-3 text-base font-bold text-white shadow-lg transition-transform hover:scale-105 sm:border-3 sm:px-6 sm:py-4 sm:text-lg"
          >
            🗺️ Quay lại bản đồ
          </button>
        </div>
      </div>
    </div>
  );
};

export default FinalResultPanel;