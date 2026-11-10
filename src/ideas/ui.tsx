import { useState, type CSSProperties, type FormEvent, type ReactNode } from 'react'
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

// Our own signup (api/subscribe.js): teachers stay on the page and get a confirmation email from Resend.
export function NewsletterForm() {
  const [state, setState] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const [error, setError] = useState('')

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    setState('sending')
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: form.get('email'), website: form.get('website') }),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok) throw new Error(data.error || 'Something went wrong. Please try again.')
      setState('sent')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.')
      setState('error')
    }
  }

  if (state === 'sent') {
    return (
      <div className="news-form news-done" role="status">
        <p className="font-bold">Almost done! Check your email.</p>
        <p className="mt-1 text-sm opacity-80">Click the link we just sent to confirm. Not there in a minute? Check spam or Promotions.</p>
      </div>
    )
  }

  return (
    <form onSubmit={submit} className="news-form">
      <div className="flex flex-col gap-2 sm:flex-row">
        <label htmlFor="news-email" className="sr-only">Email address</label>
        <input id="news-email" name="email" type="email" required autoComplete="email" placeholder="you@example.com" className="news-input" />
        {/* Honeypot: hidden from people, bots fill it in. */}
        <input name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
        <button type="submit" disabled={state === 'sending'} className="news-button">{state === 'sending' ? 'Sending…' : 'Subscribe'}</button>
      </div>
      {state === 'error' && <p role="alert" className="mt-2 text-sm font-semibold text-[#e5484d]">{error}</p>}
      <p className="mt-2 text-xs opacity-70">Personal email works best. School filters sometimes block newsletters.</p>
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
          Every week: the newest tested ideas, the AI tools teachers are hearing about, and what the AI still got wrong.
        </p>
        <div className="mx-auto mt-8 max-w-lg"><NewsletterForm /></div>
        <p className="mt-4 text-xs text-[var(--on-band)]/55">Free. Unsubscribe anytime.</p>
      </div>
    </section>
  )
}
