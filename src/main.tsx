import { StrictMode, Suspense, lazy } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css'
import App from './App.tsx'

const BlogListPage = lazy(() => import('./blog/BlogListPage.tsx').then((m) => ({ default: m.BlogListPage })))
const BlogPostPage = lazy(() => import('./blog/BlogPostPage.tsx').then((m) => ({ default: m.BlogPostPage })))

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/blog" element={<Suspense><BlogListPage /></Suspense>} />
        <Route path="/blog/:slug" element={<Suspense><BlogPostPage /></Suspense>} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
