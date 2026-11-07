# Simple Teacher AI: Use Case Batch 1 (tested)

Researched 2026-11-07. Revised after a Codex review, then every prompt that could be tested in a plain chat was tested.

**Privacy rule for every card:** no student names or identifying details go into an AI tool. Removing names is not always enough: a small detail (a rare diagnosis, a family situation, a tiny class) can still identify a child. Use your district-approved tool, and when in doubt, describe a made-up student instead of a real one.

**How we tested:** each prompt was filled in with a sample classroom (3rd grade, or 5th grade for fractions) and sent to OpenAI's GPT model, the family behind ChatGPT, with no other context. We checked every answer, worked every math problem, and read every word of the phonics story. Prompts that fell short were fixed and tested again. The unedited replies are in `use-cases-batch-1-test-outputs.md`.

**Results:** 20 of 25 tested. 11 worked on the first try. 9 needed a better prompt: 6 now work, 3 are better but still need a quick edit from you. 5 cards need a specific app (Gemini Notebook, Classroom mobile, voice mode, account sign-up) and weren't tested yet.

**One tip for every card:** if fractions or math symbols look strange when you paste them into a doc, add "write math as plain text, like 1/2" to the end of the prompt.

"Takes about" is our own estimate of hands-on time, not a researched stat.

---

## PLANNING

### 1. Build your emergency sub plans once, not the night you're sick
**Category:** Planning · **Grades:** K-12 · **Tool:** ChatGPT, Claude, or Gemini · **Takes about:** 15 min per class, once a semester

**Prompt:**
> Act as an experienced instructional designer. Write a one-day emergency substitute plan for my [grade] [subject] class. It must need zero prep from the sub and use only paper, pencils, and what's in a typical classroom. Use my real schedule: [paste times]. Use my real routines: [attendance, bathroom, lining up, quiet signal]. If I didn't give you a routine, write "ASK THE TEACHER NEXT DOOR" instead of making one up. Include: a review activity on [recent topic] with an answer key, a quiet independent task, and a 5-minute filler activity. Before you finish, solve every problem and puzzle yourself and make sure each one has exactly one correct answer.

**Why it works:** Giving it your real schedule and routines, and telling it not to invent the rest, is what makes the plan usable by a stranger. Print it, put it in the sub tub, refresh it each semester.

**We tested it: works after a fix.**
- **What came back:** A full-day plan that followed the real schedule, used the real routines, and wrote "ASK THE TEACHER NEXT DOOR" for everything we didn't give it (lunch, PE handoff, dismissal) instead of inventing procedures. All answer keys were correct.
- **What went wrong first:** The 5-minute filler was a broken riddle with no answer ("greater than 10, less than 20, and in both the 2s and 5s"). The plan then admitted it had no answer, which would leave a sub stuck in front of the class.
- **What we changed:** Added the last sentence ("solve every problem and puzzle yourself"). On retest the filler was a clean missing-number activity with a correct key.
- **Your check:** It's long (several pages). Cut what your sub won't need, and do the filler yourself once.

