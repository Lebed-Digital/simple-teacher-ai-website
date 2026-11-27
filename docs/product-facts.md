# Simple Teacher AI facts

The one place for facts this site states. Posts, page copy, FAQ answers and the ideas feed take their facts from here. If a vendor's page and this file disagree, the vendor is right: fix this file first, then the posts.

**When a fact changes:** update the line and its date, then search for the old wording and fix every hit, for example `rg -i "june 2028|june 30, 2027" posts src content`. That is the whole process.

Created 2026-11-27.

## What the site offers

- **Free one-page ChatGPT guide** at `/guide`: 10 practical ways to use ChatGPT for real classroom tasks, plus a student privacy reminder. Source: `src/blog/GuidePage.tsx`.
- **Newsletter:** free, one email a week, unsubscribe anytime. Source: `src/` newsletter components.
- **Classroom AI ideas** at `/ideas`: 60 tested prompt cards as of 2026-11-27, most written for any chatbot (46 of 60 list "Any chatbot"). Each card has a test verdict. Source: `src/ideas/ideas.json`.
- No paid product on this site. The footer credits Greg as the creator of ShortHand and links getshorthandapp.com. Source: `src/components/SiteFooter.tsx`.

## Privacy rule (every post and idea)

- Keep student names and other private student information out of AI tools. Removing a name is not always enough: use made-up students and totals. Follow the school or district AI and student data policy. Source: site copy, `posts/ai-privacy-mistake-student-names.md`.

## AI vendor facts the posts rely on

These change often. Re-check the vendor page before repeating any of them in a new post, and update the date here.

- **ChatGPT for Teachers:** free for verified U.S. K-12 teachers and school staff through June 2028 (some older OpenAI pages say June 2027; the plan page wins). Students, college instructors and teachers outside the U.S. do not qualify. OpenAI says pricing may change after June 2028. Last checked 2026-11-08. Source: https://chatgpt.com/plans/k12-teachers/, used in `posts/chatgpt-for-teachers-free.md`.
- **Claude for Teachers:** verified U.S. K-12 educators who sign up by June 30, 2027 get a full year free, on a free Claude for Teams plan. District sign-up available since August 28, 2026. Anthropic has not said publicly what it costs after the free year. Last checked 2026-11-08. Source: Anthropic support pages, used in `posts/claude-for-teachers-free.md`.
- **Free vs paid, general claim:** paid tiers mostly buy higher usage limits and speed, not better results on everyday teacher tasks. This is the author's experience, not a vendor fact. Source: `posts/free-vs-paid-ai-tools-for-teachers.md`.

## About the author

- Greg (Gregory Lebed): 3rd grade teacher who uses AI every week, creator of ShortHand. 20+ years in education (not "20 years teaching").

## Domains

- simpleteacherai.com. Sister site: getshorthandapp.com (never getshorthand.app).
