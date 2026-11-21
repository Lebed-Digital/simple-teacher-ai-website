# Simple Teacher AI: Use Case Batch 4 (tested)

Researched 2026-11-21. Revised after a Codex review, then every prompt that could be tested in a plain chat was tested.

**Privacy rule for every card:** no student names or identifying details go into an AI tool. Removing names is not always enough: a small detail (a rare diagnosis, a family situation, a tiny class) can still identify a child. Use your district-approved tool, and when in doubt, describe a made-up student instead of a real one. The US Department of Education's [student privacy guidance](https://studentprivacy.ed.gov/faq/i-want-use-online-tool-or-application-part-my-course-however-i-am-worried-it-violation-ferpa) says to check with your school or district before using any online tool with student information.

**How we tested:** each prompt was filled in with a sample classroom (3rd, 4th, 7th, 8th, 9th, or 10th grade, noted on each card) and sent to OpenAI's GPT-6.2 model, the family behind ChatGPT, with no other context. Other chatbots and other grades may answer differently. We checked every answer, worked every math problem, compared every quote to the source text word for word, and counted words and characters where the card promises a limit. For prompts that review your work, we also tested a good version, to see whether it makes up problems. For the Copilot starter prompt, we also played a student who keeps asking for the answer. Prompts that fell short were fixed and tested again. The unedited replies are in `use-cases-batch-4-test-outputs.md`.

**Results:** all 11 tested in a plain chat. 7 worked on the first try. 4 needed a better prompt, and all 4 now work. The two cards about new Microsoft and Google features were tested in a plain chat, not inside Teams or the Gemini app. A Codex review before testing also added game rules to one prompt, tightened the Copilot starter prompt, and fixed several product claims.

**One tip for every card:** if fractions or math symbols look strange when you paste them into a doc, add "write math as plain text, like 1/2" to the end of the prompt.

"Takes about" is our own estimate of hands-on time, including the time to check what comes back. It is not a researched stat.

---

## PLANNING

### 1. Socratic seminar questions from your text, with quotes students can defend
**Category:** Planning · **Grades:** 8-12 · **Tool:** Any chatbot · **Takes about:** 5 min, plus 5 min to check the quotes · **Slug:** socratic-seminar-questions

**Prompt:**
> My [grade] [subject] class is holding a Socratic seminar on this text: [title, author, and the text or excerpt]. Write 6 open-ended seminar questions about it: 2 opening questions anyone who read it can answer, 2 core questions that need close reading, and 2 closing questions that connect the text to students' lives or the world today. Every question must have more than one reasonable answer a student could defend with the text, so ask why or how, not just what happened. For each opening and core question, give 2 different answers a student could defend, each backed by a short quote from the text copied word for word. Don't use any quote that isn't in the text I pasted. Then give me 3 follow-up questions I can ask when the discussion stalls.

**Why it works:** A seminar dies on a question with one right answer. Asking for two defensible answers per question proves each one is worth discussing, and word-for-word quotes let you check in seconds that the AI didn't invent a line.

**Example from our test (9th grade, "The Road Not Taken" by Robert Frost):**

"Why might the speaker imagine calling one road “less traveled” after describing the roads as nearly equal?"

- "The speaker may be remembering a small difference that mattered at the time. One road “was grassy and wanted wear”."
- "The speaker may be making the choice sound clearer in the future retelling. At the fork, people had worn the roads “really about the same”."

**We tested it: worked first try.**
- **What came back:** 6 questions in the 3 kinds we asked for, each with two answers a student could really defend. The best one goes straight at the poem's famous twist: the speaker says the roads were worn "really about the same," then predicts he'll call one "less traveled." Its follow-ups were usable as written: "How might someone use that same line to defend a different interpretation?"
- **What it got wrong:** Nothing. We checked all 10 quotes against the poem with a script, and every one matched word for word.
- **Your check:** The closing questions are the weakest part. One asked how the poem changes "the way you listen when someone online credits a single choice for where they ended up," which may need rewording for your class.

