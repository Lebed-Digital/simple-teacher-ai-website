import { useEffect, type CSSProperties } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { CATEGORIES, categoryOf, getIdea, ideas, stats, type Idea } from './ideas/data'
import { IdeaCard, NewsletterBand, NewsletterForm, PageShell, Stamp } from './ideas/ui'
import { useSeoMeta } from './blog/useSeoMeta'

const socialLinks = [
  { label: 'TikTok', href: 'https://www.tiktok.com/@simpleteacherai' },
  { label: 'Instagram', href: 'https://www.instagram.com/simple_teacher_ai/' },
  { label: 'YouTube', href: 'https://www.youtube.com/@SimpleTeacherAI' },
  { label: 'Facebook', href: 'https://www.facebook.com/SimpleTeacherAI' },
  { label: 'Substack', href: 'https://simpleteacherai.substack.com/' },
] as const

const pick = (ids: string[]) => ids.map((id) => ideas.find((i) => i.id === id)).filter(Boolean) as Idea[]

const heroStack = pick(['b1-22', 'b2-17', 'b1-01'])
const featured = pick(['b1-22', 'b1-01', 'b2-04', 'b2-13', 'b2-17', 'b2-23'])

function HeroCard({ idea, className }: { idea: Idea; className: string }) {
  const c = categoryOf(idea.category)
  return (
    <Link to={`/ideas/${idea.slug}`} className={`float-card ${className}`} style={{ '--cat': c.color, '--cat-tint': c.tint } as CSSProperties}>
      <div className="hero-card-meta">
        <span className="text-xs font-bold uppercase tracking-[0.1em] text-[var(--cat)]">{c.icon} {idea.category}</span>
        <Stamp status={idea.status} />
      </div>
      <p className="mt-3 font-serif text-lg font-semibold leading-snug text-[var(--heading)] sm:text-xl">{idea.title}</p>
      <p className="mt-2 line-clamp-2 text-sm leading-6 text-[var(--muted)]">{idea.summary}</p>
    </Link>
  )
}

