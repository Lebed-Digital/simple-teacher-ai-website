import { useMemo, type CSSProperties } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useSeoMeta } from '../blog/useSeoMeta'
import { CATEGORIES, ideas, stats } from './data'
import { IdeaCard, NewsletterBand, PageShell } from './ui'

const FILTERS = [
  { key: '', label: 'All' },
  { key: 'tested', label: 'Tested' },
  { key: 'first-try', label: 'Worked first try' },
] as const

const normalize = (s: string) => s.toLowerCase().replace(/[^a-z0-9 ]/g, ' ')

export function IdeasPage() {
  const [params, setParams] = useSearchParams()
  const q = params.get('q') ?? ''
  const cat = params.get('cat') ?? ''
  const show = params.get('show') ?? ''

  useSeoMeta({
    title: `${stats.total} Tested AI Ideas for Teachers | Simple Teacher AI`,
    description: `Copy-and-paste AI prompts for teachers. ${stats.tested} of ${stats.total} were run on a sample class and checked by hand, with notes on what the AI got wrong.`,
    path: '/ideas',
  })

  function set(key: string, value: string) {
    const next = new URLSearchParams(params)
    if (value) next.set(key, value)
    else next.delete(key)
    setParams(next, { replace: true })
  }

  const results = useMemo(() => {
    const words = normalize(q).split(' ').filter(Boolean)
    return ideas.filter((i) => {
      if (cat && i.category !== cat) return false
      if (show === 'tested' && i.status === 'untested') return false
      if (show === 'first-try' && i.status !== 'first-try') return false
      const hay = normalize(`${i.title} ${i.category} ${i.tool} ${i.grades} ${i.summary} ${i.prompt}`)
      return words.every((w) => hay.includes(w))
    })
  }, [q, cat, show])

  const counts = useMemo(() => {
    const c: Record<string, number> = {}
    for (const i of ideas) c[i.category] = (c[i.category] ?? 0) + 1
    return c
  }, [])

  return (
    <PageShell>
      <section className="hero-glow px-4 pb-10 pt-10 sm:px-8 sm:pt-16">
        <div className="mx-auto max-w-6xl">
          <p className="glass-pill rise"><span className="dot" />{stats.tested} of {stats.total} tested by hand</p>
          <h1 className="rise mt-5 max-w-3xl text-balance font-serif text-5xl font-semibold leading-[1.02] tracking-[-0.04em] text-[var(--heading)] sm:text-7xl" style={{ animationDelay: '.06s' }}>
            The idea <em className="grad-text">library.</em>
          </h1>
          <p className="rise mt-5 max-w-2xl text-lg leading-8 text-[var(--muted)]" style={{ animationDelay: '.12s' }}>
            Practical ways to use AI this week. Each card says which tool to use, how long it takes, and what happened when we tried it.
          </p>

          <div className="rise search-box mt-8" style={{ animationDelay: '.18s' }}>
            <span aria-hidden="true" className="text-xl">🔎</span>
            <label htmlFor="idea-search" className="sr-only">Search ideas</label>
            <input
              id="idea-search"
              type="search"
              value={q}
              onChange={(e) => set('q', e.target.value)}
              placeholder="Try “sub plans”, “fractions”, “parent email”…"
              autoComplete="off"
            />
          </div>

          <div className="mt-6 flex flex-wrap gap-2" role="group" aria-label="Filter by category">
            <button type="button" className="chip" aria-pressed={!cat} onClick={() => set('cat', '')}>
              ✨ Everything <span className="chip-count">{stats.total}</span>
            </button>
            {Object.entries(CATEGORIES).filter(([name]) => counts[name]).map(([name, c]) => (
              <button
                key={name}
                type="button"
                className="chip"
                aria-pressed={cat === name}
                onClick={() => set('cat', cat === name ? '' : name)}
                style={{ '--cat': c.color, '--cat-tint': c.tint } as CSSProperties}
              >
                <span aria-hidden="true">{c.icon}</span> {name} <span className="chip-count">{counts[name]}</span>
              </button>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
            <div className="segmented" role="group" aria-label="Filter by test result">
              {FILTERS.map((f) => (
                <button key={f.key} type="button" aria-pressed={show === f.key} onClick={() => set('show', f.key)}>{f.label}</button>
              ))}
            </div>
            <p className="text-sm font-semibold text-[var(--muted)]" aria-live="polite">
              Showing {results.length} of {stats.total}
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 pb-24 sm:px-8" aria-label="Ideas">
        <div className="mx-auto max-w-6xl">
          {results.length ? (
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {results.map((idea) => <IdeaCard key={idea.id} idea={idea} />)}
            </div>
          ) : (
            <div className="rounded-3xl border border-dashed border-[var(--border)] bg-[var(--surface)] p-10 text-center">
              <p className="text-4xl" aria-hidden="true">🍎</p>
              <p className="mt-3 font-serif text-2xl font-semibold text-[var(--heading)]">Nothing matches that yet.</p>
              <p className="mt-2 text-[var(--muted)]">New ideas land every week. Try a shorter search, or clear the filters.</p>
              <button type="button" className="btn-ghost mt-6" onClick={() => setParams({}, { replace: true })}>Clear filters</button>
            </div>
          )}
          <p className="mt-10 text-center text-sm text-[var(--muted)]">
            “Takes about” times are our own estimate of hands-on time, not a researched number.
          </p>
        </div>
      </section>

      <NewsletterBand />
    </PageShell>
  )
}
