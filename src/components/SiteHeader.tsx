import { Link } from 'react-router-dom'

export function SiteHeader() {
  return (
    <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-6 sm:px-8 sm:py-8">
      <Link
        to="/"
        aria-label="Simple Teacher AI home"
        className="inline-flex items-center gap-3 rounded-sm font-semibold tracking-[-0.02em] text-[var(--green)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[var(--focus)]"
      >
        <span aria-hidden="true" className="grid size-9 place-items-center rounded-lg bg-[var(--green)] text-sm font-bold text-white">ST</span>
        <span>Simple Teacher AI</span>
      </Link>
      <nav aria-label="Primary" className="flex items-center gap-4 sm:gap-6">
        <Link to="/#prompts" className="rounded-sm text-sm font-bold text-[var(--green)] underline decoration-[var(--yellow)] decoration-2 underline-offset-4 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[var(--focus)]">
          Free prompts
        </Link>
        <Link to="/blog" className="rounded-sm text-sm font-bold text-[var(--green)] underline decoration-[var(--yellow)] decoration-2 underline-offset-4 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[var(--focus)]">
          Blog
        </Link>
        <Link to="/#social-links" className="rounded-sm text-sm font-bold text-[var(--green)] underline decoration-[var(--yellow)] decoration-2 underline-offset-4 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[var(--focus)]">
          Follow along
        </Link>
      </nav>
    </header>
  )
}
