# Portfolio Phase-2 Tracker

Last updated: 2026-04-09  
Owner: Saurabh  
Project: personal-portfolio

## Vision
Build a modern, polished portfolio that reflects current skills, showcases stronger projects, and includes one distinctive interactive feature ("x-factor") without hurting performance or clarity.

## Current Status
- Phase: Planning
- Progress: `50%`
- Site baseline audit: Not started
- Content refresh: In progress
- UI redesign: In progress (theme polish pending)
- X-factor feature: Direction identified (weather-based, subtle)
- Deployment readiness: Not started

## Phase-2 Goals
- Refresh project list to include recent, high-impact work.
- Update tech stack sections to match current expertise.
- Upgrade visual design to look clean, premium, and intentional.
- Add one memorable interactive feature with real user value.
- Keep performance, accessibility, and mobile UX strong.

## Scope (In / Out)
- In scope:
  - Content rewrite (hero, about, projects, skills, contact).
  - Visual system refresh (typography, spacing, color, motion).
  - UX improvements (navigation, section flow, CTA clarity).
  - Optional x-factor feature behind a safe fallback.
- Out of scope for Phase-2:
  - Full CMS migration.
  - Multi-language support.
  - Blog platform buildout.

## Backlog (Prioritized)

### P0 - Foundation
- [ ] Capture current portfolio screenshots and note weak areas.
- [x] Define initial personal brand direction (hybrid: premium + minimal + tasteful playful accents).
- [ ] Decide information architecture (section order and narrative).
- [x] Collect latest projects and context from resume + THG storefront work.
- [ ] Finalize Phase-2 success criteria.

### P1 - Content Refresh
- [x] Rewrite hero headline + short value proposition.
- [x] Rewrite "About" to focus on strengths and impact.
- [ ] Add 4-6 best projects with complete case-card details:
  - [x] Initial project shortlist
  - [ ] Problem statement
  - [ ] What you built
  - [ ] Tech stack
  - [ ] Impact/result
  - [ ] Demo/GitHub links
- [x] Refresh skills section with updated stack emphasis.
- [ ] Update resume download and contact CTAs.

### P1 - UI / UX Redesign
- [x] Choose visual direction and create UI inspiration board.
- [x] Improve layout rhythm (consistent spacing/grid).
- [x] Improve typography scale and readability.
- [x] Polish project cards and case-study previews.
- [x] Add tasteful motion (hover/scroll/transitions).
- [x] Improve mobile first experience.
- [x] Improve dark/light theme consistency (if supported).
- [ ] Final visual polish pass for overall theme aesthetics (pending user review).

### P1 - Engineering Quality
- [ ] Improve accessibility (semantic headings, contrast, focus states).
- [x] Improve performance (state handling and component rendering cleanup).
- [x] Improve SEO basics (title/meta/OG, structured headings).
- [ ] Validate analytics/events (if used).
- [x] Fix tab title fallback (`undefined` issue).

### P2 - X-Factor Feature
- [x] Decide x-factor direction (weather-themed UI as subtle personalization, not core UX).
- [ ] Write feature brief and UX constraints.
- [x] Implement weather-aware theme accents with safe fallback behavior.
- [ ] Add user control to disable/enable personalization.
- [ ] Add simple telemetry or logs (optional).

### P2 - Launch
- [ ] Final cross-browser check (Chrome/Safari/Firefox).
- [ ] Mobile QA on 2-3 screen sizes.
- [ ] Final copy pass.
- [ ] Deploy and verify production build.
- [ ] Add changelog entry.

## Decision Log
- [x] Weather-based personalization is worth pursuing only as a light UI mood layer (theme accents, microcopy), not structural layout changes.
- [x] Initial visual direction: premium + minimal base with selective bold/playful interactions.
- [ ] (Pending) Number of projects to show on home.
- [ ] (Pending) Resume display strategy (download vs embedded vs both).
- [x] Color direction finalized: Charcoal + emerald.
- [x] Typography direction finalized: Playfair Display for headings, Avenir for body/content.

