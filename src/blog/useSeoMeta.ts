import { useEffect } from 'react'

type SeoMeta = {
  title: string
  description: string
  path: string
  type?: 'website' | 'article'
  jsonLd?: Record<string, unknown>
}

function setMetaTag(attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function setCanonical(href: string) {
  let link = document.head.querySelector('link[rel="canonical"]')
  if (!link) {
    link = document.createElement('link')
    link.setAttribute('rel', 'canonical')
    document.head.appendChild(link)
  }
  link.setAttribute('href', href)
}

function setJsonLd(id: string, data: Record<string, unknown> | undefined) {
  const existing = document.getElementById(id)
  if (existing) existing.remove()
  if (!data) return

  const script = document.createElement('script')
  script.id = id
  script.type = 'application/ld+json'
  script.textContent = JSON.stringify(data)
  document.head.appendChild(script)
}

const OG_IMAGE = 'https://www.simpleteacherai.com/og-image.png'

export function useSeoMeta({ title, description, path, type = 'website', jsonLd }: SeoMeta) {
  useEffect(() => {
    document.title = title
    const url = `https://www.simpleteacherai.com${path}`

    setMetaTag('name', 'description', description)
    setMetaTag('property', 'og:type', type)
    setMetaTag('property', 'og:title', title)
    setMetaTag('property', 'og:description', description)
    setMetaTag('property', 'og:url', url)
    setMetaTag('property', 'og:image', OG_IMAGE)
    setMetaTag('name', 'twitter:card', 'summary_large_image')
    setMetaTag('name', 'twitter:title', title)
    setMetaTag('name', 'twitter:description', description)
    setMetaTag('name', 'twitter:image', OG_IMAGE)
    setCanonical(url)
    setJsonLd('page-jsonld', jsonLd)

    return () => setJsonLd('page-jsonld', undefined)
  }, [title, description, path, type, jsonLd])
}
