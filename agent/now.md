# now

## State as of this run (2026-09-16, 117.0 h to cutoff, `comp4020-ass2-bada`) --- DEEPEN RUN

Seventh run, prompt didn't call it the finishing run. Confirmed `pnpm check`
green and working tree clean at start (previous run's `8bff82e` was already
on `origin/main` --- the tick process had pushed it).

Worked the prior hand-off's priority list:

1. Read all six domain crits (visual art, code, prose, peer review,
   criticism-as-genre, the brief itself) side by side for whether each
   week's *mechanics* genuinely differ, not just the domain label. They do:
   silent-write-then-speak (weeks 3--4, deliberately shared structure ---
   week 4's own copy says that's the point, proof the method isn't an
   art-crit trick), paired line-edit marking (week 5), blind review +
   guess-the-author (week 7), deconstruct-a-published-review-then-your-own
   (week 8), turn-the-method-on-a-brief (week 9). Genuinely varied; no fix
   needed, a real clean result.
2. Re-read `spec/course-coherence.test.ts` against the current `CLAUDE.md`
   content rules and the actual content: domain count (6) and uniqueness,
   assessment weight sum (100), banned-phrase list all still match what the
   rules promise. The lecture-earns-its-week pattern (six lectures at weeks
   1/3/5/7/9/11, weeks 4 and 8 reusing an earlier lecture via their own
   `related:` field pointing back to it, weeks 2/6/10/12 needing no lecture
   at all) is internally consistent and matches `CLAUDE.md`'s description
   of weeks 8 and 10 introducing protocol inline. No test currently
   enforces "every lecture has a related crit" mechanically, but hand-check
   confirms it holds; didn't add a check for something already true and
   already covered by the a11y/broken-link/build checks catching a
   dangling reference.
3. Checked every session/lecture/assessment word count for a thin outlier
   --- lowest is `06-portfolio-check-in` (167 words), which is a working
   session with deliberately no new material, not a gap. No fix needed.
4. Read the home page (`src/pages/index.astro`) fresh, the page a marker
   reads first. Found a real bug: its "What you will do" paragraph claims
   "six times this semester ... in a different domain each time" but the
   enumerated list only named five instances (a drawing, a pull request, a
   paragraph, a proposal under blind review, a restaurant) --- missing the
   brief-itself domain entirely, present since the file's first commit.
   Same bug class as the earlier "stop calling the criticism-as-genre
   domain 'food'" fix, just never caught because past audits checked the
   domain *names* used, not whether the count of items matched the stated
   count of six. Fixed by adding a sixth item, "and the brief that assigned
   all of it" (`af3101d`). Verified live: built with `pnpm preview`, curled
   the actual rendered HTML at the site's base path
   (`/comp4020-ass2-bada/`, derived from `astro.config`'s
   `resolveDeployment`, not `/`) and confirmed the new phrase renders, then
   shut the preview server down by PID (confirmed no process left under
   this repo's path in `ps aux`) rather than trusting `pkill`/`jobs`.

`pnpm check` green after the fix. Working tree has one commit not yet on
`origin/main` (`af3101d`) --- deepen run, so left unpushed per the same
convention the prior run used; the tick process has pushed every prior
run's work within a few hours regardless.

## Single most important next action

Check the prompt for whether this is the finishing run before doing
anything else. If yes: work the doctrine's finishing steps in order.
`PROCESS.md` (rewritten `5d885ed`, still accurate) probably doesn't need a
citation bump for `af3101d` --- it's the same "prose claims something the
structure doesn't back up" bug class already cited via `2f318ec`/`eca4852`,
same judgement call the prior run made about `8bff82e` --- but reread the
full `PROCESS.md` once against the complete commit list before deciding,
since three fix commits (`2f318ec`, `8bff82e`, `af3101d`) have now landed
in that same bug class and it may be worth one added clause naming the
pattern generally rather than citing all three individually. Confirm the
course code (SLOP4146), level digit (4, matches ANU UG 1xxx--4xxx), and
`git remote -v` against `PROCESS.md`'s citation URLs one more time (all
previously confirmed, unlikely to have drifted, but cheap to recheck at the
finishing pass). No `fly.toml` --- GitHub Pages deliverable, harness
publishes and deploys it, never push assessment reflections (none apply:
`reflections/` is for crits, not assignments).

If not yet the finishing run: four consecutive passes now (the last two
runs' cold-reads, this run's mechanics/spec/word-count/home-page audit)
have each found at most one small real bug and otherwise come back clean,
which reads as the content genuinely converging rather than there being a
backlog of undiscovered issues. Untried angles still worth a look before
declaring it fully stable: (1) the `people/` bios and `policies/` page
haven't had a dedicated fresh-eyes pass since early in the deliverable's
life, only a "does it have the scaffold-note bug" check; (2) nobody has
yet checked whether the six domain crits' `spec:` bullets are each
independently falsifiable/checkable by a marker the way the course's own
method demands of a student's note --- a self-referential check the brief
invites given the course's subject is literally what makes a note
checkable; (3) a live-browser check at both marking viewports specifically
of the home page and the assessments index, since neither has had a
screenshot-based visual pass this deliverable, only text/DOM-level
checks.
