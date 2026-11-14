# Simple Teacher AI: Use Case Batch 3 (tested)

Researched 2026-11-14. Revised after a Codex review, then every prompt that could be tested in a plain chat was tested.

**Privacy rule for every card:** no student names or identifying details go into an AI tool. Removing names is not always enough: a small detail (a rare diagnosis, a family situation, a tiny class) can still identify a child. Use your district-approved tool, and when in doubt, describe a made-up student instead of a real one. The US Department of Education's [student privacy guidance](https://studentprivacy.ed.gov/faq/i-want-use-online-tool-or-application-part-my-course-however-i-am-worried-it-violation-ferpa) says to check with your school or district before using any online tool with student information.

**How we tested:** each prompt was filled in with a sample classroom (3rd, 5th, 6th, 7th, 8th, 9th, or 10th grade, noted on each card) and sent to OpenAI's GPT-6.1 model, the family behind ChatGPT, with no other context. Other chatbots and other grades may answer differently. We checked every answer, worked every math problem, compared every quote to the source text word for word, and counted words where the card promises a limit. For prompts that review your work, we also tested a good version, to see whether it makes up problems. Prompts that fell short were fixed and tested again. The unedited replies are in `use-cases-batch-3-test-outputs.md`.

**Results:** 11 of 12 tested. 7 worked on the first try. 4 needed a better prompt, and all 4 now work (two took a third try). 1 card covers a new feature that needs the Gemini Notebook app and wasn't tested yet. A Codex review before testing also tightened 3 prompts and fixed several product claims.

**One tip for every card:** if fractions or math symbols look strange when you paste them into a doc, add "write math as plain text, like 1/2" to the end of the prompt.

"Takes about" is our own estimate of hands-on time, including the time to check what comes back. It is not a researched stat.

---

## PLANNING

### 1. Check your unit's order for missing steps
**Category:** Planning · **Grades:** K-12 · **Tool:** Any chatbot · **Takes about:** 5 min · **Slug:** unit-plan-sequence-check

**What's new:** Microsoft's Teach tool in Copilot can now draft multi-week unit plans from your standards and materials. Microsoft announced it on October 20, 2026, with general availability planned for late October, so check whether your school account has it. Whether you, your curriculum, or an AI drafted the unit, the order is worth a second look before you teach it.

**Prompt:**
> Here is the lesson-by-lesson order for my [grade] [subject] unit on [topic]: [paste the list of lessons, one line each]. Check the order like an experienced [subject] teacher. Find up to 5 places where a lesson needs a skill my students haven't been taught yet in this unit, or where two lessons should switch places. If there are fewer than 5, say so instead of inventing more. For each one, name the lessons involved, say which skill is missing or out of order, and give one specific fix (move a lesson, or add a short mini-lesson). Assume students know what a typical [grade] student learned in earlier grades, and list what you assumed. Don't rewrite the whole unit.

**Why it works:** A unit can look fine lesson by lesson and still ask kids to use a skill two days before you teach it. Asking for "up to 5" keeps it from inventing problems in a good unit, and listing its assumptions shows you where your class might differ.

**We tested it: worked first try.**
- **What came back:** We planted 3 problems in a 10-lesson 5th grade fractions unit, and it caught all 3: adding fractions with unlike denominators came three lessons before equivalent fractions, the hard mixed-number lesson came before the easy one, and subtracting with unlike denominators was never taught before a later lesson needed it. It found 4 problems, not 5, and the 4th was fair: comparing fractions first gives kids an easier place to practice common denominators.
- **Does it invent problems?** We also gave it a solid 3rd grade multiplication unit. It said "I found 0 definite sequencing problems, rather than five," and offered two small tips instead.
- **Your check:** Read its list of assumptions. It treated equivalent fractions as review from 4th grade, so if your class never got there, the gap is bigger than it says.

