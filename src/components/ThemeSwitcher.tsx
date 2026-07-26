import { useEffect, useState } from 'react'

/**
 * TEMPORARY: review-only control for the theme-explorations branch.
 * Delete this file and its import in main.tsx once a direction is chosen.
 */

const THEMES = [
  { id: '', label: 'Current' },
  { id: 'demoted', label: 'Green, demoted' },
  { id: 'warm', label: 'Warm' },
  { id: 'sharp', label: 'Sharp' },
  { id: 'dark', label: 'Dark' },
] as const

const STORAGE_KEY = 'stai-theme-preview'

export function ThemeSwitcher() {
  const [theme, setTheme] = useState<string>(() => {
    if (typeof window === 'undefined') return ''
    return window.localStorage.getItem(STORAGE_KEY) ?? ''
  })

  useEffect(() => {
    if (theme) {
      document.documentElement.setAttribute('data-theme', theme)
    } else {
      document.documentElement.removeAttribute('data-theme')
    }
    window.localStorage.setItem(STORAGE_KEY, theme)
  }, [theme])

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '1rem',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 100,
        display: 'flex',
        gap: '0.25rem',
        padding: '0.35rem',
        borderRadius: '999px',
        background: 'rgba(20, 18, 15, 0.92)',
        boxShadow: '0 6px 24px rgba(0, 0, 0, 0.28)',
        backdropFilter: 'blur(8px)',
        maxWidth: 'calc(100vw - 2rem)',
        flexWrap: 'wrap',
        justifyContent: 'center',
      }}
    >
      {THEMES.map((t) => (
        <button
          key={t.id}
          type="button"
          onClick={() => setTheme(t.id)}
          style={{
            border: 'none',
            cursor: 'pointer',
            borderRadius: '999px',
            padding: '0.5rem 0.85rem',
            fontFamily: 'inherit',
            fontSize: '0.8rem',
            fontWeight: 700,
            color: theme === t.id ? '#14120f' : '#f2ede3',
            background: theme === t.id ? '#f2ede3' : 'transparent',
          }}
        >
          {t.label}
        </button>
      ))}
    </div>
  )
}
