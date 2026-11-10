import { Link, NavLink } from 'react-router-dom'

const navClass = ({ isActive }: { isActive: boolean }) =>
  `nav-link ${isActive ? 'nav-link-active' : ''}`

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-8 sm:py-4">
        <Link to="/" aria-label="Simple Teacher AI home" className="inline-flex items-center gap-2.5 rounded-lg font-bold tracking-[-0.02em] text-[var(--heading)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[var(--focus)]">
          <span aria-hidden="true" className="logo-mark">ST</span>
          <span className="hidden min-[400px]:inline">Simple Teacher AI</span>
        </Link>
        <nav aria-label="Primary" className="flex items-center gap-1 sm:gap-2">
          <NavLink to="/ideas" className={navClass}>Ideas</NavLink>
          <NavLink to="/blog" className={navClass}>Blog</NavLink>
          <Link to="/#newsletter" className="btn-shine btn-sm ml-1">Subscribe</Link>
        </nav>
      </div>
    </header>
  )
}
