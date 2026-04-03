const SKILL_MAP = [
  { key: 'fireSafety', label: 'An toàn cháy nổ' },
  { key: 'strangerDanger', label: 'Ứng phó người lạ' },
  { key: 'accident', label: 'Tai nạn sinh hoạt' },
  { key: 'firstAid', label: 'Sơ cứu cơ bản' },
  { key: 'independence', label: 'Kỹ năng tự lập' },
];

function getProgressColor(value) {
  if (value > 70) {
    return 'bg-emerald-500';
  }

  if (value >= 50) {
    return 'bg-amber-400';
  }

  return 'bg-rose-500';
}

export default function RadarChart({ data }) {
  return (
    <section className="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-sky-100">
      <h2 className="mb-4 text-lg font-extrabold text-slate-800">Tổng quan 5 kỹ năng</h2>

      <div className="space-y-4">
        {SKILL_MAP.map((skill) => {
          const value = data[skill.key] ?? 0;

          return (
            <div key={skill.key}>
              <div className="mb-1 flex items-center justify-between text-sm font-semibold text-slate-700">
                <span>{skill.label}</span>
                <span>{value}%</span>
              </div>

              <div className="h-3 rounded-full bg-slate-100">
                <div
                  className={`h-3 rounded-full transition-all ${getProgressColor(value)}`}
                  style={{ width: `${value}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
