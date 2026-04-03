import { Plus } from 'lucide-react';

const childrenProfiles = [
  {
    id: 'an',
    name: 'Bé An',
    age: '6 tuổi 3 tháng',
    avatar: 'https://api.dicebear.com/7.x/adventurer/svg?seed=An',
  },
  {
    id: 'binh',
    name: 'Bé Bình',
    age: '7 tuổi 1 tháng',
    avatar: 'https://api.dicebear.com/7.x/adventurer/svg?seed=Binh',
  },
];

export default function ParentHeader({ activeChild, onSelectChild }) {
  return (
    <header className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between lg:gap-4">
      <div className="flex items-center gap-3 overflow-x-auto rounded-2xl border border-slate-100 bg-white p-2 shadow-sm">
        {childrenProfiles.map((child) => {
          const isActive = child.id === activeChild;

          return (
            <button
              key={child.id}
              type="button"
              onClick={() => onSelectChild(child.id)}
              className={`flex min-w-fit items-center gap-3 rounded-xl px-3 py-2 transition-all sm:px-4 ${
                isActive
                  ? 'bg-sky-500 text-white shadow-lg shadow-sky-100'
                  : 'text-slate-500 opacity-60 grayscale hover:bg-slate-50 hover:opacity-100 hover:grayscale-0'
              }`}
            >
              <img
                src={child.avatar}
                className={`h-8 w-8 rounded-full ${isActive ? 'bg-white/20' : 'bg-slate-100'}`}
                alt={child.name}
              />
              <div className="text-left">
                <p className="text-xs font-black uppercase">{child.name}</p>
                <p className={`text-[9px] font-bold ${isActive ? 'opacity-80' : 'opacity-70'}`}>
                  {child.age}
                </p>
              </div>
            </button>
          );
        })}

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-xl border-2 border-dashed border-slate-200 text-slate-300 transition-all hover:text-sky-500"
          aria-label="Thêm hồ sơ trẻ"
        >
          <Plus className="h-5 w-5" />
        </button>
      </div>

      <div className="grid w-full grid-cols-2 gap-2 sm:flex sm:w-auto">
        <button
          type="button"
          className="rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-xs font-bold text-slate-600 transition-all hover:bg-slate-50 sm:px-5"
        >
          Xuất báo cáo
        </button>
        <button
          type="button"
          className="rounded-xl bg-slate-900 px-4 py-2.5 text-xs font-bold text-white shadow-xl sm:px-5"
        >
          Cài đặt
        </button>
      </div>
    </header>
  );
}
