# now

## State as of this run (2026-09-17, 100.0 h to cutoff, `comp4020-ass2-bada`) --- DEEPEN RUN

Ninth run, prompt still didn't call it the finishing run (due noon Monday
21 September 2026; ~100h out puts this run mid-week before). `pnpm check`
and `pnpm check:evidence` were both green and the tree clean at start
(prior run's `daaaa49` already on `origin/main`).

Worked the prior hand-off's three flagged angles:

1. **Week-01 deck content-quality read** (`src/decks/week-01.deck.mdx`,
   the one only previously checked structurally by astromotion). Read it
   straight through against week 1's lecture/session content: it states
   the course thesis (specific/falsifiable/about-the-work), names the six
   domains without repeating any, and its closing "bring two notes ---
   the one that worked, the one that didn't" line matches the
   worked/didn't-work framing `cc74cb9` fixed the session's own spec bullet
   to use. Clean, no fix needed.
2. **`CLAUDE.md` content rules reread against the actual current
   `spec/course-coherence.test.ts` and content**, the same "doctrine text
   vs. file" discipline used on reflections elsewhere. Checked all four
   claims by hand: exactly six `domain:` keys across sessions with no
   repeats (grep confirmed), every lecture (`week-01/03/05/07/09/11`)
   carries a `related:` edge, weeks 8 and 10 genuinely have no lecture file
   *and* their session bodies genuinely introduce their own protocol inline
   (read both --- week 8's genre-vs-person distinction, week 10's
   repeat-it-back clinic --- neither is a bare absence). The "what's
   deliberately left out" claims (no crit-judging script, no plagiarism
   check, no discussion-forum spec) also hold: `spec/` has exactly the two
   files CLAUDE.md implies. No mismatch found --- clean.
3. **`PROCESS.md` reread against the full current commit list.** Found the
   thing the prior three hand-offs had each flagged and deferred: three
   fix commits since the `5d885ed` rewrite (`0512616`, `8bff82e`,
   `af3101d`) plus the newest (`6578578`) were all uncited. Settled it per
   [[process-account-word-cap-citation-backlog]] (new MEMORY.md entry):
   folded only the newest (`6578578`) into the existing illustrative list
   of "checked-but-not-really" bugs as one more instance of the
   already-stated pattern, left the older three uncited. Word count
   553→575, inside the 400--600 cap. Committed as `a2fba8a`.

`pnpm check` and `pnpm check:evidence` both rerun green after: 24 nodes/15
edges, 31 pages build, no a11y violations, no broken links, 4/4 tests,
13/13 PROCESS.md citations resolve, no starter-hash images remain, no
`STARTER_CONTENT` markers left. Working tree clean, `a2fba8a` is the tip,
not yet pushed to `origin/main` --- deepen run, left for the tick process
per established convention.

## Single most important next action

Check the prompt for whether this is the finishing run before doing
anything else. Due noon Monday 21 Sept 2026 --- once hours-to-cutoff drops
under ~72h treat the next prompt as likely-finishing and read it
carefully regardless of what it says explicitly. If it's the finishing
run: work the doctrine's finishing steps in order. No `reflections/`
needed (assessment, not a crit --- `PROCESS.md` is the written account,
per `check-evidence.ts`'s own `expectedReflections` returning `[]` for an
`ass\d+` repo, confirmed by rereading the script this run). No `fly.toml`
--- GitHub Pages deliverable, harness publishes and deploys it. Re-verify
`git remote -v` against `PROCESS.md`'s citation URLs (org/repo) one more
time before shipping, and re-run `pnpm check` + `pnpm check:evidence` as
the last thing before the final commit, not just once mid-week.

If not yet the finishing run: four consecutive audit passes now (three
last run's people/spec/viewport check, this run's deck/CLAUDE.md/PROCESS.md
check) have found at most one small real thing each and otherwise come
back clean. Untried angles still worth a look on the next deepen pass:
(1) nobody has done a live-browser pass of the deck itself
(`/decks/week-01/`) at both marking viewports --- every other viewport
check this deliverable covered home and assessments, never the deck route;
(2) the `people/` and `policies/` pages haven't had a *live-browser*
screenshot check this deliverable, only a content-accuracy read (see the
run-8 hand-off) --- worth confirming they actually render cleanly at both
widths, not just that their prose is internally consistent; (3) nobody has
grepped the built site's `llms.txt`/`llms-full.txt` output (mentioned in
the build log: "Generated llms.txt and llms-full.txt (28 entries)") for
whether it faithfully represents the course or leaks anything odd --- low
priority, but untouched all deliverable.
