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
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-40 p-4">
      <div className="bg-white/95 backdrop-blur-md rounded-3xl p-8 max-w-2xl w-full shadow-2xl border-4 border-green-300 text-center">
        
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
          className="bg-gradient-to-r from-green-400 to-green-500 text-white font-headline font-bold py-3 px-8 rounded-full hover:scale-110 transition-transform shadow-lg border-3 border-white text-lg"
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