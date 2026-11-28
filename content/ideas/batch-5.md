# Simple Teacher AI: Use Case Batch 5 (tested)

Researched 2026-11-28. Revised after a Codex review, then every prompt that could be tested in a plain chat was tested.

**Privacy rule for every card:** no student names or identifying details go into an AI tool. Removing names is not always enough: a small detail (a rare diagnosis, a family situation, a tiny class) can still identify a child. Use your district-approved tool, and when in doubt, describe a made-up student instead of a real one. The US Department of Education's [student privacy guidance](https://studentprivacy.ed.gov/faq/i-want-use-online-tool-or-application-part-my-course-however-i-am-worried-it-violation-ferpa) says to check with your school or district before using any online tool with student information.

**How we tested:** each prompt was filled in with a sample classroom (1st, 3rd, 4th, 5th, 6th, 8th, 9th, or 11th grade, noted on each card) and sent to OpenAI's GPT-6.2 model, the family behind ChatGPT, with no other context. Other chatbots and other grades may answer differently. We checked every answer, worked every math problem, checked every science and history fact, counted words where the card promises a count, and checked every rotation schedule row by row. For prompts that review your work, we also tested a good version, to see whether it makes up problems. Prompts that fell short were fixed and tested again. The unedited replies are in `use-cases-batch-5-test-outputs.md`.

**Results:** all 11 tested in a plain chat. 5 worked on the first try. 6 needed a better prompt, and all 6 now work. The two cards about new Gemini features were tested in a plain chat, not inside the Gemini app. A Codex review before testing also fixed several product claims and added two improvements we then tested.

**One tip for every card:** if fractions or math symbols look strange when you paste them into a doc, add "write math as plain text, like 1/2" to the end of the prompt.

"Takes about" is our own estimate of hands-on time, including the time to check what comes back. It is not a researched stat.

---

## PLANNING

### 1. Readers theater scripts from the text you're already teaching
**Category:** Planning · **Grades:** 2-5 · **Tool:** Any chatbot · **Takes about:** 5 min, plus 5 min to check the facts · **Slug:** readers-theater-scripts

**Prompt:**
> Turn this text into a readers theater script for my [grade] class: [paste the text]. Make [5] speaking parts, including a narrator. Use only facts from the text I pasted: don't add any new facts. Write it as people talking to each other: when one part says a surprising fact, a different part reacts or asks a question ("Wait, really?" "How?"), and a reaction never adds a fact. Give every part about the same number of lines, and keep each part's total words close: no part should have more than about twice the words of another. Give each part at least one line with a feeling to act out, like surprise or worry. Keep the words at the reading level of the text. Then make a table with one row per part showing how many lines it has and how many words. Finally, list every fact from the text that you left out.

**Why it works:** Readers theater is fluency practice kids want to reread, and rereading is the point. Turning your science or social studies text into the script means the practice also reviews content. The "only facts from the text" rule and the left-out list stop the AI from padding the script with made-up facts kids will memorize.

**Example from our test (3rd grade, a short article on how bats find food):**

**Mia:** These sounds are too high for people to hear.

**Leo:** We can’t hear them?

**Narrator:** What happens to those sounds?

**Ava:** The sounds bounce off things like trees and moths.

**We tested it: works after a fix.**
- **What came back first:** The article chopped into lines, with every fact in place. But it wasn't a conversation. One reader said "Some bats can eat hundreds of insects in one night," then reacted to that same line: "Hundreds?" Another said "Wait, really?" right before reading a fact. Word totals ran from 21 to 40.
- **What we changed:** Asked for people talking to each other, with reactions always coming from a different part, and kept each part's words within about double of the others.
- **What came back after:** A real back-and-forth for 5 parts (a narrator plus Ava, Ben, Mia, and Leo), 5 lines each, 28 to 48 words each. We counted every line and word with a script, and its table was right. Every fact from the article was there, and no new ones were added.
- **Your check:** One part still had two lines in a row. The AI gives the parts made-up names, so swap in "Reader 1" if you'd rather. Read it aloud once: "So how does echolocation help them?" works only if the line before it set it up.

