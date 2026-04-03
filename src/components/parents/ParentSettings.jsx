function ToggleRow({ label, checked, onChange }) {
  return (
    <label className="flex cursor-pointer items-center justify-between rounded-2xl bg-slate-50 px-4 py-3">
      <span className="text-sm font-bold text-slate-700">{label}</span>
      <span className="relative inline-flex h-6 w-11 items-center">
        <input type="checkbox" className="peer sr-only" checked={checked} onChange={onChange} />
        <span className="h-6 w-11 rounded-full bg-slate-300 transition peer-checked:bg-sky-500" />
        <span className="absolute left-1 h-4 w-4 rounded-full bg-white transition peer-checked:translate-x-5" />
      </span>
    </label>
  );
}

export default function ParentSettings({ settings, onScreenTimeChange, onToggleNotification }) {
  return (
    <section className="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-sky-100">
      <h2 className="mb-4 text-lg font-extrabold text-slate-800">Cài đặt phụ huynh</h2>

      <div className="rounded-2xl bg-slate-50 p-4">
        <div className="mb-2 flex items-center justify-between">
          <p className="text-sm font-bold text-slate-700">Thời gian chơi mỗi ngày</p>
          <span className="rounded-full bg-sky-100 px-2.5 py-1 text-xs font-extrabold text-sky-700">
            {settings.screenTime} phút
          </span>
        </div>

        <input
          type="range"
          min="15"
          max="60"
          step="5"
          value={settings.screenTime}
          onChange={(event) => onScreenTimeChange(Number(event.target.value))}
          className="w-full accent-sky-500"
        />
      </div>

      <div className="mt-4 space-y-2">
        <ToggleRow
          label="Báo cáo tuần"
          checked={settings.notifications.weeklyReport}
          onChange={() => onToggleNotification('weeklyReport')}
        />
        <ToggleRow
          label="Cảnh báo khẩn"
          checked={settings.notifications.criticalAlert}
          onChange={() => onToggleNotification('criticalAlert')}
        />
        <ToggleRow
          label="Khuyến mãi"
          checked={settings.notifications.promotion}
          onChange={() => onToggleNotification('promotion')}
        />
      </div>

      <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-3">
        <button
          type="button"
          onClick={() => window.alert('Tính năng đổi mật khẩu đang được mô phỏng.')}
          className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-bold text-slate-700 hover:bg-slate-50"
        >
          Đổi mật khẩu
        </button>
        <button
          type="button"
          onClick={() => window.alert('Dữ liệu của bé đã sẵn sàng để xuất file.')}
          className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-bold text-slate-700 hover:bg-slate-50"
        >
          Xuất dữ liệu con
        </button>
        <button
          type="button"
          onClick={() => window.alert('Hệ thống hỗ trợ sẽ liên hệ bạn sớm nhất.')}
          className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-bold text-slate-700 hover:bg-slate-50"
        >
          Hỗ trợ
        </button>
      </div>
    </section>
  );
}
