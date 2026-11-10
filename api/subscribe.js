// Step 1 of signup: email the person a confirmation link. They are not added to the list until they click it.
import { EMAIL_RE, FROM, resend, sign } from './_lib.js'

const json = (data, status = 200) => Response.json(data, { status })

export async function POST(request) {
  let body
  try {
    body = await request.json()
  } catch {
    return json({ error: 'Something went wrong. Please try again.' }, 400)
  }

  // Hidden "website" field: people never see it, bots fill it in. Pretend it worked.
  if (body.website) return json({ ok: true })

  const email = String(body.email ?? '').trim().toLowerCase()
  if (email.length > 254 || !EMAIL_RE.test(email)) return json({ error: 'Please enter a valid email address.' }, 400)

  const link = `${new URL(request.url).origin}/api/confirm?email=${encodeURIComponent(email)}&token=${sign(email)}`
  const res = await resend('/emails', {
    from: FROM,
    to: [email],
    reply_to: 'greg@simpleteacherai.com',
    subject: 'Confirm your Simple Teacher AI signup',
    html: `<div style="font-family:Arial,sans-serif;font-size:16px;line-height:1.6;color:#1e1d26;max-width:520px">
<p>Hi there,</p>
<p>Click the button to confirm you want the Simple Teacher AI email: new AI ideas for your classroom, tested before they reach you. One email a week.</p>
<p style="margin:28px 0"><a href="${link}" style="background:#2544d8;color:#ffffff;text-decoration:none;font-weight:bold;padding:14px 24px;border-radius:10px;display:inline-block">Yes, sign me up</a></p>
<p>If you didn't ask for this, just ignore this email and you won't hear from us.</p>
<p>Greg<br>Simple Teacher AI</p>
</div>`,
    text: `Hi there,\n\nConfirm you want the Simple Teacher AI email (new AI ideas for your classroom, tested before they reach you, one email a week):\n\n${link}\n\nIf you didn't ask for this, just ignore this email and you won't hear from us.\n\nGreg\nSimple Teacher AI`,
  })

  if (!res.ok) {
    console.error('confirmation email failed', res.status, await res.text())
    return json({ error: 'Something went wrong on our end. Please try again in a minute.' }, 502)
  }
  return json({ ok: true })
}
