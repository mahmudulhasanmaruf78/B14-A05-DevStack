import bannerStack from '../assets/banner-stack.png'

export function HeroSection() {
  return (
    <section className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
      <div className="space-y-6">
        <div className="space-y-4">
          <h1 className="text-4xl font-black leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Build Your Ideal <br />
            <span className="brand-gradient">Development Stack</span>
          </h1>
          <p className="max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
            Explore frontend, backend, database, and tooling options, compare them
            side by side, and put together the stack that fits your next project.
          </p>
        </div>

        <div className="flex flex-wrap gap-4">
          <a
            href="#technologies"
            className="btn btn-primary rounded-full border-none bg-gradient-to-r from-violet-600 to-indigo-600 px-6 font-semibold text-white shadow-lg shadow-violet-500/25 hover:from-violet-700 hover:to-indigo-700"
          >
            Explore Technologies
          </a>
          <button className="btn btn-outline rounded-full border-violet-600 px-6 font-semibold text-violet-600 hover:border-violet-700 hover:bg-violet-50 hover:text-violet-700">
            Learn More
          </button>
        </div>
      </div>

      <div className="flex items-center justify-center">
        <img
          src={bannerStack}
          alt="Dev Stack Visual Banner"
          className="w-full max-w-lg object-contain drop-shadow-2xl transition-transform duration-300 hover:scale-[1.02]"
        />
      </div>
    </section>
  )
}

export default HeroSection