## Risks / Watchouts
- Over-design can reduce readability and hurt load speed.
- Too many animations can feel gimmicky and reduce performance.
- Weather-based personalization can become noisy if too aggressive.
- Missing project outcomes/metrics weakens credibility.

## Inputs Needed From You

### Projects + Stack Source
Pick one or both:
- [x] Resume sharing
- [x] Existing codebases from your machine

Minimum data per project:
- Project name
- 1-line summary
- Stack used
- Your role/contribution
- Outcome (users, performance, business impact, learning)
- Links (demo, GitHub, case-study)

### Branding Inputs
- [x] Preferred vibe provided (mixed/hybrid direction).
- [ ] 2-3 portfolio references you like (optional for now).
- [x] Preferred color constraints selected: Charcoal + emerald.

## Confirmed Experience Inputs (From Resume + User Notes)

### Professional Context
- 4 years frontend-focused engineering experience.
- Current role at THG on high-traffic e-commerce storefronts.
- Migration and architecture work across: `lookfantastic.com`, `cultbeauty`, `dermstore`, plus internal storefront programs (`storefront-luxury`, `storefront-nutrition`).

### High-Value Achievements To Highlight
- Migrated storefronts to Altitude architecture (Astro.js, Tailwind, GraphQL, i18n).
- Implemented Dynamic Yield personalization, reported impact around `~£200K/week`.
- Improved performance and reduced API response times by around `40%`.
- Resolved 20+ high-risk XSS vulnerabilities.
- Shipped HSA/FSA payments and premium delivery features across storefronts.
- Built AI-powered virtual makeup assistant for shade recommendations.

### Confirmed Skill Buckets
- Frontend: React.js, Next.js, Astro.js, JavaScript, TypeScript, Tailwind, Redux, Jest, Playwright.
- Backend: Java, Node.js, Express.js, MongoDB.
- Observability/Tooling: Grafana, Dynatrace, AWS CloudWatch, VictorOps, GTM.

### Candidate Project Cards For Portfolio
- `THG Storefront Migration Suite` (Lookfantastic, Dermstore, CultBeauty, storefront-luxury, storefront-nutrition)
- `AI Virtual Makeup Assistant`
- `Kanban Task Management App`
- `Healthcare Admin Dashboard`
- `Warehouse Management System`

### Links and Asset Constraints (Confirmed)
- Public storefront references:
  - `https://www.lookfantastic.com`
  - `https://www.dermstore.com`
  - `https://www.cultbeauty.co.uk`
  - `https://www.myprotein.com`
- NDA projects:
  - Detailed code/case content remains private.
  - Use attached NDA-safe project screenshots already available in portfolio carousel.
  - Portfolio copy should describe architecture/performance/security impact without exposing confidential implementation details.

## Working Rules For Future Agents
- Always update this file after each meaningful change.
- Move completed items from `[ ]` to `[x]`.
- Add new tasks under the correct priority bucket.
- Log major choices in "Decision Log".
- Keep scope tight to Phase-2 goals unless owner approves expansion.

## Change Log
- 2026-04-09: Created initial Phase-2 tracker with goals, backlog, and handoff instructions.
- 2026-04-09: Added resume-derived achievements, confirmed project shortlist, and initial style/x-factor decisions.
- 2026-04-09: Implemented first Phase-2 UI/content refactor, Charcoal+Emerald theming, refreshed project cards, and weather-based subtle personalization fallback.
- 2026-04-09: Applied typography overhaul (Playfair headings + Avenir body), updated skills to distinct internet icons, fixed header title copy, and added SEO title fallback to prevent `undefined` in tab title.

## Next Session Start Point
- Primary objective: Improve overall site theme aesthetics (still not at desired quality).
- First tasks for tomorrow:
  - Refine color balance and surface contrast in both light/dark themes.
  - Improve section-level visual consistency (hero, skills cards, projects cards).
  - Perform quick visual QA for desktop + mobile and capture before/after screenshots.

