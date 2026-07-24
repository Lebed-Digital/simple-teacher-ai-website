import { useState } from 'react'

// Replace the placeholder href values here when your social profiles are ready.
const socialLinks = [
  { label: 'TikTok', href: 'https://www.tiktok.com/@simpleteacherai' },
  { label: 'Instagram', href: 'https://www.instagram.com/simple_teacher_ai/' },
  { label: 'YouTube', href: 'https://www.youtube.com/@SimpleTeacherAI' },
  { label: 'Facebook', href: 'https://www.facebook.com/SimpleTeacherAI' },
  { label: 'Substack', href: 'https://simpleteacherai.substack.com/' },
] as const

const resources = [
  { number: '01', title: 'Simple AI prompts', description: 'Simple AI prompts for everyday teacher tasks' },
  { number: '02', title: 'Honest tool reviews', description: 'Honest reviews of tools made for teachers' },
  { number: '03', title: 'Real examples', description: 'Step-by-step examples from a real classroom teacher' },
] as const

const featuredPrompt = {
  eyebrow: 'Start here',
  title: 'Parent email reply helper',
  description: 'Paste a parent email and get three ready-to-send replies to choose from.',
  prompt: `Help me respond to the parent email below. Give me three versions I can choose from:

1. Warm and reassuring
2. Brief and professional
3. More detailed and collaborative

Keep every version respectful and calm. Do not sound defensive. Do not promise anything I cannot guarantee. Keep each version under 150 words.

Parent email:
[PASTE THE EMAIL HERE]`,
} as const

const quickPrompts = [
  {
    title: 'Rough notes into a parent email',
    description: 'Turn a few messy notes into a clear, friendly message home.',
    prompt: `Turn my rough notes below into a clear, friendly parent email. Keep it warm and professional, under 150 words, and easy to read on a phone. Do not add anything I did not say.

My notes:
[PASTE YOUR NOTES HERE]`,
  },
  {
    title: 'Make an email sound less defensive',
    description: 'Keep your points, lose the tone that reads as frustrated.',
    prompt: `Rewrite the email below so it sounds calm, kind, and professional. Remove anything that could read as defensive or frustrated. Keep my main points, but make the tone something a parent would feel good receiving.

My draft:
[PASTE YOUR DRAFT HERE]`,
  },
  {
    title: 'Lesson objective and exit ticket',
    description: 'Get a plain-language objective and a quick check for understanding.',
    prompt: `Create a simple lesson objective and a matching exit ticket for the topic below. Write the objective in plain language, and make the exit ticket three quick questions a student can answer in two minutes.

Topic and grade level:
[TYPE THE TOPIC AND GRADE HERE]`,
  },
  {
    title: 'Simplify directions for students',
    description: 'Rewrite any set of directions into clear, numbered steps.',
    prompt: `Rewrite the directions below so they are clear and easy for my students to follow. Use short steps, simple words, and number each step. Keep it appropriate for the grade level I list.

Directions and grade level:
[PASTE THE DIRECTIONS HERE]`,
  },
] as const

function CopyButton({ text, label, variant = 'default' }: { text: string; label: string; variant?: 'default' | 'primary' }) {
  const [copied, setCopied] = useState(false)

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2000)
    } catch {
      setCopied(false)
    }
  }

  const base = 'inline-flex items-center gap-2 rounded-full text-sm font-bold transition-colors focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[var(--focus)]'
  const styles =
    variant === 'primary'
      ? 'bg-[var(--green)] px-6 py-3 text-white hover:bg-[var(--green-dark)]'
      : 'border-2 border-[var(--green)] px-5 py-2.5 text-[var(--green)] hover:bg-[var(--green)] hover:text-white'

  return (
    <button type="button" onClick={handleCopy} aria-label={`Copy the ${label} prompt`} aria-live="polite" className={`${base} ${styles}`}>
      {copied ? 'Copied!' : 'Copy prompt'}
    </button>
  )
}

