function renderTrend(value) {
  if (value > 0) {
    return <span className="text-emerald-600">+{value}%</span>;
  }

  if (value < 0) {
    return <span className="text-rose-600">{value}%</span>;
  }

  return <span className="text-slate-500">0%</span>;
}

function renderReactionTrend(value) {
  if (value < 0) {
    return <span className="text-emerald-600">{value}s (phản xạ nhanh hơn)</span>;
  }

  if (value > 0) {
    return <span className="text-rose-600">+{value}s (phản xạ chậm hơn)</span>;
  }

  return <span className="text-slate-500">0s</span>;
}

export default function WeeklyReport({ reportData }) {
  return (
    <section className="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-sky-100">
      <h2 className="mb-4 text-lg font-extrabold text-slate-800">Báo cáo tuần này</h2>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
        <article className="rounded-2xl bg-slate-50 p-4">
          <p className="text-sm font-semibold text-slate-500">Tổng tình huống</p>
          <p className="mt-1 text-2xl font-black text-slate-800">{reportData.totalScenarios}</p>
        </article>

        <article className="rounded-2xl bg-slate-50 p-4">
          <p className="text-sm font-semibold text-slate-500">Tỷ lệ trả lời đúng</p>
          <p className="mt-1 text-2xl font-black text-slate-800">{reportData.accuracy}%</p>
          <p className="mt-1 text-xs font-bold">{renderTrend(reportData.accuracyChange)}</p>
        </article>

        <article className="rounded-2xl bg-slate-50 p-4">
          <p className="text-sm font-semibold text-slate-500">Thời gian phản xạ TB</p>
          <p className="mt-1 text-2xl font-black text-slate-800">{reportData.avgReactionTime}s</p>
          <p className="mt-1 text-xs font-bold">{renderReactionTrend(reportData.reactionChange)}</p>
        </article>
      </div>

      <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
        <article className="rounded-2xl border border-rose-100 bg-rose-50 p-4">
          <p className="text-sm font-semibold text-rose-700">Điểm yếu nhất</p>
          <p className="mt-1 font-extrabold text-rose-900">{reportData.weakestSkill}</p>
          <p className="text-sm font-bold text-rose-700">{reportData.weakestPercent}%</p>
        </article>

        <article className="rounded-2xl border border-emerald-100 bg-emerald-50 p-4">
          <p className="text-sm font-semibold text-emerald-700">Điểm mạnh nhất</p>
          <p className="mt-1 font-extrabold text-emerald-900">{reportData.strongestSkill}</p>
          <p className="text-sm font-bold text-emerald-700">{reportData.strongestPercent}%</p>
        </article>
      </div>
    </section>
  );
}
