import React, { useState } from 'react';
import { lessonsContent } from '../../constants/lessonContent';
import VideoPlayer from './VideoPlayer';
import DecisionPanel from './DecisionPanel';
import MessagePanel from './MessagePanel';
import FinalResultPanel from './FinalResultPanel';
import ScoreBar from './ScoreBar';

const LessonPlayer = ({ lessonId, onBackToMap }) => {
  const lesson = lessonsContent[lessonId];
  const [currentSceneId, setCurrentSceneId] = useState('start');
  const [score, setScore] = useState(0);
  const [gamePhase, setGamePhase] = useState('video'); // 'video', 'decision', 'message', 'final'
  const [isLoading, setIsLoading] = useState(false);
  const [answerResults, setAnswerResults] = useState([]);
  const [questionStartTime, setQuestionStartTime] = useState(null);

  const currentScene = lesson?.scenes?.[currentSceneId];

  if (!lesson) {
    return (
      <div className="flex items-center justify-center h-screen bg-red-100">
        <p className="text-red-700 font-headline font-bold">Bài học không tồn tại ❌</p>
      </div>
    );
  }

  const handleVideoEnded = () => {
    if (currentScene?.type === 'decision') {
      setQuestionStartTime(Date.now());
      setGamePhase('decision');
    } else if (currentScene?.type === 'message') {
      setGamePhase('message');
    }
  };

  const handleChoiceSelect = (choice) => {
    setIsLoading(true);
    const answeredAt = Date.now();
    
    // Thêm vào lịch sử trả lời
    setAnswerResults([
      ...answerResults,
      {
        sceneId: currentSceneId,
        questionText: currentScene?.question || '',
        choiceId: choice.id,
        choiceText: choice.text,
        points: choice.points,
        isSafe: choice.isSafe,
        questionStartTime,
        answeredAt
      }
    ]);

    // Cập nhật điểm
    setScore(score + (choice.points || 0));

    // Chuyển sang scene tiếp theo
    setTimeout(() => {
      const nextScene = lesson.scenes[choice.nextSceneId];
      setCurrentSceneId(choice.nextSceneId);
      setGamePhase(nextScene?.type === 'final' ? 'final' : 'video');
      setIsLoading(false);
      setQuestionStartTime(null);
    }, 500);
  };

  const handleMessageClose = () => {
    if (currentScene?.nextSceneId) {
      const nextScene = lesson.scenes[currentScene.nextSceneId];
      setCurrentSceneId(currentScene.nextSceneId);
      setGamePhase(nextScene?.type === 'final' ? 'final' : 'video');
    }
  };

  const handlePlayAgain = () => {
    setCurrentSceneId('start');
    setScore(0);
    setGamePhase('video');
    setAnswerResults([]);
    setQuestionStartTime(null);
  };

  const handleBackToMap = () => {
    console.log(answerResults);
    if (onBackToMap) {
      onBackToMap();
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Video Background Full Screen - Chỉ render nếu có videoUrl */}
      {currentScene?.videoUrl && (
        <VideoPlayer 
          videoUrl={currentScene.videoUrl} 
          onVideoEnded={handleVideoEnded}
        />
      )}

      {/* Score bar */}
      <ScoreBar score={score} maxScore={lesson.maxScore} />

      {/* Nút đóng */}
      <button
        onClick={handleBackToMap}
        className="fixed right-4 top-4 z-50 flex h-10 w-10 items-center justify-center rounded-full border-2 border-red-200 bg-white/90 text-red-500 shadow-lg transition-colors hover:bg-red-100 sm:right-6 sm:top-6 sm:h-12 sm:w-12 sm:border-3"
        title="Đóng bài học"
      >
        <span className="material-symbols-outlined text-xl sm:text-2xl">close</span>
      </button>

      {/* Decision Panel (Overlay trên video) */}
      {gamePhase === 'decision' && currentScene?.choices && (
        <DecisionPanel 
          question={currentScene.question}
          choices={currentScene.choices}
          onChoiceSelect={handleChoiceSelect}
          isLoading={isLoading}
        />
      )}

      {/* Message Panel (Overlay trên video) */}
      {gamePhase === 'message' && (
        <MessagePanel 
          message={currentScene.message}
          feedback={currentScene.feedback}
          onClose={handleMessageClose}
        />
      )}

      {/* Final Result Panel (Overlay trên video) */}
      {gamePhase === 'final' && currentScene?.type === 'final' && (
        <FinalResultPanel 
          score={score}
          maxScore={lesson.maxScore}
          onPlayAgain={handlePlayAgain}
          onBackToMap={handleBackToMap}
        />
      )}
    </div>
  );
};

export default LessonPlayer;