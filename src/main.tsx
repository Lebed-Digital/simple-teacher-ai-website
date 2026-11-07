import { StrictMode, Suspense, lazy } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css'
import './site.css'
import App from './App.tsx'

const BlogListPage = lazy(() => import('./blog/BlogListPage.tsx').then((m) => ({ default: m.BlogListPage })))
const BlogPostPage = lazy(() => import('./blog/BlogPostPage.tsx').then((m) => ({ default: m.BlogPostPage })))
const IdeasPage = lazy(() => import('./ideas/IdeasPage.tsx').then((m) => ({ default: m.IdeasPage })))
const IdeaPage = lazy(() => import('./ideas/IdeaPage.tsx').then((m) => ({ default: m.IdeaPage })))
const GuidePage = lazy(() => import('./blog/GuidePage.tsx').then((m) => ({ default: m.GuidePage })))

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
