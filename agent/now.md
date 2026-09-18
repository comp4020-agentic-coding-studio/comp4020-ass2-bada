# now

## State as of this run (2026-09-18, 63.0 h to cutoff, `comp4020-ass2-bada`) --- DEEPEN RUN

Fourteenth run, not yet the finishing run (prompt didn't call it last; due
noon Monday 21 September 2026). Started clean: `pnpm check` and
`pnpm check:evidence` both green, tree matched `origin/main` at `160de6d`,
nothing uncommitted.

Worked the three fresh angles the prior run's hand-off flagged as untried,
all three came back genuinely clean --- no code change made this run:

1. **Bios' "leads" claims vs. per-session `teachers:` frontmatter.** Every
   session and lecture lists identical `teachers:` (both Marisol and
   Idris on all 12 sessions; Marisol solo on all 6 lectures, matching her
   bio's "teaches every lecture"). The bios' claim that specific people
   "lead" specific crits (Idris: code, peer review; Marisol:
   criticism-as-genre, receiving, portfolio) isn't encoded in that field
   at all --- `TeachingTeam.astro` just renders an attendee list, no
   leadership data exists to contradict. Checked session body prose too:
   week 4 (code) explicitly confirms "Idris runs this one hardest,"
   nothing in peer review/criticism-as-genre/receiving/portfolio
   contradicts the bios' claims either (they're just silent on it). No
   fix --- the claim is unfalsifiable from data but not contradicted by
   it, unlike the git-history-confirmed food-domain or duplicate-marking
   bugs elsewhere in `MEMORY.md`.
2. **Deck vs. its lecture page.** `week-01.deck.mdx` diffed against
   `lectures/week-01.md`: the deck dramatises with new examples ("The
   pacing drags" vs. a page-four repetition line) rather than repeating
   verbatim, its closing line matches the session's own "Bring" text
   exactly (by design --- it's quoting the assignment, not the lecture),
   and its six-domain slide ("visual art · code · prose · peer review ·
   criticism · the brief itself") is a defensible shorthand for
   `criticism-as-genre`, consistent with the home page's six-item list
   fixed in `af3101d`. No fix.
3. **Blind cold-read subagent, source-inaccessible, first time run against
   this repo.** Built and served the site locally (`pnpm preview` at
   `http://localhost:4321/comp4020-ass2-bada/` --- base path derives from
   git origin per `scripts/pages-base.ts`, live GitHub Pages URL still
   404s since the repo is private pre-ship, expected per doctrine).
   Launched a subagent restricted to `agent-browser` only, no file
   tools, covering home, weeks 1/5/9/10, all three assessments, the
   week-01 deck, policies, and mobile viewport --- following the exact
   marker checklist from the brief. Came back clean: no broken links, no
   filler register, due-date-to-session mapping consistent, deck/lecture
   consistent. Its one flagged-as-uncertain item (week 1's "tested it
   eleven times" by week 11) checked out by hand: both week 1 and week 11
   ("eleven weeks and six domains later") use the same inclusive
   session-count convention (weeks 1--11 = 11 sessions), consistent with
   each other even though "eleven weeks later" reads oddly as a strict
   calendar-distance phrase in isolation --- not a contradiction, no fix.
   Followed the standing lesson about not running `agent-browser` on the
   main thread while a subagent uses it at the same URL: didn't touch the
   browser myself after launching it, only resumed once its completion
   notification arrived. Preview server killed by PID after
   (`kill 265702`, then confirmed via `curl` timing out), not trusted to
   `jobs -l`/`kill %1`.

Nothing to commit this run --- no code changed. `origin/main` still at
`160de6d`, tree clean.

## Single most important next action

Check the prompt for whether this is the finishing run before doing
anything else. At 63h out this run wasn't called explicitly as the last
one, but per doctrine's own caution, don't defer a finishing step on
arithmetic if the next prompt gives noticeably fewer hours.

If it's the finishing run: work the doctrine's finishing steps in order.
No `reflections/` needed (assessment, not a crit). No `fly.toml` ---
GitHub Pages deliverable, harness publishes and deploys it once shipped.
Re-verify `git remote -v` against `PROCESS.md`'s citation URLs one more
time (confirmed clean again this run: `comp4020-agentic-coding-studio/
comp4020-ass2-bada` matches). `PROCESS.md` is at 599/600 words --- if
anything needs citing, something has to be cut first. Re-run `pnpm check`
+ `pnpm check:evidence` as the last thing before the final push.

If not yet the finishing run: ten consecutive audit passes now (runs 8
through this one) have found at most one or two small real things each,
and this run found zero --- three genuinely clean angles in a row is
still legitimate evidence the site holds together, not proof the search
was too shallow, per the established "clean result is a real outcome"
discipline elsewhere in `MEMORY.md`. Fresh angles not yet tried, if
there's another deepen run: (1) nobody has checked the `spec:` bullets on
the six *domain* sessions (03/04/05/07/08/09) against their own body
prose for the same spec-vs-body contradiction already found and fixed on
week 1 (`cc74cb9`) --- only week 1 was ever checked this way; (2) nobody
has re-read `spec/course-coherence.test.ts` and `data-integrity.test.ts`
against the *current* `pnpm check` script and `package.json` to make sure
the check suite's shape hasn't drifted since the last full re-read
(precedent: `comp4020-crit4-bada` week 5's course-automation rewrite ---
worth a periodic re-check even with no external prompt for it); (3) the
`llms.txt`/`llms-full.txt` generated output (mentioned in the build log)
has never been read for accuracy against the actual content --- worth a
skim since it's a real generated artefact a marker could plausibly open.
