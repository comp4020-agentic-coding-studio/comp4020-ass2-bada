# now

## State as of this run (2026-09-19, 52.0 h to cutoff, `comp4020-ass2-bada`) --- DEEPEN RUN

Fifteenth run, not yet the finishing run (prompt didn't call it last; due
noon Monday 21 September 2026). Started clean: tree matched `origin/main`
at `cd13681`, nothing uncommitted.

Closed the three fresh angles the prior run's hand-off flagged:

1. **Spec-vs-body prose on the six domain sessions** (03/04/05/07/08/09,
   the class of bug found on week 1 in `cc74cb9`). Read all six in full.
   No contradictions --- genuinely clean.
2. **Check-suite drift re-read** (`package.json` scripts,
   `course-coherence.test.ts`, `data-integrity.test.ts`, `spec/README.md`
   against what `MEMORY.md` records). No drift.
3. **`llms.txt`/`llms-full.txt` accuracy.** Read both generated artefacts
   in full/excerpt. URLs, domain counts and cross-references all correct.
   No fix needed.

None of those three found anything, but a fourth angle --- a real-browser
axe-core audit, since the project's own build-time a11y check runs axe
inside jsdom and jsdom cannot resolve `color-contrast` at all (no layout
engine, reports "incomplete" forever, never pass/fail) --- found a real,
site-wide bug: `--at-heading` and `--at-accent` (theme tokens) use the raw
SlopU brand gold (`#b97d1c`) as text colour, unlike the theme's own
`--at-link`, which already darkens the same primary for light-mode
legibility via `light-dark(oklch(from var(--at-primary) calc(l - 0.1) c
h), var(--at-primary))`. Against the near-white background that's
3.43:1, below the 4.5:1 AA bar for anything under "large text" size ---
every h3--h6, the home page's card titles, a session's "Related" heading,
the current-page nav indicator. Confirmed by real-browser axe (fetched
axe-core fresh from jsdelivr, never touched another agent's repo despite
several showing up in a stray `find /` search) across 7 pages, then by
manual canvas-pixel-compositing WCAG maths before writing the fix.

Fixed with a new `src/styles/contrast-fix.css`, reapplying `--at-link`'s
own darkening formula to the two buggy tokens, loaded via the theme's
documented `brandCss` array extension point in `astro.config.ts` (commit
`6008ee7`). Verified: real-browser axe re-audit shows zero violations on
all 7 pages, contrast now 5.18:1; dark mode untouched by the fix and
re-checked separately, still fine (~6:1, the same as before). Two axe
"incomplete" findings (nav links, tag list items, both alpha-translucent
text) and one `link-in-text-block` violation (an `aria-hidden`,
`tabindex="-1"` permalink icon) were investigated and correctly left
alone --- false alarms, not real bugs. `pnpm check` and
`pnpm check:evidence` both green after the fix. Folded the finding into
`PROCESS.md`'s existing build-invisible-bug list rather than adding a new
paragraph (word cap was 599/600; trimmed ~20 words elsewhere across three
other sentences to make room, landed back at 599) --- `d4de7d8`. Pushed
to `origin/main` (now at `d4de7d8`). Preview server killed by PID and
confirmed down via `curl`, not trusted to `jobs -l`/`kill %1`. Live Pages
URL still 404s (repo private pre-ship, expected).

## Single most important next action

Check the prompt for whether this is the finishing run before doing
anything else. At 52h out this run wasn't called explicitly as the last
one.

If it's the finishing run: work the doctrine's finishing steps in order.
No `reflections/` needed (assessment, not a crit). No `fly.toml` ---
GitHub Pages deliverable, harness publishes and deploys it once shipped.
Re-verify `git remote -v` against `PROCESS.md`'s citation URLs one more
time. `PROCESS.md` is at 599/600 words again --- if anything needs
citing, something has to be cut first, same as this run. Re-run
`pnpm check` + `pnpm check:evidence` as the last thing before the final
push.

If not yet the finishing run: this run's real-browser axe pass is the
first time anyone has checked color-contrast on this repo with an actual
browser rather than trusting the jsdom-based build check --- worth
treating "run a real-browser a11y audit" as a standing angle for *other*
deliverables in this fleet too, not just this one, since jsdom's
color-contrast blind spot is a property of every project using this
theme/check, not specific to `comp4020-ass2-bada`. Fresh angles not yet
tried on this repo specifically: (1) nobody has checked focus-visible
styling / keyboard-only navigation across the site in a real browser ---
all prior a11y work has been either jsdom-based or colour-contrast; (2)
nobody has run the "network route --abort" slow-connection proxy (used to
good effect on `comp4020-ass1-bada`) against this site's JS bundle to
check whether any page depends on JS for first paint of content that
should be static; (3) the deck's keyboard bindings (Home/End,
arrow-key slide nav) have never been checked against this specific
deck's content, only diffed against the lecture page for content parity.
