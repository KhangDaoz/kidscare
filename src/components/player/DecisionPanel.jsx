import React from 'react';

const DEFAULT_TWO_CHOICE_HOTSPOTS = [
  { left: '9%', top: '20%', width: '38%', height: '70%' },
  { left: '53%', top: '20%', width: '38%', height: '70%' }
];

const DecisionPanel = ({
  question,
  choices,
  onChoiceSelect,
  isLoading = false
}) => {
  if (choices?.length === 2) {
    return (
      <div className="fixed inset-0 z-40 pointer-events-none">
        {choices.map((choice, index) => {
          const hotspot = choice.hotspot || DEFAULT_TWO_CHOICE_HOTSPOTS[index];
          return (
            <button
              key={choice.id}
              onClick={() => onChoiceSelect(choice)}
              disabled={isLoading}
              aria-label={choice.text}
              className={`
                absolute pointer-events-auto rounded-[2rem]
                border-2 transition-all duration-200
                ${isLoading
                  ? 'cursor-not-allowed border-transparent'
                  : 'border-transparent hover:border-blue-300/70 hover:bg-blue-300/10 active:scale-[0.99]'}
              `}
              style={{
                left: hotspot.left,
                top: hotspot.top,
                width: hotspot.width,
                height: hotspot.height
              }}
            />
          );
        })}
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-40 flex items-end justify-center bg-black/50 p-3 backdrop-blur-sm sm:p-4">
      <div className="max-h-[70vh] w-full max-w-4xl overflow-y-auto rounded-t-3xl border-t-4 border-blue-300 bg-white/95 p-5 shadow-2xl backdrop-blur-md sm:max-h-[60vh] sm:p-8">
        
        {/* Câu hỏi */}
        <h2 className="mb-6 text-center font-headline text-2xl font-bold text-blue-700 sm:mb-8 sm:text-3xl">
          {question}
        </h2>

        {/* Các lựa chọn */}
        <div className="mb-6 grid grid-cols-1 gap-3 sm:gap-4 md:grid-cols-2">
          {choices.map((choice) => (
            <button
              key={choice.id}
              onClick={() => onChoiceSelect(choice)}
              disabled={isLoading}
              className={`
                w-full rounded-2xl p-4 font-headline text-sm font-bold sm:p-6 sm:text-lg
                transition-all duration-200 transform
                border-4
                ${isLoading 
                  ? 'opacity-50 cursor-not-allowed bg-gray-100 border-gray-300' 
                  : 'bg-gradient-to-r from-blue-400 to-blue-500 text-white border-blue-300 hover:scale-105 hover:-translate-y-2 active:scale-95 shadow-lg hover:shadow-xl'
                }
              `}
            >
              {choice.text}
            </button>
          ))}
        </div>

        {isLoading && (
          <div className="text-center">
            <div className="inline-flex items-center gap-2">
              <span className="inline-block w-3 h-3 bg-blue-500 rounded-full animate-bounce"></span>
              <span className="font-label text-gray-600">Đang tiếp tục...</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DecisionPanel;