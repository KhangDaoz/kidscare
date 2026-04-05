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
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-40 p-4">
      <div className="bg-white/95 backdrop-blur-md rounded-3xl p-8 max-w-2xl w-full shadow-2xl border-4 border-yellow-300 text-center">
        
        {/* Emoji lớn */}
        <span className="text-8xl block mb-4 animate-bounce">{emoji}</span>

        {/* Tiêu đề kết quả */}
        <h2 className="font-headline font-black text-3xl sm:text-4xl text-blue-700 mb-6">
          {message}
        </h2>

        {/* Điểm số */}
        <div className="bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl p-6 mb-8">
          <p className="font-label text-gray-600 text-sm mb-3">Điểm của bạn</p>
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="font-headline font-black text-6xl text-blue-600">
              {score}
            </span>
            <span className="font-headline font-bold text-3xl text-gray-400">
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
            className="flex-1 bg-gradient-to-r from-blue-400 to-blue-500 text-white font-headline font-bold py-4 px-6 rounded-2xl hover:scale-105 transition-transform shadow-lg border-3 border-white text-lg"
          >
            🔄 Chơi lại
          </button>
          <button
            onClick={onBackToMap}
            className="flex-1 bg-gradient-to-r from-purple-400 to-pink-500 text-white font-headline font-bold py-4 px-6 rounded-2xl hover:scale-105 transition-transform shadow-lg border-3 border-white text-lg"
          >
            🗺️ Quay lại bản đồ
          </button>
        </div>
      </div>
    </div>
  );
};

export default FinalResultPanel;