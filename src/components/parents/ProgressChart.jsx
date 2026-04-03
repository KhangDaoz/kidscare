export default function ProgressChart({ monthlyData }) {
  const maxValue = monthlyData.reduce((max, item) => {
    return Math.max(max, item.strangerSafety, item.fireSafety);
  }, 0);

  return (
    <section className="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-sky-100">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-extrabold text-slate-800">Tiến bộ 8 tháng</h2>
        <div className="flex items-center gap-3 text-xs font-bold text-slate-600">
          <span className="inline-flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-sky-500" />
            Người lạ
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-orange-400" />
            Cháy nổ
          </span>
        </div>
      </div>

      <div className="flex h-64 items-end gap-3 overflow-x-auto pb-2">
        {monthlyData.map((item) => {
          const strangerHeight = (item.strangerSafety / maxValue) * 100;
          const fireHeight = (item.fireSafety / maxValue) * 100;

          return (
            <div key={item.month} className="min-w-[64px] flex-1">
              <div className="mb-2 flex h-52 items-end justify-center gap-1.5 rounded-xl bg-slate-50 px-2 py-3">
                <div
                  className="w-4 rounded-t-md bg-sky-500"
                  style={{ height: `${strangerHeight}%` }}
                  title={`An toàn người lạ: ${item.strangerSafety}`}
                />
                <div
                  className="w-4 rounded-t-md bg-orange-400"
                  style={{ height: `${fireHeight}%` }}
                  title={`An toàn cháy nổ: ${item.fireSafety}`}
                />
              </div>
              <p className="text-center text-xs font-bold text-slate-600">{item.month}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
