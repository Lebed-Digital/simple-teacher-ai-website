import { useEffect, useRef } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { SiteHeader } from '../components/SiteHeader'
import { SiteFooter } from '../components/SiteFooter'
import { getPostBySlug, posts } from './posts'
import { useSeoMeta } from './useSeoMeta'

function formatDate(dateStr: string) {
  return new Date(`${dateStr}T12:00:00`).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
}

export function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>()
  const post = slug ? getPostBySlug(slug) : undefined
  const navigate = useNavigate()
  const contentRef = useRef<HTMLDivElement>(null)

  // Jump to the top when moving between posts, otherwise you land mid-article.
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  // Markdown renders plain <a> tags, which would trigger a full page reload.
  // Route internal links through the router instead.
  useEffect(() => {
    const el = contentRef.current
    if (!el) return

    function handleClick(event: MouseEvent) {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return
      const anchor = (event.target as HTMLElement).closest('a')
      if (!anchor) return
      const href = anchor.getAttribute('href')
      if (!href?.startsWith('/') || anchor.target === '_blank') return
      event.preventDefault()
      navigate(href)
    }

    el.addEventListener('click', handleClick)
    return () => el.removeEventListener('click', handleClick)
  }, [navigate, post])

  useSeoMeta({
    title: post ? `${post.title} | Simple Teacher AI` : 'Post not found | Simple Teacher AI',
    description: post ? post.excerpt : 'This post could not be found.',
    path: post ? `/blog/${post.slug}` : '/blog',
    type: post ? 'article' : 'website',
    jsonLd: post
      ? {
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: post.title,
          description: post.excerpt,
          datePublished: post.date,
          dateModified: post.date,
          author: { '@type': 'Person', name: 'Gregory Lebed' },
          publisher: { '@type': 'Organization', name: 'Simple Teacher AI' },
          mainEntityOfPage: `https://www.simpleteacherai.com/blog/${post.slug}`,
        }
      : undefined,
  })

  if (!post) {
    return (
      <div className="min-h-screen bg-[var(--cream)] text-[var(--ink)]">
        <SiteHeader />
        <main className="px-5 py-24 text-center sm:px-8">
          <h1 className="font-serif text-4xl font-bold text-[var(--heading)]">Post not found</h1>
          <p className="mt-4 text-lg text-[var(--muted)]">
            <Link to="/blog" className="font-bold text-[var(--green)] underline decoration-[var(--yellow)] decoration-2 underline-offset-4">
              Back to the blog
            </Link>
          </p>
        </main>
        <SiteFooter />
      </div>
    )
  }

  const otherPosts = posts.filter((p) => p.slug !== post.slug)

  return (
    <div className="min-h-screen bg-[var(--cream)] text-[var(--ink)]">
      <a href="#main-content" className="fixed left-4 top-4 z-50 -translate-y-24 rounded-md bg-[var(--green)] px-4 py-3 font-semibold text-[var(--on-accent)] focus:translate-y-0">
        Skip to main content
      </a>
      <SiteHeader />
      <main id="main-content" className="px-5 pb-24 pt-4 sm:px-8">
        <article className="mx-auto max-w-3xl">
          <Link to="/blog" className="text-sm font-bold text-[var(--green)] underline decoration-[var(--yellow)] decoration-2 underline-offset-4">
            ← All posts
          </Link>
          <p className="mt-6 text-sm font-semibold uppercase tracking-[0.1em] text-[var(--muted)]">{formatDate(post.date)}</p>
          <h1 className="mt-3 text-balance font-serif text-4xl font-bold tracking-[-0.03em] text-[var(--heading)] sm:text-5xl">{post.title}</h1>
          <p className="mt-4 text-xl leading-8 text-[var(--muted)]">{post.subtitle}</p>

          <div ref={contentRef} className="post-content mt-10" dangerouslySetInnerHTML={{ __html: post.html }} />

          {post.faq.length > 0 ? (
            <section className="mt-14 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 sm:p-8" aria-labelledby="faq-heading">
              <h2 id="faq-heading" className="font-serif text-2xl font-bold tracking-[-0.02em] text-[var(--heading)]">
                Questions teachers ask
              </h2>
              <dl className="mt-6 space-y-6">
                {post.faq.map((item) => (
                  <div key={item.q}>
                    <dt className="font-bold text-[var(--green)]">{item.q}</dt>
                    <dd className="mt-2 text-base leading-7 text-[var(--muted)]">{item.a}</dd>
                  </div>
                ))}
              </dl>
            </section>
          ) : null}

          {otherPosts.length > 0 ? (
            <section className="mt-14" aria-labelledby="more-heading">
              <h2 id="more-heading" className="font-serif text-xl font-bold tracking-[-0.02em] text-[var(--heading)]">
                More from the blog
              </h2>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {otherPosts.map((p) => (
                  <Link key={p.slug} to={`/blog/${p.slug}`} className="block rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 transition-colors hover:border-[var(--green)]">
                    <h3 className="font-bold text-[var(--heading)]">{p.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{p.excerpt}</p>
                  </Link>
                ))}
              </div>
            </section>
          ) : null}
        </article>
      </main>
      <SiteFooter />
    </div>
  )
}