**Source:** [Edutopia](https://www.edutopia.org/article/ai-created-sub-plans-right-prompts-mean-better-outputs/), [Ditch That Textbook](https://ditchthattextbook.com/sub-plans/)

---

### 2. A lesson hook in 30 seconds
**Category:** Planning · **Grades:** K-12 · **Tool:** Gemini in Google Classroom (also any chatbot) · **Takes about:** 1 min

**Prompt:**
> My [grade] students are learning [specific goal, e.g. "how to find the area of a rectangle"]. Give me 5 ways to open this lesson in under 3 minutes: one question, one quick demo, one puzzle, one connection to something kids care about, and one "what's wrong with this picture." Each one must lead straight into the goal, not just be fun. No prep longer than 2 minutes.

**Why it works:** Naming the exact goal keeps the hooks from being cute but off-topic. Gemini in Classroom has "craft a compelling hook" as a built-in starter prompt, including on the phone app (teachers 18+, and your district admin has to turn it on).

**We tested it: worked first try.**
- **What came back:** 5 hooks, all no-prep, all landing on area. The best was "what's wrong with this picture": a 2-by-4 grid labeled "Area = 6 because 4 + 2 = 6," which sets up the exact mistake kids make.
- **What it got wrong:** Nothing wrong. The "connection to something kids care about" was a generic video-game room. Swap in your class's actual obsession.

**Source:** [Google Workspace Updates, June 2026](https://workspaceupdates.googleblog.com/2026/06/updates-to-gemini-in-google-classroom.html)

---

### 3. Turn a lesson into a slide deck draft
**Category:** Planning · **Grades:** 3-12 · **Tool:** Gemini (Canvas) · **Takes about:** 5 min plus your edits

**Prompt:**
> Make a 10-slide deck teaching [specific goal] to [grade] students, using this content from my curriculum: [paste]. One idea per slide, big text. Include one worked example, a check-for-understanding question every 3 slides, and short speaker notes telling me what to say. Final slide: an exit question.

**How to do it:** In Gemini, pick Canvas from the tools menu before you send the prompt, then export the result to Google Slides and fix it there. Gemini for teachers needs your district admin to turn it on.

**Why it works:** You get the skeleton in minutes. Pasting your own curriculum content keeps it from teaching the topic a different way than your program does.

**We tested it: worked first try (text only).**
- **What came back:** 10 slides that followed our curriculum's order (count squares, then notice 3 rows of 5 is 3 x 5, then length x width). Checks landed on slides 3, 6, and 9, and every answer was correct.
- **What it got wrong:** Nothing in the content. We tested in a plain chat, so we saw slide text and descriptions of visuals, not real slides. We haven't tested the Canvas-to-Slides export yet.

**Source:** [Google Workspace Updates, June 2026](https://workspaceupdates.googleblog.com/2026/06/updates-to-gemini-in-google-classroom.html)

---

### 4. Turn your unit notes into a podcast students can listen to
**Category:** Planning · **Grades:** 4-12 · **Tool:** Gemini Notebook (formerly NotebookLM) · **Takes about:** 5 min, then it generates

**How to do it:** Upload your unit reading, notes, or study guide to a new notebook. Click Audio Overview. Download the audio file and post it to your class page so students don't need to log into a new tool.

**Why it works:** Great for review before a test, absent students, and kids who learn better by listening. Listen to it yourself before sharing: it can get details wrong even when your documents are right.

**Privacy note:** Some districts allow it for teachers only. Check before assigning it to students.

**Not tested yet:** needs the Gemini Notebook app.

**Source:** [Google: NotebookLM is now Gemini Notebook](https://blog.google/innovation-and-ai/products/gemini-notebook/notebooklm-gemini-notebook/), [Gemini Notebook help: Audio Overviews](https://support.google.com/gemininotebook/answer/16212820), [Class Tech Tips](https://classtechtips.com/2024/12/26/teachers-can-use-notebooklm/)

---

### 5. Ask questions of your own curriculum
**Category:** Planning · **Grades:** K-12 · **Tool:** Gemini Notebook (formerly NotebookLM) · **Takes about:** 10 min to set up, then seconds per question

**How to do it:** Upload your curriculum guide, pacing calendar, and standards. Then ask:
> For each answer, name the document and the lesson or page it came from. If my documents don't answer it, say so instead of guessing. Which lessons in unit 4 cover [standard]? What vocabulary do students need before lesson 6? Where does the curriculum assume students already know [skill]?

**Why it works:** It answers from your documents and shows where each answer came from, so you can check it in seconds. Citations make checking easy, they don't make it unnecessary: click a few before you trust it.

**Not tested yet:** needs the Gemini Notebook app and a real curriculum guide.

**Source:** [Gemini Notebook help](https://support.google.com/gemininotebook/answer/16179559), [Monash University](https://www.monash.edu/learning-teaching/teachhq/learning-technologies/google-suite/how-to/use-google-notebooklm-for-teaching)

---

### 6. Know the likely mix-ups before you teach
**Category:** Planning · **Grades:** K-12 · **Tool:** Any chatbot · **Takes about:** 2 min

**Prompt:**
> I'm about to teach [topic] to [grade] students. Suggest 5 mix-ups students are likely to have. For each one, give the wrong idea in a kid's words, why it makes sense to a kid, and one quick question I can ask to find out who has it.

**Why it works:** Knowing where kids will go wrong changes how you teach it. Treat the list as a brainstorm, not research, and check it against what you've seen in your room.

**We tested it: worked first try.**
- **What came back:** For fractions on a number line, it led with the classic one: counting the tick marks instead of the spaces ("there are five marks, so these are fifths"). It also caught "1/8 is bigger than 1/4 because 8 is bigger" and "halfway is always 1/2" on a 0-to-2 line. Each came with a one-question check you could ask out loud.
- **What it got wrong:** Nothing we'd change. These are real, well-known mix-ups, not invented ones.

**Source:** [Google Workspace Updates](https://workspaceupdates.googleblog.com/2026/06/updates-to-gemini-in-google-classroom.html), [research on AI-written math questions (arXiv)](https://arxiv.org/abs/2405.00864)

---

### 7. Turn a standard into kid-friendly "I can" statements
**Category:** Planning · **Grades:** K-8 · **Tool:** Any chatbot · **Takes about:** 1 min

**Prompt:**
> Rewrite this standard as 2-3 "I can" statements a [grade] student would understand. Use words a [age]-year-old knows, but keep the same skill and the same level of challenge. Don't make it easier than the standard. Use a real example instead of letters or symbols from the standard. Standard: [paste standard]

**Why it works:** Standards are written for adults. The "don't make it easier" line matters: kid-friendly rewrites tend to quietly drop the hard part.

**We tested it: works after a fix.**
- **What went wrong first:** It kept the skill and the challenge, but left the standard's algebra in: "I can explain that 1/b means one part of a whole split into b equal parts." No 8-year-old knows what b is.
- **What we changed:** Added "use a real example instead of letters." On retest: "I can explain that 1/4 is one part of a whole split into 4 equal parts" and "I can show that 3/4 is 3 parts that are each 1/4 of the same whole." Same skill, kid words.

**Source:** [Teaching Channel, 65 AI Prompts for Lesson Planning (PDF)](https://teachingchannel.com/wp-content/uploads/2024/05/K12Hub-65-AI-Prompts-for-Lesson-Planning.pdf)

---

## DIFFERENTIATION

### 8. One passage, three versions
**Category:** Differentiation · **Grades:** 2-12 · **Tool:** Any chatbot · **Takes about:** 5 min plus your edit

**Prompt (step 1):**
> Make two more versions of this passage for my [grade] class. Version A: short, simple sentences and hard words explained in plain words, for students who find it too hard. Keep it about the same length as the original. Version B: richer vocabulary and one extra detail, for students who find it too easy. Keep every fact and idea in both, in the same order, so the whole class can discuss it together. After each version, list what you changed. [paste passage]

**Prompt (step 2, after you approve the passages):**
> Now write 4 comprehension questions that work for all three versions.

**Why it works:** Same content, same discussion, different access. Doing passages first and questions second gives better results. Don't trust any grade-level label the AI gives its versions: those are guesses.

**We tested it: better, but still needs your edit.**
- **What came back:** Version B (harder) was good every time: "elongated," "devour," "declining," plus one real added fact about echoes.
- **What went wrong:** Version A kept every fact, but on the first try it got longer than the original, with definitions piled on ("Disease is illness."). When we told it not to get longer, it crammed definitions into dashes and made one sentence confusing ("insects harming crops, or farm plants").
- **What we changed:** Asked for short sentences at "about the same length." Plan on 2 minutes fixing Version A yourself. It's still much faster than writing it.

**Source:** [The Animated Teacher](https://www.theanimatedteacherblog.com/teachers-can-use-chatgpt/)

---

### 9. Custom decodable text in 10 minutes
**Category:** Differentiation · **Grades:** K-3 · **Tool:** Any chatbot · **Takes about:** 10 min (5 with AI, 5 fixing it)

**Prompt:**
> Write a short decodable story for first graders. Target pattern: [e.g. short o]. Use only these high-frequency words: [list]. Every other word must use patterns we've learned: [list]. Write it about [something your class did this week]. 6-8 sentences. Every sentence must make sense to a 6-year-old and the story needs a tiny beginning, middle, and end. After the story, check every single word one at a time against the rules (including names and small words) and list any word that breaks them.

**Why it works:** Kids read more when the story is about their world. But this is the card where you most need to check the AI's work.

**We tested it: better, but you must check every word.**
- **What came back:** A 6-sentence short-o story ("The pot is hot. 'Pop, pop, pop!' said Chad.") that was mostly decodable. It honestly flagged that "popcorn" and "class" break the rules, so it couldn't say either one.
- **What went wrong:** Both times it used "has," where the s sounds like z, which most phonics programs teach as a heart word. Both times it said no word broke the rules. The first version also had a line that made no sense ("Sam and Tom pop a cob").
- **What we changed:** Added "must make sense" and a word-by-word check. The story made more sense, but the self-check still missed "has." **The AI's "no rule breakers" claim can't be trusted. Read every word yourself.**

**Source:** [ASCD, How to Create Custom Decodable Texts in Minutes](https://ascd.org/el/articles/how-to-create-custom-decodable-texts-in-minutes)

---

### 10. Word problems about what your class actually cares about
**Category:** Differentiation · **Grades:** 1-8 · **Tool:** Any chatbot · **Takes about:** 2 min

**Prompt:**
> Write 8 [grade] word problems practicing [skill, e.g. two-step multiplication]. Base them on things my class is into right now: [Pokemon, recess soccer, the class fish, Minecraft]. Same difficulty as these examples from my curriculum: [paste 1-2 problems]. Vary the wording and question so the problems don't all follow the same pattern. Include an answer key.

**Why it works:** Same math, more buy-in. List class interests, never individual students.

**We tested it: works after a fix.**
- **What went wrong first:** All 8 answers were right, but every problem had the same shape ("has some groups of some, then takes away or adds a few"). Kids figure that pattern out by problem 3 and stop reading.
- **What we changed:** Added "vary the wording and question." On retest the shapes mixed (how many are left after 5 mornings, how many more goals do they need, how many blocks are unused), and all 8 answers were still right. We worked every one.

**Source:** [Rowan University study on interest-based reading texts (3 students, so a promising idea, not proof)](https://rdw.rowan.edu/etd/3525)

---

### 11. Make the directions readable for everyone
**Category:** Differentiation · **Grades:** K-12 · **Tool:** Any chatbot · **Takes about:** 2 min

**Prompt:**
> Rewrite these directions for a student who [is still learning English / reads below grade level]. Don't change what the task asks them to do. Use simple everyday words. Keep the school words they need to learn (like "quote") and explain each one in parentheses the first time. Number the steps, one action per step, bold the key verb. [paste directions]

**Why it works:** A lot of "I don't get it" is the directions, not the work. Pick one need at a time: an English learner and a struggling reader need different fixes. This is one of the uses OpenAI highlighted from its teacher workshops.

**We tested it: better, but trim it yourself.**
- **What went wrong first:** It split the directions into numbered steps but didn't simplify a single word. "Evidence," "graphic organizer," and "quotes" were all still there with no help.
- **What we changed:** Asked for simple words and parentheses for the school words. On retest every term was explained ("quotes (the exact words from the story)").
- **Still watch for:** It explained 7 words, which is a lot of parentheses for a newcomer. It also squeezed two actions into one step. Keep the 2 or 3 definitions that matter most.

**Source:** [OpenAI Edu Prompt newsletter, Issue 4](https://edunewsletter.openai.com/p/the-edu-prompt-issue-4)

---

### 12. Plan reteach groups from your quiz results
**Category:** Differentiation · **Grades:** K-12 · **Tool:** ChatGPT, Claude, or Gemini · **Takes about:** 5 min

**What to paste:** Only totals: how many students missed each question, and which skill each question tests. No student rows, no names, no numbers standing in for names. You put kids into groups yourself.

**Prompt:**
> I gave a [topic] quiz to [number] students. Here is how many missed each question and the skill each question tests: [paste]. Suggest 3-4 reteach groups by skill, a likely reason students missed those questions (a guess, not a diagnosis), and a 10-minute reteach plan for each group.

**Why it works:** Turns a gradebook column into a plan for tomorrow's small groups, without any student-level data leaving your computer.

**We tested it: worked first try. One of the best in the batch.**
- **What came back:** 4 groups (hard facts, missing factors, division word problems, two-step and explaining). Each had a minute-by-minute 10-minute plan and an exit check, and all the math was right.
- **What impressed us:** It pointed out on its own that totals can't show which kids missed the same questions, so you sort kids from their actual papers. For the "explain your thinking" question, it suggested accepting an oral answer first, to tell a writing problem apart from a math problem.

**Source:** [OpenAI Edu Prompt newsletter, Issue 4](https://edunewsletter.openai.com/p/the-edu-prompt-issue-4), [US Dept. of Education: what counts as de-identified](https://studentprivacy.ed.gov/faq/what-constitutes-de-identified-records-and-information)

---

## ASSESSMENT

### 13. An exit ticket bank with answers
**Category:** Assessment · **Grades:** K-12 · **Tool:** Any chatbot · **Takes about:** 2 min

**Prompt:**
> Write 5 exit tickets for this [grade] lesson goal: [goal]. Each one should take under 2 minutes and show me whether the student got the main idea. For each, include the answer, a short worked solution, and what a wrong answer might mean (a guess I should check, not a diagnosis).

**Why it works:** "What a wrong answer might mean" is the key line. It turns an exit ticket into tomorrow's plan.

**We tested it: worked first try.**
- **What came back:** 5 tickets on area that built from counting squares to missing side lengths. The wrong-answer notes were specific and correct. An answer of 10 on a 4-by-3 grid means "counted only the outside squares" (there are exactly 10 outside squares). An answer of 8 for a 5-by-3 rectangle means "added the sides."
- **What it got wrong:** Nothing. The grid in ticket 1 was drawn with text symbols, so draw it yourself on the printed copy.

**Source:** [Learning in Hand (Tony Vincent): Designing and analyzing exit tickets with AI](https://learninginhand.com/smart-exits-designing-and-analyzing-exit-tickets-with-ai)

---

### 14. Multiple choice where the wrong answers mean something
**Category:** Assessment · **Grades:** 3-12 · **Tool:** Any chatbot · **Takes about:** 5 min plus checking

**Prompt:**
> Write 5 multiple-choice questions on [topic] for [grade]. Mistakes I actually see in my class: [list, or "none yet"]. Each wrong answer must come from one specific mistake. For every question, show the worked solution, and next to each wrong answer, name the mistake that produces it. Write fractions and math as plain text, like 1/2, so I can paste them into a document.

**Why it works:** If you know why a kid picked B, you know what to reteach. Giving it the mistakes you really see makes the wrong answers much better.

**We tested it: works after a fix.**
- **What came back:** We worked all 5 problems and all 15 wrong answers, and every one was correct. Each wrong answer matched a mistake we listed ("1/2 + 1/3 = 2/5").
- **What went wrong first:** The math was right, but it came back in math code (`\frac{1}{2}`), which looks fine in ChatGPT but turns into gibberish when pasted into Google Docs.
- **What we changed:** Added the plain-text line. On retest everything pasted cleanly.

**Source:** [Math question generation research (EDM 2024)](https://educationaldatamining.org/EDM2024/proceedings/2024.EDM-posters.113/index.html)

---

### 15. A rubric from your assignment directions
**Category:** Assessment · **Grades:** 2-12 · **Tool:** Any chatbot · **Takes about:** 3 min

**Prompt:**
> Make a 4-level rubric for this assignment. Grade only these learning goals: [list, 4 max]. For each level, describe what I would actually see in the student's work, not vague words like "shows understanding." Then make a student-friendly checklist version using "I" statements. [paste assignment directions]

**Why it works:** You get the grading tool and the student self-check in one shot.

**We tested it: worked first try.**
- **What came back:** A clean 4-by-4 rubric for an opinion paragraph with countable descriptors ("gives two different reasons" vs. "gives one reason, or repeats the same reason in different words"), plus a 4-line kid checklist.
- **Worth noticing:** It said outright that the concluding sentence isn't scored, because we didn't list it as a goal even though the assignment asks for one. That's the AI catching a gap in our own rubric. Add the goal if you want it graded.

**Source:** [Teacher workshop study on AI rubrics (arXiv, 2026)](https://arxiv.org/abs/2603.10773)

---

### 16. A practice quiz from your phone
**Category:** Assessment · **Grades:** K-12 · **Tool:** Gemini in Google Classroom (mobile app) · **Takes about:** 2 min

**How to do it:** Open the Classroom app, tap the Gemini tab, choose "Generate a quiz," and give it the topic and grade. Review every question, then post it as a practice assignment.

**Why it works:** You can build tomorrow's review in the pickup line. It's for teachers 18+, and your district admin has to turn Gemini on, so it may not appear for you yet.

**Not tested yet:** needs a school Google Classroom account with Gemini turned on.

**Source:** [Google Workspace Updates, June 2026](https://workspaceupdates.googleblog.com/2026/06/updates-to-gemini-in-google-classroom.html)

---

## FEEDBACK

### 17. First-draft feedback on writing, using your rubric
**Category:** Feedback · **Grades:** 3-12 · **Tool:** Your district-approved AI tool · **Takes about:** 1 min per paper plus your review

**Before you start:** Remove the name and anything identifying from the student's writing, including personal stories that could point to one child. Check your district's AI policy first.

**Prompt:**
> You're an experienced [grade] teacher. Here is the assignment: [paste directions]. Using only this rubric: [paste 3-5 criteria], give feedback on the anonymous student writing below. Format: one specific strength with a quote copied exactly from the writing, one next step, one question to push their thinking. Only comment on what is actually in the writing. Under 80 words. Kind and direct.

**Why it works:** A fixed format and a short rubric keep the AI on track. Requiring an exact quote makes it harder for the AI to praise something that isn't there. You read and edit every comment before a student sees it.

**We tested it: worked first try.**
- **What came back:** On a made-up 3rd grade recess paragraph, it quoted the student word for word ("When we sit all day we get wiggly"). Its next step was spot-on: the swings detail doesn't connect to the "recess is fun" reason yet, so try "for example." It came in under 80 words.
- **What it missed:** The student already used "Also" as a linking word, which was worth praising. Small, but it's the kind of thing you'll add when you review.

**Source:** [EdSurge: teachers reflect on an AI writing rubric tool](https://edsurge.com/news/2023-07-24-expertise-as-elaboration-teachers-reflections-on-an-ai-tool-embedded-writing-rubric)

---

### 18. A report card comment bank (no student data needed)
**Category:** Feedback · **Grades:** K-8 · **Tool:** Any chatbot · **Takes about:** 10 min, once per grading period

**Prompt:**
> Write a bank of report card comments for [grade] [subject]. For each of these skills: [list 5-6 skills], write one comment for "exceeding," "meeting," "approaching," and "needs support." Warm, specific, under 30 words each, written to parents, with [Name] as a placeholder. Write the way you'd talk to a parent at pickup: no education jargon, and don't start every comment the same way. Each "approaching" and "needs support" comment should include one thing families can do at home.

**Why it works:** You build the bank once, then pick and tweak per student. No student information ever goes into the AI.

**We tested it: works after a fix.**
- **What went wrong first:** 24 accurate comments, but they read like report-card-speak ("sustains focused reading through longer texts," "identifies main ideas in complex passages"). All 24 started with "[Name]."
- **What we changed:** Added "talk like you would at pickup" and "don't start every comment the same way." On retest: "After reading together, ask, 'What was this mostly about?'" Plainer, warmer, and varied.

**Source:** [The Animated Teacher](https://www.theanimatedteacherblog.com/teachers-can-use-chatgpt/), [Edutopia](https://www.edutopia.org/article/6-ways-chatgpt-save-teachers-time)

---

## PARENT COMMUNICATION

### 19. Weekly family newsletter from your scribbled notes
**Category:** Parent communication · **Grades:** K-8 · **Tool:** Any chatbot · **Takes about:** 3 min

**Prompt:**
> Turn these notes into a short, warm weekly newsletter for families of my [grade] class. Sections: what we learned, what's coming up, one way to help at home. Under 200 words. Sound like a real teacher, not a company. Don't add any events or dates that aren't in my notes. Notes: [paste bullet points]

**Why it works:** The hard part (knowing what happened this week) is yours. The AI handles the writing. Keep student names and stories about specific kids out of the notes.

**We tested it: worked first try.**
- **What came back:** A friendly 3-section newsletter from 7 messy bullet points. It kept picture day on "Thursday, Nov. 13" and did not invent a date for Friday's test. It also cleaned up "lots of tears at the end lol" into something you could send.
- **Small thing:** It used a long dash and closed with a generic "Thank you for all you do." Parents are starting to spot both as AI writing, so swap in your own sign-off.

**Source:** [eSpark](https://www.esparklearning.com/blog/how-to-use-chatgpt-for-efficient-teacher-parent-communication/)

---

### 20. Translate a family message, carefully
**Category:** Parent communication · **Grades:** K-12 · **Tool:** Any chatbot · **Takes about:** 2 min

**Prompt:**
> Translate this message into [language] for families. Keep it warm and simple and avoid idioms. Keep every date, time, number, and thing families need to do exactly the same. Then, in English, list any sentence you weren't sure how to translate, and any sentence you changed or softened instead of translating word for word.

**Why it works:** Gets the message to families who'd otherwise miss it. Quality varies by language (Spanish is strong, some others less so). For formal meetings or anything high-stakes, use your district's interpreter.

**We tested it: works after a fix.**
- **What came back:** A clean Spanish translation with every date and deadline intact.
- **What went wrong first:** It quietly turned "Thanks for being so awesome!" into "Thank you so much for all your support!" Then it reported "Translation uncertainties: None." The change was reasonable, but it didn't tell us. That's the real risk with AI translation: it changes things without saying so.
- **What we changed:** Asked it to also list anything it changed or softened. On retest it reported both softened sentences in plain English.

**Source:** [GovTech](https://govtech.com/education/k-12/how-ai-text-translators-could-improve-k-12-engagement)

---

### 21. Rehearse a hard parent conference out loud
**Category:** Parent communication · **Grades:** K-12 · **Tool:** ChatGPT or Gemini voice mode · **Takes about:** 10 min

**Prompt (spoken):**
> I'm a [grade] teacher. Play a frustrated parent who thinks I'm being unfair to their child about [general situation, no names]. Push back the way a real upset parent would. Say one thing at a time and wait for my answer. When I say STOP, step out of character and tell me what I did well and where I got defensive.

**Why it works:** Saying the hard sentence out loud once makes it much easier the second time. Schools are now using AI simulations for exactly this.

**We tested it: opening works; full conversation not tested yet.**
- **What came back:** It stayed in character and waited, opening with one realistic line: "If they're struggling to get it done, how is taking away their break supposed to help?" That's exactly the pushback a real parent would give about lost recess.
- **Not tested yet:** We tested by typing, not in voice mode, and only the first turn. We haven't checked the STOP feedback.

**Source:** [Education Week, May 2026](https://www.edweek.org/leadership/teacher-parent-meetings-can-be-tense-can-ai-simulations-help/2026/05)

---

### 22. Cool down an email before you hit send
**Category:** Parent communication · **Grades:** K-12 · **Tool:** Any chatbot · **Takes about:** 1 min

**Before you paste:** Take out names and identifying details, or rewrite the situation as a made-up summary. Do this before it goes into the chat, not after.

**Prompt:**
> I'm a teacher replying to a parent. Make this email calm, kind, and clear without losing what I need to say. Cut anything that sounds defensive. Keep it short. [paste your cleaned-up draft]

**Why it works:** The 9pm angry draft is honest. The calm version is the one you'll be glad you sent.

**We tested it: worked first try.**
- **What came back:** Our made-up angry draft ("I've already explained this twice... Honestly if the homework was getting done at home...") came back as 4 calm sentences. It kept the rule, the "not singled out" point, the boundary about pickup, and the meeting offer. It cut the "already explained twice" and the homework jab.
- **What it got wrong:** Nothing. Its opener, "I understand your concern," is a little stock. Make it sound like you.

**Source:** [eSpark](https://www.esparklearning.com/blog/how-to-use-chatgpt-for-efficient-teacher-parent-communication/)

---

### 23. Explain school jargon to families in plain English
**Category:** Parent communication · **Grades:** K-12 · **Tool:** Any chatbot · **Takes about:** 2 min

**Prompt:**
> Explain these terms to a parent with no education background, one or two sentences each, friendly tone: [e.g. "benchmark assessment," "Lexile level," "RTI Tier 2," "accommodation vs. modification"].

**Why it works:** Use general terms only, never a specific student's plan. Make it once and reuse it at every conference.

**We tested it: worked first try.**
- **What came back:** Accurate and plain. The best was accommodation vs. modification: one "changes how your child learns or shows what they know, like extra time," and the other "changes what your child is expected to learn." That's the exact line families mix up.
- **What it got wrong:** Nothing.

**Source:** [Truth for Teachers](https://truthforteachers.com/chatgpt/)

---

## SETUP AND TOOLS

### 24. Get ChatGPT for Teachers free
**Category:** Tools · **Grades:** K-12 (US) · **Tool:** ChatGPT for Teachers · **Takes about:** 5 min to verify

**What it is:** OpenAI offers a free ChatGPT plan for verified US K-12 teachers and staff. It includes file uploads, voice mode, image generation, custom GPTs, and education privacy protections, including a student data privacy agreement. OpenAI's help center currently lists it as free through June 2028. Verification runs through SheerID.

**Why it matters:** The paid features at no cost, with protections built for schools. It doesn't replace your district's approval: check whether your district has signed off before using it with anything student-related.

**Not tested yet:** sign-up needs a real teacher account. Facts checked against OpenAI's help center on 2026-11-07.

**Source:** [OpenAI](https://openai.com/index/chatgpt-for-teachers/), [OpenAI Help Center](https://help.openai.com/en/articles/12844995-chatgpt-for-teachers)

---

### 25. Stop re-explaining your class every time
**Category:** Tools · **Grades:** K-12 · **Tool:** ChatGPT (custom GPT or Project), Claude (Project), Gemini · **Takes about:** 10 min once

**How to do it:** Create a Project or custom GPT and paste in your standing instructions:
> I teach [grade] [subject] in [state]. Our curriculum is [name]. My class is [size, general needs, no names]. I like materials that are [your style]. For anything students will read, match the reading level to the task, but keep the real subject words they need to learn. Write math as plain text so it pastes cleanly. Never ask me for student names.

**Why it works:** Every chat inside that Project or GPT starts with your context already loaded, so your prompts get shorter and your answers get better. It only applies inside that Project or GPT, not to every chat you open.

**Not tested yet:** needs to be set up inside an app.

**Source:** [OpenAI Help Center, ChatGPT for Teachers features](https://help.openai.com/en/articles/12844995-chatgpt-for-teachers)
