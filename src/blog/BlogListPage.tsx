import { Link } from 'react-router-dom'
import { SiteHeader } from '../components/SiteHeader'
import { SiteFooter } from '../components/SiteFooter'
import { posts } from './posts'
import { useSeoMeta } from './useSeoMeta'

function formatDate(dateStr: string) {
  return new Date(`${dateStr}T12:00:00`).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
}

export function BlogListPage() {
  useSeoMeta({
    title: 'Blog | Simple Teacher AI',
    description: 'Practical, honest AI advice for teachers: what actually saves time, what to avoid, and how to keep student information private.',
    path: '/blog',
  })

  return (
    <div className="min-h-screen bg-[var(--cream)] text-[var(--ink)]">
      <a href="#main-content" className="fixed left-4 top-4 z-50 -translate-y-24 rounded-md bg-[var(--green)] px-4 py-3 font-semibold text-[var(--on-accent)] focus:translate-y-0">
        Skip to main content
      </a>
      <SiteHeader />
      <main id="main-content" className="px-5 pb-24 pt-4 sm:px-8">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-[var(--blue-dark)]">From the classroom</p>
          <h1 className="mt-3 font-serif text-4xl font-bold tracking-[-0.03em] text-[var(--heading)] sm:text-5xl">The Blog</h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-[var(--muted)]">Honest notes on using AI as a real classroom teacher. No hype, no complicated tech talk.</p>

          <div className="mt-12 grid gap-6">
            {posts.map((post) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="block rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 transition-colors hover:border-[var(--green)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[var(--focus)] sm:p-8"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.1em] text-[var(--muted)]">{formatDate(post.date)}</p>
                <h2 className="mt-3 font-serif text-2xl font-bold tracking-[-0.02em] text-[var(--heading)] sm:text-3xl">{post.title}</h2>
                <p className="mt-3 text-base leading-7 text-[var(--muted)]">{post.excerpt}</p>
                <p className="mt-4 text-sm font-bold text-[var(--green)] underline decoration-[var(--yellow)] decoration-2 underline-offset-4">Read the post</p>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
