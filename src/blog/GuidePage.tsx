import { SiteHeader } from '../components/SiteHeader'
import { SiteFooter } from '../components/SiteFooter'
import { useSeoMeta } from './useSeoMeta'

export function GuidePage() {
  useSeoMeta({
    title: 'ChatGPT Starter Guide for Teachers | Simple Teacher AI',
    description: 'Download a free one-page ChatGPT starter guide for teachers with practical classroom prompts and student privacy reminders.',
    path: '/guide',
  })

  return (
    <div className="min-h-screen bg-[var(--cream)] text-[var(--ink)]">
      <a href="#main-content" className="fixed left-4 top-4 z-50 -translate-y-24 rounded-md bg-[var(--green)] px-4 py-3 font-semibold text-[var(--on-accent)] focus:translate-y-0">
        Skip to main content
      </a>
      <SiteHeader />
      <main id="main-content" className="px-5 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-balance font-serif text-4xl font-bold tracking-[-0.03em] text-[var(--heading)] sm:text-5xl">ChatGPT Starter Guide for Teachers</h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-[var(--muted)]">New to ChatGPT? Start simple. This free one-page guide gives teachers 10 practical ways to use ChatGPT for real classroom tasks, plus an important reminder about protecting student privacy.</p>

          <a
            href="/chatgpt-teacher-guide.pdf"
            download
            className="mt-9 inline-flex items-center gap-2 rounded-full bg-[var(--green)] px-8 py-4 text-lg font-bold text-[var(--on-accent)] shadow-[6px_6px_0_var(--shadow)] transition-colors hover:bg-[var(--green-dark)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[var(--focus)]"
          >
            Download the Free Guide
          </a>

          <aside className="mt-10 rounded-2xl border border-[var(--blue)] bg-[var(--blue-light)] p-6 text-left sm:p-7" aria-label="Privacy reminder">
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-[var(--blue-dark)]">A quick privacy note</p>
            <p className="mt-3 text-base leading-7 text-[var(--ink)]">Keep student names and other private student information out of AI tools. Follow your school or district's AI and student-data policies.</p>
          </aside>

          <p className="mt-10 text-base leading-7 text-[var(--muted)]">Simple Teacher AI shares practical ways teachers can use AI to save time and make classroom work easier.</p>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
