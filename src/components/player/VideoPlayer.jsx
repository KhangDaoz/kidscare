import React, { useEffect, useRef } from 'react';

const VideoPlayer = ({ videoUrl, onVideoEnded }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleEnded = () => {
      if (onVideoEnded) {
        onVideoEnded();
      }
    };

    video.addEventListener('ended', handleEnded);
    return () => video.removeEventListener('ended', handleEnded);
  }, [onVideoEnded]);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.src = videoUrl;
      videoRef.current.load();
      videoRef.current.play();
    }
  }, [videoUrl]);

  return (
    <div className="absolute inset-0 kidscare-viewport bg-black z-10 overflow-hidden">
      <video
        ref={videoRef}
        className="w-full h-full object-contain object-center"
        autoPlay
        playsinline
      />
      {/* Gradient overlay mềm để các text phía trên dễ đọc */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40 pointer-events-none z-10"></div>
    </div>
  );
};

export default VideoPlayer;