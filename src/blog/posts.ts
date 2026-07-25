export type BlogBlock =
  | { type: 'p'; text: string }
  | { type: 'h2'; text: string }
  | { type: 'list'; items: string[] }

export type FaqItem = { q: string; a: string }

export type BlogPost = {
  slug: string
  title: string
  subtitle: string
  excerpt: string
  date: string
  body: BlogBlock[]
  faq: FaqItem[]
}

export const posts: BlogPost[] = [
  {
    slug: 'how-i-actually-use-ai-as-a-teacher',
    title: 'How I Actually Use AI as a Teacher',
    subtitle: 'No hype, just the parts that save me real time on a Sunday night.',
    excerpt: 'A plain rundown of what AI actually saves me time on as a classroom teacher, and what I still do myself by hand.',
    date: '2026-07-25',
    body: [
      { type: 'p', text: 'Last Sunday I had a stack of directions to rewrite for a sub, twelve parent emails I had been putting off, and a set of exit tickets due Monday morning. I opened ChatGPT for the first one, mostly out of laziness, and by the time I closed my laptop I had done all three in under forty minutes. That is the honest version of how AI fits into my teaching life. It gets me through the boring parts faster so I have more time for the parts that actually need me.' },
      { type: 'p', text: 'I want to be specific here, because most of what I read about AI in education is either breathless hype or vague warnings, and neither one tells you what to actually do on a Tuesday afternoon with twenty minutes before your next class.' },
      { type: 'h2', text: 'Where it actually helps' },
      { type: 'p', text: 'Parent emails are the clearest win. I write my notes the way I would say them out loud, rough and a little blunt, and ask AI to turn them into something calm and professional. I still read every word before I send it. But going from a blank cursor to a first draft is the part that used to eat my planning period, and now it takes about ninety seconds.' },
      { type: 'p', text: 'Rewriting directions for different reading levels is the second one. I teach the same skill to a room with a five-year reading level spread, and writing three versions of every instruction sheet by hand was never going to happen consistently. Now I write it once at my own level and ask for a simplified version. I still adjust it, because AI does not know my students, but it gets me a usable draft instead of a blank page.' },
      { type: 'p', text: 'Exit tickets and quick comprehension checks are the third. When I finish a lesson and realize I have nothing ready to check for understanding, I can describe the lesson in two sentences and get three solid questions back. I edit them to match what I actually taught, but the structure is already there.' },
      { type: 'h2', text: 'Where it does not help' },
      { type: 'p', text: 'Grading anything that requires judgment is off the table for me. Essays, open response answers, anything where the value is in understanding a specific kid\'s thinking, I do myself. AI feedback on writing tends to be generic in a way my students notice immediately, and grading is one of the few places where my attention is actually the point.' },
      { type: 'p', text: 'I also do not use it for IEP goals or anything tied to a specific student\'s documented needs. Those documents require real judgment about a real kid, and getting them wrong has consequences that a quick AI draft is not worth risking.' },
      { type: 'p', text: 'And I do not use it to plan out a full unit from scratch. I have tried, and what comes back is a generic version of a lesson sequence I could have written myself, minus the parts that make it fit my actual students and my actual classroom.' },
      { type: 'h2', text: 'The pattern I have landed on' },
      { type: 'p', text: 'The tasks that work are the ones with a clear right answer to check against: does this email sound calm, does this exit ticket match the lesson, is this instruction sheet actually simpler. The tasks that do not work are the ones where the answer depends entirely on knowing a specific student. That split has held up for me for months now, and it is the filter I use before I open any AI tool: am I asking it to do something I could check in ten seconds, or am I asking it to know something only I know.' },
      { type: 'p', text: 'If you are starting from zero, pick one task you dread every week and try it there first. For me that was parent emails. For you it might be something else entirely.' },
    ],
    faq: [
      { q: 'Do I need a paid AI tool to start?', a: 'No. Free versions of ChatGPT, Claude, or Gemini handle everything described here. Paid tiers mostly buy you speed and higher usage limits, not better results for tasks like these.' },
      { q: 'Which AI tool is best for teachers?', a: 'Any of the major ones work for the tasks above. If student information is involved at all, use a tool with clear K-12 data protections, like Claude for Teachers, and check your district policy first.' },
      { q: 'How much time does this actually save?', a: 'For me, drafting parent emails and exit tickets, roughly two to three hours a week. Your number depends on how much of your week is spent on repetitive writing tasks versus grading or planning.' },
    ],
  },
  {
    slug: 'is-it-okay-for-teachers-to-use-ai-lesson-plans',
    title: 'Is It Okay for Teachers to Use AI to Write Lesson Plans?',
    subtitle: 'The guilt is common. Here is how I think about where the line actually is.',
    excerpt: 'A practical answer to a question a lot of teachers feel weird asking out loud: is using AI for lesson plans actually okay?',
    date: '2026-07-25',
    body: [
      { type: 'p', text: 'A teacher friend asked me this over text last month, and then immediately followed it with "I feel weird even asking." That reaction is common. There is a quiet guilt a lot of teachers carry around using AI for planning, like it means you are cutting a corner you should not be cutting. I do not think that guilt is warranted, but I do think the question deserves a real answer instead of a reassuring one.' },
      { type: 'h2', text: 'What the guilt is actually about' },
      { type: 'p', text: 'Lesson planning got tangled up with professional identity a long time ago. If you write every plan from scratch, that used to be a proxy for how much you cared. But that proxy never actually measured what mattered, which is whether the lesson works for the kids in front of you. A beautifully handwritten plan that misses your students is worse than a rough AI draft you actually adapt to fit them.' },
      { type: 'p', text: 'What actually matters is whether the plan that ends up in front of your students reflects your judgment about what they need, not whether AI wrote the first draft.' },
      { type: 'h2', text: 'A concrete before and after' },
      { type: 'p', text: 'Here is what that looks like in practice. I asked for a lesson objective and warm-up on inference for a fourth grade reading group. The first draft was fine but generic: read a short passage, answer three questions, move on. I knew that would not hold my most easily distracted group, so I swapped the passage for one about a topic I knew they cared about that week, and changed the warm-up into a quick paired discussion instead of silent reading. The bones of the plan came from AI. The part that made it actually work came from me knowing that specific group of nine-year-olds.' },
      { type: 'p', text: 'That is the pattern I would defend to any administrator: AI for the first draft, my judgment for the version that actually gets taught.' },
      { type: 'h2', text: 'Where I would not use it' },
      { type: 'p', text: 'I do not use AI-generated plans as final for anything tied to a formal observation, an IEP-driven lesson, or content I am not confident I could evaluate myself. If I cannot tell whether the output is actually good, I should not be the one deciding to use it. The point is not outsourcing judgment I am supposed to be providing, regardless of what tool wrote the first draft.' },
      { type: 'h2', text: 'Check your district policy first' },
      { type: 'p', text: 'Some districts have specific language about AI use in instructional materials, and a few restrict which tools you can use with any student-related content. That policy question is separate from the ethics question, and it is worth five minutes to check before you build a habit around a tool your district does not allow.' },
      { type: 'p', text: 'If your district is silent on it, which many still are, the standard I would use is simple: would you be comfortable telling your principal exactly how you used it. If the answer is yes, you are probably fine.' },
    ],
    faq: [
      { q: 'Is using AI for lesson plans considered cheating?', a: 'No professional standard treats it that way. Lesson plans are working documents meant to serve your students, not a test of your writing stamina. Using AI for a first draft and then adapting it with your own judgment is a normal professional workflow, similar to using a curriculum guide or a colleague\'s shared plan.' },
      { q: 'Will administrators know or care if I use AI for planning?', a: 'Most care about whether the lesson works in the room, not how the draft was produced. If you are ever asked directly, being able to explain how you adapted it for your students is the answer that matters.' },
      { q: 'Can AI replace a curriculum or pacing guide?', a: 'No. AI is useful for drafting individual lessons or activities, but it does not know your standards, pacing calendar, or long-term scope and sequence. Use your curriculum as the source of truth and AI as a drafting tool within it.' },
    ],
  },
  {
    slug: 'ai-privacy-mistake-student-names',
    title: 'The AI Privacy Mistake Teachers Keep Making With Student Names',
    subtitle: 'It is an easy habit to fall into, and an easy one to fix.',
    excerpt: 'A common and easy-to-fix privacy mistake teachers make when pasting student information into AI tools, and what to do instead.',
    date: '2026-07-25',
    body: [
      { type: 'p', text: 'I almost made this mistake myself. I had a rough draft of behavior notes for a student meeting, pasted the whole thing into an AI tool to clean up the wording, and hit enter before I noticed the student\'s full name was sitting right there in the first line, along with details about a specific incident. Nothing bad happened. But it made me stop and think about how easy that was to do without thinking twice.' },
      { type: 'p', text: 'That is the mistake I see most often, and I have made it myself: pasting real student names and identifying details into an AI tool out of habit, because the notes already had the name in them and removing it felt like an extra step.' },
      { type: 'h2', text: 'Why it matters' },
      { type: 'p', text: 'Most general AI tools are not built with K-12 student data protections by default. Depending on the tool and its settings, your input can be stored, reviewed, or in some cases used to improve the model. Student names attached to behavior notes, grades, or accommodations are exactly the kind of information FERPA is meant to protect, and district policies almost always cover this even when they do not mention AI by name specifically.' },
      { type: 'p', text: 'I am not assuming the worst of any AI company here. The same basic rule you already follow with any other tool applies: do not put sensitive student information somewhere it does not need to be.' },
      { type: 'h2', text: 'The fix takes about five seconds' },
      { type: 'p', text: 'Before you paste anything into an AI tool, swap the student\'s real name for something generic. I use "the student" or a placeholder like "Student A." You can add the real name back yourself once you have the finished draft in front of you. The AI does not need a real name to help you rewrite a paragraph or reorganize your notes, it only needs the content.' },
      { type: 'p', text: 'The same goes for parent names, other identifying details like a specific diagnosis or family situation, and anything from an IEP or 504 plan. Strip those out, get your draft, and put the specifics back in afterward.' },
      { type: 'h2', text: 'Tools built with this in mind' },
      { type: 'p', text: 'Some tools, like Claude for Teachers, add extra K-12 privacy protections and do not use your content to train the underlying model. That is a meaningful difference from a general consumer AI account. But even with those tools, your school and district policies still apply, and the habit of removing names before pasting is worth keeping regardless of which tool you use.' },
      { type: 'p', text: 'Building that one habit, remove the name before you paste, closes most of the actual risk without slowing you down in any way that matters.' },
    ],
    faq: [
      { q: 'Is it against the law to use AI with student information?', a: 'It depends on the tool, the data, and your district policy, not on AI use in general. The safest approach is to remove student names and identifying details before pasting anything into an AI tool, regardless of what the law technically requires in your state.' },
      { q: 'What counts as identifying information I should remove?', a: 'Full names, and anything specific enough to point back to one student when combined with a name, such as a rare diagnosis, a specific family situation, or an exact incident date paired with a class period.' },
      { q: 'Does using a placeholder name actually work for getting good AI help?', a: 'Yes. AI tools rewrite based on content and context, not on knowing a real identity. A placeholder like "the student" produces the same quality of help as a real name would.' },
    ],
  },
]

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((post) => post.slug === slug)
}
