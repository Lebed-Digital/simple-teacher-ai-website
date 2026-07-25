import { parse as parseYaml } from 'yaml'
import { marked } from 'marked'

export type FaqItem = { q: string; a: string }

export type BlogPost = {
  slug: string
  title: string
  subtitle: string
  excerpt: string
  date: string
  html: string
  faq: FaqItem[]
}

const rawPosts = import.meta.glob('/posts/*.md', { query: '?raw', import: 'default', eager: true }) as Record<string, string>

function parsePost(raw: string): { frontmatter: Record<string, unknown>; content: string } {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/)
  if (!match) return { frontmatter: {}, content: raw }
  return { frontmatter: parseYaml(match[1]) ?? {}, content: match[2] }
}

export const posts: BlogPost[] = Object.entries(rawPosts)
  .map(([path, raw]) => {
    const slug = path.replace('/posts/', '').replace(/\.md$/, '')
    const { frontmatter, content } = parsePost(raw)
    return {
      slug,
      title: frontmatter.title as string,
      subtitle: frontmatter.subtitle as string,
      excerpt: frontmatter.excerpt as string,
      date: frontmatter.date as string,
      html: marked.parse(content, { async: false }) as string,
      faq: (frontmatter.faq ?? []) as FaqItem[],
    }
  })
  .sort((a, b) => (a.date < b.date ? 1 : -1))

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((post) => post.slug === slug)
}
