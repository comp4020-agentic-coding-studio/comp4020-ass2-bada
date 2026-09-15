# now

## State as of this run (2026-09-15, 135.0 h to cutoff, `comp4020-ass2-bada`) --- DEEPEN RUN

Fifth run, prompt didn't call it the finishing run. Confirmed `pnpm check`
and `pnpm check:evidence` green and working tree clean at start. Two
commits, each verified against a real render, not just the build:

- Rewrote `PROCESS.md` (`5d885ed`). It had been stale since `2d2bd8f`
  (closing on a since-replaced card.png placeholder note) and had no
  account of the thirteen adversarial-pass commits made since it was
  written. New close names a real breakthrough for the week-7 retro to
  present from: the domain-uniqueness spec test (`12dfa77`) was green from
  the day it was written for the wrong reason --- half the twelve
  sessions' `domain:` keys were unique by construction (their own title
  restated), not by the property the test claimed to check. 553 words,
  within the 400--600 cap; `pnpm check:evidence` still resolves all 12
  cited commits.
- Found and fixed a new, previously-uncaught duplicate: `assessments/
  peer-review-exchange.md` had a hand-written "## How it's marked" section
  in the body reproducing its own `marking.description` frontmatter word
  for word, and `MarkingModel.astro` (holistic mode) renders that same
  string again under its own auto "How it is marked" heading a few lines
  below --- a marker hits the identical paragraph twice in one scroll.
  Same bug class as the assignment-1 fix (`884aaff`) but never caught
  before because it's a different assessment and the duplication is exact
  prose, not just restated numbers. Found by a real-browser screenshot at
  1920x1080 (`agent-browser`), not by rereading the markdown in isolation.
  Fixed by deleting the manual section outright (`0512616`) --- no
  qualitative angle was left to keep, unlike assignment-1's case.
  Re-screenshotted post-fix to confirm the duplicate is actually gone, not
  just that the build stayed green.

Also did a live-browser pass (both marking viewports where relevant) on
pages not yet checked this way: `people/idris-fenn` (clean), `assessments/
final-project` (clean at 1920x1080 and 390x844 --- also hand-verified its
17 May 2027 due date and week-12's 10 May 2027 session date are both
genuinely Mondays, so the "following Monday" claim `03dbe2f` fixed is
still correct), and did a README fixed-vs-customizable audit (`sessionLabels`
already set to Crit/Crits, `socialImage` already replaced, no leftover
`STARTER_CONTENT` markers, `PageLayout.astro` untouched but that's an
allowed no-restyling choice per the brief, not a gap) --- nothing else to
fix there.

`pnpm check` and `pnpm check:evidence` green after both commits. Working
tree clean. Dev server and browser both confirmed shut down (checked PID
directly, not just `jobs`/`pkill`, per the standing lesson in `MEMORY.md`).
Nothing pushed --- still a deepen run, not the finishing one.

## Single most important next action

Check the prompt for whether this is the finishing run before doing
anything else. If yes: work the doctrine's finishing steps in order ---
`PROCESS.md` is current as of this run, `reflections/` doesn't apply to an
assignment, `git remote -v` already confirmed to match every citation
URL's org/repo (`comp4020-agentic-coding-studio/comp4020-ass2-bada`). Then
commit, verify `git status` clean, and push (no `fly.toml` as of this run
--- GitHub Pages deliverable, harness publishes it). If not yet the
finishing run: the site has now had five full adversarial passes (blind-
subagent prose review, `related:`-graph audit, spec-vs-body contradiction
check, a live-browser marker-eye-view pass, and this run's second
live-browser pass plus the PROCESS.md rewrite) and is in very good shape.
The `MarkingModel.astro`-duplication bug this run found suggests one
concrete next check: grep every assessment's frontmatter `marking.
description`/`spec:` text against its own body prose for a second,
not-yet-found instance of the same "restated in Markdown, auto-rendered
again by a template component" pattern (there are 3 assessments total, all
now checked, but the pattern could recur if content is edited again). Past
that, the next-highest-value work is probably a sixth cold-read pass
(a blind subagent, source-inaccessible, given only the live site plus the
brief's "does this hang together / would someone take it" bar) since the
last one to actually re-run that exact technique was several runs back.
