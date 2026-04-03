import { BrainCircuit, Moon, ShieldCheck, Timer } from 'lucide-react';

const suggestions = [
  {
    title: 'Thủ thỉ truyện đêm',
    detail: 'Đọc: Mật mã gia đình để bé học cách xác nhận người thân.',
    icon: Moon,
  },
  {
    title: '15 Phút thực hành',
    detail: 'Đóng vai: Người lạ dụ dỗ bằng kẹo mút ở công viên.',
    icon: Timer,
  },
];

export default function ParentActionAdvisor() {
  return (
    <section className="parents-ai-gradient relative overflow-hidden rounded-[2.5rem] p-7 text-white shadow-2xl">
      <div className="absolute top-0 right-0 translate-x-1/4 -translate-y-1/4 opacity-10">
        <BrainCircuit className="h-48 w-48" />
      </div>

      <div className="relative z-10 space-y-6">
        <div className="flex items-center gap-3">
          <ShieldCheck className="h-6 w-6 text-sky-200" />
          <h2 className="text-lg font-black uppercase tracking-tight">Gợi ý hành động cho mẹ</h2>
        </div>

        <div className="space-y-3">
          {suggestions.map((suggestion) => {
            const Icon = suggestion.icon;

            return (
              <div key={suggestion.title} className="flex gap-4 rounded-2xl border border-white/10 bg-white/10 p-4">
                <Icon className="h-6 w-6 shrink-0 text-sky-200" />
                <div className="text-xs">
                  <p className="font-black uppercase tracking-tighter">{suggestion.title}</p>
                  <p className="mt-1 opacity-80">{suggestion.detail}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
