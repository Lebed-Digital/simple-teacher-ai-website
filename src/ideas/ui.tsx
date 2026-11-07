import { useState, type CSSProperties, type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { SiteHeader } from '../components/SiteHeader'
import { SiteFooter } from '../components/SiteFooter'
import { STAMP, categoryOf, type Idea, type Status } from './data'

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen overflow-x-clip bg-[var(--cream)] text-[var(--ink)]">
      <a href="#main-content" className="fixed left-4 top-4 z-[60] -translate-y-24 rounded-md bg-[var(--green)] px-4 py-3 font-semibold text-[var(--on-accent)] focus:translate-y-0">
        Skip to main content
      </a>
      <SiteHeader />
      <main id="main-content">{children}</main>
      <SiteFooter />
    </div>
  )
}

export function CopyButton({ text, label, size = 'md' }: { text: string; label: string; size?: 'sm' | 'md' }) {
  const [copied, setCopied] = useState(false)
  async function copy() {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2000)
    } catch {
      setCopied(false)
    }
  }
  return (
    <button type="button" onClick={copy} aria-label={`Copy the prompt: ${label}`} className={`btn-shine ${size === 'sm' ? 'btn-sm' : ''}`}>
      <span aria-hidden="true">{copied ? '✓' : '⧉'}</span>
      <span aria-live="polite">{copied ? 'Copied!' : 'Copy prompt'}</span>
    </button>
  )
}

export function Stamp({ status, big = false }: { status: Status; big?: boolean }) {
  return <span className={`stamp stamp-${status} ${big ? 'stamp-big' : ''}`}>{status === 'untested' ? '' : '✓ '}{STAMP[status]}</span>
}

export function CategoryPill({ name }: { name: string }) {
  const c = categoryOf(name)
  return (
    <span className="cat-pill" style={{ '--cat': c.color, '--cat-tint': c.tint } as CSSProperties}>
      <span aria-hidden="true">{c.icon}</span> {name}
    </span>
  )
}

// [placeholders] light up so teachers can see at a glance what to fill in.
export function PromptText({ text }: { text: string }) {
  return (
    <>
      {text.split(/(\[[^\]]+\])/g).map((part, i) =>
        part.startsWith('[') ? <mark key={i} className="fill-in">{part}</mark> : <span key={i}>{part}</span>,
      )}
    </>
  )
}

export function IdeaCard({ idea, style }: { idea: Idea; style?: CSSProperties }) {
  const c = categoryOf(idea.category)
  return (
    <article className="idea-card reveal" style={{ '--cat': c.color, '--cat-tint': c.tint, ...style } as CSSProperties}>
      <div className="card-topline">
        <CategoryPill name={idea.category} />
        <span className="card-arrow" aria-hidden="true">↗</span>
      </div>
      <h3 className="mt-5 font-serif text-[1.35rem] font-semibold leading-tight tracking-[-0.02em] text-[var(--heading)]">
        <Link to={`/ideas/${idea.slug}`} className="stretched focus-visible:outline-none">
          {idea.title}
        </Link>
      </h3>
      <p className="mt-3 line-clamp-3 text-[0.95rem] leading-6 text-[var(--muted)]">{idea.summary}</p>
      <div className="card-verdict"><Stamp status={idea.status} /></div>
      <dl className="mt-auto flex flex-wrap gap-x-4 gap-y-1 pt-5 text-xs font-semibold text-[var(--muted)]">
        <div className="flex gap-1"><dt className="sr-only">Grades</dt><dd>🎒 {idea.grades}</dd></div>
        <div className="flex gap-1"><dt className="sr-only">Takes about</dt><dd>⏱️ {idea.time.split(/[,(]/)[0].trim()}</dd></div>
      </dl>
      <div className="relative z-10 mt-4 flex items-center justify-between gap-3 border-t border-[var(--border)] pt-4">
        <span className="truncate text-xs font-bold uppercase tracking-[0.08em] text-[var(--cat)]" title={idea.tool}>{idea.tool.split(/[(,]/)[0].trim()}</span>
        {idea.prompt ? <CopyButton text={idea.prompt} label={idea.title} size="sm" /> : <span className="shrink-0 text-xs font-bold text-[var(--muted)]">How-to inside →</span>}
      </div>
    </article>
  )
}

const SUBSTACK = 'https://simpleteacherai.substack.com/subscribe'

// Plain GET to Substack's subscribe page with the email prefilled: no JS, no keys, works today.
export function NewsletterForm({ dark = false }: { dark?: boolean }) {
  return (
    <form action={SUBSTACK} method="get" target="_blank" className={`news-form ${dark ? 'news-form-dark' : ''}`}>
      <label htmlFor={dark ? 'nl-email-dark' : 'nl-email'} className="sr-only">Your email</label>
      <input id={dark ? 'nl-email-dark' : 'nl-email'} type="email" name="email" required placeholder="you@school.org" autoComplete="email" />
      <button type="submit" className="btn-shine">Send me the ideas</button>
    </form>
  )
}

export function NewsletterBand() {
  return (
    <section id="newsletter" className="glow-band scroll-mt-24 px-4 py-20 text-[var(--on-band)] sm:px-8 sm:py-28" aria-labelledby="newsletter-heading">
      <div className="relative mx-auto max-w-3xl text-center">
        <p className="glass-pill glass-pill-dark mx-auto"><span className="dot" />Free, one email a week</p>
        <h2 id="newsletter-heading" className="mt-6 text-balance font-serif text-4xl font-semibold leading-[1.05] tracking-[-0.03em] sm:text-6xl">
          New AI ideas, <em className="grad-text-light">tested before they reach you.</em>
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-[var(--on-band)]/75 sm:text-lg">
          Every week: the new tools teachers are hearing about, the prompts that held up on a real test, and what the AI still got wrong.
        </p>
        <div className="mx-auto mt-8 max-w-lg"><NewsletterForm dark /></div>
        <p className="mt-4 text-xs text-[var(--on-band)]/55">Opens Substack to confirm. Unsubscribe anytime.</p>
      </div>
    </section>
  )
}
