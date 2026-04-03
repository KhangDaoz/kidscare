import { Sparkles } from 'lucide-react';

const quickStats = [
  { label: 'Tình huống', value: '18' },
  { label: 'Chính xác', value: '68%' },
  { label: 'Phản xạ', value: '3.2s', highlight: true },
  { label: 'Streak', value: '7 ngày', accent: true },
];

export default function InsightSummaryCard() {
  return (
    <section className="parents-card-shadow rounded-[2.5rem] border border-slate-100 bg-white p-8">
      <div className="flex flex-col items-center gap-10 md:flex-row">
        <div className="space-y-2 text-center">
          <div className="relative flex h-32 w-32 items-center justify-center">
            <svg className="h-full w-full -rotate-90" viewBox="0 0 128 128" aria-hidden="true">
              <circle cx="64" cy="64" r="56" stroke="#f1f5f9" strokeWidth="12" fill="transparent" />
              <circle
                cx="64"
                cy="64"
                r="56"
                stroke="#0ea5e9"
                strokeWidth="12"
                fill="transparent"
                strokeDasharray="351.8"
                strokeDashoffset="98.5"
                strokeLinecap="round"
              />
            </svg>
            <div className="absolute flex flex-col items-center">
              <span className="text-4xl font-black tracking-tighter text-slate-800">
                72<span className="text-sm font-bold text-slate-300">/100</span>
              </span>
              <span className="rounded-full bg-sky-100 px-3 py-0.5 text-[10px] font-black uppercase text-sky-700">
                Khá
              </span>
            </div>
          </div>
          <p className="pt-2 text-[10px] font-black uppercase tracking-widest text-slate-400">
            Chỉ số năng lực
          </p>
        </div>

        <div className="flex-1 space-y-4">
          <div className="flex items-center gap-2">
            <div className="rounded-xl bg-amber-50 p-2 text-amber-500">
              <Sparkles className="h-5 w-5" />
            </div>
            <h2 className="text-xl font-black text-slate-800">Nhận xét từ AI Assistant</h2>
          </div>
          <p className="text-sm leading-relaxed font-medium italic text-slate-500">
            Chào mẹ, An đang phát triển tốt kỹ năng{' '}
            <span className="font-bold uppercase tracking-tight text-emerald-500">Thoát hiểm cháy</span>. Tuy
            nhiên, AI nhận thấy bé còn lưỡng lự (3.2s) khi đối diện tình huống{' '}
            <span className="font-bold uppercase tracking-tight text-rose-500">Người lạ dụ dỗ</span>. Ba mẹ hãy thử
            kịch bản O2O bên dưới nhé.
          </p>

          <div className="grid grid-cols-2 gap-3 pt-2 md:grid-cols-4">
            {quickStats.map((stat) => (
              <div
                key={stat.label}
                className={`rounded-3xl border border-slate-100 bg-slate-50 p-4 text-center ${
                  stat.highlight ? 'border-b-4 border-b-emerald-400' : ''
                }`}
              >
                <p className="mb-1 text-[9px] font-black uppercase text-slate-400">{stat.label}</p>
                <p
                  className={`text-xl font-black ${
                    stat.highlight ? 'text-emerald-600' : stat.accent ? 'text-amber-500' : 'text-slate-800'
                  }`}
                >
                  {stat.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
