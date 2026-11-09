// Turns the tested use-case batches in content/ideas/*.md into site data.
// Writes:
//   src/ideas/ideas.json   (the /ideas pages import this)
//   public/ideas.json      (public feed so AI assistants can read the library)
//   the IDEAS sections of public/llms.txt and public/sitemap.xml
// Runs automatically before `npm run dev` and `npm run build`.
// To add a batch: drop use-cases-batch-N.md into content/ideas/ as batch-N.md.
import { readFileSync, writeFileSync, readdirSync } from 'node:fs'
import { marked } from 'marked'

const SITE = 'https://www.simpleteacherai.com'
const root = new URL('..', import.meta.url)
const read = (p) => readFileSync(new URL(p, root), 'utf8')
const write = (p, s) => writeFileSync(new URL(p, root), s)

const STOP = new Set(['a', 'an', 'the', 'to', 'of', 'in', 'for', 'on', 'and', 'or', 'with', 'it', 'its', 'that', 'by', 'at'])
const slugify = (s) => {
  const words = s.toLowerCase().replace(/['’"]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').split('-').slice(0, 9)
  while (words.length > 3 && STOP.has(words.at(-1))) words.pop()
  return words.join('-')
}

const plain = (md) => md.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/\*\*|`/g, '').replace(/\s+/g, ' ').trim()

function status(line) {
  if (/^\*\*Not tested yet/.test(line)) return 'untested'
  if (/worked first try/.test(line)) return 'first-try'
  if (/works after a fix/.test(line)) return 'fixed'
  return 'edit'
}

function parseCard(lines) {
  const title = lines[0].replace(/^### \d+\.\s*/, '').trim()
  const number = Number(lines[0].match(/^### (\d+)/)[1])
  const meta = {}
  for (const part of lines[1].split(' · ')) {
    const m = part.match(/\*\*(.+?):\*\*\s*(.*)/)
    if (m) meta[m[1].toLowerCase()] = m[2].trim()
  }

  // Blank-line separated blocks after the meta line.
  const blocks = lines.slice(2).join('\n').split(/\n\s*\n/).map((b) => b.trim()).filter(Boolean)
  const segments = []
  let test = null
  let sourcesMd = ''

  for (const block of blocks) {
    if (/^\*\*(We tested it|Not tested yet)/.test(block)) {
      const first = block.split('\n')[0]
      test = { status: status(first), md: block }
      continue
    }
    if (test && /^- /.test(block)) { test.md += '\n' + block; continue }
    if (/^\*\*Sources?:\*\*/.test(block)) { sourcesMd = block.replace(/^\*\*Sources?:\*\*\s*/, ''); continue }

    const text = []
    const quote = []
    for (const line of block.split('\n')) (line.startsWith('>') ? quote : text).push(line.replace(/^>\s?/, ''))
    let label = 'Prompt'
    const last = text.at(-1)?.match(/^\*\*((?:Prompt|Instructions)[^*]*?):\*\*$/)
    if (last) { label = last[1]; text.pop() }
    if (text.length) segments.push({ type: 'note', md: text.join('\n') })
    if (quote.length) segments.push({ type: 'prompt', label: label.replace(/^Prompt$/, 'The prompt'), text: quote.join('\n').trim() })
  }

  return { number, title, meta, segments, test, sourcesMd }
}

function parseBatch(file, batch) {
  const raw = read(`content/ideas/${file}`)
  const date = raw.match(/Researched (\d{4}-\d{2}-\d{2})/)?.[1] ?? ''
  const cards = []
  let cur = null
  for (const line of raw.split(/\r?\n/)) {
    if (line.startsWith('### ')) { cur = [line]; cards.push(cur); continue }
    if (/^(## |---\s*$)/.test(line)) { cur = null; continue }
    cur?.push(line)
  }
  return cards.map((c) => ({ ...parseCard(c), batch, date }))
}

const files = readdirSync(new URL('content/ideas/', root)).filter((f) => /^batch-\d+\.md$/.test(f))
  .sort((a, b) => parseInt(a.slice(6)) - parseInt(b.slice(6)))
const cards = files.flatMap((f) => parseBatch(f, parseInt(f.slice(6))))

// Slugs, unique across batches.
const seen = new Set()
for (const c of cards) {
  let slug = c.meta.slug ?? slugify(c.title)
  while (seen.has(slug)) slug += '-2'
  seen.add(slug)
  c.slug = slug
}

// Untested cards stay in the markdown but are held off the site until they get a test result.
const published = (c) => c.test && c.test.status !== 'untested'

// "card 18" inside a batch points at that batch's card 18: turn it into a link with the real title.
// A "(card N)" aside pointing at a held-back card is dropped, so nothing links to a missing page.
const linkCards = (md, batch) =>
  md.replace(/(\s*\()?\bcard (\d+)\b(\))?/g, (m, open, n, close) => {
    const t = cards.find((c) => c.batch === batch && c.number === Number(n))
    if (!t) return m
    if (!published(t)) {
      if (open && close) return ''
      throw new Error(`Batch ${batch} links to held-back card ${n} outside "(card N)": reword it`)
    }
    return `${open ?? ''}[${t.title}](/ideas/${t.slug})${close ?? ''}`
  })
const html = (md, batch) => marked.parse(linkCards(md, batch), { async: false }).trim()

const VERDICT = {
  'first-try': 'Worked first try',
  fixed: 'Works after a fix',
  edit: 'Works, needs your edit',
  untested: 'Not tested yet',
}

const held = cards.filter((c) => !published(c))
const ideas = cards.filter(published).map((c) => {
  const prompt = c.segments.find((s) => s.type === 'prompt')?.text ?? ''
  const why = c.segments.find((s) => s.type === 'note' && /^\*\*(Why it works|What it is|What changed)/.test(s.md))
  const testFirst = c.test?.md.split('\n')[0] ?? ''
  return {
    id: `b${c.batch}-${String(c.number).padStart(2, '0')}`,
    slug: c.slug,
    batch: c.batch,
    date: c.date,
    title: c.title,
    category: c.meta.category ?? 'Other',
    grades: c.meta.grades ?? '',
    tool: c.meta.tool ?? '',
    time: c.meta['takes about'] ?? '',
    status: c.test?.status ?? 'untested',
    verdict: VERDICT[c.test?.status ?? 'untested'],
    verdictDetail: plain(testFirst.replace(/^\*\*(We tested it|Not tested yet):?\s*/, '').replace(/\*\*.*$/, '').replace(/\.$/, '')),
    summary: plain((why?.md ?? c.segments.find((s) => s.type === 'note')?.md ?? '').replace(/^\*\*[^*]+:\*\*\s*/, '')).split(/(?<=[.!?])\s/).reduce((acc, sent) => (acc.length >= 70 ? acc : `${acc} ${sent}`.trim()), ''),
    prompt,
    segments: c.segments.map((s) => (s.type === 'note' ? { type: 'note', html: html(s.md, c.batch) } : s)),
    testHtml: c.test ? html(c.test.md.replace(/^\*\*(We tested it|Not tested yet)[^\n]*?\*\*\s*/, ''), c.batch) : '',
    sourcesHtml: html(c.sourcesMd, c.batch),
    sources: [...c.sourcesMd.matchAll(/\[([^\]]+)\]\(([^)]+)\)/g)].map((m) => ({ title: m[1], url: m[2] })),
  }
})

// Sanity checks: a broken parse should fail the build, not ship empty cards.
for (const i of ideas) {
  if (!i.title || !i.category || !i.segments.length) throw new Error(`Bad card parse: ${i.id} ${i.title}`)
  if (JSON.stringify(i).includes('—')) throw new Error(`Em dash in ${i.id}`)
}

write('src/ideas/ideas.json', JSON.stringify(ideas))

const feed = {
  name: 'Simple Teacher AI: tested AI ideas for teachers',
  home_page_url: `${SITE}/ideas`,
  description: 'Practical AI use cases for K-12 teachers. Each prompt was run on a sample classroom and checked by hand. The verdict says what happened.',
  updated: ideas.map((i) => i.date).sort().at(-1),
  privacy: 'Never put student names or identifying details into an AI tool. Use your district-approved tool.',
  items: ideas.map((i) => ({
    url: `${SITE}/ideas/${i.slug}`, title: i.title, category: i.category, grades: i.grades, tool: i.tool, takes_about: i.time,
    tested: i.status !== 'untested', verdict: i.verdict, verdict_detail: i.verdictDetail, prompt: i.prompt || null,
    why_it_works: i.summary, sources: i.sources, date: i.date,
  })),
}
write('public/ideas.json', JSON.stringify(feed, null, 2) + '\n')

const between = (text, tag, body) => {
  const re = new RegExp(`(<!-- IDEAS:START -->|# IDEAS:START)[\\s\\S]*?(<!-- IDEAS:END -->|# IDEAS:END)`)
  if (!re.test(text)) throw new Error(`IDEAS markers missing in ${tag}`)
  return text.replace(re, (_, a, b) => `${a}\n${body}\n${b}`)
}

write('public/llms.txt', between(read('public/llms.txt'), 'llms.txt', [
  '## Tested AI ideas for teachers',
  '',
  `Machine-readable feed with every prompt and test verdict: ${SITE}/ideas.json`,
  '',
  ...ideas.map((i) => `- [${i.title}](${SITE}/ideas/${i.slug}): ${i.category}, ${i.grades}. ${i.verdict}.`),
].join('\n')))

write('public/sitemap.xml', between(read('public/sitemap.xml'), 'sitemap', [
  `  <url>\n    <loc>${SITE}/ideas</loc>\n  </url>`,
  ...ideas.map((i) => `  <url>\n    <loc>${SITE}/ideas/${i.slug}</loc>\n  </url>`),
].join('\n')))

const tested = ideas.filter((i) => i.status !== 'untested').length
console.log(`build-ideas: ${ideas.length} ideas (${tested} tested) from ${files.join(', ')}; ${held.length} untested held back`)