function App() {
  return (
    <div className="min-h-screen bg-[var(--cream)] text-[var(--ink)]">
      <a href="#main-content" className="fixed left-4 top-4 z-50 -translate-y-24 rounded-md bg-[var(--green)] px-4 py-3 font-semibold text-white focus:translate-y-0">
        Skip to main content
      </a>

      <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-6 sm:px-8 sm:py-8">
        <a href="#" aria-label="Simple Teacher AI home" className="inline-flex items-center gap-3 rounded-sm font-semibold tracking-[-0.02em] text-[var(--green)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[var(--focus)]">
          <span aria-hidden="true" className="grid size-9 place-items-center rounded-lg bg-[var(--green)] text-sm font-bold text-white">ST</span>
          <span>Simple Teacher AI</span>
        </a>
        <nav aria-label="Primary" className="flex items-center gap-4 sm:gap-6">
          <a href="#prompts" className="rounded-sm text-sm font-bold text-[var(--green)] underline decoration-[var(--yellow)] decoration-2 underline-offset-4 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[var(--focus)]">
            Free prompts
          </a>
          <a href="#social-links" className="rounded-sm text-sm font-bold text-[var(--green)] underline decoration-[var(--yellow)] decoration-2 underline-offset-4 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[var(--focus)]">
            Follow along
          </a>
        </nav>
      </header>

      <main id="main-content">
        <section className="relative overflow-hidden px-5 pb-12 pt-2 sm:px-8 sm:pb-16 sm:pt-3 lg:pt-8">
          <div aria-hidden="true" className="absolute right-[3%] top-0 hidden size-28 rounded-full border-[18px] border-[var(--yellow)] opacity-55 lg:block" />
          <div aria-hidden="true" className="absolute bottom-12 left-[4%] h-16 w-16 rotate-6 rounded-xl bg-[var(--blue)] opacity-50" />
          <div className="relative mx-auto max-w-4xl text-center">
            <p className="mb-6 inline-flex rounded-full border border-[var(--green)]/20 bg-white px-4 py-2 text-sm font-bold uppercase tracking-[0.14em] text-[var(--green)]">Teacher-tested, classroom-minded</p>
            <h1 className="text-balance font-serif text-5xl font-bold leading-[1.02] tracking-[-0.04em] text-[var(--green)] sm:text-7xl lg:text-[5.5rem]">Simple Teacher AI</h1>
            <p className="mx-auto mt-7 max-w-3xl text-balance text-2xl font-semibold leading-snug text-[var(--ink)] sm:text-3xl">Practical AI help for teachers who do not have time to become tech experts.</p>
            <p className="mx-auto mt-7 max-w-xl text-base leading-7 text-[var(--muted)] sm:max-w-2xl sm:text-lg sm:leading-8">I am a classroom teacher learning how to use AI to save time, simplify everyday work, and make teaching a little more manageable. I share the tools, prompts, experiments, and honest lessons that are actually useful in a real classroom.</p>
            <div className="mx-auto mt-10 max-w-3xl rotate-[-1deg] rounded-2xl border-2 border-[var(--green)] bg-[var(--green)] px-6 py-5 text-lg font-bold leading-7 text-white shadow-[6px_6px_0_var(--yellow)] sm:px-10 sm:text-xl">No hype. No complicated tech talk. Just simple, practical ways teachers can use AI.</div>
          </div>
        </section>

        <section className="bg-white px-5 py-20 sm:px-8 sm:py-28" aria-labelledby="resources-heading">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-2xl">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-[var(--blue-dark)]">The useful stuff</p>
              <h2 id="resources-heading" className="mt-3 font-serif text-4xl font-bold tracking-[-0.03em] text-[var(--green)] sm:text-5xl">What You’ll Find Here</h2>
            </div>
            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {resources.map((resource) => (
                <article key={resource.number} className="rounded-2xl border border-[var(--border)] bg-[var(--paper)] p-6 sm:p-8">
                  <span className="inline-flex rounded-full bg-[var(--blue-light)] px-3 py-1 text-sm font-bold text-[var(--blue-dark)]">{resource.number}</span>
                  <h3 className="mt-8 text-xl font-bold tracking-[-0.02em] text-[var(--green)]">{resource.title}</h3>
                  <p className="mt-3 text-base leading-7 text-[var(--muted)]">{resource.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="prompts" className="scroll-mt-8 px-5 py-20 sm:px-8 sm:py-24" aria-labelledby="prompts-heading">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-2xl">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-[var(--blue-dark)]">Try it right now</p>
              <h2 id="prompts-heading" className="mt-3 font-serif text-4xl font-bold tracking-[-0.03em] text-[var(--green)] sm:text-5xl">5 copy-and-paste prompts that save teachers time</h2>
              <p className="mt-4 text-lg leading-8 text-[var(--muted)]">Copy a prompt, paste it into ChatGPT, Claude, or Gemini, then add your own details. Each one is built to help in under a minute.</p>
            </div>

            <aside className="mt-8 rounded-2xl border border-[var(--blue)] bg-[var(--blue-light)] p-6 sm:p-7" aria-label="Privacy reminder">
              <p className="text-sm font-bold uppercase tracking-[0.14em] text-[var(--blue-dark)]">Read this first: a quick privacy note</p>
              <p className="mt-3 text-base leading-7 text-[var(--ink)]">Tools like Claude for Teachers add extra K-12 privacy protections and do not use your content to train the AI. Even so, your school and district policies still apply. When you can, remove student names and other identifying details before pasting anything into an AI tool. The AI does not need a real name to help you, and you can add it back afterward.</p>
            </aside>

            <article className="mt-6 rounded-3xl border-2 border-[var(--green)] bg-white p-7 shadow-[6px_6px_0_var(--yellow)] sm:p-10">
              <span className="inline-flex rounded-full bg-[var(--green)] px-3 py-1 text-sm font-bold uppercase tracking-[0.12em] text-white">{featuredPrompt.eyebrow}</span>
              <h3 className="mt-5 font-serif text-2xl font-bold tracking-[-0.02em] text-[var(--green)] sm:text-3xl">{featuredPrompt.title}</h3>
              <p className="mt-3 text-base leading-7 text-[var(--muted)] sm:text-lg">{featuredPrompt.description}</p>
              <pre className="mt-6 overflow-x-auto whitespace-pre-wrap rounded-2xl border border-[var(--border)] bg-[var(--paper)] p-5 font-sans text-sm leading-7 text-[var(--ink)] sm:text-base">{featuredPrompt.prompt}</pre>
              <div className="mt-5">
                <CopyButton text={featuredPrompt.prompt} label={featuredPrompt.title} variant="primary" />
              </div>
            </article>

            <div className="mt-6 grid gap-5 md:grid-cols-2">
              {quickPrompts.map((item) => (
                <article key={item.title} className="flex flex-col rounded-2xl border border-[var(--border)] bg-white p-6 sm:p-7">
                  <h3 className="text-xl font-bold tracking-[-0.02em] text-[var(--green)]">{item.title}</h3>
                  <p className="mt-2 text-base leading-7 text-[var(--muted)]">{item.description}</p>
                  <pre className="mt-5 overflow-x-auto whitespace-pre-wrap rounded-xl border border-[var(--border)] bg-[var(--paper)] p-4 font-sans text-sm leading-6 text-[var(--ink)]">{item.prompt}</pre>
                  <div className="mt-4">
                    <CopyButton text={item.prompt} label={item.title} />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-5 py-20 sm:px-8 sm:py-24" aria-labelledby="coming-soon-heading">
          <div className="mx-auto grid max-w-6xl gap-10 rounded-3xl border border-[var(--border)] bg-[var(--yellow-light)] p-7 sm:p-12 md:grid-cols-[1fr_auto] md:items-center">
            <div className="max-w-2xl">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-[var(--green)]">Just getting started</p>
              <h2 id="coming-soon-heading" className="mt-3 font-serif text-3xl font-bold tracking-[-0.02em] text-[var(--green)] sm:text-4xl">More is coming soon</h2>
              <p className="mt-4 text-lg leading-8 text-[var(--muted)]">More resources, tutorials, and teacher-friendly AI guides are coming soon.</p>
            </div>
            <div aria-hidden="true" className="grid size-24 rotate-3 place-items-center rounded-2xl border-2 border-[var(--green)] bg-white font-serif text-4xl font-bold text-[var(--green)] shadow-[5px_5px_0_var(--blue)]">A+</div>
          </div>
        </section>

        <section id="social-links" className="scroll-mt-8 bg-[var(--green)] px-5 py-16 text-white sm:px-8 sm:py-20" aria-labelledby="social-heading">
          <div className="mx-auto max-w-6xl text-center">
            <h2 id="social-heading" className="font-serif text-3xl font-bold sm:text-4xl">Follow Simple Teacher AI</h2>
            <p className="mx-auto mt-3 max-w-xl text-base leading-7 text-white/80">Find practical ideas, honest experiments, and teacher-friendly tips wherever you like to scroll.</p>
            <nav aria-label="Social media" className="mt-8 flex flex-wrap justify-center gap-3">
              {socialLinks.map((social) => (
                <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/35 bg-white/10 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-white hover:text-[var(--green)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[var(--focus-light)]">{social.label}</a>
              ))}
            </nav>
          </div>
        </section>
      </main>

      <footer className="bg-[var(--green-dark)] px-5 py-8 text-center text-sm leading-6 text-white/75 sm:px-8">
        <p>© 2026 Simple Teacher AI</p>
        <p>Created by a teacher, for teachers.</p>
      </footer>
    </div>
  )
}

export default App
