import { QrCode } from 'lucide-react';

export default function ParentTaskItem({ task, onToggle, onOpenQr }) {
  return (
    <article
      className={`rounded-[1.8rem] border p-5 shadow-sm transition-all ${
        task.checked
          ? 'border-sky-200 bg-sky-50/70 opacity-70'
          : 'border-slate-100 bg-white hover:border-sky-300'
      }`}
    >
      <div className="mb-2 flex items-start justify-between gap-2">
        <h4
          className={`text-sm leading-tight font-extrabold ${
            task.checked ? 'text-sky-800 line-through' : 'text-slate-800'
          }`}
        >
          {task.title}
        </h4>
        <span className="rounded-full bg-sky-50 px-2 py-0.5 text-[8px] font-black uppercase text-sky-500">
          {task.tag}
        </span>
      </div>

      <p className="mb-4 text-[10px] leading-relaxed font-bold text-slate-400">{task.desc}</p>

      <div className="flex items-center justify-between gap-3">
        <label className="inline-flex cursor-pointer items-center gap-2 text-[10px] font-black uppercase text-slate-500">
          <input
            type="checkbox"
            checked={task.checked}
            onChange={(event) => onToggle(task.id, event.target.checked)}
            className="h-4 w-4 rounded border-slate-300 text-sky-500 focus:ring-sky-500"
          />
          Hoàn thành
        </label>

        {task.qr ? (
          <button
            type="button"
            onClick={onOpenQr}
            className="flex items-center justify-center gap-2 rounded-2xl bg-sky-500 px-3 py-2 text-[9px] font-black uppercase tracking-widest text-white shadow-lg shadow-sky-100 transition-all active:scale-95"
          >
            <QrCode className="h-3.5 w-3.5" />
            Quét QR
          </button>
        ) : null}
      </div>
    </article>
  );
}
