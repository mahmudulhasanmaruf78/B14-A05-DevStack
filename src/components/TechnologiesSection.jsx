import TechnologyCard from './TechnologyCard'

export function TechnologiesSection({
  technologies = [],
  loading = false,
  error = null,
  stack = [],
  onAdd = () => {},
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
        /* Responsive Grid: 1 column on mobile, 2 on tablet, 3 on desktop */
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {technologies.map((technology) => {
            const isAdded = stack.some((item) => item.id === technology.id)
            return (
              <TechnologyCard
                key={technology.id}
                technology={technology}
                isAdded={isAdded}
                onAdd={onAdd}
              />
            )
          })}
        </div>
      )}
    </section>
  )
}

export default TechnologiesSection
