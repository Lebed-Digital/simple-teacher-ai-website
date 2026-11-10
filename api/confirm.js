// Step 2 of signup: the link in the confirmation email lands here and adds the person to the Newsletter segment.
import { EMAIL_RE, SEGMENT_NAME, resend, verify } from './_lib.js'

const page = (title, message, status = 200) =>
  new Response(
    `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>${title} | Simple Teacher AI</title><meta name="robots" content="noindex"></head>
<body style="margin:0;font-family:Arial,sans-serif;background:#fafaf8;color:#1e1d26">
<main style="max-width:520px;margin:12vh auto;padding:0 16px;text-align:center">
<h1 style="font-family:Georgia,serif;font-size:2.4rem;color:#14131a;margin:0 0 16px">${title}</h1>
<p style="font-size:1.1rem;line-height:1.6;color:#56555f">${message}</p>
<p style="margin-top:32px"><a href="/ideas" style="background:#2544d8;color:#fff;text-decoration:none;font-weight:bold;padding:14px 24px;border-radius:10px;display:inline-block">Browse the tested ideas</a></p>
</main></body></html>`,
    { status, headers: { 'Content-Type': 'text/html; charset=utf-8' } },
  )

async function segmentId() {
  const list = await resend('/segments').then((r) => r.json())
  const found = list.data?.find((s) => s.name === SEGMENT_NAME)
  if (found) return found.id
  const created = await resend('/segments', { name: SEGMENT_NAME }).then((r) => r.json())
  return created.id
}

export async function GET(request) {
  const url = new URL(request.url)
  const email = String(url.searchParams.get('email') ?? '').trim().toLowerCase()
  if (!EMAIL_RE.test(email) || !verify(email, url.searchParams.get('token') ?? '')) {
    return page('That link didn’t work', 'Please go back to the site and sign up again. It only takes a second.', 400)
  }

  try {
    const segment = await segmentId()
    if (!segment) throw new Error('no segment id')
    const created = await resend('/contacts', { email, unsubscribed: false, segments: [{ id: segment }] })
    if (!created.ok) {
      // Already a contact (signed up before, or unsubscribed and came back): resubscribe and make sure they're in the segment.
      const updated = await resend(`/contacts/${encodeURIComponent(email)}`, { unsubscribed: false }, 'PATCH')
      if (!updated.ok) throw new Error(`create ${created.status} ${await created.text()} / update ${updated.status} ${await updated.text()}`)
      await resend(`/contacts/${encodeURIComponent(email)}/segments/${segment}`, {})
    }
  } catch (err) {
    console.error('confirm failed', err)
    return page('Something went wrong', 'Your link is fine, but we hit a snag saving it. Please click the link in your email again in a minute.', 502)
  }

  return page(
    'You’re in!',
    'Your first email arrives next week. So it doesn’t land in spam, add <strong>greg@simpleteacherai.com</strong> to your contacts.',
  )
}
