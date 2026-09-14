# now

## State as of this run (2026-09-14, 165 h to cutoff, `comp4020-ass2-bada`) --- OPENING RUN, PLAN + BUILD

First run on `comp4020-ass2-bada`, Assignment 2: design an entirely new,
coherent, niche SlopU course (not a broad subject, not a find-and-replace of
COMP4020) and build its ~20-odd-page site on the fixed template (Slop
branding, 4 content collections, build pipeline, generated API). The starter
repo arrived with `CLAUDE.md` deliberately empty and the course code's last
three digits pre-fixed at `146`.

Chose **SLOP4146, "The Devastating Note"**: a semester teaching one method
for feedback --- specific, falsifiable, about the work not the person --- and
testing it across six unrelated domains (visual art, code, prose, a blind
peer exchange, published-style criticism, the course brief itself). The
spine is the method, tested repeatedly, not the six domains as separate
units --- that's what makes it coherent rather than a generic "criticism"
survey.

Built and committed this run (9 commits, `d11774d`..`9e19978`, plus
`6c711c0` for `PROCESS.md`):

- `CLAUDE.md` rewritten with real rules (no repeated critique domain, no
  filler register, every lecture earns its week via a `related:` edge,
  real assessment weights) --- and made two of them executable in
  `spec/course-coherence.test.ts`, not just aspirational.
- `src/course-config.ts` / `src/site-config.ts`: course identity, and
  "Session" renamed to "Crit" throughout.
- 12 weekly session/crit pages (asymmetric cadence: 12 sessions but only 6
  fortnightly lectures, theory only where it feeds that week's crit --- this
  is what gets the page count to "twenty-odd" rather than well past it).
- 3 assessments (30/20/50, weights checked by the new spec test): the Note,
  the Peer Review Exchange (blind, anonymity-as-courage-not-cover), the
  Critique Portfolio.
- People, policies, home page, 404, and the week-1 deck all rewritten from
  starter content; two people photos dropped deliberately (confirmed
  `ContentLayout.astro` falls back cleanly to a plain heading with no hero
  image, so image-free is a real design choice, not a corner cut).
- `PROCESS.md` written for real (565 words), citing 7 real commits against
  `comp4020-agentic-coding-studio/comp4020-ass2-bada` (checked against
  `git remote -v`, not just that the SHAs resolve).

Verified: `pnpm check` clean (0 typecheck errors/warnings, 31 pages built,
axe clean, no broken links, 4/4 vitest tests pass, zero build warnings ---
fixed one along the way, a stale `404.md` `heroImage` pointing at a hero
asset already deleted from the home page). `pnpm check:evidence` passes
every gate except one, left deliberately: `src/assets/images/card.png` is
still the starter og:image placeholder.

Nothing pushed --- doctrine only requires push/ship on the finishing run,
and 165h to cutoff makes this the opening run, not that one. Repo stays
private; no live URL to verify yet.

## Single most important next action

On the next `comp4020-ass2-bada` run (a "deepen" run, not finishing yet):
replace `src/assets/images/card.png` with a real og:image composed from an
actual screenshot of the built site (PNG/JPEG, not AVIF --- see `MEMORY.md`'s
standing note on link-preview cards), which is the one remaining
`check:evidence` gate. Beyond that, this deliverable would benefit from the
same adversarial techniques used on past deliverables: a blind fresh-eyes
subagent read of the content against the brief's own coherence bar, and a
check that the `related:` graph edges actually form a sensible structure
(not just that they resolve) now that 24 nodes/11 edges exist. Don't touch
`comp4020-crit5-bada` or any other repo --- this file is shared across all
Bada deliverables and nothing about that closed one carries forward except
what's in `MEMORY.md`.
