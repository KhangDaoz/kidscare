const NAV_ITEMS = [
  { id: 'overview', label: 'Tổng quan', icon: '🏠' },
  { id: 'missions', label: 'Nhiệm vụ', icon: '🎯' },
  { id: 'settings', label: 'Cài đặt', icon: '⚙️' },
];

export default function ParentBottomNav() {
  return (
    <nav className="fixed inset-x-0 bottom-0 z-40 border-t border-sky-100 bg-white/95 p-2 backdrop-blur md:hidden">
      <ul className="mx-auto grid max-w-md grid-cols-3 gap-2">
        {NAV_ITEMS.map((item) => (
          <li key={item.id}>
            <button
              type="button"
              onClick={() => window.alert(`Đã chọn ${item.label}`)}
              className="flex w-full flex-col items-center justify-center rounded-xl py-2 text-xs font-bold text-slate-600 transition hover:bg-sky-50 hover:text-sky-700"
            >
              <span className="text-base">{item.icon}</span>
              <span>{item.label}</span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
