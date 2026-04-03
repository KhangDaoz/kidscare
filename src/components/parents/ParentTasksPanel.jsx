import { Plus, Sparkles } from 'lucide-react';
import ParentTaskItem from './ParentTaskItem';

export default function ParentTasksPanel({
  activeTab,
  onTabChange,
  tasks,
  manualTask,
  onManualTaskChange,
  onManualTaskAdd,
  onTaskToggle,
  onOpenQr,
}) {
  return (
    <section className="parents-card-shadow flex min-h-[420px] flex-col rounded-[2rem] border border-slate-100 bg-white p-4 sm:rounded-[2.5rem] sm:p-7 lg:h-[600px]">
      <div className="mb-6 flex items-start justify-between">
        <h3 className="text-base font-black uppercase tracking-tight text-slate-800 sm:text-lg">Nhiệm vụ cho con</h3>
        <Sparkles className="h-5 w-5 text-sky-500" />
      </div>

      <div className="mb-6 flex rounded-2xl bg-slate-100 p-1.5">
        <button
          type="button"
          onClick={() => onTabChange('app')}
          className={`flex-1 rounded-xl py-2.5 text-[10px] font-black uppercase transition-all ${
            activeTab === 'app' ? 'parents-tab-active' : 'font-bold text-slate-400'
          }`}
        >
          Trong ứng dụng
        </button>
        <button
          type="button"
          onClick={() => onTabChange('real')}
          className={`flex-1 rounded-xl py-2.5 text-[10px] font-black uppercase transition-all ${
            activeTab === 'real' ? 'parents-tab-active' : 'font-bold text-slate-400'
          }`}
        >
          Ngoài đời thực
        </button>
      </div>

      <div className="relative mb-6">
        <input
          value={manualTask}
          onChange={(event) => onManualTaskChange(event.target.value)}
          type="text"
          placeholder="Thêm nhiệm vụ riêng cho con..."
          className="w-full rounded-2xl border border-slate-100 bg-slate-50 py-3 pr-12 pl-4 text-xs font-bold outline-none transition-all focus:ring-2 focus:ring-sky-500 sm:py-4 sm:pl-5"
        />
        <button
          type="button"
          onClick={onManualTaskAdd}
          className="absolute top-2.5 right-3 rounded-xl bg-slate-900 p-2 text-white transition-all hover:bg-sky-600"
          aria-label="Thêm nhiệm vụ"
        >
          <Plus className="h-4 w-4" />
        </button>
      </div>

      <div className="parents-custom-scrollbar flex-1 space-y-4 overflow-y-auto pr-1">
        {tasks.map((task) => (
          <ParentTaskItem key={task.id} task={task} onToggle={onTaskToggle} onOpenQr={onOpenQr} />
        ))}
      </div>
    </section>
  );
}
