export function StackSidebar({
  stack = [],
  onRemove = () => {},
  onClearAll = () => {},
}) {
  return (
    <aside className="soft-panel card-glow sticky top-24 h-fit rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm">
      {/* Header with Title and Selected Count */}
      <div className="flex items-center justify-between border-b border-slate-100 pb-4">
        <div>
          <h2 className="text-xl font-black text-slate-900">Your Stack</h2>
          <p className="text-xs font-medium text-slate-500">
            {stack.length} {stack.length === 1 ? 'Technology' : 'Technologies'} Selected
          </p>
        </div>
        <span className="rounded-full bg-violet-100 px-3 py-1 text-xs font-bold text-violet-700">
          {stack.length}
        </span>
      </div>

      {/* Content: Empty State vs Item List */}
      {stack.length === 0 ? (
        <div className="my-6 flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-slate-200 bg-slate-50/70 p-8 text-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-100 text-2xl font-bold text-violet-600">
            +
          </div>
          <h3 className="mt-4 text-base font-bold text-slate-800">
            Your stack is empty
          </h3>
          <p className="mt-1.5 text-xs leading-relaxed text-slate-500">
            Select technologies from the list to build and compare your ideal stack.
          </p>
        </div>
      ) : (
        <div className="my-5 space-y-3">
          {stack.map((technology) => (
            <div
              key={technology.id}
              className="flex items-center justify-between gap-3 rounded-2xl border border-slate-100 bg-slate-50/60 p-3.5 transition-all duration-200 hover:border-violet-200 hover:bg-white hover:shadow-md"
            >
              <div className="flex min-w-0 items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-slate-200/60 bg-white p-2 shadow-xs">
                  <img
                    src={technology.icon}
                    alt={technology.name}
                    className="h-6 w-6 object-contain"
                  />
                </div>
                <div className="truncate">
                  <h4 className="truncate text-sm font-bold text-slate-900">
                    {technology.name}
                  </h4>
                  <p className="text-xs font-medium text-slate-500">
                    {technology.category}
                  </p>
                </div>
              </div>

              {/* Remove single technology button */}
              <button
                type="button"
                onClick={() => onRemove(technology.id)}
                className="btn btn-ghost btn-circle btn-sm text-slate-400 transition-colors hover:bg-rose-50 hover:text-rose-600"
                aria-label={`Remove ${technology.name} from stack`}
                title={`Remove ${technology.name}`}
              >
                ✕
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Remove All Button */}
      {stack.length > 0 && (
        <div className="border-t border-slate-100 pt-4">
          <button
            type="button"
            onClick={onClearAll}
            className="btn btn-outline btn-error btn-sm w-full rounded-full font-semibold transition-all hover:bg-rose-600 hover:text-white hover:shadow-md"
          >
            Remove All
          </button>
        </div>
      )}
    </aside>
  )
}

export default StackSidebar
