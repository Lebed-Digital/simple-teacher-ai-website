// Shared helpers for the newsletter signup. Files starting with _ are not turned into routes by Vercel.
import { createHmac, timingSafeEqual } from 'node:crypto'

export const FROM = 'Greg from Simple Teacher AI <greg@simpleteacherai.com>'
export const SEGMENT_NAME = 'Newsletter'

// Signs the email so only the person who got the confirmation email can confirm it.
// ponytail: keyed off the Resend API key and links never expire; add a SIGNUP_SECRET + expiry if links ever get abused.
export function sign(email) {
  return createHmac('sha256', process.env.RESEND_API_KEY ?? '').update(email).digest('hex')
}

export function verify(email, token) {
  const a = Buffer.from(sign(email))
  const b = Buffer.from(String(token))
  return a.length === b.length && timingSafeEqual(a, b)
}

export function resend(path, body, method = body ? 'POST' : 'GET') {
  return fetch(`https://api.resend.com${path}`, {
    method,
    headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}`, 'Content-Type': 'application/json' },
    body: body ? JSON.stringify(body) : undefined,
  })
}

export const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
