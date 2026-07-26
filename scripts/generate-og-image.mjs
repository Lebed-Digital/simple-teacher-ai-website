/**
 * Regenerates public/og-image.png (1200x630) for OG / Twitter card previews.
 *
 *   npx playwright install chromium   # once
 *   node scripts/generate-og-image.mjs
 *
 * Run this whenever the palette, the tagline, or the domain changes.
 * The colours below are copied from src/index.css: keep them in sync.
 */
import { chromium } from 'playwright'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const OUT = join(root, 'public', 'og-image.png')

const T = {
  paper: '#fafaf8',
  heading: '#14131a',
  ink: '#1e1d26',
  accent: '#2544d8',
  accentDark: '#1b32a4',
  blueLight: '#e6eafd',
  amber: '#ffc94d',
  rule: 'rgba(37, 68, 216, 0.1)',
}

const html = `
<html>
<head>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300..900&family=Figtree:wght@400;500;600;700&display=swap" rel="stylesheet">
<style>
  * { box-sizing: border-box; margin: 0; }
  body {
    width: 1200px; height: 630px; overflow: hidden;
    background: ${T.paper};
    font-family: "Figtree", system-ui, sans-serif;
    background-image: repeating-linear-gradient(to bottom, transparent, transparent 35px, ${T.rule} 36px);
    display: flex; flex-direction: column; justify-content: center;
    padding: 0 86px; position: relative;
  }
  .eyebrow {
    display: inline-flex; align-self: flex-start; align-items: center;
    background: ${T.blueLight}; color: ${T.accentDark};
    font-size: 21px; font-weight: 700; letter-spacing: 0.14em;
    text-transform: uppercase; padding: 12px 26px; border-radius: 999px;
    margin-bottom: 36px;
  }
  h1 {
    font-family: "Fraunces", Georgia, serif;
    font-size: 104px; line-height: 1.0; font-weight: 700;
    letter-spacing: -0.04em; color: ${T.heading};
  }
  .sub {
    margin-top: 30px; font-size: 35px; line-height: 1.32;
    font-weight: 600; color: ${T.ink}; max-width: 820px;
  }
  .rule { margin-top: 44px; width: 132px; height: 9px; background: ${T.accent}; border-radius: 999px; }
  .foot {
    position: absolute; left: 86px; bottom: 54px;
    display: flex; align-items: center; gap: 18px;
  }
  .mark {
    width: 62px; height: 62px; border-radius: 15px; background: ${T.accent};
    color: #fff; font-size: 25px; font-weight: 700;
    display: flex; align-items: center; justify-content: center;
    letter-spacing: 0.02em;
  }
  .wordmark { font-size: 29px; font-weight: 700; color: ${T.accent}; letter-spacing: -0.02em; }
  .ring {
    position: absolute; right: 92px; top: 74px;
    width: 138px; height: 138px; border-radius: 50%;
    border: 25px solid ${T.accent}; opacity: 0.16;
  }
  .sq {
    position: absolute; right: 168px; bottom: 96px;
    width: 78px; height: 78px; border-radius: 18px;
    background: ${T.amber}; opacity: 0.55; transform: rotate(9deg);
  }
</style>
</head>
<body>
  <div class="ring"></div>
  <div class="sq"></div>
  <span class="eyebrow">Teacher-tested, classroom-minded</span>
  <h1>Simple Teacher AI</h1>
  <p class="sub">Practical AI help for teachers who do not have time to become tech experts.</p>
  <div class="rule"></div>
  <div class="foot">
    <div class="mark">ST</div>
    <div class="wordmark">simpleteacherai.com</div>
  </div>
</body>
</html>`

const browser = await chromium.launch({ headless: true })
const page = await browser.newPage({ viewport: { width: 1200, height: 630 }, deviceScaleFactor: 1 })
await page.setContent(html, { waitUntil: 'networkidle' })
await page.evaluate(() => document.fonts.ready)
await page.waitForTimeout(1200)
await page.screenshot({ path: OUT, type: 'png' })
console.log('wrote', OUT)
await browser.close()
