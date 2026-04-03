import React, { useEffect, useState } from 'react';

const MessagePanel = ({ message, feedback, onClose }) => {
  const API_URL = "https://api.fpt.ai/hmi/tts/v5";
  const [audioUrl, setAudioUrl] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(()=> {
    const fetchData = async (text) => {
      try {
        const response = await fetch(API_URL, {
          method: 'POST',
          headers: {
            "api-key": "dWKgd4vP1Mh01Q0QG69voaf1hdEQa552",
            "voice": "banmai",
            "speed": "",
            "Content-Type": "text/plain; charset=utf-8"
          },
          body: text
        });

        if (!response.ok) {
          throw new Error(`API trả về lỗi ${response.status}`);
        }

        const data = await response.json();
        console.log(data);

        const nextUrl = Array.isArray(data)
          ? data[0]?.async ?? data[0]?.url
          : typeof data === 'object' && data !== null
            ? ('async' in data ? data.async : undefined) ?? ('url' in data ? data.url : undefined)
            : typeof data === 'string'
              ? data
              : '';

        if (typeof nextUrl === 'string' && nextUrl.length > 0) {
          setAudioUrl(nextUrl);
          setErrorMessage('');
        } else {
          setErrorMessage('Không nhận được link audio hợp lệ từ API.');
        }
      } catch (error) {
        setErrorMessage(error instanceof Error ? error.message : 'Không thể tạo audio.');
      }
    };

    fetchData("Xin chào");
  }, [])

  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/50 p-3 backdrop-blur-sm sm:p-4">
      <div className="w-full max-w-2xl rounded-3xl border-4 border-green-300 bg-white/95 p-5 text-center shadow-2xl backdrop-blur-md sm:p-8">
        
        {/* Thông báo chính */}
        <p className="font-headline font-bold text-2xl sm:text-3xl text-blue-700 mb-6 whitespace-pre-line leading-relaxed">
          {message}
        </p>

        {/* Feedback bổ sung */}
        {feedback && (
          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-lg mb-6">
            <p className="font-label text-sm sm:text-base text-blue-800">
              💡 {feedback}
            </p>
          </div>
        )}

        {/* Nút tiếp tục */}
        <button
          onClick={onClose}
          className="rounded-full border-2 border-white bg-gradient-to-r from-green-400 to-green-500 px-6 py-3 text-base font-bold text-white shadow-lg transition-transform hover:scale-105 sm:border-3 sm:px-8 sm:text-lg"
        >
          ✓ Tiếp tục
        </button>

        {/* {errorMessage ? <p>{errorMessage}</p> : null}
        {audioUrl ? (
          <div>
            <p>
              Link audio: <a href={audioUrl} target="_blank" rel="noreferrer">{audioUrl}</a>
            </p>
            <audio controls src={audioUrl} />
          </div>
        ) : null} */}
      </div>
    </div>
  );
};

export default MessagePanel;