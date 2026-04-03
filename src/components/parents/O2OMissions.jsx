function getStatusClass(status) {
  if (status === 'completed') {
    return 'bg-emerald-100 text-emerald-700';
  }

  if (status === 'pending') {
    return 'bg-amber-100 text-amber-700';
  }

  return 'bg-slate-100 text-slate-700';
}

function getStatusLabel(status) {
  if (status === 'completed') {
    return 'Đã hoàn thành';
  }

  if (status === 'pending') {
    return 'Đang chờ';
  }

  return status;
}

export default function O2OMissions({ missions, onSuggestMission }) {
  return (
    <section className="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-sky-100">
      <h2 className="mb-4 text-lg font-extrabold text-slate-800">Nhiệm vụ O2O tuần này</h2>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {missions.map((mission) => (
          <article key={mission.id} className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
            <div className="mb-2 flex items-start justify-between gap-2">
              <h3 className="font-extrabold text-slate-800">{mission.title}</h3>
              <span className={`rounded-full px-2.5 py-1 text-xs font-bold ${getStatusClass(mission.status)}`}>
                {getStatusLabel(mission.status)}
              </span>
            </div>

            <p className="mb-4 text-sm font-medium text-slate-600">{mission.description}</p>

            <button
              type="button"
              className="w-full rounded-xl bg-sky-500 px-3 py-2 text-sm font-extrabold text-white transition-all hover:bg-sky-600"
              onClick={() => window.alert(`Mở nhiệm vụ: ${mission.title}`)}
            >
              {mission.actionLabel}
            </button>
          </article>
        ))}
      </div>

      <button
        type="button"
        onClick={onSuggestMission}
        className="mt-4 w-full rounded-2xl border border-sky-200 bg-sky-50 px-4 py-3 text-sm font-extrabold text-sky-700 transition-all hover:bg-sky-100"
      >
        AI đề xuất thêm nhiệm vụ mới
      </button>
    </section>
  );
}
