import logoText from '../assets/logo-text.png'

export function Header() {
  const navLinks = ['Home', 'Technologies', 'Projects', 'About', 'Contact']

  return (
    <header className="sticky top-0 z-50 border-b border-base-300/80 bg-white/85 backdrop-blur-md transition-all">
      <nav className="navbar mx-auto max-w-7xl px-3 sm:px-6 lg:px-8">
        {/* Left Section: Mobile Hamburger OR Desktop Brand */}
        <div className="navbar-start flex items-center gap-1 sm:gap-2">
          {/* Mobile Hamburger Dropdown */}
          <div className="dropdown lg:hidden">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle btn-sm sm:btn-md"
              aria-label="Open navigation menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 sm:h-6 sm:w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu dropdown-content menu-sm z-[100] mt-3 w-52 rounded-2xl border border-base-200 bg-white p-2 shadow-xl"
            >
              {navLinks.map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="font-medium text-slate-700 hover:text-violet-600 hover:bg-violet-50"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Desktop Brand Logo (visible only on large screens) */}
          <a href="#" className="hidden lg:flex items-center gap-2">
            <img src={logoText} alt="Dev Stack" className="h-8 w-auto object-contain" />
          </a>
        </div>

        {/* Center Section: Mobile Brand Logo OR Desktop Nav Links */}
        <div className="navbar-center flex justify-center">
          {/* Mobile Brand Logo (centered on small devices) */}
          <a href="#" className="flex lg:hidden items-center">
            <img src={logoText} alt="Dev Stack" className="h-7 w-auto object-contain" />
          </a>

          {/* Desktop Nav Links */}
          <ul className="menu menu-horizontal hidden gap-1 px-1 lg:flex">
            {navLinks.map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Section: Sign In and Sign Up (with centralized btn-brand) */}
        <div className="navbar-end flex items-center gap-1.5 sm:gap-3">
          <button className="btn btn-ghost btn-xs sm:btn-sm rounded-full px-2.5 sm:px-4 font-semibold text-slate-700 hover:text-slate-900">
            Sign In
          </button>
          <button className="btn btn-brand btn-xs sm:btn-sm rounded-full px-3.5 sm:px-5 font-semibold text-white">
            Sign Up
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Header
