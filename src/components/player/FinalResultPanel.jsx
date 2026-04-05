import React, { useEffect, useMemo, useRef, useState } from 'react';
import { createGuidanceSpeech, revokeSpeechAudioUrl } from '../../services/ttsService';

const AI_GUIDE_GIF_URL = '/images/ai-speaking.gif';
const AI_GUIDE_FALLBACK_IMAGE = '/images/avatar.png';

const FinalResultPanel = ({ score, maxScore, onPlayAgain, onBackToMap }) => {
  const percentage = maxScore > 0 ? Math.round((score / maxScore) * 100) : 0;
  const isPerfect = score === maxScore;
  const isGood = score >= (maxScore * 0.7);
  const [audioUrl, setAudioUrl] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isGeneratingAudio, setIsGeneratingAudio] = useState(false);
  const [visualSrc, setVisualSrc] = useState(AI_GUIDE_GIF_URL);
  const audioRef = useRef(null);

  let resultText = 'Cố gắng lên!';

  if (isPerfect) {
    resultText = 'Tuyệt vời lắm!';
  } else if (isGood) {
    resultText = 'Rất tốt!';
  }

  const finalGuidance = useMemo(() => {
    if (isPerfect) {
      return `Tuyệt vời lắm! Con đạt ${score} trên ${maxScore} điểm, tương đương ${percentage} phần trăm. Con đã xử lý tình huống rất an toàn.`;
    }

    if (isGood) {
      return `Rất tốt! Con đạt ${score} trên ${maxScore} điểm, tương đương ${percentage} phần trăm. Con chỉ cần bình tĩnh hơn một chút là sẽ hoàn hảo.`;
    }

    return `Con đã hoàn thành bài học với ${score} trên ${maxScore} điểm, tương đương ${percentage} phần trăm. Lần sau mình cố gắng thêm để an toàn hơn nhé.`;
  }, [isGood, isPerfect, maxScore, percentage, score]);

  useEffect(() => {
    let canceled = false;
    setVisualSrc(AI_GUIDE_GIF_URL);

    const generateAudio = async () => {
      setIsGeneratingAudio(true);
      setErrorMessage('');

      try {
        const nextAudioUrl = await createGuidanceSpeech(finalGuidance);

        if (canceled) {
          revokeSpeechAudioUrl(nextAudioUrl);
          return;
        }

        setAudioUrl(nextAudioUrl);
      } catch (error) {
        setErrorMessage(error instanceof Error ? error.message : 'Không thể tạo audio tổng kết.');
      } finally {
        if (!canceled) {
          setIsGeneratingAudio(false);
        }
      }
    };

    generateAudio();

    return () => {
      canceled = true;
    };
  }, [finalGuidance]);

  useEffect(() => {
    if (!audioUrl || !audioRef.current) {
      return;
    }

    audioRef.current.play().catch(() => {
      // Trình duyệt có thể chặn autoplay nếu chưa có tương tác người dùng.
    });
  }, [audioUrl]);

  useEffect(() => {
    return () => {
      revokeSpeechAudioUrl(audioUrl);
    };
  }, [audioUrl]);

  const handleVisualError = () => {
    setVisualSrc(AI_GUIDE_FALLBACK_IMAGE);
  };

  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/50 p-3 backdrop-blur-sm sm:p-4">
      <div className="w-full max-w-2xl rounded-3xl border-4 border-yellow-300 bg-white/95 p-5 text-center shadow-2xl backdrop-blur-md sm:p-8">

        <div className="mx-auto mb-5 w-full max-w-xs overflow-hidden rounded-2xl border-4 border-blue-200 bg-blue-50 shadow-lg sm:max-w-sm">
          <img
            src={visualSrc}
            alt="AI đang tổng kết bài học bằng giọng nói"
            className="h-auto w-full"
            onError={handleVisualError}
          />
        </div>

        <h2 className="mb-3 font-headline text-2xl font-black text-blue-700 sm:text-3xl">AI tổng kết bài học</h2>
        <p className="mb-4 font-label text-sm text-blue-700 sm:text-base">{resultText}</p>
        <p className="sr-only">{finalGuidance}</p>

        {isGeneratingAudio ? (
          <p className="mb-4 rounded-xl bg-blue-50 px-4 py-2 font-label text-sm text-blue-700">
            Đang tạo giọng nói tổng kết...
          </p>
        ) : null}

        {audioUrl ? (
          <audio ref={audioRef} controls autoPlay src={audioUrl} className="mx-auto mb-6 w-full max-w-md" />
        ) : null}

        {errorMessage ? (
          <div className="mb-6 rounded-xl border border-red-200 bg-red-50 p-3 text-left">
            <p className="mb-2 font-label text-sm font-bold text-red-700">{errorMessage}</p>
            <p className="font-label whitespace-pre-line text-sm text-red-600">{finalGuidance}</p>
          </div>
        ) : null}

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