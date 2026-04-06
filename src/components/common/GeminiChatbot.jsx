'use client';

import { useState, useRef, useEffect } from 'react';

const SUGGESTED_QUESTIONS = [
  "Kể cho tớ một câu chuyện 📖",
  "An toàn khi đi học 🎒",
  "Làm sao để dũng cảm hơn? 💪",
  "Chơi với bạn thế nào cho đúng? 🤝"
];

export default function GeminiChatbot({ isOpen, onClose }) {
  const [messages, setMessages] = useState([
    { 
      role: 'model', 
      text: 'Chào nhóc! Tớ là **Hành Trang Nhí**. Hôm nay cậu muốn kể chuyện gì hay học hỏi điều mới nào?' 
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isOpen]);

  if (!isOpen) return null;

  const simulateResponse = async (userText) => {
    setIsLoading(true);
    
    // Simulate thinking time
    await new Promise(resolve => setTimeout(resolve, 1500));

    const mockResponses = [
      `Chà, câu hỏi về **"${userText}"** rất thú vị đấy! Tớ nghĩ là chúng mình nên cùng nhau khám phá thêm. Cậu thấy sao?`,
      `Ha ha! Cậu làm tớ thấy hào hứng quá. Về vấn đề này, tớ có một bí mật nhỏ muốn chia sẻ với cậu...`,
      `Để tớ kể cho cậu nghe một ví dụ nhé! Khi chúng mình gặp tình huống như vậy, quan trọng nhất là phải thật bình tĩnh nè.`,
      `Hành Trang Nhí ở đây để đồng hành cùng cậu! Cậu có muốn thử giải một câu đố nhỏ về chủ đề này không?`
    ];

    const randomResponse = mockResponses[Math.floor(Math.random() * mockResponses.length)];
    
    setMessages(prev => [...prev, { role: 'model', text: randomResponse }]);
    setIsLoading(false);
  };

  const handleSend = (e) => {
    if (e) e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userText = input;
    setMessages(prev => [...prev, { role: 'user', text: userText }]);
    setInput('');
    simulateResponse(userText);
  };

  const handleSuggestedClick = (question) => {
    if (isLoading) return;
    setMessages(prev => [...prev, { role: 'user', text: question }]);
    simulateResponse(question);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md transition-all duration-500">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-sky-400/20 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-500/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="w-full max-w-lg bg-white/90 backdrop-blur-xl rounded-[3rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.3)] overflow-hidden flex flex-col h-[80vh] border-[12px] border-white relative animate-in zoom-in-95 duration-500">
        
        {/* Header */}
        <header className="bg-gradient-to-br from-sky-400 via-sky-500 to-indigo-600 p-6 flex items-center justify-between shadow-lg relative overflow-hidden">
          {/* Animated header background pattern */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_white_1px,_transparent_1px)] [background-size:20px_20px]"></div>
          </div>

          <div className="flex items-center gap-4 relative z-10">
            <div className="relative">
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-3xl shadow-xl transform -rotate-3 hover:rotate-0 transition-transform duration-300 cursor-default">
                🤖
              </div>
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-lime-400 border-2 border-white rounded-full"></div>
            </div>
            <div>
              <h1 className="text-white text-2xl font-[900] tracking-tight drop-shadow-sm">Hành Trang Nhí AI</h1>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-lime-300 rounded-full animate-pulse"></span>
                <p className="text-sky-50 text-[10px] font-black uppercase tracking-[0.2em]">Cùng cậu khôn lớn</p>
              </div>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="w-12 h-12 flex items-center justify-center rounded-2xl bg-white/10 text-white hover:bg-white/20 transition-all active:scale-90 border border-white/20"
          >
            <span className="material-symbols-outlined text-2xl">close</span>
          </button>
        </header>

        {/* Chat Area */}
        <div 
          ref={scrollRef}
          className="flex-1 overflow-y-auto p-6 space-y-6 scroll-smooth bg-gradient-to-b from-slate-50/80 to-white"
        >
          {messages.map((msg, idx) => (
            <div 
              key={idx} 
              className={`flex items-end gap-2 ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-in fade-in slide-in-from-bottom-4 duration-500`}
            >
              {msg.role === 'model' && (
                <div className="w-8 h-8 rounded-lg bg-sky-100 flex items-center justify-center text-lg shadow-sm border border-sky-200 mb-2 flex-shrink-0">
                  🤖
                </div>
              )}
              <div 
                className={`max-w-[80%] p-4 shadow-xl ${
                  msg.role === 'user' 
                  ? 'bg-gradient-to-br from-indigo-500 to-sky-500 text-white rounded-[1.5rem] rounded-br-[0.25rem]' 
                  : 'bg-white text-slate-800 rounded-[1.5rem] rounded-bl-[0.25rem] border border-slate-100 font-medium'
                }`}
              >
                <div className="text-[15px] leading-relaxed whitespace-pre-wrap">
                  {msg.text.split(/(\*\*.*?\*\*)/g).map((part, i) => {
                    if (part.startsWith('**') && part.endsWith('**')) {
                      return <strong key={i} className="font-[900] text-sky-600">{part.slice(2, -2)}</strong>;
                    }
                    return part;
                  })}
                </div>
              </div>
            </div>
          ))}

          {isLoading && (
            <div className="flex justify-start items-center gap-3 animate-in fade-in slide-in-from-left-4 duration-300">
              <div className="w-8 h-8 rounded-lg bg-sky-100 flex items-center justify-center text-lg animate-bounce">
                🤖
              </div>
              <div className="bg-white px-6 py-4 rounded-[1.5rem] rounded-bl-[0.25rem] shadow-lg border border-slate-50 flex gap-2 items-center">
                <span className="w-2.5 h-2.5 bg-sky-400 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                <span className="w-2.5 h-2.5 bg-indigo-400 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                <span className="w-2.5 h-2.5 bg-rose-400 rounded-full animate-bounce"></span>
              </div>
            </div>
          )}
        </div>

        {/* Action Area */}
        <div className="p-6 bg-white border-t border-slate-100 space-y-4">
          {/* Suggested Questions */}
          <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar -mx-2 px-2">
            {SUGGESTED_QUESTIONS.map((q, i) => (
              <button
                key={i}
                onClick={() => handleSuggestedClick(q)}
                disabled={isLoading}
                className="whitespace-nowrap px-4 py-2 bg-slate-50 hover:bg-sky-50 text-slate-600 hover:text-sky-600 border border-slate-200 hover:border-sky-200 rounded-full text-xs font-black transition-all active:scale-95 disabled:opacity-50 flex-shrink-0 shadow-sm"
              >
                {q}
              </button>
            ))}
          </div>

          {/* Form */}
          <form onSubmit={handleSend} className="relative flex items-center gap-3">
            <div className="relative flex-1">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Hãy hỏi Hành Trang Nhí nhé..." 
                className="w-full bg-slate-100/50 border-2 border-transparent focus:border-sky-400 focus:bg-white rounded-2xl py-4 pl-6 pr-12 text-slate-700 transition-all font-bold placeholder:text-slate-400 outline-none"
              />
              <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-30 text-xl">✨</div>
            </div>
            <button 
              type="submit"
              disabled={isLoading || !input.trim()}
              className="w-14 h-14 bg-gradient-to-br from-sky-400 to-indigo-600 text-white rounded-2xl hover:shadow-[0_8px_24px_-4px_rgba(56,189,248,0.5)] disabled:opacity-30 transition-all shadow-lg active:scale-90 flex items-center justify-center flex-shrink-0"
            >
              <span className="material-symbols-outlined font-black">send</span>
            </button>
          </form>
          
          <p className="text-center text-[10px] font-bold text-slate-300 uppercase tracking-widest">
            AI có thể phản hồi không chính xác, hãy hỏi thêm ba mẹ nhé!
          </p>
        </div>
      </div>

      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
