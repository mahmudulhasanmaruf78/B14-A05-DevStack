export function TechnologyCard({
  technology,
  isAdded = false,
  onAdd = () => {},
}) {
  return (
    <article
      className={`soft-panel card-glow flex flex-col justify-between rounded-3xl border p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg ${
        isAdded
          ? 'border-violet-300 bg-violet-50/40'
          : 'border-slate-200/80 bg-white'
      }`}
    >
      <div>
        {/* Top Header: Icon, Name, Category chip, Badge */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-100 bg-slate-50 p-2 shadow-sm">
              <img
                src={technology.icon}
                alt={technology.name}
                className="h-8 w-8 object-contain"
                loading="lazy"
              />
            </div>
            <div>
              <h3 className="text-lg font-bold leading-snug text-slate-900">
                {technology.name}
              </h3>
              <span className="inline-block rounded-md bg-slate-100 px-2 py-0.5 text-xs font-semibold text-slate-600">
                {technology.category}
              </span>
            </div>
          </div>

          <span className="rounded-full border border-violet-200/60 bg-violet-100/70 px-3 py-1 text-xs font-semibold text-violet-700">
            {technology.badge}
          </span>
        </div>

        {/* Description */}
        <p className="mt-4 text-sm leading-relaxed text-slate-600 line-clamp-3">
          {technology.description}
        </p>
      </div>

      <div className="mt-5 space-y-4">
        {/* Meta Info: Difficulty & Rating with Star */}
        <div className="flex items-center justify-between border-t border-slate-100 pt-3 text-xs">
          <span className="rounded-full bg-slate-100 px-2.5 py-1 font-medium text-slate-700">
            {technology.difficulty}
          </span>
          <span className="flex items-center gap-1 text-sm font-bold text-amber-500">
            <span>★</span>
            <span className="font-semibold text-slate-700">{technology.rating}</span>
          </span>
        </div>

        {/* Add to Stack Button */}
        <button
          type="button"
          onClick={() => onAdd(technology)}
          disabled={isAdded}
          className={`btn w-full rounded-full font-semibold transition-all ${
            isAdded
              ? 'btn-disabled cursor-not-allowed border-slate-200 bg-slate-100 text-slate-400'
              : 'btn-primary border-none bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-md shadow-violet-500/20 hover:from-violet-700 hover:to-indigo-700'
          }`}
        >
          {isAdded ? '✓ Added to Stack' : 'Add to Stack'}
        </button>
      </div>
    </article>
  )
}

export default TechnologyCard