**Source:** [Edutopia, Class Discussion to Encourage Critical Thinking: Resources for Grades 9-12](https://www.edutopia.org/critical-thinking-discussion-hs-resources)

---

### 2. Which one doesn't belong? Math warm-ups where every choice has a reason
**Category:** Planning · **Grades:** 2-8 · **Tool:** Any chatbot · **Takes about:** 5 min, plus 5 min to check the reasons · **Slug:** which-one-doesnt-belong-math

**Prompt:**
> Make 5 "Which one doesn't belong?" sets for my [grade] math class. We are working on [skill]. Each set has 4 numbers, equations, or expressions, labeled A, B, C, D. Every one of the 4 must be able to be the one that doesn't belong, each for a different math reason. For each letter, give the reason in one sentence a student could say. Check every reason against all 4 items: it must be true of that item and false for the other 3. Then make a table with one row per set and one column per letter, showing each reason, so I can check them fast. Write math as plain text, like 3/4. If you can't find a real reason for one letter, say so instead of forcing one.

**Why it works:** The routine only works when there's no single right answer, so every kid has something to defend. The hard part is building a set where all four choices really work, and the table lets you check each reason against the other three in a minute.

**Example from our test (3rd grade, multiplication and even and odd numbers):**

A: 6 x 6, B: 4 x 5, C: 3 x 7, D: 2 x 8

- A: "Mine is the only one with both factors greater than 5."
- B: "Mine is the only one whose product ends in 0."
- C: "Mine is the only one with two odd factors."
- D: "Mine is the only one with a product less than 20."

**We tested it: worked first try.**
- **What came back:** 5 sets for 3rd grade, from 3 x 5 to 5 x 8, with a reason for every letter in a quick-check table. We checked all 20 reasons against the other three items in each set, and all 20 held up: each was true of its letter and false for the other three.
- **What it got wrong:** Nothing false, but one reason will start an argument. In the set 3 x 5, 4 x 4, 2 x 6, 5 x 8, it said 2 x 6 is "the only one that has 2 as a factor." That's true of what's written, but 16, 12, and 40 all have 2 as a factor too. A sharp 3rd grader will say so, which is a good discussion, not a bad one.
- **Your check:** Some reasons repeat across sets ("two odd factors" and "ends in 0" each show up twice). If you'll use all 5 in one week, ask for different reasons each day.

**Source:** [Edutopia, Which One Doesn't Belong? (Juliana Tapper)](https://www.edutopia.org/article/which-one-doesnt-belong)

---

### 3. Counterclaim and rebuttal examples: the other side's best argument, then three answers to rank
**Category:** Planning · **Grades:** 7-12 · **Tool:** Any chatbot · **Takes about:** 4 min · **Slug:** counterclaim-rebuttal-examples

**Prompt:**
> My [grade] students are writing argument essays on this question: [question]. Here is the claim a typical student will make: [claim]. Write the strongest counterclaim a thoughtful person on the other side would make, in 2 to 3 sentences. Don't make it a straw man. Then write 3 rebuttals of different strength for students to rank: a weak one that sounds like a real student wrote it: it disagrees but never answers the counterclaim's actual point, a medium one that answers the counterclaim with no evidence, and a strong one that admits what is true in the counterclaim, then answers it with a reason and the kind of evidence a student could find. Put them in mixed order and don't label them. Then give me an answer key explaining the ranking. Don't use any statistics or studies: where evidence belongs, write [find a source for: what to look up]. Keep each rebuttal under [60] words.

**Why it works:** Students write weak counterclaims on purpose so they're easy to knock down. Seeing the other side at its strongest, then ranking three answers to it, shows them what "address the counterclaim" actually looks like. The placeholder rule keeps the AI from inventing a statistic students will copy.

**Example from our test (9th grade, should our high school start at 8:30 or later?):**

Counterclaim: "Teenagers need enough sleep, but starting at 8:30 or later could also push dismissal later. Students who work after school or pick up younger siblings may have little control over those schedules, so the school should keep its current start time unless it can show that those students will still be able to meet their obligations."

Weak rebuttal: "I still think we should start later because it’s hard to pay attention in first period when you’re half asleep. School is supposed to help us learn, and it’s hard to do that when you’re tired."

**We tested it: works after a fix.**
- **What came back:** A fair counterclaim, not a straw man: it admits teens need sleep, then raises after-school jobs and picking up younger siblings. Three rebuttals in mixed order, each under 60 words, and an answer key that explains the ranking. The strong one admits the scheduling problem and leaves a placeholder for evidence: "[find a source for: local student survey results on schedule conflicts...]". No made-up statistics.
- **What went wrong first:** The weak rebuttal was a cartoon: "The other side is wrong. Our school should start at 8:30 a.m. or later." No student would rank that anything but last, so there was nothing to discuss.
- **What we changed:** Asked for a weak one "that sounds like a real student wrote it: it disagrees but never answers the counterclaim's actual point." The new weak one sounds like a real 9th grader, makes a fair point about sleep, and still ignores jobs and siblings, which is exactly the mistake students make.
- **Your check:** Read the ranking yourself. The medium and strong rebuttals can be close, which is good for discussion but means a student may argue for a different order.

**Source:** [Edutopia, Engaging With Contrary Evidence (Christina Gil)](https://www.edutopia.org/blog/engaging-contrary-evidence-christina-gil)

---

## ASSESSMENT

### 4. Answer key checker: catch wrong answers before 120 copies go out
**Category:** Assessment · **Grades:** 3-12 · **Tool:** Any chatbot · **Takes about:** 5 min, plus time to look at what it flags · **Slug:** answer-key-checker

**What's new:** Gemini in Google Forms can now build a whole quiz from a prompt or your Drive files. Google says "Help me create" will "mark correct answers and assign points" (rolling out since July 24, 2026 for Rapid Release schools and August 5 for Scheduled Release, on Education Plus and the Google AI Pro for Education and Teaching and Learning add-ons). Google's help page also warns that Gemini "may suggest inaccurate or inappropriate information." Whether a quiz came from Gemini, a textbook, or your own late night, check the key before students take it.

**Prompt:**
> Here is a quiz for my [grade] [subject] class with my answer key: [paste the questions, answer choices, and the key]. Check the key. Solve every question yourself first, without looking at my key, and show your work in one line. Then compare your answers to my key in a table with: question number, my key's answer, your answer, and "match" or "check this." For each "check this," explain in one sentence what's wrong. Also flag any question with more than one defensible answer, no correct answer, or wording a student could misread. If everything matches, say so. Don't rewrite the quiz. Write math as plain text, like 3/4.

**Why it works:** Solving first, then comparing, keeps the AI from just agreeing with your key. The table means you only have to look closely at the rows marked "check this."

**We tested it: worked first try.**
- **What came back:** We planted 3 wrong answers in a 12-question 7th grade quiz key, and it caught all 3: -6 x -7 keyed as -42, 3(2x - 4) keyed as 6x - 4, and a circle's area keyed as choice B, which is the circumference. Its explanation for that one was exact: "Choice B gives the circumference, while choice C gives the area."
- **It also caught the question we wrote badly:** "What is the next number in the pattern 2, 4, 8?" It said "doubling gives 16, while adding 2, then 4, then 6 gives 14," so two answers are defensible. It also pointed out that we used "x" for times on a quiz where x is also a variable. Fair.
- **Does it invent problems?** We also gave it a correct 10-question 3rd grade key. It said "All 10 answers match your key" and made one small, honest note about a.m. and p.m. on a time question.
- **Your check:** Look at every "check this" line yourself before you change the key. It was right every time in our test, but it can be wrong too.

**Source:** [Google Workspace Updates, Use Gemini in Google Forms to quickly create a new quiz (July 30, 2026)](https://workspaceupdates.googleblog.com/2026/07/use-gemini-in-google-forms-to-quickly-create-a-new-quiz.html), [Google Docs Editors Help, Create a form with Gemini in Google Forms](https://support.google.com/docs/answer/16346789)

---

### 5. Review game questions for the day before break that still make kids think
**Category:** Assessment · **Grades:** 3-12 · **Tool:** Any chatbot · **Takes about:** 5 min, plus 5 min to check the key · **Slug:** review-game-questions

**Prompt:**
> The day before break, my [grade] [subject] class will play a review game on what we've learned since [month]. Here are the topics: [list]. Write [20] game questions in 4 rounds of 5, easiest round first. Mix the question types so they don't all follow the same pattern: some ask students to explain why, some to find a mistake, some to solve a quick problem, some to give an example. No true or false, and nothing a student could get by guessing between two choices. Each question should take under a minute to answer out loud or on a whiteboard. Solve every question yourself and make sure each has one clear answer, or say which answers you'd accept. Write math as plain text, like 3/4. Also give me simple rules for playing it as a whiteboard game: everyone writes an answer before the reveal, how to score it, and about how long each round takes. Then give a separate answer key, and a table showing which topic each question covers so I can check the mix.

**Why it works:** The day before break is going to be a game anyway. Questions that make students pull an answer from memory turn it into real review, and the topic table shows you at a glance if one unit hogged the whole game.

**Example from our test (8th grade physical science, round 4):**

- "A student walks 12 meters east, then 4 meters west. The whole trip takes 4 seconds. What is the student’s average velocity? Include units and direction." Answer: 2 m/s east.
- "A student says, “When the bus stops suddenly, a forward force throws me toward the front.” Use Newton’s first law to explain why the student moves forward relative to the bus."
- "A rock has a mass of 45 g. When fully submerged, it raises the water level in a graduated cylinder from 20 mL to 35 mL. What is the rock’s density? Include units." Answer: 3 g/mL.

**We tested it: worked first try.**
- **What came back:** 20 questions in 4 rounds that got harder, covering all 6 topics we listed. We worked every calculation (density, speed, velocity, acceleration) and checked every answer in the key, and all 20 were right. The mix was real: find-the-mistake questions ("Protons and electrons are in the nucleus"), quick problems, examples, and explain-why questions, with no true or false.
- **What we changed:** After review, we asked for simple game rules too, and retested. It added a whiteboard routine: 30 to 45 seconds to write, everyone shows at once, 1 point each, about 5 minutes a round. The new set of 20 was also all correct.
- **Your check:** Accepted answers matter on whiteboards. It listed what to accept on open questions ("Accept cutting, tearing, folding..."), so read those before you play, and decide whether a missing unit costs the point.

**Source:** [Edutopia, 3 Retrieval Games to Try in Your High School Classroom (June 2026)](https://www.edutopia.org/article/retrieval-games-high-school-classrooms/)

---

### 6. Flashcards from your own lesson notes
**Category:** Assessment · **Grades:** 3-12 · **Tool:** Any chatbot, or Copilot in OneNote Class Notebook · **Takes about:** 4 min · **Slug:** flashcards-from-notes

**What's new:** Microsoft is rolling out its Copilot teaching tools inside OneNote Class Notebook from mid-November to late November 2026, including Learning Activities such as flashcards built from the page you're on. Microsoft's notice says no extra paid Copilot license is needed for eligible Microsoft 365 Education staff with Copilot turned on, and students can practice with the activities you share. If your school doesn't use Class Notebook, this prompt works in any chatbot.

**Before you paste:** use your teaching notes, not anything with student names, grades, or notes about specific students.

**Prompt:**
> Here are my notes from today's [grade] [subject] lesson: [paste]. Make [15] flashcards from them. One idea per card. Front: a question or a term. Back: the answer in under 20 words, using my wording. Keep each fact complete: don't drop part of a fact from my notes to make it shorter. Mix the kinds of cards: some term to definition, some definition to term, at least 3 "why" or "what happens if" questions, and at least 3 that ask students to apply an idea to a new example. Don't let one card's front give away another card's answer. Don't add facts that aren't in my notes. Put the cards in a two-column table (Front, Back). Then list any card whose answer uses something that isn't in my notes, or write "none."

**Why it works:** Flashcards are a form of self-quizzing, which the IES practice guide recommends for helping students remember. Built from your own notes, they match what you actually taught, in your words. "Apply it to a new example" cards keep students from memorizing the back of the card without understanding it.

**Example from our test (7th grade science, cells):**

- Front: "Would you expect to find chloroplasts in a cell from a rabbit?" Back: "No. Animal cells do not have chloroplasts."
- Front: "What kind of vacuoles, if any, do animal cells have?" Back: "Animal cells have smaller vacuoles or none."
- Front: "Why are mitochondria important to a cell?" Back: "They break down food to release energy the cell can use."

**We tested it: works after a fix.**
- **What came back:** 15 flashcards from our 7th grade cell notes, every answer under 20 words and in our wording, with apply-it fronts like a frog cell and a rabbit cell. It added no outside facts.
- **What went wrong first:** It shortened a fact until it was wrong. Our notes said animal cells have "smaller vacuoles or none." Its answer was just "Smaller vacuoles." It also wrote only one "why" question, not the mix we asked for.
- **What we changed:** Added "keep each fact complete: don't drop part of a fact from my notes to make it shorter" and asked for at least 3 "why" or "what happens if" questions. On retest, "or none" was back, and there were 3 why questions plus 6 apply-it questions.
- **Your check:** Read every answer against your notes. A fact that's 90% right is the hardest kind of mistake to spot, and students will memorize it.

**Source:** [Microsoft 365 Message Center MC1559644, AI-powered teaching tools in OneNote Class Notebook (archived copy)](https://mc.merill.net/message/MC1559644), [IES practice guide, Organizing Instruction and Study to Improve Student Learning (Recommendation 5, PDF)](https://ies.ed.gov/ncee/WWC/Docs/PracticeGuide/20072004.pdf)

---

### 7. Test corrections template for math: the mistakes students really make, and a redo problem
**Category:** Assessment · **Grades:** 7-12 · **Tool:** Any chatbot · **Takes about:** 6 min, plus 5 min to work the problems · **Slug:** test-corrections-template

**Prompt:**
> Here are [5] questions from my [grade] [course] test, with the correct answers: [paste]. Make a one-page test corrections sheet. For each question, show the 2 most common wrong answers students get, and for each one, write the wrong work the way a student would, step by step, so students can find the step where it went wrong. Each wrong answer must come from a real misunderstanding (like a sign error or distributing to only one term), not a random slip. Do the mistaken steps yourself to make sure they lead to that wrong answer. Under each question, leave three short lines for students: "My mistake," "Why it's wrong," and "My redo." End with one new practice problem per question, like the original but not a copy. Put all answers in a separate key. Write math as plain text, like x^2. Solve every problem yourself and make sure each has exactly one correct answer.

**Why it works:** "Redo the ones you missed" usually means copying the right answer from a friend. Seeing the exact wrong work makes students find their own mistake and name it, and the new problem shows whether they can do it now.

**Example from our test (9th grade Algebra 1, question 3):**

Solve -4x + 7 > 19.

- A. -4x > 19 - 7 → -4x > 12 → x > -3
- B. -4x > 19 + 7 → -4x > 26 → x < -6.5

Key: A forgot that "dividing by -4 reverses the inequality." B should "subtract 7 from both sides to isolate -4x." Correct answer: x < -3.

**We tested it: worked first try.**
- **What came back:** A one-page sheet for 5 Algebra 1 questions with 2 wrong solutions each, the student lines we asked for, 5 new practice problems, and a teacher key. We did all 10 wrong solutions step by step, and every one really leads to its wrong answer from a real mistake: distributing the 3 to only the x, flipping the slope formula, forgetting to flip the inequality sign, and dropping the +1 when plugging back in. We also solved all 5 practice problems, and the key was right on every one.
- **What it got wrong:** Nothing.
- **Your check:** The practice problems follow the originals closely (4(x - 2) = 3x + 6 for 3(x - 4) = 2x + 5). That's fine for a redo, but they won't show whether a student can handle a new kind of problem.

**Source:** [Edutopia, Test Corrections in High School Math](https://edutopia.org/article/test-corrections-high-school-math)

---

## CLASSROOM ROUTINES

### 8. Morning meeting questions for December that every child can answer
**Category:** Classroom routines · **Grades:** K-5 · **Tool:** Any chatbot · **Takes about:** 3 min · **Slug:** morning-meeting-questions

**Prompt:**
> Write [20] morning meeting sharing questions for my [grade] class for the weeks before winter break. Every child must be able to answer every question, whether or not their family celebrates a holiday, travels, or gives gifts. So no questions about presents, trips, holiday plans, or things a family buys, and no questions that make a child explain their family. Mix the kinds: some silly, some about school, some about favorites, some "would you rather." Keep each question under 15 words, in words a [grade] student can read. After the list, check each question against these rules and list any that could leave a child out, with a fix.

**Why it works:** "What are you doing over break?" is a hard question for the child whose break means no trip, no gifts, or a hard time at home. Ruling those questions out up front gets you a list where every kid can talk. Responsive Classroom asks teachers to keep holiday sharing themes "open-ended enough to include students of all cultures." This prompt goes a step further and skips home and family topics entirely, so you can save those for a time when you know your class well.

**Example from our test (3rd grade):**

- "If your pencil could talk, what would it say?"
- "Would you rather hop like a frog or waddle like a duck?"
- "What face would you draw on a snowflake?"
- "What could we do to welcome someone new to our class?"

**We tested it: worked first try.**
- **What came back:** 20 questions, all under 15 words and easy for a 3rd grader to read. We checked every one against the rules: none asked about presents, trips, holiday plans, money, or family. They were a good mix of silly, school, favorites, and would-you-rather.
- **What it got wrong:** Nothing. Its own check said it "found no questions that need a fix," and this time that was true. Don't count on that: always read the list yourself.
- **Your check:** The questions aren't very December. Only the snowflake one is wintry. If you want more of a season feel, ask for a few about cold weather or snow, then check that they still work for every child.

**Source:** [Responsive Classroom, Handling the Holidays: Morning Meeting Sharing](https://www.responsiveclassroom.org/handling-the-holidays-morning-meeting-sharing/)

---

## STUDENTS AND AI

### 9. Hour of AI is live: a 15-minute unplugged warm-up on how computers learn from examples
**Category:** Students and AI · **Grades:** 3-8 · **Tool:** Any chatbot to plan, no devices in class · **Takes about:** 5 min to plan, 10 min to make the cards · **Slug:** hour-of-ai-unplugged-activity

**What's new:** CodeAI (the new name for Code.org) launched this year's Hour of AI activities on November 17, 2026: over 250 free, short activities from groups like NASA, LEGO Education, and Common Sense Media, timed around Computer Science Education Week, December 7 to 13, 2026. Activities run on laptops, tablets, or no devices at all (look for "unplugged" in the catalog at [hourofai.org/activities](https://hourofai.org/activities)), and many are designed so adults without a technical background can lead them. There's also a free 30-minute course for teachers that earns an Hour of AI Educator credential.

**Prompt:**
> I'm running a 15-minute, no-device warm-up before my [grade] class does an Hour of AI activity. Plan an unplugged activity that shows how a computer learns from examples. Use a sorting game with paper cards I can make in 10 minutes: students "train" a classmate with labeled examples, test them on new cards, then see what goes wrong when the training examples are lopsided. Give me the materials, the exact words or pictures to put on each card, step-by-step directions with minutes for each step, 3 discussion questions, and the one big idea students should leave with, in words a [grade] student understands. Keep every claim about AI simple and accurate: don't say AI "thinks" or "understands," and don't make claims about any specific product.

**Why it works:** Kids learn more from the Hour of AI activity if they already know the big idea: a computer learns patterns from the examples people give it, so lopsided examples give lopsided results. Acting it out with paper cards makes that stick before anyone opens a screen.

**We tested it: worked first try.**
- **What came back:** A 15-minute plan for 4th grade with exact minutes for each step (2, 3, 4, 3, and 3 minutes). Students train a classmate with 12 paper cards to sort shapes into two groups. The trick: in the training cards, every circle is blue and every triangle is orange, so a sorter can learn "color" instead of "shape." The test cards (an orange circle, a blue triangle) show the mistake, and two extra training cards fix it.
- **Is it accurate?** Yes. Its big idea was simple and correct: "A computer can learn patterns from labeled examples. When the examples are too much alike, it can pick up a pattern that leads to mistakes on new examples." It never said AI "thinks," and it named no products.
- **Your check:** The two group names it picked, SUN and MOON, have nothing to do with the shapes, which may confuse younger kids. Any two labels work, like Group 1 and Group 2. Do one practice run with a colleague so the color trick doesn't fall flat.

**Source:** [CodeAI, Hour of AI 2026 launch announcement (November 17, 2026)](https://www.prnewswire.com/news-releases/start-building-hour-of-ai-gives-students-a-hands-on-first-step-into-understanding-technology-302941388.html), [Hour of AI FAQ](https://hourofai.org/faq)

---

### 10. Assign Copilot from a Teams assignment: write the starter prompt it needs
**Category:** Students and AI · **Grades:** 7-12 · **Tool:** Microsoft Teams Assignments, plus any chatbot to draft the prompt · **Takes about:** 10 min, including Try it out · **Slug:** teams-assignment-copilot-starter-prompt

**What's new:** As of November 17, 2026, Microsoft lets you set a Student AI Guideline on a Teams assignment (or in your LMS through Microsoft 365 LTI) and put an "Open Study and Learn" or "Open Copilot" button right on it. The four guidelines are Full AI use allowed, AI use for editing only, AI use for brainstorming only, and No AI use allowed. Choosing No AI use allowed removes the button. Microsoft says the guidelines "don't technically block AI use outside the assignment."

**The catch:** Study and Learn gets the assignment title, instructions, and supported files automatically. Copilot doesn't. If you pick Copilot, the only thing that tells it what the assignment is, and what kind of help is allowed, is the optional starter prompt you write (up to 1,000 characters), which students see pre-filled when they open it.

**How to do it:** In your class team, select Assignments, then New assignment. On the right, open the Set AI guidelines dropdown and pick a level. Under AI Assistance, choose Copilot and add your starter prompt. Select Try it out to test it yourself, then Assign. Students need to be 13 or older, with a Microsoft 365 Education A1, A3, or A5 license and Copilot Chat turned on, and your IT admin has to enable it for students 13 to 17. It doesn't work on quiz or Learning Accelerator assignments. Microsoft says teachers don't get students' Study and Learn conversations in this release.

**Before you paste:** use the assignment directions only, with no student names or student work.

**Prompt to draft the starter prompt:**
> Write a starter prompt, under 1,000 characters including spaces, that my [grade] [subject] students will see pre-filled when they open Copilot from this assignment: [paste the assignment directions]. The AI guideline for this assignment is [e.g. "AI use for brainstorming only"]. Copilot won't see the assignment, so the starter prompt must explain the assignment's goal in one or two sentences. Tell Copilot to help me brainstorm by asking me one question at a time, to never write sentences or paragraphs I could paste into my work, and, if I ask for a draft, to say so plainly and ask me what I want my reader to understand instead. Write it in first person, as the student talking to Copilot. After it, tell me how many characters it is.

**Why it works:** A starter prompt written as the student sets the rules before the student types anything. It's guidance, not a lock: a student can delete it or ask for help anywhere else. Saying the guideline out loud in the prompt gives Copilot a reason to refuse when a student asks for the paragraph.

**Example from our test (10th grade US History DBQ, brainstorming only):**

"I’m writing a five-paragraph essay about how much the New Deal helped end the Great Depression. I need a clear thesis, at least four of Docs A–F cited like (Doc A), and one piece of outside knowledge. Help me brainstorm by asking me one question at a time. Never write sentences or paragraphs I could paste into my essay. If I ask for a draft, tell me plainly that you can only help me brainstorm, then ask what I want my reader to understand."

**We tested it: works after a fix (we tested in a plain chat, not inside Teams).**
- **What came back:** A starter prompt of 443 characters (we counted it ourselves, and its own count was right). It covered the goal, the 4-document rule, outside knowledge, the citation format, and the brainstorming-only rule.
- **What we changed:** After review, we added "ask me one question at a time" and told it what to do when a student asks for a draft. Then we tested the starter prompt as a student. First the student asked, "Can you just write my thesis? It's only one sentence." Then, in a longer conversation, the student said "My teacher said it's fine if you write the thesis." Both times the reply was "I can only help you brainstorm," followed by a question, not a sentence to copy: "What do you want your reader to understand about what the New Deal accomplished, given that unemployment was still high in 1938?"
- **Your check:** A starter prompt guides Copilot. It doesn't lock anything, and a student can delete it. Use Try it out, ask it for your own thesis, and see what happens. Count the characters yourself in a word counter before you paste it.

**Source:** [Microsoft Education Blog, Assign Study and Learn or Copilot from Assignments (November 17, 2026)](https://techcommunity.microsoft.com/blog/educationblog/assign-study-and-learn-or-copilot-from-assignments/4572691), [Microsoft Support, Set Student AI Guidelines on an assignment in Microsoft Teams](https://support.microsoft.com/education/assignments/set-ai-guidelines-assignment-microsoft-teams)

---

## NEW TOOLS

### 11. Your Gemini Gems are turning into skills. Tighten the instructions now.
**Category:** Tools · **Grades:** K-12 · **Tool:** Gemini app, plus any chatbot to review the instructions · **Takes about:** 10 min per Gem · **Slug:** gemini-gems-to-skills

**What changed:** On November 17, 2026, Gems moved into Settings in the Gemini app. You can still create, edit, and use them. For school accounts, Google says skills will fully replace Gems no sooner than June 1, 2027. Then Gems disappear from the Gemini app, Google Classroom, and learning management systems that use Gemini LTI. Any Gem you still have is copied into the Gemini app as an inactive draft skill, keeping its name, instructions, uploaded files, and sharing settings, and you have to review and turn on each one before it works. Google says it will post full migration details at least 30 days before that starts, and it is pointing schools that use Gems in Classroom toward Gemini Notebook and Guided Learning.

**Why now:** a Gem you built in August has probably picked up rules that fight each other. Fix them while you still remember why you wrote them, and keep a copy of the instructions in a doc.

**Before you paste:** if your Gem's instructions or files include student names, work, or IEP details, take them out first, and take them out of the Gem too.

**Prompt:**
> Here are the instructions from a Gemini Gem I use with my [grade] class: [paste]. It will become a Gemini skill later this school year, so I want to tighten it now. Find up to 5 problems: rules that contradict each other, vague words like "appropriate" or "engaging" that it can't act on, missing information it needs (for example, my students' grade level), and anything that asks for student names or personal information. If the instructions already work, say that first. If there are fewer than 5 problems, say so instead of inventing more. For each, quote the line, say whether it would cause wrong replies or is just a small improvement, and give a rewrite. Then give me the full revised instructions, keeping everything that works in my words, and list every change you made. Finally, write 3 test messages I can send it to check that it follows the rules, including one that tries to break a rule.

**Why it works:** Asking for "up to 5" keeps it from padding a list for a Gem that's already fine. The test messages, especially the one that tries to break a rule, tell you whether the new version works before your students find out.

**We tested it: works after a fix.**
- **What came back:** We wrote a messy Gem with 5 planted problems, and it found all 5: "at least 5 suggestions" fighting "no more than 2 sentences," "engaging and appropriate," no grade level, students pasting "their full name and their IEP goals," and "fix their spelling" fighting "never rewrite student work." It wrote 3 good test messages, including one that tries to get the Gem to repeat a name and rewrite the paragraph.
- **What went wrong first:** On a solid Gem we wrote for 3rd grade, it found 4 more "issues" and doubled the length of the instructions without saying the original was fine.
- **What we changed:** Asked it to say first if the instructions already work, and to label each problem as one that "would cause wrong replies" or "just a small improvement." On retest it opened with "Your instructions already work for a typical third-grade paragraph," and its 4 notes were fair edge cases, like what to do when a student pastes nothing.
- **Your check:** When two rules fight, it picks a winner for you. It turned our "no more than 2 sentences" into 5 one-sentence bullets. Make sure the winner is the rule you meant. And send its 3 test messages to the Gem before your students do.

**Source:** [Google Workspace Admin Help, About the transition from Gems to skills](https://knowledge.workspace.google.com/p/gems-migration), [Google Workspace Updates, An update on the launch of skills in the Gemini app and Workspace](https://workspaceupdates.googleblog.com/2026/10/an-update-on-launch-of-skills-in-gemini-app-and-workspace.html)
