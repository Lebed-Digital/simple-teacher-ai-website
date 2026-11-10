import { useEffect, useRef, type CSSProperties } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useSeoMeta } from '../blog/useSeoMeta'
import { categoryOf, getIdea, ideas } from './data'
import { CategoryPill, CopyButton, IdeaCard, NewsletterBand, PageShell, PromptText, Stamp } from './ui'

export function IdeaPage() {
  const { slug } = useParams<{ slug: string }>()
  const idea = slug ? getIdea(slug) : undefined
  const navigate = useNavigate()
  const bodyRef = useRef<HTMLDivElement>(null)

  useEffect(() => window.scrollTo(0, 0), [slug])

  // Markdown links to other ideas are plain <a> tags; route them without a full reload.
  useEffect(() => {
    const el = bodyRef.current
    if (!el) return
    function onClick(e: MouseEvent) {
      const a = (e.target as HTMLElement).closest('a')
      const href = a?.getAttribute('href')
      if (!href?.startsWith('/') || e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return
      e.preventDefault()
      navigate(href)
    }
    el.addEventListener('click', onClick)
    return () => el.removeEventListener('click', onClick)
  }, [navigate, idea])

  useSeoMeta({
    title: idea ? `${idea.title} | Simple Teacher AI` : 'Idea not found | Simple Teacher AI',
    description: idea ? `${idea.summary} ${idea.status === 'untested' ? '' : `We tested it: ${idea.verdict.toLowerCase()}.`}`.trim() : 'This idea could not be found.',
    path: idea ? `/ideas/${idea.slug}` : '/ideas',
    type: idea ? 'article' : 'website',
    jsonLd: idea
      ? {
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: idea.title,
          description: idea.summary,
          datePublished: idea.date,
          author: { '@type': 'Person', name: 'Gregory Lebed' },
          publisher: { '@type': 'Organization', name: 'Simple Teacher AI' },
          mainEntityOfPage: `https://www.simpleteacherai.com/ideas/${idea.slug}`,
        }
      : undefined,
  })

  if (!idea) {
    return (
      <PageShell>
        <div className="px-4 py-24 text-center sm:px-8">
          <h1 className="font-serif text-4xl font-semibold text-[var(--heading)]">That idea isn’t here</h1>
          <Link to="/ideas" className="btn-shine mt-8">Browse all ideas</Link>
        </div>
      </PageShell>
    )
  }

  const c = categoryOf(idea.category)
  const index = ideas.indexOf(idea)
  const prev = ideas[index - 1]
  const next = ideas[index + 1]
  const related = ideas.filter((i) => i.category === idea.category && i.id !== idea.id).slice(0, 3)

  return (
    <PageShell>
      <article className="idea-detail" style={{ '--cat': c.color, '--cat-tint': c.tint } as CSSProperties}>
        <header className="hero-glow cat-glow px-4 pb-12 pt-8 sm:px-8 sm:pt-12">
          <div className="mx-auto max-w-6xl">
            <Link to="/ideas" className="text-sm font-bold text-[var(--green)] hover:underline">← All ideas</Link>
            <div className="rise mt-6 flex flex-wrap items-center gap-3">
              <CategoryPill name={idea.category} />
              <Stamp status={idea.status} />
            </div>
            <h1 className="detail-title rise mt-5 text-balance font-serif font-semibold text-[var(--heading)]" style={{ animationDelay: '.06s' }}>
              {idea.title}
            </h1>
            <p className="detail-summary rise mt-6 text-lg leading-8 text-[var(--muted)]" style={{ animationDelay: '.12s' }}>{idea.summary}</p>
          </div>
        </header>

        <div className="idea-layout mx-auto max-w-6xl px-4 pb-16 sm:px-8">
          <aside className="idea-sidebar" aria-label="Idea details">
            <p className="eyebrow">At a glance</p>
            <dl className="meta-grid mt-5">
              <div><dt>Grades</dt><dd>{idea.grades}</dd></div>
              <div><dt>Takes about*</dt><dd>{idea.time}</dd></div>
              <div className="meta-tool"><dt>Tool</dt><dd>{idea.tool}</dd></div>
            </dl>
            <nav className="detail-jumps" aria-label="On this page">
              <a href="#idea-content">{idea.prompt ? 'Read the prompt' : 'Read the idea'} <span aria-hidden="true">↓</span></a>
              <a href="#test-heading">{idea.status === 'untested' ? 'What to check' : 'See the test notes'} <span aria-hidden="true">↓</span></a>
            </nav>
          </aside>

          <div ref={bodyRef} id="idea-content" className="idea-body">
            <div className="flex flex-col gap-6">
              {idea.segments.map((s, i) =>
                s.type === 'note' ? (
                  <div key={i} className="idea-prose" dangerouslySetInnerHTML={{ __html: s.html }} />
                ) : (
                  <section key={i} className="prompt-box" aria-label={s.label}>
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <p className="prompt-label">{s.label}</p>
                      <CopyButton text={s.text} label={idea.title} />
                    </div>
                    <p className="prompt-text"><PromptText text={s.text} /></p>
                    <p className="mt-4 text-xs font-semibold text-[var(--muted)]">
                      Swap the <mark className="fill-in">[highlighted parts]</mark> for your own class. No student names.
                    </p>
                  </section>
                ),
              )}
            </div>

            <section className={`test-paper mt-10 test-${idea.status}`} aria-labelledby="test-heading">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h2 id="test-heading" className="font-serif text-2xl font-semibold tracking-[-0.02em] text-[var(--heading)]">
                  {idea.status === 'untested' ? 'Not tested yet' : 'We tested it'}
                </h2>
                <Stamp status={idea.status} big />
              </div>
              {idea.verdictDetail && idea.status !== 'untested' ? (
                <p className="mt-2 font-semibold text-[var(--ink)]">Result: {idea.verdictDetail}.</p>
              ) : null}
              <div className="idea-prose test-prose mt-4" dangerouslySetInnerHTML={{ __html: idea.testHtml }} />
            </section>

            {idea.sourcesHtml ? (
              <section className="mt-8 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 text-sm" aria-label="Sources">
                <p className="font-bold uppercase tracking-[0.12em] text-[var(--muted)]">Sources</p>
                <div className="idea-prose mt-2 text-sm" dangerouslySetInnerHTML={{ __html: idea.sourcesHtml }} />
              </section>
            ) : null}

            <p className="mt-6 text-xs leading-5 text-[var(--muted)]">
              *“Takes about” is our own estimate of hands-on time, not a researched number. Never put student names or identifying details into an AI tool, and use the tool your district approved.
            </p>

            <nav className="mt-10 grid gap-3 sm:grid-cols-2" aria-label="More ideas">
              {prev ? (
                <Link to={`/ideas/${prev.slug}`} className="pager">
                  <span>← Previous</span>
                  <strong>{prev.title}</strong>
                </Link>
              ) : <span />}
              {next ? (
                <Link to={`/ideas/${next.slug}`} className="pager text-right">
                  <span>Next →</span>
                  <strong>{next.title}</strong>
                </Link>
              ) : null}
            </nav>
          </div>
        </div>
      </article>

      {related.length ? (
        <section className="px-4 pb-20 sm:px-8" aria-labelledby="related-heading">
          <div className="mx-auto max-w-6xl">
            <h2 id="related-heading" className="font-serif text-3xl font-semibold tracking-[-0.03em] text-[var(--heading)]">
              More {idea.category.toLowerCase()} ideas
            </h2>
            <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((r) => <IdeaCard key={r.id} idea={r} />)}
            </div>
          </div>
        </section>
      ) : null}

      <NewsletterBand />
    </PageShell>
  )
}