**Source:** [Microsoft Education Blog, What's New in Microsoft EDU, October 2026](https://techcommunity.microsoft.com/blog/educationblog/whats-new-in-microsoft-edu-%E2%80%93-october-2026/4516290), [Achieve the Core, Coherence Map (how math standards build on each other)](https://tools.achievethecore.org/coherence-map/)

---

### 2. Lab safety check: find the hazards in a lab procedure before students run it
**Category:** Planning · **Grades:** 6-12 · **Tool:** Any chatbot · **Takes about:** 5 min, plus time with the safety data sheets · **Slug:** lab-safety-procedure-check

**Read this first:** this is a second set of eyes, not a safety review. Your school's chemical hygiene plan, the safety data sheet (SDS) for each chemical, and your department head have the final say. AI can miss a hazard, and it can state a chemical fact wrong with total confidence. It also can't see your room: ventilation, the eyewash, and how many adults are supervising are on you.

**Prompt:**
> Here is a lab procedure my [grade] [course] students will do: [paste the procedure, including chemicals, concentrations, and amounts]. Act as a careful high school lab safety reviewer. List every real safety problem you find, most dangerous first: missing protective equipment, steps in an unsafe order, chemicals that shouldn't be mixed or heated, missing cleanup or disposal steps, and directions students could misread. Don't pad the list with steps that are fine. Never tell me the procedure is safe: a qualified person at my school decides that. If you find no problems, say "no problems found." For each problem, quote the step, say in plain words what could go wrong, and give a specific fix. Then list what you couldn't check from the text alone (like ventilation, eyewash access, or supervision), and what I should look up in the safety data sheet for each chemical. Don't make up chemical facts: if you aren't sure about a hazard, say so.

**Why it works:** Quoting the step makes it point at your procedure instead of reciting general lab rules. For safety, we ask for every problem, not a top 5, so a sixth hazard can't fall off the list. "Never tell me the procedure is safe" keeps a chatbot from signing off on something only a qualified person should approve, and the SDS list sends you to the real authority.

**We tested it: worked first try.**
- **What came back:** We wrote a magnesium and hydrochloric acid lab with 6 planted hazards, and it caught all 6: an apron but no goggles, water poured into the acid, a stopper pressed into a tube that makes hydrogen, a "deep sniff" of the gas, a Bunsen burner held under the reaction, and "wipe it off with a paper towel" for acid on skin. It opened with "Do not use this procedure as written" and explained the stopper plainly: "Pressure can eject the stopper or break the glass, spraying acid."
- **Does it invent problems?** On a safe version of the same lab, it flagged smaller fixes, not made-up dangers. The best one: our "tell the teacher right away and rinse" could make a student go find the teacher before rinsing.
- **What we changed:** After review, the prompt no longer lets it call a lab safe, and it now lists what it couldn't check from the text alone. We retested both labs: it still caught all 6 hazards, listed what it couldn't check (ventilation, eyewash and safety-shower access, supervision), and never called either lab safe.
- **Your check:** It ranked the missing goggles 6th of 8. You'd rank that higher. Check every chemical fact against the SDS, and have your department head look at any lab you change.

**Source:** [American Chemical Society, Guidelines for Chemical Laboratory Safety in Secondary Schools (PDF)](https://www.acs.org/content/dam/acsorg/about/governance/committees/chemicalsafety/publications/acs-secondary-safety-guidelines.pdf), [ACS, middle and high school chemistry safety resources](https://www.acs.org/education/policies/middle-and-high-school-chemistry/safety.html)

---

### 3. Claim, evidence, reasoning example: a strong and a weak CER paragraph from your own lab data
**Category:** Planning · **Grades:** 5-10 · **Tool:** Any chatbot · **Takes about:** 4 min · **Slug:** claim-evidence-reasoning-example

**Prompt:**
> My [grade] science students are writing claim, evidence, reasoning (CER) paragraphs to answer this question: [question]. Here is the data from our lab: [paste your data table]. If the data don't clearly support one claim, or a result doesn't fit the pattern, tell me that first, and don't change or leave out any numbers. Then write two model answers to show the class: one strong, one weak but typical. Use only the numbers in my data, copied exactly. In the strong one, the reasoning must explain why the evidence supports the claim using this science idea: [idea]. Don't just repeat the data. In the weak one, make the mistakes students this age really make (like a claim with no data, or reasoning that just restates the evidence). Label each part [Claim], [Evidence], [Reasoning]. After the weak one, list its mistakes so I can have students find them first. Keep each paragraph under [80] words.

**Example from our test (6th grade, does water temperature change how fast sugar dissolves?):**

Strong: "[Claim] Sugar dissolves faster in warmer water. [Evidence] Dissolving took 95 seconds at 10 degrees C, 61 seconds at 25 degrees C, 34 seconds at 50 degrees C, and 18 seconds at 75 degrees C. [Reasoning] Water particles move faster when water is warmer, so they hit the sugar more often and with more energy. These collisions help separate sugar particles and spread them through the water faster, explaining the shorter dissolving times."

Weak: "[Claim] Sugar dissolves faster in warmer water. [Evidence] The sugar took longer to dissolve in cold water and less time in hot water. [Reasoning] This proves my claim because the warmer the water was, the faster the sugar dissolved."

**Why it works:** Reasoning is the part students find hardest, the "why does this evidence matter?" step. A weak model next to a strong one, built on the data your class actually collected, gives them something concrete to fix.

**We tested it: worked first try.**
- **What came back:** Two models under our 80-word limit (73 and 39 words) that copied all four times exactly. The strong reasoning used the particle idea instead of repeating the data. The mistake list caught the missing numbers, the reasoning that "repeats the pattern instead of explaining why it happens," and the word "proves."
- **What we changed:** After review, we added "if a result doesn't fit the pattern, tell me first, and don't change or leave out any numbers," then tested messy data: our 50-degree trial took 72 seconds, slower than 25 degrees. It flagged that right away ("the pattern is not consistent"), kept the 72, and its strong model said warmer water "generally" works faster and named the result that "does not fit." With the clean data it said "Every result fits the pattern."
- **Your check:** When a result doesn't fit, decide with the class whether to redo that trial before anyone writes.

**Source:** [Edutopia, Teaching CER in Middle School Science With a 5-Day Structure](https://www.edutopia.org/article/teaching-cer-middle-school-science/)

---

### 4. Number talks for the week: one problem a day, with the strategies kids will use
**Category:** Planning · **Grades:** K-8 · **Tool:** Any chatbot · **Takes about:** 5 min, plus 5 min to check the steps · **Slug:** number-talks-problems

**Prompt:**
> Plan 5 number talks for my [grade] class, one per day, 5 to 10 minutes each. We are working on [skill, e.g. "adding two-digit numbers in your head"]. For each day give me: one problem to show the class, 2 to 4 strategies students this age might use, each written step by step the way a student would say it, one common wrong answer and the thinking behind it, and one question I can ask to push the discussion. Pick numbers that make more than one strategy useful. Write math as plain text, like 38 + 25. Each strategy must work cleanly with that day's numbers, with no false starts. The common wrong answer must come from a real misunderstanding kids this age have (like place value or forgetting to regroup), not a basic fact error like 4 + 5 = 11. Do the mistaken steps yourself to make sure they lead to that wrong answer. Solve every problem and check every step of every strategy yourself.

**Example from our test (3rd grade, Day 2):**

Problem: 47 + 26 = 73

- Add in parts: "47 + 20 = 67. Then 67 + 6 = 73."
- Make a ten first: "I split 26 into 3 and 23. 47 + 3 = 50. Then 50 + 23 = 73."
- Combine tens and ones: "40 + 20 = 60. 7 + 6 = 13. Then 60 + 13 = 73."

Common wrong answer: 63. "40 + 20 = 60. 7 + 6 = 13. I put the 3 ones with 60 and got 63." The student drops the extra ten in 13: 60 + 3 = 63.

Discussion question: "Where can we see the new ten in each strategy?"

**Why it works:** A number talk only works if you can hear a strategy and recognize it fast. Having the likely strategies and the common wrong answer written out ahead of time lets you record kids' thinking on the board instead of puzzling over it.

**We tested it: works after a fix.**
- **What came back:** Five number talks for 3rd grade, from 34 + 25 up to 68 + 57, which crosses 100. We worked every step of all 15 strategies, and every one was right. Each day's wrong answer comes from a real place-value slip, like 63 for 47 + 26.
- **What went wrong first:** Day 1's "common wrong answer" was 511, which only happens if a child thinks 4 + 5 = 11. One strategy also changed its mind halfway through: "Actually, that didn't make it friendlier."
- **What we changed:** Asked for strategies with no false starts and wrong answers from a real misunderstanding, not a fact error, and told it to do the mistaken steps itself. On retest, Day 1's wrong answer became 41: "The student treats the 2 tens as 2 ones."
- **Your check:** Show the problem, not the strategies. The strategies are for you, so you can recognize what kids say.

**Source:** [youcubed (Stanford), Number Talk activity guide (PDF)](https://www.youcubed.org/wp-content/uploads/2018/09/3-Number-Talks-Final.pdf)

---

## DIFFERENTIATION

### 5. Guided notes template from your own slides
**Category:** Differentiation · **Grades:** 4-12 · **Tool:** Any chatbot · **Takes about:** 5 min · **Slug:** guided-notes-template

**Before you paste:** take student names, photos, and any notes about specific students out of your slides first.

**Prompt:**
> Here are my notes for tomorrow's [grade] [subject] lesson: [paste your slides or notes]. Turn them into a one-page guided notes handout. Keep my order and my wording. Replace about [10] key words with blanks: only words that matter (vocabulary, key numbers, causes and effects), never small words like "the" or "is." Each blank must be a word or short phrase that appears in my notes, so students can find it while I teach. If you blank a word, blank it everywhere it appears on the handout except the title, so the page doesn't give away its own answers. Number every blank. Make every blank the same length, like ________, so the length doesn't give the answer away. Add 2 short "In your own words" questions at the end. Then give me an answer key that lists every numbered blank in order with the exact word from my notes. Don't add facts that aren't in my notes.

**Example from our test (9th grade biology, photosynthesis):**

- Photosynthesis happens in the (1) ________, mostly in leaf cells.
- (2) ________ contain (3) ________, a green pigment that absorbs light energy.
- The (6) ________ happen in the (7) ________ and capture light energy.
- The (8) ________ happens in the (9) ________ and uses that energy to build glucose.

Answer key: 1. chloroplasts, 2. Chloroplasts, 3. chlorophyll, 6. light-dependent reactions, 7. thylakoids, 8. Calvin cycle, 9. stroma.

**Why it works:** Guided notes let students listen instead of copying every word, and the blanks keep them following along. Building them from your own slides means the blanks match what you actually say.

**We tested it: works after a fix (two fixes).**
- **What came back:** A one-page photosynthesis handout with 10 numbered blanks, all the same length, in our order and our wording, plus an answer key that matched. It added no facts.
- **What went wrong first:** The page answered its own blanks. It blanked "chloroplasts" in one line and printed the word again in the very next one: "Chloroplasts contain (3) ________." Carbon dioxide, glucose, and oxygen were also blanked in one place and printed in another.
- **What we changed:** First we told it not to blank a word that's printed elsewhere. It obeyed, but it dodged the key terms and blanked filler like "growth" and "underside." So we asked it to blank a word everywhere it appears. On the third try both "chloroplasts" spots were blanks, and the blanks were real vocabulary: chlorophyll, thylakoids, stroma, Calvin cycle.
- **Your check:** Read the page once as a student. Could you fill any blank from somewhere else on the page?

**Source:** [Modern Classrooms Project, A Guide to Guided Notes](https://www.modernclassrooms.org/blog/a-guide-to-guided-notes)

---

## ASSESSMENT

### 6. Spaced review warm-ups from what you've already taught
**Category:** Assessment · **Grades:** 3-12 · **Tool:** Any chatbot · **Takes about:** 5 min, plus 5 min to check the key · **Slug:** retrieval-practice-warm-ups

**Prompt:**
> Here are the topics my [grade] [subject] class has learned so far this year, with the week we taught each: [list]. Make [number] days of 3-question review warm-ups. Each day, mix topics from different times: one from the last 2 weeks, one from 3 to 6 weeks ago, and one from earlier than that. Don't put the same topic on two days in a row. When a topic comes back, ask about it a different way than before (for example a word problem, finding a mistake, or working backward), so the questions don't all follow the same pattern. Questions should make students recall or use the idea, not just recognize it, so no multiple choice and no true or false. Write math as plain text, like 3/4. Solve every question yourself and make sure each has exactly one correct answer. Then give me a separate answer key, and a table showing which topic appears on which day so I can check the spacing.

**Example from our test (7th grade math, Day 4):**

1. A student solves x - 7 = -12 and gets x = -19. Find the correct value of x and explain the mistake.
2. A jacket costs $54 after a 25% discount. What was its original price?
3. A submarine starts at an elevation of -18 meters and ends at -31 meters. What signed number represents its change in elevation?

Answers: x = -5 (add 7 to both sides instead of subtracting 7), $72, -13 meters.

**Why it works:** Coming back to old topics after a gap, and making students pull the answer from memory, are two of the best-supported study moves in learning research. The topic table lets you check the spacing in seconds.

**We tested it: works after a fix.**
- **What came back:** Five days of 7th grade warm-ups that followed the spacing rule exactly: one topic from the last 2 weeks, one from 3 to 6 weeks ago, one from earlier, and no topic two days in a row. We worked all 15 questions, and every answer in the key was right.
- **What went wrong first:** Nothing was wrong, but it was repetitive. Three of the five days asked the same question with new numbers: "Find the constant of proportionality k in y = kx."
- **What we changed:** Asked it to ask about a returning topic a different way each time. On retest the old topics came back as a find-the-mistake question ("A student writes -8 x (-3) = -24"), a working-backward percent problem, and word problems about temperature and a submarine. All 15 answers were still right.
- **Your check:** With only 2 topics in each time window, the same topics come back every other day. List more topics and you get more variety.

**Source:** [IES practice guide, Organizing Instruction and Study to Improve Student Learning (Recommendations 1 and 5, PDF)](https://ies.ed.gov/ncee/WWC/Docs/PracticeGuide/20072004.pdf)

---

### 7. Study guide template that matches your test without giving it away
**Category:** Assessment · **Grades:** 4-12 · **Tool:** Any chatbot · **Takes about:** 5 min, plus 5 min to work the problems · **Slug:** study-guide-template

**Prompt:**
> My [grade] [subject] class has a test on [unit]. Here is what the test covers: [list each skill and the kind of question, e.g. "solve two-step equations (4 short problems)"]. Make a one-page study guide students can use at home. For each skill: one sentence on what to remember, one worked example, and 2 practice problems like the test but not copies. Put all the answers in a separate answer section at the bottom. Write math as plain text, like 2x + 3 = 11. Solve every problem yourself and make sure each has exactly one correct answer. Only use the skills I listed: don't add skills that aren't on the test.

**Example from our test (6th grade ratios, one of four skills):**

Remember: Divide each price by its quantity; the lower price per unit is the better buy.

Worked example: Rice costs $6 for 3 pounds or $10 for 4 pounds. Which is the better buy? $6 / 3 = $2 per pound. $10 / 4 = $2.50 per pound. The 3-pound bag is the better buy.

Practice: A 4-pound bag of potatoes costs $6. A 6-pound bag costs $8.40. Which bag has the lower price per pound?

**Why it works:** Paste the list of what the test covers, not the test itself, and the guide can't leak your questions. Practice that makes students pull up and use the skill does more than rereading notes.

**We tested it: worked first try.**
- **What came back:** A one-page 6th grade ratios study guide covering all four skills on our list and nothing extra. We worked the 4 worked examples and all 8 practice problems, and every answer was right. It even included a small trap that shows up on real tests: "Write the ratio of students wearing boots to students wearing sneakers," with the numbers given in the other order.
- **What it got wrong:** Nothing.
- **Your check:** One answer is $0.625 per pencil. If your class rounds money to the cent, say so in the prompt.

**Source:** [IES practice guide, Organizing Instruction and Study to Improve Student Learning (Recommendation 5, PDF)](https://ies.ed.gov/ncee/WWC/Docs/PracticeGuide/20072004.pdf)

---

### 8. Primary source comparison questions with a quote-proof answer key
**Category:** Assessment · **Grades:** 6-12 · **Tool:** Any chatbot · **Takes about:** 5 min, plus 5 min to check the quotes · **Slug:** primary-source-comparison-questions

**Prompt:**
> Here are two primary sources my [grade] [subject] class is comparing. Document A: [title, author, date, and the text]. Document B: [title, author, date, and the text]. Treat these two texts as the only sources. Write 6 questions that make students compare them: 2 about what each document says, 2 about how they are alike or different, and 2 about each author's purpose or point of view. Every question must be answerable from the two texts. Then give me an answer key that quotes the exact words from the documents that support each answer, word for word. If a question needs outside knowledge, label it "needs background" and say what students need to know.

**Example from our test (8th grade, Declaration of Independence and Declaration of Sentiments):**

- "How does Document B change Document A's statement about who is created equal?" Key: A, "all men are created equal"; B, "all men and women are created equal."
- "How does Document B use Document A's principle of consent to argue against women's exclusion from voting and making laws?"

**Why it works:** You choose and paste the documents, so the AI is working from real sources. A 7th grade teacher told Education Week that even when a chatbot was loaded with the documents, it sometimes made up a source. Asking for word-for-word quotes lets you catch that in seconds with Ctrl+F.

**We tested it: worked first try.**
- **What came back:** We gave it excerpts from the Declaration of Independence and the Declaration of Sentiments. It wrote 6 good comparison questions, 2 of each kind we asked for. We checked all 16 quotes in the answer key against our text, and all 16 matched word for word.
- **What it got wrong:** Nothing false. It said no question needs background knowledge, but 8th graders may not know that "the elective franchise" means the right to vote.
- **Your check:** Word-for-word quotes prove it didn't invent text. They don't prove the reasoning is right, so read the answers to the point-of-view questions yourself.

**Source:** [Education Week, In Social Studies, Does AI Shortcut Historical Thinking or Deepen It? (October 2026)](https://www.edweek.org/teaching-learning/in-social-studies-does-ai-shortcut-historical-thinking-or-deepen-it/2026/10)

---

### 9. Move the thinking where you can see it: redesign an assignment students could hand to a chatbot
**Category:** Assessment · **Grades:** 6-12 · **Tool:** Any chatbot · **Takes about:** 5 min · **Slug:** redesign-assignment-for-ai

**Prompt:**
> Here is an assignment for my [grade] [subject] class: [paste the directions and due date]. Students could hand most of it to a chatbot. Redesign it so more of the thinking happens where I can see it, without making it longer for students. Keep the learning goal, the final product, and the assignment's requirements the same. I teach [number] students, so keep the added grading under [number] minutes total. Suggest up to 4 changes, like a short in-class step, a checkpoint I grade, a quick conversation, or a choice that uses something only my class did. For each change, say how many minutes of class time it takes and how many minutes of my grading time it adds. Don't claim any change makes cheating impossible. Then rewrite the directions with the changes in, in plain words students can follow. Copy my requirements into the new directions word for word and don't add any. After the directions, list every requirement you changed or added, or write "none."

**Why it works:** No assignment is AI-proof, but grading the steps along the way, not just the final product, makes the steps worth doing. A grading budget keeps the redesign realistic when you teach 150 students.

**We tested it: works after a fix (two fixes).**
- **What came back:** For a 10th grade argument essay: 10 minutes of planning in class with the articles, a quick "ready" or "revisit" mark on each plan, and 15 minutes to start the essay in class. Total: 27 minutes of class time and "about 38 minutes of added grading" for 150 students. It said the steps "won't make cheating impossible."
- **What went wrong first:** It quietly changed the assignment. Our directions asked for 3 pieces of evidence "from the two articles." Its new directions added "Use evidence from both articles," a rule we never set. It also ignored scale: one step added a minute of grading per student, which is 2.5 hours for 150 students.
- **What we changed:** Gave it our class size and a grading budget, which it kept on the next try. It still added the "both articles" rule, so we told it to copy our requirements word for word and list anything it changed. On the third try the requirements matched ours exactly.
- **Your check:** Put its directions next to yours. The list of changes at the end makes that fast.

**Source:** [Ditch That Textbook, Is AI doing too much of your students' classwork?](https://ditch.beehiiv.com/p/2-16-2026)

---

## STUDENTS AND AI

### 10. National History Day banned generative AI. Sort what's allowed for your students.
**Category:** Students and AI · **Grades:** 6-12 · **Tool:** Any chatbot · **Takes about:** 5 min · **Slug:** national-history-day-ai-rules

**What changed:** As of October 1, 2026, National History Day says students "may not use generative AI for research, analysis, design, or creation of their projects," and breaking the rule may mean disqualification. The rule covers student projects entered in NHD contests, not how you teach. Still allowed: spelling and grammar checkers, bibliography generators like EasyBib and NoodleTools, and Canva for fonts, borders, and adjusting an existing image's brightness and clarity. Not allowed: Canva's AI tools to create images, generate text, or change historical images. Judge the feature, not the brand: the same app can have an allowed tool and a banned one. Students who used AI before October 1 only to brainstorm topics or keywords, find library resources, or simplify a source's language won't be penalized, but they must cite the tools and explain how they used them in their process paper and annotated bibliography. Use of AI as an accessibility support is decided case by case with contest officials.

**Prompt:**
> Here is National History Day's AI policy: [paste the policy text from NHD's AI guidance]. My [grade] students keep asking whether specific tools are OK for their NHD projects. Sort each of these into "Allowed," "Not allowed," or "Ask NHD," using only the policy I pasted: [list, e.g. "Grammarly rewriting a sentence," "Google Translate on a Spanish-language source"]. For each, quote the line from the policy that decides it. If the policy doesn't clearly decide it, put it in "Ask NHD" and say what's unclear. Then turn the result into a half-page student handout in plain words.

**Example from our test (8th grade student handout, excerpt):**

Not allowed: "Accept Grammarly's AI rewrite of a whole sentence." "Use Google's AI Overview for project research." "Use Canva's AI photo editor to remove scratches from historical photos."

Ask your teacher to check with NHD: "Google Translate: The policy does not clearly explain whether translating a historical source is allowed."

**Why it works:** Students don't ask about "generative AI." They ask about Grammarly and Google Translate. Quoting the policy line for each answer lets you check the sort in a minute, and "Ask NHD" keeps it from guessing on the gray areas.

**We tested it: worked first try.**
- **What came back:** We gave it NHD's policy and 12 things 8th graders ask about. Every call matched the policy. Allowed: spell check, NoodleTools, Google search, and brightening a scan in Canva. Not allowed: Grammarly rewriting a sentence, ChatGPT topic ideas, Gemini summarizing a source, Google's AI Overview, and Canva's AI fixing a historical photo. It put Google Translate and text-to-speech for a student with a reading disability in "Ask NHD," which is right: the policy doesn't settle either one.
- **What it got wrong:** Nothing. We checked all 12 policy quotes against the text, and every one matched.
- **Your check:** Paste the policy from NHD's site, not from memory, and update the handout if NHD changes its guidance.

**Source:** [National History Day, AI Guidance for NHD Projects](https://nhd.org/en/resources/ai/), [NHD Generative AI policy (PDF)](https://nhd.org/wp-content/uploads/2026/09/NHD-GenAI-Policy.pdf)

---

### 11. Guided Learning in Google Classroom: write the one source Gemini will teach from
**Category:** Students and AI · **Grades:** 3-12 · **Tool:** Gemini in Google Classroom, plus any chatbot to draft the source · **Takes about:** 15 min, including your check · **Slug:** guided-learning-google-classroom

**What changed:** Rolling out since November 3, 2026, you can attach a Guided Learning activity to any Google Classroom assignment. Google says it's designed to give students step-by-step guidance rather than the answer, using the sources you attach. That's a design goal, not a guarantee, so try to get answers out of it yourself in the preview. You can see class and student insight summaries plus student chat transcripts. Your admin has to turn the Gemini app on for you and your students.

**The catch:** Google's help page says the instructions you type "are for students, and will not be referenced by Gemini." You can attach up to 5 sources, and Google recommends 1. So the source does the steering, and a short, correct one-page source that teaches the way you teach is worth the time.

**How to do it:** In Classroom, go to Classwork, then Create, then Assignment. Under Attach, pick Guided Learning, name it, add your source, then click Create and preview and try it as a student before you assign it. Make sure students can open the source file. Google says insights are AI-generated, can make mistakes, and are not meant for assessment or placement, so read the transcripts behind them. Transcripts only show if Gemini activity is turned on, and if your admin lets students delete chats, deleted chats disappear from your view.

**Privacy:** students' chats with the activity become records your teacher view can see, even though you never typed a name. Tell students that before they start, and check your district's rules on Gemini in Classroom before you assign it.

**Prompt to draft the source:**
> I'm making a one-page study source for a Guided Learning activity in Google Classroom. Gemini will tutor my [grade] students using this page, so it must be correct and complete. Topic: [skill]. Here is how I teach it: [paste your steps, vocabulary, and one example]. Write the page with: the goal in one sentence, key vocabulary with kid-friendly definitions, the steps in the order I teach them, 2 worked examples with every step shown, the 3 most common mistakes and how to fix each, and 3 practice problems with answers. Use my method and my words, not a different method. Write math as plain text, like 3/4. Solve every problem yourself and make sure each has exactly one correct answer. Then list anything you added that wasn't in what I gave you.

**We tested it: worked first try (we tested the prompt that drafts the source in a plain chat, not Guided Learning itself).**
- **What came back:** A clean one-page source on adding fractions with unlike denominators for 5th grade. It used our method, listing multiples to find the least common denominator, and kept our five steps word for word. We worked both examples and all 3 practice problems, and every answer was right.
- **What it got wrong:** Nothing, and it was honest about what it added, including "the vocabulary terms least common denominator, multiple, and simplify."
- **Your check:** Its practice problems were easy (1/2 + 1/3, 1/4 + 1/6, 1/8 + 1/4), and none needed simplifying. Swap in harder ones if your class is ready. Then try the activity as a student before you assign it.

**Source:** [Google Workspace Updates, November 4, 2026](https://workspaceupdates.googleblog.com/2026/11/educators-can-now-add-guided-learning-to-assignments-in-Google-Classroom-to-help-students-get-extra-support.html), [Google Classroom Help: Create and manage Guided Learning activities](https://support.google.com/edu/classroom/answer/18866217)

---

## NEW TOOLS

### 12. Free textbooks inside Gemini Notebook
**Category:** Tools · **Grades:** 9-12 · **Tool:** Gemini Notebook (formerly NotebookLM) · **Takes about:** 5 min to check

**What it is:** Since October 29, 2026, students can add free textbooks to a Gemini Notebook from OpenStax, the Open Textbook Library, and S Chand Publishing. Google says that once a textbook is added, answers are based on that book, with inline citations and links to the original source. Students can turn the book into study guides, practice quizzes, and flashcards.

**How to do it:** Open a notebook, select "Add sources," then choose "Textbooks" to browse the catalog.

**Before you recommend it:** Google's announcement is written for students and doesn't say whether it works on school accounts, so try it on yours first. Google doesn't say which grades it's meant for, and many of these books are written for intro college courses, so check the reading level and whether the book matches your course before you point a class to it. Click a few citations to make sure the answers match the source.

**Not tested yet:** needs the Gemini Notebook app. Facts checked against Google's announcement on 2026-11-14.

**Source:** [Google, Gemini Notebook now has access to textbooks (October 29, 2026)](https://blog.google/innovation-and-ai/products/gemini-notebook/new-access-textbooks/)
