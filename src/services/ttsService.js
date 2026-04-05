const DEFAULT_BASE_URL = 'https://mkp-api.fptcloud.com';
const DEFAULT_MODEL = 'FPT.AI-VITs';
const DEFAULT_VOICE = 'std_kimngan';
const DEFAULT_RESPONSE_FORMAT = 'wav';

const normalizeBaseUrl = (baseUrl) => String(baseUrl || '').replace(/\/+$/, '');

export const createGuidanceSpeech = async (text, options = {}) => {
  const input = typeof text === 'string' ? text.trim() : '';

  if (!input) {
    throw new Error('Không có nội dung để tạo giọng nói.');
  }

  const apiKey = import.meta.env.VITE_FPT_TTS_API_KEY;
  if (!apiKey) {
    throw new Error('Thiếu VITE_FPT_TTS_API_KEY trong file .env.');
  }

  const baseURL = normalizeBaseUrl(
    options.baseURL || import.meta.env.VITE_FPT_TTS_BASE_URL || DEFAULT_BASE_URL
  );

  const response = await fetch(`${baseURL}/v1/audio/speech`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      model: options.model || import.meta.env.VITE_FPT_TTS_MODEL || DEFAULT_MODEL,
      input,
      response_format:
        options.responseFormat ||
        import.meta.env.VITE_FPT_TTS_RESPONSE_FORMAT ||
        DEFAULT_RESPONSE_FORMAT,
      voice: options.voice || import.meta.env.VITE_FPT_TTS_VOICE || DEFAULT_VOICE
    })
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`TTS lỗi ${response.status}: ${errorText || 'Không rõ nguyên nhân'}`);
  }

  const audioBlob = await response.blob();
  if (!audioBlob.size) {
    throw new Error('Không nhận được dữ liệu audio từ TTS.');
  }

  return URL.createObjectURL(audioBlob);
};

export const revokeSpeechAudioUrl = (audioUrl) => {
  if (typeof audioUrl === 'string' && audioUrl.startsWith('blob:')) {
    URL.revokeObjectURL(audioUrl);
  }
};