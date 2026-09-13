import bannerStack from '../assets/banner-stack.png'

export function HeroSection() {
  return (
    <section className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
      <div className="space-y-6 text-center lg:text-left">
        <div className="space-y-4">
          <h1 className="text-3xl font-black leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Build Your Ideal <br className="hidden sm:inline" />
            <span className="brand-gradient">Development Stack</span>
          </h1>
          <p className="mx-auto max-w-xl text-sm leading-relaxed text-slate-600 sm:text-base lg:mx-0 lg:text-lg">
            Explore frontend, backend, database, and tooling options, compare them
            side by side, and put together the stack that fits your next project.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 lg:justify-start">
          <a
            href="#technologies"
            className="btn btn-brand rounded-full px-6 sm:px-7 font-semibold text-white"
          >
            Explore Technologies
          </a>
          <a
            href="#technologies"
            className="btn btn-outline-brand rounded-full px-6 sm:px-7 font-semibold"
          >
            Learn More
          </a>
        </div>
      </div>

      <div className="flex items-center justify-center">
        <img
          src={bannerStack}
          alt="Dev Stack Banner"
          className="w-full max-w-md lg:max-w-lg object-contain drop-shadow-xl transition-transform duration-300 hover:scale-[1.02]"
        />
      </div>
    </section>
  )
}

export default HeroSection
