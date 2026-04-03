export default function ChildSelector({ childrenList, selectedChildId, onSelectChild, onAddChild }) {
  return (
    <section className="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-sky-100">
      <div className="mb-3 flex items-center justify-between">
        <h2 className="text-lg font-extrabold text-slate-800">Chọn hồ sơ bé</h2>
        <span className="text-sm font-semibold text-slate-500">{childrenList.length} hồ sơ</span>
      </div>

      <div className="flex flex-wrap gap-3">
        {childrenList.map((child) => {
          const isActive = child.id === selectedChildId;

          return (
            <button
              key={child.id}
              type="button"
              onClick={() => onSelectChild(child.id)}
              className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-bold transition-all ${
                isActive
                  ? 'border-sky-300 bg-sky-500 text-white shadow-md shadow-sky-200'
                  : 'border-slate-200 bg-slate-50 text-slate-700 hover:border-sky-200 hover:bg-sky-50'
              }`}
            >
              <span>{child.avatar}</span>
              <span>{child.name}</span>
              <span className={`text-xs ${isActive ? 'text-sky-100' : 'text-slate-500'}`}>{child.age} tuổi</span>
            </button>
          );
        })}

        <button
          type="button"
          onClick={onAddChild}
          className="inline-flex items-center rounded-full border-2 border-dashed border-sky-300 bg-white px-4 py-2 text-sm font-bold text-sky-600 transition-all hover:bg-sky-50"
        >
          + Thêm con
        </button>
      </div>
    </section>
  );
}
