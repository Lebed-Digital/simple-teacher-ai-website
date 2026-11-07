import { Link } from 'react-router-dom'

export function SiteFooter() {
  return (
    <footer className="site-footer bg-[var(--band-deep)] px-4 py-10 text-sm leading-6 text-[var(--on-band)]/75 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-bold text-[var(--on-band)]">Simple Teacher AI</p>
          <p>Created by a teacher, for teachers. © 2026</p>
        </div>
        <nav aria-label="Footer" className="flex flex-wrap gap-x-5 gap-y-2">
          <Link to="/ideas" className="hover:text-[var(--on-band)]">AI ideas</Link>
          <Link to="/blog" className="hover:text-[var(--on-band)]">Blog</Link>
          <Link to="/guide" className="hover:text-[var(--on-band)]">Free ChatGPT guide</Link>
          <a href="/ideas.json" className="hover:text-[var(--on-band)]">Ideas feed (JSON)</a>
        </nav>
        <p>
          Built by Greg, creator of{' '}
          <a href="https://getshorthandapp.com" className="underline hover:text-[var(--on-band)]">ShortHand</a>.
        </p>
      </div>
    </footer>
  )
}
