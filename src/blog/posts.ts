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
  {
    slug: 'ai-prompt-for-report-card-comments',
    title: 'The Only AI Prompt I Use for Report Card Comments',
    subtitle: 'Thirty comments used to take me an entire weekend. Now it is one evening.',
    excerpt: 'The exact prompt and process I use to turn a page of quick notes into report card comments that still sound like me.',
    date: '2026-07-26',
    body: [
      { type: 'p', text: 'Report card comments used to wreck an entire weekend for me. Thirty students, a few sentences each, and somehow every comment still had to sound specific instead of like a form letter with a name swapped in. I would sit down Saturday morning and still be typing Sunday night, mostly because I kept trying to write finished sentences from scratch instead of starting from notes.' },
      { type: 'p', text: 'The fix that actually worked was flipping the order. I stopped trying to write comments and started writing notes, then let AI turn the notes into comments. That one change cut the whole process down to about one evening.' },
      { type: 'h2', text: 'What I actually do' },
      { type: 'p', text: 'For each student, I jot down three or four quick fragments, not full sentences: "strong in group discussion, still rushing through math checks, needs reminders to reread directions, great with younger reading buddies." That takes maybe thirty seconds per student while I still have the class fresh in my head.' },
      { type: 'p', text: 'Then I paste those fragments into AI with this prompt: "Turn these notes into a report card comment for a [grade level] student. Keep it warm and specific, about three sentences, and do not add anything I did not mention. Match a tone a parent would find encouraging but honest." I paste one student\'s fragments at a time so the comment stays tied to what I actually observed.' },
      { type: 'p', text: 'I read every comment before it goes anywhere near a report card. Sometimes the phrasing is a little generic and I tighten it. Sometimes it nails something I would have struggled to word myself. Either way, the fragments came from me, so the comment is still built on what I actually noticed about that kid.' },
      { type: 'h2', text: 'Why this works better than writing from scratch' },
      { type: 'p', text: 'Writing a comment from a blank page means holding the whole shape of the sentence in your head while also trying to remember specific details about a student you taught alongside twenty-nine others. That is two hard tasks at once. Splitting it into notes first, then wording second, means I only do one hard thing at a time. The noticing happens while the class is fresh. The wording happens later, when I am tired and would otherwise be staring at a cursor.' },
      { type: 'h2', text: 'Where I still slow down' },
      { type: 'p', text: 'For any student with something sensitive going on, a hard family situation, a behavior plan, an IEP goal, I write that comment myself from the start. Those need judgment about tone and what is appropriate to include that I do not want to hand off, even for a first draft. And I never use a real last name in the prompt itself, since I do not need it there to get a good comment back.' },
      { type: 'p', text: 'For everyone else, I turn the fragments into a comment, read it once, and move on to the next student. What used to be a lost weekend is now something I finish before dinner.' },
    ],
    faq: [
      { q: 'Will AI-written report card comments sound generic?', a: 'Only if you skip the notes step and ask for a comment with no details. Feeding it specific fragments about what the student actually did keeps the comment grounded and specific instead of generic.' },
      { q: 'Is it okay to use AI for report card comments?', a: 'Using it to turn your own observations into finished sentences is a normal drafting workflow, similar to using a comment bank. Always read and edit before it goes on an official record, and check your district policy if you are unsure.' },
      { q: 'How do I keep every comment from sounding the same?', a: 'Write different fragments for each student instead of reusing the same few phrases, and process one student at a time rather than pasting a whole class list at once.' },
    ],
  },
  {
    slug: 'i-tried-ai-grading-a-quiz',
    title: 'What Happened When I Actually Let AI Grade a Quiz',
    subtitle: 'I wanted to know if it would save time or just make more work checking its work.',
    excerpt: 'An honest experiment: I gave AI a real quiz to grade and compared it against my own grading, mistakes included.',
    date: '2026-07-26',
    body: [
      { type: 'p', text: 'I kept seeing people claim AI could grade a stack of quizzes in seconds, so I decided to actually test it instead of taking that on faith. I picked a twelve-question quiz from a recent unit, mixed multiple choice and short answer, and ran all twenty-eight student responses through AI to see what would happen. Here is exactly what I found, mistakes and all.' },
      { type: 'h2', text: 'The multiple choice questions' },
      { type: 'p', text: 'This part worked well. I gave it the answer key and the student responses, and it scored the eight multiple choice questions correctly across all twenty-eight quizzes. I spot checked half of them by hand and found zero errors. For anything with one clear right answer, this genuinely saved time, roughly twenty minutes I did not have to spend bubbling through an answer key myself.' },
      { type: 'h2', text: 'The short answer questions' },
      { type: 'p', text: 'This is where it got messier. Four questions asked students to explain their reasoning in a sentence or two. I gave AI a description of what a full-credit answer needed to include and asked it to score each response.' },
      { type: 'p', text: 'It caught the clear cases fine, both the strong answers and the completely blank or off-topic ones. But it struggled with partial credit. One student wrote an answer that was mostly right but used slightly different vocabulary than my example, and AI marked it wrong. Another student\'s answer was vague but happened to include the right keywords, and AI gave it full credit even though I could tell from the wording that the student had not actually understood the concept. I found six scoring changes I needed to make by hand across the four short answer questions, out of a possible one hundred twelve responses.' },
      { type: 'p', text: 'Six corrections is not nothing, but it is also not the twenty-eight quizzes worth of grading I would have done from scratch. The multiple choice section was genuinely faster. The short answer section needed almost as much attention as grading it myself, just in the form of checking instead of scoring.' },
      { type: 'h2', text: 'What I would actually do again' },
      { type: 'p', text: 'I would use AI for objective sections without hesitation, multiple choice, matching, fill in the blank with a single correct answer. For anything requiring judgment about whether a student\'s reasoning actually holds up, I would rather grade it myself and use the time I saved on multiple choice to do it well, instead of grading twice, once by AI and once by me checking its work. Worth using on the sections with clear answers, not worth trusting blind on the ones that need judgment.' },
    ],
    faq: [
      { q: 'Can AI accurately grade short answer questions?', a: 'In this test, it handled clearly right or clearly wrong answers well but struggled with partial credit and answers using different but valid wording. Plan to review short answer scoring by hand rather than trusting it fully.' },
      { q: 'Is AI grading reliable for multiple choice tests?', a: 'Yes, for objective questions with one correct answer, AI grading was accurate in this test. It is a reasonable time saver for that type of content.' },
      { q: 'Should I tell students their quiz was graded with AI assistance?', a: 'There is no universal rule, but many teachers choose to be transparent about it, especially since final scores should always be reviewed by a human before they count.' },
    ],
  },
  {
    slug: 'free-vs-paid-ai-tools-for-teachers',
    title: 'Free vs Paid AI Tools for Teachers: What Actually Matters',
    subtitle: 'I use both. Here is what the upgrade actually buys you.',
    excerpt: 'A practical, honest comparison of what you get from free AI tools versus paid ones, from a teacher who uses both.',
    date: '2026-07-26',
    body: [
      { type: 'p', text: 'A teacher in my building asked me last week if she should pay for ChatGPT Plus or just keep using the free version. I did not have a quick answer, because the honest one depends on what she is actually using it for, so here is the longer answer I gave her.' },
      { type: 'h2', text: 'What the free versions actually cover' },
      { type: 'p', text: 'For most of what a teacher does day to day, free tiers of ChatGPT, Claude, or Gemini are enough. Rewriting a parent email, simplifying directions, drafting an exit ticket, generating report card comment ideas, all of that works fine on a free account. I used a free account for months before ever considering paying, and none of the prompts I share on this site require anything more.' },
      { type: 'h2', text: 'What paying actually buys you' },
      { type: 'p', text: 'The upgrade is mostly about volume and speed, not capability for everyday tasks. Free tiers cap how many messages you can send in a given window, and if you are doing a big batch of work, like grading a stack of quizzes or drafting comments for an entire class in one sitting, you can hit that limit and get stuck waiting. Paid tiers also tend to respond faster and give you access to the newest model versions a little sooner, which matters more for complex tasks than simple rewrites.' },
      { type: 'p', text: 'If your AI use is spread out across the week in small bursts, a rewritten email here, a quick exit ticket there, you will likely never hit the free limit. If you tend to do everything in one long session, a paid plan removes the friction of waiting or switching tools mid-task.' },
      { type: 'h2', text: 'The one thing that matters more than free versus paid' },
      { type: 'p', text: 'Privacy protections matter more than price for anything touching student information. Tools built with K-12 privacy protections in mind, like Claude for Teachers, are worth prioritizing over a general consumer AI account regardless of whether you pay, because the protection is about how your data is handled, not about which subscription tier you are on. Check what a tool does with your input before you decide what to pay for it.' },
      { type: 'h2', text: 'What I actually recommend' },
      { type: 'p', text: 'Start free. Use it for a month and pay attention to whether you are hitting usage limits or getting stuck waiting during busy weeks. If you are, the upgrade is worth the cost of a couple of coffees a month. If you are not, there is no reason to pay for capacity you are not using.' },
    ],
    faq: [
      { q: 'Is a free AI account enough for most teacher tasks?', a: 'Yes. Rewriting emails, simplifying directions, drafting exit tickets, and similar day-to-day tasks all work fine on free tiers of the major AI tools.' },
      { q: 'What is the main benefit of paying for an AI tool?', a: 'Mostly higher usage limits and faster responses during heavy use, not better quality for everyday tasks. It matters most if you do large batches of work in one sitting.' },
      { q: 'Should I choose an AI tool based on price or privacy protections?', a: 'Prioritize privacy protections first for anything involving student information, then decide between free and paid based on how often you hit usage limits.' },
    ],
  },
]

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((post) => post.slug === slug)
}