function App() {
  const navigate = useNavigate()
  const { hash } = useLocation()

  useSeoMeta({
    title: 'Simple Teacher AI | Tested AI Ideas for Teachers',
    description: `${stats.total} practical AI ideas for teachers, with copy-and-paste prompts. Every one was tested on a sample class and checked by hand.`,
    path: '/',
  })

  // SPA: the #section doesn't exist when the browser first reads the hash
  // (the /fb, /ig, /tt... vanity redirects land on /#prompts), so scroll after mount.
  useEffect(() => {
    const id = hash.slice(1)
    if (!id) return
    const frame = requestAnimationFrame(() => document.getElementById(id)?.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' }))
    return () => cancelAnimationFrame(frame)
  }, [hash])

  function search(form: HTMLFormElement) {
    const q = new FormData(form).get('q')?.toString().trim()
    navigate(q ? `/ideas?q=${encodeURIComponent(q)}` : '/ideas')
  }

  const study = getIdea('a-study-buddy-thats-told-not-to-do')

  return (
    <PageShell>
      {/* HERO */}
      <section className="home-hero hero-glow px-4 pb-16 pt-8 sm:px-8 sm:pb-24 sm:pt-14">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <p className="glass-pill rise"><span className="dot" />New: {stats.total} ideas, every one tested by hand</p>
            <h1 className="hero-title rise mt-6 font-serif font-semibold text-[var(--heading)]" style={{ animationDelay: '.06s' }}>
              AI ideas for teachers, <em className="grad-text">tested before you try them.</em>
            </h1>
            <p className="rise mt-6 max-w-xl text-lg leading-8 text-[var(--muted)]" style={{ animationDelay: '.12s' }}>
              Copy-and-paste prompts for planning, differentiation, feedback, and parent emails. We run every prompt on a sample class, check every answer, and tell you what the AI still gets wrong.
            </p>
            <form
              className="rise search-box mt-8 max-w-xl"
              style={{ animationDelay: '.18s' }}
              role="search"
              onSubmit={(e) => { e.preventDefault(); search(e.currentTarget) }}
            >
              <span aria-hidden="true" className="search-icon" />
              <label htmlFor="hero-search" className="sr-only">Search AI ideas</label>
              <input id="hero-search" name="q" type="search" placeholder="What do you need help with?" autoComplete="off" />
              <button type="submit" className="btn-shine btn-sm">Search</button>
            </form>
            <div className="rise mt-5 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm font-bold" style={{ animationDelay: '.24s' }}>
              <Link to="/ideas" className="link-arrow">Browse all {stats.total} ideas <span aria-hidden="true">↗</span></Link>
              <a href="#newsletter" className="text-[var(--muted)] hover:text-[var(--heading)]">Get one new idea a week</a>
            </div>
          </div>

          <div className="hero-stack" aria-label="Example ideas">
            <div className="desk-label" aria-hidden="true"><span>From the teacher’s desk</span><span>✳</span></div>
            {heroStack.map((idea, i) => <HeroCard key={idea.id} idea={idea} className={`float-card-${i + 1}`} />)}
            <span className="red-pen" aria-hidden="true">checked by a teacher ✓</span>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="px-4 sm:px-8" aria-label="By the numbers">
        <dl className="stats-strip mx-auto max-w-6xl">
          <div><dt>Ideas, all tested on a sample class</dt><dd>{stats.total}</dd></div>
          <div><dt>Fixed, then retested</dt><dd>{stats.fixed}</dd></div>
          <div><dt>Worked on the first try</dt><dd>{stats.firstTry}</dd></div>
          <div><dt>Real student names used</dt><dd>0</dd></div>
        </dl>
      </section>

      {/* CATEGORIES */}
      <section className="px-4 py-20 sm:px-8 sm:py-28" aria-labelledby="cats-heading">
        <div className="mx-auto max-w-6xl">
          <p className="eyebrow">Find your thing</p>
          <h2 id="cats-heading" className="section-title">What do you need <em className="grad-text">off your plate?</em></h2>
          <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
            {Object.entries(CATEGORIES).map(([name, c]) => {
              const n = ideas.filter((i) => i.category === name).length
              if (!n) return null
              return (
                <Link key={name} to={`/ideas?cat=${encodeURIComponent(name)}`} className="cat-tile reveal" style={{ '--cat': c.color, '--cat-tint': c.tint } as CSSProperties}>
                  <span className="cat-icon" aria-hidden="true">{c.icon}</span>
                  <span className="mt-4 block font-serif text-lg font-semibold leading-tight text-[var(--heading)] sm:text-xl">{name}</span>
                  <span className="mt-1 block text-sm text-[var(--muted)]">{c.blurb}</span>
                  <span className="mt-4 block text-xs font-bold uppercase tracking-[0.12em] text-[var(--cat)]">{n} ideas →</span>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* FEATURED */}
      <section id="prompts" className="featured-section scroll-mt-24 px-4 py-20 sm:px-8 sm:py-28" aria-labelledby="prompts-heading">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-2xl">
              <p className="eyebrow">Start here</p>
              <h2 id="prompts-heading" className="section-title">Six to try <em className="grad-text">this week.</em></h2>
              <p className="mt-4 text-lg leading-8 text-[var(--muted)]">Copy a prompt, paste it into ChatGPT, Claude, or Gemini, and fill in the highlighted parts.</p>
            </div>
            <Link to="/ideas" className="btn-ghost">See all {stats.total}</Link>
          </div>
          <aside className="privacy-note mt-8" aria-label="Privacy reminder">
            <span aria-hidden="true" className="text-2xl">🔒</span>
            <p><strong>Before you paste anything:</strong> no student names or identifying details. Removing a name isn’t always enough, so use made-up students and totals instead of real rows, and stick to the tool your district approved.</p>
          </aside>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((idea, i) => <IdeaCard key={idea.id} idea={idea} style={{ animationDelay: `${i * 0.05}s` }} />)}
          </div>
        </div>
      </section>

      {/* HOW WE TEST */}
      <section className="px-4 py-20 sm:px-8 sm:py-28" aria-labelledby="test-heading">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1fr_1.05fr]">
          <div>
            <p className="eyebrow">Why this is different</p>
            <h2 id="test-heading" className="section-title">Anyone can post a prompt. <em className="grad-text">We grade ours.</em></h2>
            <ol className="steps mt-10">
              <li><b>1</b><div><strong>Filled in with a made-up class.</strong> A sample 3rd, 5th, or 7th grade class. Never a real student.</div></li>
              <li><b>2</b><div><strong>Checked by hand.</strong> We work every math problem, count the words, and compare every quote to the source text.</div></li>
              <li><b>3</b><div><strong>Fixed, then retested.</strong> If it broke, we fix the prompt and run it again. Every card says what you still need to check.</div></li>
            </ol>
          </div>

          <figure className="graded-paper reveal">
            <figcaption className="flex items-center justify-between gap-3">
              <span className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--muted)]">Real test, real catch</span>
              <span className="grade-circle" aria-hidden="true">−1</span>
            </figcaption>
            <p className="mt-4 text-sm font-bold text-[var(--muted)]">A kid asks the study-buddy bot for help with 9 x 6. It said:</p>
            <blockquote className="ai-says">“Six groups of 5 make 30; what do you get when you add 6 more?”</blockquote>
            <p className="pen-note">That leads to 36. The answer is 54. A kid would trust it.</p>
            <p className="mt-5 text-sm font-bold text-[var(--muted)]">We added one line to the prompt and ran it again:</p>
            <blockquote className="ai-says ai-says-good">“Start with 10 groups of 6, which is 60, and take away one group of 6.”</blockquote>
            {study ? <Link to={`/ideas/${study.slug}`} className="link-arrow mt-6 inline-block text-sm font-bold">See the fixed prompt →</Link> : null}
          </figure>
        </div>
      </section>

      <NewsletterBand />

      {/* ABOUT + SOCIAL */}
      <section id="social-links" className="scroll-mt-24 px-4 py-20 sm:px-8" aria-labelledby="about-heading">
        <div className="mx-auto grid max-w-6xl gap-10 rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-7 sm:p-12 md:grid-cols-[1.3fr_1fr] md:items-center">
          <div>
            <p className="eyebrow">Who’s behind this</p>
            <h2 id="about-heading" className="mt-3 font-serif text-3xl font-semibold tracking-[-0.03em] text-[var(--heading)] sm:text-4xl">A classroom teacher, not a tech company.</h2>
            <p className="mt-4 text-lg leading-8 text-[var(--muted)]">I teach, I use AI every week, and I don’t have time for hype either. This is the stuff that actually held up, with the rough edges left in so you know what to check.</p>
          </div>
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.12em] text-[var(--muted)]">Follow along</p>
            <nav aria-label="Social media" className="mt-4 flex flex-wrap gap-2">
              {socialLinks.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="chip">{s.label}</a>
              ))}
            </nav>
            <div className="mt-6"><NewsletterForm /></div>
          </div>
        </div>
      </section>
    </PageShell>
  )
}

export default App
