export default function AlertBanner({ alertData, onOpenEmergencyModal }) {
  if (alertData.hasAlert) {
    return (
      <section className="rounded-3xl border border-rose-200 bg-gradient-to-r from-rose-100 to-orange-100 p-5">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="mb-1 text-sm font-extrabold uppercase tracking-wide text-rose-700">Cảnh báo quan trọng</p>
            <h2 className="text-lg font-black text-rose-900">🚨 {alertData.message}</h2>
          </div>

          <button
            type="button"
            onClick={onOpenEmergencyModal}
            className="rounded-full bg-rose-600 px-5 py-2 text-sm font-extrabold text-white transition-all hover:-translate-y-0.5 hover:bg-rose-700"
          >
            Xem bài tập khẩn cấp
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="rounded-3xl border border-emerald-200 bg-emerald-50 p-5">
      <h2 className="text-lg font-black text-emerald-800">✅ Mọi thứ đang ổn định</h2>
      <p className="mt-1 text-sm font-semibold text-emerald-700">
        Không phát hiện cảnh báo khẩn cấp trong 7 ngày gần đây.
      </p>
    </section>
  );
}
