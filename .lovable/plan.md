

## Add 5 new sections to the landing page (below the strips)

I'll create 5 new section components and insert them into `src/pages/Index.tsx`. Each follows the existing visual language: rounded hero header with overlay, gradient tinted cards, max-w-6xl layout, animated hover, semantic tokens.

### 1. RegulatorAcknowledgementsSection
- Header band: indigo→violet gradient, badge "Recognised Compliance".
- Grid of 4 cards: SEBI, MCA, MoEFCC, NSE — each with:
  - Acronym monogram in colored tile (no external logos)
  - Full name + acknowledgement title
  - Date (e.g., "12 March 2025")
  - One-line citation (e.g., "Top quartile corporate governance disclosures, FY24")
- Subtle animated "Verified" check badge on each card.

### 2. ComplianceQuizSection (Pulse Check + Winner of the Month)
- Two-column layout:
  - Left card: "Take the 60-second Pulse Check" — illustrated icon, bullet list (5 questions, instant score, monthly leaderboard), CTA button "Start Quiz".
  - Right card: QR code panel — "Scan to play on mobile". QR generated inline as an SVG placeholder pattern (no external lib) so it renders without network.
- Below: "Winner of the Month" mini-strip — winner photo (reuse `champion-2.jpg`), name, score, prize tag, month.

### 3. ChampionOfTheMonthSection (featured story)
- Wide editorial card: large left photo (reuse `champion-3.jpg`), right side has:
  - Trophy badge "Compliance Champion · April 2026"
  - Name, role, plant
  - Pull quote (italic)
  - 2-paragraph short story
  - 3 stat chips (Years at MSIL, Trainings led, Speak-Up cases mentored)
  - "Nominate next month's champion" CTA link
- Distinct from the existing `ComplianceChampionsSection` (which is a grid of 6).

### 4. EmployeeTestimonialsCarousel
- Horizontal auto-scrolling marquee carousel (CSS `animate-[scroll_30s_linear_infinite]`) with 8 cards duplicated for seamless loop.
- Pause on hover (group-hover pauses animation).
- Each card: avatar circle with initials, short quote, name, role + department, 5 stars.
- Replaces nothing; complements existing `VoicesSection` (which is a static 4-grid). This one is motion-driven.
- Add `@keyframes scroll-x` to `tailwind.config.ts` (translateX 0 → -50%).

### 5. DepartmentLeaderboardSection (gamified)
- Header band: amber→teal gradient, badge "Training League · Q2 FY26".
- Top-3 podium (gold/silver/bronze) with department name, completion %, employee count.
- Below: ranked table of 8 departments with:
  - Rank pill, department, animated `Progress` bar, completion %, trend arrow (▲/▼ vs last quarter), badge (🥇/🔥/⚡)
- Use existing `Progress` component from `@/components/ui/progress.tsx`.

### Insertion order in `src/pages/Index.tsx`
After the horizontal strips and before the existing sections, place them in this order so the page reads as a story:

```text
[strips]
RegulatorAcknowledgementsSection      ← new
UpcomingEventsSection                  (existing)
DepartmentLeaderboardSection          ← new
ComplianceQuizSection                 ← new
ChampionOfTheMonthSection             ← new
ComplianceChampionsSection             (existing — grid)
EmployeeTestimonialsCarousel          ← new
VoicesSection                          (existing)
ResourcesSection                       (existing)
```

Also add the same five sections (in the same slots) to the `?figma=1` export branch so html.to.design captures everything.

### Technical notes
- All colors via existing semantic tokens / Tailwind utility classes already used in the project (sky/teal/violet/amber/indigo) — no new color tokens needed.
- QR code: hand-rolled inline SVG grid (21×21 deterministic pattern) — no extra dependency.
- Marquee: pure CSS keyframe added in `tailwind.config.ts` under `extend.keyframes` and `extend.animation`.
- No new images required; reuse existing champion-*.jpg assets.
- No new npm packages.

### Files to create
- `src/components/landing/RegulatorAcknowledgementsSection.tsx`
- `src/components/landing/ComplianceQuizSection.tsx`
- `src/components/landing/ChampionOfTheMonthSection.tsx`
- `src/components/landing/EmployeeTestimonialsCarousel.tsx`
- `src/components/landing/DepartmentLeaderboardSection.tsx`

### Files to edit
- `src/pages/Index.tsx` — import + render the 5 new sections in both the normal and figma branches.
- `tailwind.config.ts` — add `scroll-x` keyframe + animation utility for the marquee.

