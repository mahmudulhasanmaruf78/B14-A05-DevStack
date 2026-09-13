import logoText from '../assets/logo-text.png'

export function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 text-slate-200">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.5fr_0.9fr_0.9fr_0.9fr] lg:px-8">
        {/* Brand Block */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <img
              src={logoText}
              alt="Dev Stack"
              className="h-8 w-auto object-contain brightness-0 invert"
            />
          </div>
          <p className="max-w-sm text-sm leading-6 text-slate-400">
            Discover tools that help teams build faster, collaborate better, and ship
            memorable digital experiences.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-3 pt-2">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-700 text-slate-400 transition hover:border-violet-500 hover:text-violet-400"
              aria-label="GitHub"
            >
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-700 text-slate-400 transition hover:border-violet-500 hover:text-violet-400"
              aria-label="Twitter / X"
            >
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 24.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-700 text-slate-400 transition hover:border-violet-500 hover:text-violet-400"
              aria-label="LinkedIn"
            >
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Product Links */}
        <div>
          <p className="text-sm font-bold uppercase tracking-wider text-slate-300">Product</p>
          <ul className="mt-4 space-y-2.5 text-sm text-slate-400">
            <li><a href="#technologies" className="transition hover:text-violet-400">Features</a></li>
            <li><a href="#pricing" className="transition hover:text-violet-400">Pricing</a></li>
            <li><a href="#integrations" className="transition hover:text-violet-400">Integrations</a></li>
          </ul>
        </div>

        {/* Company Links */}
        <div>
          <p className="text-sm font-bold uppercase tracking-wider text-slate-300">Company</p>
          <ul className="mt-4 space-y-2.5 text-sm text-slate-400">
            <li><a href="#about" className="transition hover:text-violet-400">About</a></li>
            <li><a href="#careers" className="transition hover:text-violet-400">Careers</a></li>
            <li><a href="#contact" className="transition hover:text-violet-400">Contact</a></li>
          </ul>
        </div>

        {/* Legal Links */}
        <div>
          <p className="text-sm font-bold uppercase tracking-wider text-slate-300">Legal</p>
          <ul className="mt-4 space-y-2.5 text-sm text-slate-400">
            <li><a href="#privacy" className="transition hover:text-violet-400">Privacy</a></li>
            <li><a href="#terms" className="transition hover:text-violet-400">Terms</a></li>
            <li><a href="#security" className="transition hover:text-violet-400">Security</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-900 bg-slate-950/80">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} Dev Stack. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#privacy" className="transition hover:text-slate-300">Privacy Policy</a>
            <a href="#terms" className="transition hover:text-slate-300">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
