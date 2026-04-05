import React, { useCallback, useEffect, useRef, useState } from 'react';
import { createGuidanceSpeech, revokeSpeechAudioUrl } from '../../services/ttsService';

const AI_GUIDE_GIF_URL = '/images/ai-speaking.gif';
const AI_GUIDE_FALLBACK_IMAGE = '/images/avatar.png';
const AUTO_CLOSE_AFTER_END_MS = 250;
const AUTO_CLOSE_ON_FAIL_MS = 1300;

const estimateSpeechDuration = (text) => {
  const wordCount = String(text || '').trim().split(/\s+/).filter(Boolean).length;
  return Math.max(3500, Math.min(15000, wordCount * 340));
};

const MessagePanel = ({ message, feedback, onClose }) => {
  const [audioUrl, setAudioUrl] = useState('');
  const [isGeneratingAudio, setIsGeneratingAudio] = useState(false);
  const [visualSrc, setVisualSrc] = useState(AI_GUIDE_GIF_URL);
  const [isFallbackVisual, setIsFallbackVisual] = useState(false);
  const audioRef = useRef(null);
  const closeTimeoutRef = useRef(null);

  const clearCloseTimeout = useCallback(() => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
  }, []);

  const closePanel = useCallback(
    (delay = 0) => {
      clearCloseTimeout();
      closeTimeoutRef.current = setTimeout(() => {
        if (typeof onClose === 'function') {
          onClose();
        }
      }, delay);
    },
    [clearCloseTimeout, onClose]
  );

  const handleVisualError = useCallback(() => {
    if (isFallbackVisual) {
      return;
    }

    setVisualSrc(AI_GUIDE_FALLBACK_IMAGE);
    setIsFallbackVisual(true);
  }, [isFallbackVisual]);

  useEffect(() => {
    let canceled = false;
    const textToSpeak = [message, feedback].filter(Boolean).join('\n\n').trim();
    const fallbackAutoCloseMs = estimateSpeechDuration(textToSpeak) + 1800;

    setVisualSrc(AI_GUIDE_GIF_URL);
    setIsFallbackVisual(false);

    const generateAudio = async () => {
      if (!textToSpeak) {
        closePanel(AUTO_CLOSE_ON_FAIL_MS);
        return;
      }

      setIsGeneratingAudio(true);
      clearCloseTimeout();

      try {
        const nextAudioUrl = await createGuidanceSpeech(textToSpeak);

        if (canceled) {
          revokeSpeechAudioUrl(nextAudioUrl);
          return;
        }

        setAudioUrl(nextAudioUrl);
        closePanel(fallbackAutoCloseMs);
      } catch (error) {
        console.error('TTS guidance error:', error);
        closePanel(AUTO_CLOSE_ON_FAIL_MS);
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
  }, [clearCloseTimeout, closePanel, feedback, message]);

  useEffect(() => {
    if (!audioUrl || !audioRef.current) {
      return;
    }

    audioRef.current.play().catch(() => {
      // Trình duyệt có thể chặn autoplay nếu chưa có tương tác người dùng.
      closePanel(AUTO_CLOSE_ON_FAIL_MS);
    });
  }, [audioUrl, closePanel]);

  useEffect(() => {
    return () => {
      revokeSpeechAudioUrl(audioUrl);
    };
  }, [audioUrl]);

  useEffect(() => {
    return () => {
      clearCloseTimeout();
    };
  }, [clearCloseTimeout]);

  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/55 p-3 backdrop-blur-sm sm:p-4">
      <div className="relative w-full max-w-sm rounded-3xl border-4 border-blue-200 bg-white/95 p-4 text-center shadow-2xl sm:max-w-md sm:p-5">
        <div className="relative mx-auto aspect-square w-full max-w-xs overflow-hidden rounded-3xl border-4 border-white shadow-xl sm:max-w-sm">
          <img
            src={visualSrc}
            alt="AI đang nói chuyện với bé"
            className={`h-full w-full object-cover ${isGeneratingAudio ? 'ai-speaking-focus' : ''}`}
            onError={handleVisualError}
          />

          {isFallbackVisual ? (
            <>
              <span className="ai-speaking-mouth" aria-hidden="true" />
              <span className="ai-speaking-wave ai-speaking-wave-1" aria-hidden="true" />
              <span className="ai-speaking-wave ai-speaking-wave-2" aria-hidden="true" />
              <span className="ai-speaking-wave ai-speaking-wave-3" aria-hidden="true" />
            </>
          ) : null}
        </div>

        <p className="sr-only whitespace-pre-line">{message}</p>
        {feedback ? <p className="sr-only whitespace-pre-line">{feedback}</p> : null}

        {audioUrl ? (
          <audio
            ref={audioRef}
            autoPlay
            src={audioUrl}
            onEnded={() => closePanel(AUTO_CLOSE_AFTER_END_MS)}
            onError={() => closePanel(AUTO_CLOSE_ON_FAIL_MS)}
            className="hidden"
          />
        ) : null}
      </div>
    </div>
  );
};

export default MessagePanel;