**Source:** [Reading Rockets, Readers Theater](https://www.readingrockets.org/classroom/classroom-strategies/readers-theater)

---

### 2. Analogies for teaching science, and where each one breaks
**Category:** Planning · **Grades:** 6-12 · **Tool:** Any chatbot · **Takes about:** 5 min, plus 5 min to check the science · **Slug:** analogies-for-teaching-science

**Prompt:**
> I'm teaching [concept] to my [grade] [subject] class. Give me 3 analogies that compare it to something my students already know from everyday life, like [an interest or place]. For each one, make a table that matches each part of the analogy to the real science part. Then say exactly where the analogy breaks down: what a student might wrongly believe if they take it too far, and one sentence I can say to head that off. Write that sentence in words a [grade] student already knows, and don't use a science term we haven't covered unless you explain it. Check every science fact yourself and keep it accurate for [grade]. Tell me which of the 3 you'd use first and why.

**Why it works:** A good analogy gives students something to hang a hard idea on. A careless one plants a misconception that lasts for years. Researchers who study teaching with analogies recommend pointing out where the comparison stops working, so the prompt asks for that every time, plus the sentence you'll actually say.

**Example from our test (8th grade, voltage, current, and resistance):**

"Where it breaks down: A rough strip can make one skater stop, so students might think some charge gets stuck or used up in a resistor and less comes out than went in."

"Say to the class: “Once the current is steady, the same amount of charge goes into the resistor each second as comes out, and the resistor warms up.”"

**We tested it: works after a fix.**
- **What came back:** Three analogies: water in a hose loop, a skatepark loop with a lift, and video game bots on a delivery route. Each had a part-by-part table and a real misconception: that the battery fills empty wires with charge, that current is used up in a resistor, and that a lamp waits for charge to travel from the battery.
- **What went wrong first:** The science was right, but one of the sentences to say to the class wasn't something an 8th grader could follow: "in a real circuit the electric field does the work of transferring energy to the charges in the resistor." That's muddled, and it uses a term most 8th graders haven't learned.
- **What we changed:** Asked for the sentence in words students already know, with no untaught science terms. After the fix, every sentence was plain and accurate, like "When you flip the switch, charges already in the wires and the lamp start moving almost at once."
- **Your check:** Read each table against your own notes. The analogies are only as good as the vocabulary you've taught, so cut any row with a word your class hasn't met.

**Source:** [BOLD, How can analogies promote learning? (on Gray and Holyoak's research)](https://boldscience.org/how-can-analogies-promote-learning/), [USC Viterbi STEM Education Research Group, Teaching with Analogies](https://stem-ed.usc.edu/?p=2670)

---

### 3. Station rotation plan from one learning goal, with the materials math done
**Category:** Planning · **Grades:** 6-12 · **Tool:** Any chatbot · **Takes about:** 10 min, plus 5 min to check the timing and materials · **Slug:** station-rotation-plan

**Prompt:**
> Plan a station rotation for my [grade] [subject] class on this learning goal: [goal]. I have [number] students, a [length]-minute period, and these materials: [list, with how many of each]. Break the goal into [4] smaller skills, one per station, and include one station where I work with a small group. Each station has to work no matter which station a group starts at. If a station would need results from another station (like a mass measured somewhere else), change the plan so it doesn't. At least one station must have students [do the real skill on something they measure or make themselves, at that station]. For each station, give the task, the materials and how many of each it needs per group, the directions to post at the station in student-friendly words, and what students turn in or show. Make the timing fit my period, including 2 minutes for each move between stations. Then make a table: one row per station, with group size, minutes, and materials needed, and count every material used by all the stations at the same time, and check that the total never goes over what I have. If my materials or time don't fit the plan, tell me before giving it.

**Why it works:** Stations let a small set of equipment serve a whole class: one high school teacher in an Edutopia video needed six microscopes instead of twenty. The hard part is the logistics, so the prompt makes the AI do the minutes and materials math for all stations running at once, and show it in a table you can check.

**We tested it: works after a fix (it took two).**
- **What came back first:** An 8th grade density plan for 32 students with 2 balances, timed to exactly 50 minutes, with a materials table. But it had a hidden flaw: students weighed one cube at one station and measured a different cube at another, and the two numbers never met. Nobody found the density of anything they measured.
- **First fix:** Told it each station has to work in any order and can't depend on another station's results. It fixed the order problem, but the measurements still led nowhere.
- **Second fix:** Told it one station must have students find the density of a real object they measure themselves. Now the teacher-led station has pairs weigh and measure the same cube, then divide. We checked the timing (4 + 36 minutes at stations + 6 minutes of moves + 4 = 50), every material running at once (2 of 2 balances, 6 of 6 cubes), and every answer (53 g and 20 cm³ is 2.65 g/cm³, closest to aluminum).
- **Your check:** Read the plan as if you were a student who starts at the last station. And look hard at the timing on your station: 9 minutes for 8 students sharing 2 balances is tight.

**Source:** [Edutopia, Helping Teens Build Skills Through Station Rotation (video, January 2026)](https://www.edutopia.org/video/station-rotation-helping-teens-build-skills/)

---

### 4. Sentence combining exercises from your own unit
**Category:** Planning · **Grades:** 4-10 · **Tool:** Any chatbot · **Takes about:** 5 min, plus 5 min to check the facts and commas · **Slug:** sentence-combining-exercises

**Prompt:**
> Make [8] sentence-combining exercises for my [grade] class. Use sentences about [topic], a unit we're in. Each exercise has 2 or 3 short sentences to combine into one, and each of the last 3 exercises has 3. Make them get harder: start with joining words like and, but, and so, then because, when, and although, then phrases like "which" clauses and a describing phrase set off by commas. Make sure each joining word fits the meaning: use but or although only when the ideas really contrast. For each exercise, give 2 different correct combined sentences and name the joining word or structure each uses. Keep every fact the same: a combined sentence can't add, drop, or change a fact. Use only facts you are sure are true. Then make a table with the exercise number, the skill, and every fact in the short sentences, so I can check that each answer kept all of them.

**Why it works:** Writing Next, a review of writing research for grades 4-12, found that sentence combining improved the quality of students' writing and worked better than traditional grammar lessons. (It studied the exercises, not AI-made ones.) Using your unit's content makes it double as review, and two correct answers show students there's more than one good way to build a sentence.

**Example from our test (6th grade, ancient Egypt):**

Short sentences: The Nile flows north. The Nile runs through Egypt. The Nile empties into the Mediterranean Sea.

- The Nile, which runs through Egypt, flows north and empties into the Mediterranean Sea.
- The Nile, which flows north through Egypt, empties into the Mediterranean Sea.

**We tested it: works after a fix.**
- **What came back first:** 8 exercises that got harder in the right order, each with two correct answers and a fact table. The facts were true (papyrus, natron, Hatshepsut's expedition to Punt). But one answer used "although" where nothing contrasts: "Although ancient Egypt had many gods, the Egyptians also worshipped goddesses." And every exercise had only 2 sentences, so the hard ones weren't hard.
- **What we changed:** Asked it to use "but" and "although" only for a real contrast, and to give the last 3 exercises 3 sentences each.
- **What came back after:** The "although" exercise now contrasts for real ("Although the Great Pyramid is thousands of years old, it still stands at Giza."), and the last 3 have 3 sentences each. We checked every answer against its fact list, and every fact survived.
- **Your check:** Read the commas in the "which" and describing-phrase answers out loud. Some answers sound stiff, like "because they wanted to preserve bodies after death." Kids will write better ones, and that's the lesson.

**Source:** [Carnegie Corporation of New York, Writing Next (Graham and Perin, 2007)](https://www.carnegie.org/publications/writing-next-effective-strategies-to-improve-writing-of-adolescents-in-middle-and-high-schools/)

---

### 5. Standards alignment check: does your lesson make students do what the standard says?
**Category:** Planning · **Grades:** 3-12 · **Tool:** Any chatbot, or Align to Standards in Microsoft Teach · **Takes about:** 5 min · **Slug:** standards-alignment-check

**What's new:** In October 2026, Microsoft announced a redesigned Standards Picker in Teach in Copilot, Teams for Education, and Learning Zone. You pick your country or region, then your standards set, then the grade and strand, and it works inside Lesson Plans, Quizzes, Rubrics, Assignment Instructions, and Align to Standards. Picking the standard is the easy part. This prompt checks the hard part, in any chatbot.

**Prompt:**
> Here is the standard I'm teaching, word for word: [paste the standard]. Here is my lesson: [paste the lesson plan]. Break the standard into each separate thing it asks students to do. Make a table: one row per part, the exact words from the standard, where my lesson has students do it (quote the lesson), and whether it's fully covered, partly covered, or missing. Don't count it covered just because the lesson mentions the topic: students have to do the thinking the standard's verb asks for. If my lesson already covers the standard, say that first. Then suggest the smallest change that would cover each missing part.

**Why it works:** A lesson can be "about" a standard without asking students to do it. If the standard says "analyze data" and students copy notes, the verb is missing. Quoting both the standard and the lesson side by side makes the gap obvious, and "the smallest change" keeps it from rewriting a lesson that mostly works.

**We tested it: worked first try.**
- **What came back:** We gave it an 8th grade lesson on chemical reactions (notes on the 5 signs, a baking soda demo, a video, a multiple choice exit ticket) and standard MS-PS1-2, which asks students to "analyze and interpret data on the properties of substances before and after." It said the lesson only partly covers the standard: students spot signs, but they never compare properties before and after, and the exit ticket asks "Which is a sign of a chemical reaction?" instead of asking them to decide from data. Its smallest change was a before-and-after table during the demo plus one new exit question.
- **On a lesson that already worked:** We wrote a lab where students measure properties before and after mixing and make a claim from their data. It opened with "Your lesson fully covers MS-PS1-2" and suggested no changes. It didn't invent problems.
- **Your check:** It splits a standard into parts its own way (it gave "analyze" and "interpret" separate rows). Make sure the parts match how your district reads the standard.

**Source:** [Microsoft Education Blog, What's New in Microsoft EDU, October 2026](https://techcommunity.microsoft.com/blog/educationblog/whats-new-in-microsoft-edu-%E2%80%93-october-2026/4516290)

---

## DIFFERENTIATION

### 6. Accessible worksheet check: what makes this page hard to read or use?
**Category:** Differentiation · **Grades:** K-12 · **Tool:** Any chatbot · **Takes about:** 5 min, plus time to run its checks on the real file · **Slug:** accessible-worksheet-check

**Before you paste:** paste the worksheet only, never a student's copy with their name or answers on it.

**Prompt:**
> Here is the text of a worksheet for my [grade] class, with notes in brackets about how it looks: [paste the text, and describe the fonts, layout, colors, and pictures in brackets]. Check it for things that make it hard for some students to read or use: long or tangled directions, more than one task in a step, small or decorative fonts, a crowded layout, too little space to write, important information shown only by color or a picture, reading level above the grade, and anything a screen reader would miss. If it already works, say that first. List every problem you find, most important first, quoting the part and labeling each one "blocks some students" or "small improvement." Then rewrite the directions only, keeping my tasks and questions word for word, and list every change you made. Finally, list the checks I should run on the real file myself, since you can't see it (like color contrast, reading order, and how a screen reader reads it).

**Why it works:** Universal Design for Learning asks you to plan for the students who'd struggle with the page before they meet it: font, size, spacing, and color used to carry information all matter. The AI can't see your page, so you describe it in brackets, and it hands back a list of checks to run on the real thing.

**We tested it: worked first try.**
- **What came back:** We wrote a messy 4th grade fractions worksheet with 7 planted problems: one long run-on direction, a 10 pt handwriting font, "circle the bigger fraction in RED and the smaller one in BLUE," fraction strips labeled only by color, no room to write, clip-art pizzas behind the text, and a picture with no text. It caught all 7, labeled the serious ones "blocks some students," and found one we didn't plant: the strips had no fifths or tenths, so students couldn't use them on "2/5 or 4/10."
- **On a worksheet that already worked:** It opened with "The worksheet already works well in print." It also caught a real slip we hadn't noticed: the last question, "Explain how you knew 3/8 is less than 3/4," gives away the answer to problem c.
- **Added after review:** The list of checks to run on the real file. It came back specific: print in grayscale, run a screen reader on the PDF students will get, and listen to how it reads "1/2."
- **Your check:** Your rules can fight. It flagged red and blue as a problem, then kept red and blue in the rewrite because we said to keep the tasks word for word. It did suggest a fix ("add a second cue, such as B for bigger and S for smaller"), but you have to make it.

**Source:** [CAST, UDL Guidelines 3.0: Support opportunities to customize the display of information](https://udlguidelines.cast.org/representation/perception/customize-display/)

---

## FEEDBACK

### 7. Peer feedback form with sentence starters tied to your rubric
**Category:** Feedback · **Grades:** 6-12 · **Tool:** Any chatbot · **Takes about:** 5 min · **Slug:** peer-feedback-form

**Before you paste:** paste the assignment and rubric only. Students' drafts stay out of the AI tool.

**Prompt:**
> Make a peer feedback form for my [grade] students who are trading drafts of this assignment: [assignment]. Here's my rubric: [paste the rubric criteria]. For each rubric criterion, give 2 sentence starters in words a [grade] student would really use: one that tells the writer what a reader noticed or where they got confused at a specific spot (like "In paragraph 2, I got confused when..."), and one that suggests a next step for that spot. Add a box to write the line or paragraph they mean. No starters that only praise, like "Good job." Add a short "how to give feedback" section on top in student words, and one finished example of a helpful comment and an unhelpful one about the same spot. Fit it on one page.

**Why it works:** Peer feedback falls flat when kids don't know what to say, so they write "good job." Starters that point to a spot in the draft give them something real to say, and pairing "what I noticed" with "what you could try" gives the writer a next step. Tying each pair to a rubric line keeps the comments on what you'll actually grade.

**Example from our test (9th grade argument essay, should students use phones at lunch?):**

- “After the evidence about ___, I thought it was supposed to show ___.”
- “Right after that evidence, add a sentence explaining how ___ supports your side.”

**We tested it: works after a fix.**
- **What came back first:** A one-page form with 2 starters for each of 5 rubric lines. Every starter pointed to a spot, but all 10 were teacher-style fix orders, like "Next to this piece of evidence, add or correct the article title so it reads ____." A 9th grader would have to already know the fix to finish them.
- **What we changed:** Asked for starters in words a 9th grader would really use: one about what a reader noticed or where they got confused, and one with a next step.
- **What came back after:** A clean table with "What I noticed" and "What you could try" columns. Its helpful example was specific ("you say students need a break, but I couldn’t tell how phones would help"), next to an unhelpful "Paragraph 2 needs work."
- **Your check:** Model one row out loud with a sample draft before students try it. The form leaves no room for what works well, so if you want that, add one line at the bottom.

**Source:** [Edutopia, Teaching Kids to Give and Receive Quality Peer Feedback](https://www.edutopia.org/article/teaching-kids-give-and-receive-quality-peer-feedback)

---

### 8. Brag sheet for recommendation letters: questions that get you real stories
**Category:** Feedback · **Grades:** 11-12 · **Tool:** Any chatbot · **Takes about:** 5 min · **Slug:** brag-sheet-recommendation-letter

**Before you paste:** the questionnaire has no student information in it, so it's safe to make with AI. Students' filled-in answers and the letter itself are full of student details: keep those out of personal AI tools and use your district-approved one, or none.

**Prompt:**
> I'm a [grade] [subject] teacher and students are asking me for college recommendation letters. Write a one-page questionnaire (a brag sheet) for them to fill out before I write. Ask for specific moments from my class, not adjectives: a time they struggled and what they did, a project or assignment they're proud of and why, how they helped classmates, and anything outside class they want me to know. Include a line for each college's deadline and how the letter is submitted. Keep it to [8] questions or fewer, and write it to students in plain, friendly words. Don't ask about health, disability, religion, immigration status, or family finances, and add a note that they can leave out anything they'd rather not share. Then give me a short checklist for turning their answers into a letter.

**Why it works:** A recommendation letter lives or dies on one specific story, and students remember different moments than you do. Common App has a free general brag sheet. This prompt makes one about your class, asking for moments instead of adjectives.

**Example from our test (11th grade chemistry):**

"When did you get stuck in chemistry? What were you working on, and what did you do next? What happened after you tried that?"

**We tested it: worked first try.**
- **What came back:** 6 questions, under the limit of 8, all asking for moments: getting stuck, a lab they're proud of, helping a lab group, and "What’s one other moment from class you’d like me to remember?" It added a deadline table with a "How to submit" column and the note "You can skip any question." It didn't ask about health, religion, immigration, or money.
- **What it got wrong:** Nothing, but it left out two things Common App's version asks: the first name and the pronouns the student wants you to use in the letter.
- **Your check:** Add a name and pronoun line. Its checklist is sensible ("Pick one or two examples you can describe from firsthand observation"), but check your school's own form and deadlines first: some counselors want their form used.

**Source:** [Common App, Teacher Brag Sheet (student questionnaire, September 2026)](https://www.commonapp.org/static/ed4c5a971117695c5feaf1c66b51ae8d/Teacher-Brag-Sheet.pdf)

---

## CLASSROOM ROUTINES

### 9. Literacy centers rotation schedule for K-2, with picture-cue directions
**Category:** Classroom routines · **Grades:** K-2 · **Tool:** Any chatbot · **Takes about:** 10 min, plus 5 min to check the schedule · **Slug:** literacy-centers-rotation-schedule

**Prompt:**
> Plan literacy centers for my [grade] class. I have [number] students in [number] groups of [size], a [length]-minute block, and these centers, with how many students each one fits: [list]. I meet with one group at my teacher table at a time. Make a rotation schedule so every group visits my table and every center once, no two groups are at the same place at the same time, and each rotation includes 1 minute to clean up and move. Show it as a table with rotations as rows and groups as columns, with start and end times. For each center, write the directions as 3 short steps a [grade] student can follow with picture cues (describe the picture for each step), plus what a student does when finished. If something in my setup doesn't fit, tell me before giving the plan. Then list what I need to teach before the first day of centers.

**Why it works:** Centers fall apart over logistics, not content: two groups at the listening center, or five kids for four headphones. The schedule table lets you check every rotation in a minute, and "tell me if something doesn't fit" catches the headphone problem before Monday.

**We tested it: worked first try.**
- **What came back:** For 20 first graders in 4 groups of 5, with 4 centers plus the teacher table, it opened with the problem we planted: "The listening center has one fewer headphone than each group needs," and offered a turn-taking fix. Then a 5-rotation schedule of 12 minutes each, 60 minutes total. We checked every row and column: each group visits every place once, and no two groups are ever in the same place. It pointed out the open slot: "Rotation 2 gives you 11 minutes to circulate while all four groups work independently."
- **Picture cues:** 3 steps per center, like "Build the word with letters. (Picture cue: letter tiles spelling “sun.”)"
- **Your check:** 5 moves in an hour is a lot for 1st graders, so you may want 4 rotations and two days. Edutopia's tip is the other way to set this up: keep mixed center groups steady all year and pull kids to your table by need. If that's you, ask for the schedule without the teacher table.

**Source:** [Edutopia, 5 Tips for Creating Elementary Literacy Stations](https://www.edutopia.org/article/creating-elementary-literacy-stations)

---

## NEW TOOLS

### 10. Gemini now lets you preview and edit the file in the chat: a printable worksheet as a Google Doc
**Category:** Tools · **Grades:** K-12 · **Tool:** Gemini app (school or personal account) · **Takes about:** 5 min, plus 5 min to work the problems · **Slug:** gemini-worksheet-google-doc

**What's new:** Gemini could already make files (Google Docs, PDFs, Word files, and more) as of April 2026. On October 29, 2026, Google added preview and editing right in the chat: Gemini shows the file, you can type changes yourself or highlight text and ask Gemini to refine it, then open it in Google Docs, Slides, or Sheets, or download it (slide decks as PPTX or PDF). PDF preview and editing work on the web and the phone app; the other file types are web only. Google says it's available to all Google Workspace customers with no separate admin setting: if your school has the Gemini app turned on, you have it.

**Prompt:**
> Make a one-page practice worksheet as a document for my [grade] class on [skill]. Include a name and date line, [8] problems that start easy and get harder (the last 2 are word problems), space to show work under each, and an answer key on a separate page at the end. Solve every problem yourself and make sure each has exactly one answer, in simplest form. Write math as plain text, like 3/4. Use short numbered directions and no pictures. Then list the answers here in the chat too, so I can check them before I print.

**Why it works:** The copy-paste step is where worksheets used to break: math symbols turn into code and the spacing falls apart. A real file skips that. Asking for the answers in the chat too means you can check the key without opening the file.

**Example from our test (5th grade, adding fractions with unlike denominators):**

5. 25/30 + 21/30 = 46/30 = **23/15**

7. 9/24 + 10/24 = **19/24 mile**

**We tested it: worked first try (we tested in a plain chat, not inside the Gemini app).**
- **What came back:** A worksheet with a name and date line, 3 short directions, 6 problems from 1/2 + 1/4 up to 7/12 + 5/18, and 2 word problems, then a key with the steps shown and a quick answer list. We worked all 8, and every answer was right and in simplest form.
- **What to know:** It left sums over 1 as fractions (25/24, 23/15) and said so in the directions: "If your sum is greater than 1, leave it as a fraction." If your class writes mixed numbers, say so in the prompt.
- **Your check:** Work the key yourself, and print one copy to check that the work space is big enough. The last numeric problem (7/12 + 5/18, common denominator 36) may be too hard for your class.

**Source:** [Google Workspace Updates, Create, preview, and edit files directly in the Gemini app (October 29, 2026)](https://workspaceupdates.googleblog.com/2026/10/create-preview-and-edit-files-directly-in-the-Gemini-app.html), [Google Workspace Updates, Move from conversation to creation with file generation in Gemini (April 27, 2026)](https://workspaceupdates.googleblog.com/2026/04/move-from-conversation-to-creation-with-file-generation-in-Gemini.html)

---

### 11. Gemini's immersive explorations: a question guide so students explore with a purpose
**Category:** Tools · **Grades:** 6-12 · **Tool:** Gemini app (student hub), plus any chatbot for the guide · **Takes about:** 15 min, including trying the exploration yourself · **Slug:** gemini-immersive-explorations-guide

**What's new:** On October 28, 2026, Google added immersive explorations to the Gemini app: interactive, visual scenes students explore layer by layer, like trade routes on the Silk Road, the inside of a jet engine, or the physics of lightning. On school accounts (Education Fundamentals, Standard, and Plus), students find them in the Gemini student hub under "Try immersive explorations." Anyone with Gemini app access can also open them at gemini.google.com/immersive-explorations. They're in English and five other languages, and Google says audio narration is coming. One thing to check first: on November 3, Google said Gemini will be fully off for K-12 student accounts until a school admin turns it on. It hasn't given a date for that change. Ask your tech coordinator whether your students have access, and have a teacher-led backup (you project it) if they don't.

**Prompt:**
> My [grade] [subject] students are going to use [the exploration, e.g. Gemini's immersive exploration on the physics of lightning] for [15] minutes. I tried it myself first, and here are my notes on what students will see: [your notes, part by part]. Write a one-page exploration guide: 1 question to answer before they start (what do you already think?), 4 questions they can only answer by exploring, each naming the part of the exploration where they will find the answer, and 1 question after that connects back to [what we're learning]. For each question, give the answer I should expect, using only my notes and facts you're confident about. If a question or answer depends on something that isn't in my notes, say so. Keep the words at a [grade] reading level.

**Why it works:** Interactive scenes are easy to click through without learning anything. A short guide with a prediction first and a connection after turns 15 minutes of clicking into 15 minutes of looking for something. The chatbot can't see the exploration, so your notes from trying it yourself are what keep its answer key honest.

**We tested it: works after a fix (we tested in a plain chat, not inside the Gemini app).**
- **What came back first:** Without notes, an 8th grade lightning guide whose science was right but generic: "Find a control or a step that changes what you see." It flagged 4 of its 6 answers "Check in Gemini," because it was guessing what's on screen.
- **What we changed:** After review, we added the teacher's own notes, part by part (we wrote sample notes, since the chatbot can't see the real scene), and asked it to point each question at a part.
- **What came back after:** 4 questions tied to parts of the scene, like "Watch what happens near the tall tree. What rises from the tree, and which way does the bright flash travel after the paths meet?", with answers taken from the notes. It flagged the one answer that went past them: "The doorknob example uses a class concept beyond the exploration notes."
- **Your check:** Your notes are the answer key, so get the labels right when you try it. If students can't get in, project it and run the same guide as a whole class.

**Source:** [Google Workspace Updates, Immersive explorations now available in the Gemini app (October 28, 2026)](https://workspaceupdates.googleblog.com/2026/10/immersive-explorations-now-available-in-the-Gemini-app.html), [Google, Designing responsible AI for learning (November 3, 2026)](https://blog.google/products-and-platforms/products/education/ai-learning-era-updates-2026/)
