import { StrictMode, Suspense, lazy } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css'
import './site.css'
import App from './App.tsx'

// After a new deploy, a tab opened before it asks for page files that no longer exist, and React
// shows a blank page. Reload once to pick up the new version instead. The flag stops a reload loop.
function lazyPage<T>(load: () => Promise<T>) {
  return lazy(() =>
    load().catch((err) => {
      const key = `reloaded:${location.pathname}`
      try {
        if (sessionStorage.getItem(key)) throw err
        sessionStorage.setItem(key, '1')
      } catch {
        throw err
      }
      location.reload()
      return new Promise<never>(() => {})
    }) as Promise<{ default: React.ComponentType }>,
  )
}

const BlogListPage = lazyPage(() => import('./blog/BlogListPage.tsx').then((m) => ({ default: m.BlogListPage })))
const BlogPostPage = lazyPage(() => import('./blog/BlogPostPage.tsx').then((m) => ({ default: m.BlogPostPage })))
const IdeasPage = lazyPage(() => import('./ideas/IdeasPage.tsx').then((m) => ({ default: m.IdeasPage })))
const IdeaPage = lazyPage(() => import('./ideas/IdeaPage.tsx').then((m) => ({ default: m.IdeaPage })))
const GuidePage = lazyPage(() => import('./blog/GuidePage.tsx').then((m) => ({ default: m.GuidePage })))

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/blog" element={<Suspense><BlogListPage /></Suspense>} />
        <Route path="/blog/:slug" element={<Suspense><BlogPostPage /></Suspense>} />
        <Route path="/ideas" element={<Suspense><IdeasPage /></Suspense>} />
        <Route path="/ideas/:slug" element={<Suspense><IdeaPage /></Suspense>} />
        <Route path="/guide" element={<Suspense><GuidePage /></Suspense>} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
