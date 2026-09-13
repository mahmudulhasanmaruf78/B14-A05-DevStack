export function TechnologiesSection({
  technologies = [],
  loading = false,
  error = null,
}) {
  return (
    <section id="technologies" className="space-y-6">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-3xl font-black text-slate-900">
            Explore the <span className="brand-gradient">Technologies</span>
          </h2>
          <p className="max-w-xl text-base text-slate-600 sm:text-lg">
            Pick one technology per category to build your ideal stack.
          </p>
        </div>
        {!loading && !error && (
          <span className="self-start rounded-full border border-violet-200 bg-violet-50 px-4 py-1.5 text-sm font-semibold text-violet-700">
            {technologies.length} Technologies Available
          </span>
        )}
      </div>

      {loading ? (
        <div className="soft-panel card-glow flex min-h-[300px] items-center justify-center rounded-3xl border border-base-200 p-8 shadow-sm">
          <div className="flex flex-col items-center gap-3 text-slate-600">
            <span className="loading loading-spinner loading-lg text-primary" />
            <p className="text-base font-medium">Loading technologies...</p>
          </div>
        </div>
      ) : error ? (
        <div className="flex min-h-[200px] flex-col items-center justify-center rounded-2xl border border-red-200 bg-red-50 p-6 text-red-600">
          <p className="font-semibold">{error}</p>
        </div>
      ) : (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {technologies.map((tech) => (
            <div
              key={tech.id}
              className="soft-panel card-glow flex flex-col justify-between rounded-2xl border border-slate-100 bg-white p-5 shadow-sm transition hover:shadow-md"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-100 bg-slate-50 p-2">
                    <img
                      src={tech.icon}
                      alt={tech.name}
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <span className="rounded-full bg-violet-50 px-2.5 py-0.5 text-xs font-semibold text-violet-700">
                    {tech.badge}
                  </span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">{tech.name}</h3>
                  <p className="mt-1 line-clamp-2 text-sm text-slate-500">
                    {tech.description}
                  </p>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3 text-xs text-slate-500">
                <span className="rounded-md bg-slate-100 px-2 py-1 font-medium">
                  {tech.category}
                </span>
                <span className="font-semibold text-amber-500">★ {tech.rating}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}

export default TechnologiesSection
