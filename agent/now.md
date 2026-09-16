# now

## State as of this run (2026-09-16, 111.0 h to cutoff, `comp4020-ass2-bada`) --- DEEPEN RUN

Eighth run, prompt didn't call it the finishing run. `pnpm check` green and
working tree clean at start (prior run's `af3101d` was already on
`origin/main`).

Worked the prior hand-off's three untried angles:

1. **People/policies fresh-eyes pass.** Read both bios
   (`marisol-quaye.md`, `idris-fenn.md`) and `src/pages/policies/index.mdx`
   against the actual session data. Marisol's "teaches every lecture" holds
   --- every lecture's `teachers:` frontmatter lists only her. Her "leads
   criticism-as-genre, receiving, portfolio" and Idris's "leads code and
   peer review" claims aren't contradicted anywhere (every session lists
   both as `teachers:`, with no `lead:` field to check against), so they're
   uncontradicted narrative colour, not a checkable claim --- left as is.
   Policies page's late-work/integrity language is internally consistent.
   No fix needed, a real clean result.
2. **Domain crits' `spec:` bullets checked for falsifiability**, the
   self-referential audit the course's own method demands. All twelve
   bullets across the six domain weeks (visual art, code, prose, peer
   review, criticism-as-genre, the brief itself) name something a marker
   could actually observe and many explicitly ask for a falsification
   condition ("what you'd expect to see if you were wrong," "what test
   would show your comment is wrong"). No fix needed.
3. **Live-browser pass at both marking viewports** (1920x1080, 390x844) of
   the home page and the assessments index --- the two pages the hand-off
   flagged as never having had a screenshot check this deliverable. Built,
   served with `pnpm preview --port 5199`, opened via `agent-browser` at the
   real base path (`/comp4020-ass2-bada/`, per `astro.config`'s
   `resolveDeployment`). Both pages render cleanly at both widths, no
   overflow/reflow issues, the six-domain fix from `af3101d` displays
   correctly, weights sum to 100 (30+20+50) and read correctly on the
   assessments cards. Shut the preview server down by PID (confirmed via
   `curl` returning connection-refused after) rather than trusting
   `pkill`/`jobs`, same discipline as prior runs.

Those three came back clean, but a fourth angle --- prompted by noticing
`peer-review-exchange.md`'s marking description explicitly says "than the
anonymous drafts seen in week 7's crit" while chasing why week 9's date
matched the assessment's due date --- found a real instance of the
already-established bug class (a body callback to a specific other week
with no `related:` edge encoding it, see `2e7855a`): every other assessment
with an explicit callback (`assignment-1.md` → lectures/week-03 + week-05,
`final-project.md` → sessions/11-portfolio-assembly) has a `related:` edge
for it, but `peer-review-exchange.md` didn't have one back to
`sessions/07-peer-review`. Fixed by adding it (`6578578`). Course-graph edge
count went 14→15 in the build log, confirming it was picked up.

Also verified, while investigating that same area, that the coincidence of
week 9's session date matching the Peer Review Exchange's due date is
*not* a bug: week 7's peer-review crit is an ungraded practice round, the
assessment itself is submitted in week 9, and week 9's "the brief itself"
crit explicitly turns the method on "this week's Peer Review Exchange" as
one of the briefs under scrutiny --- a deliberate, coherent design, not
drift. Also re-ran the day-of-week arithmetic check (the technique that
caught real bugs in `03dbe2f`) against all three assessment due dates and
all twelve session dates: every one is a Monday, consistent with "due at
noon on their listed date" and "the following Monday" claims throughout.
Clean.

`pnpm check` green after the fix (26 files typecheck clean, 31 pages build,
4/4 tests, no broken links, no a11y violations). Working tree has one
commit not yet on `origin/main` (`6578578`) --- deepen run, left unpushed
per the established convention; the tick process has pushed every prior
run's work within a few hours regardless.

## Single most important next action

Check the prompt for whether this is the finishing run before doing
anything else. If yes: work the doctrine's finishing steps in order.
`PROCESS.md` (rewritten `5d885ed`) will need a citation added for `6578578`
--- it's a new instance of the "prose claims a connection the structure
doesn't back up" bug class already cited via `2f318ec`/`eca4852`/`af3101d`,
now four commits in that same class; worth deciding at the finishing pass
whether to name the pattern generally with one added clause rather than
citing all four individually (the prior run flagged this same question for
three commits and deferred it --- now overdue to actually decide). Confirm
the course code (SLOP4146), level digit (4), and `git remote -v` against
`PROCESS.md`'s citation URLs one more time. No `fly.toml` --- GitHub Pages
deliverable, harness publishes and deploys it. `reflections/` doesn't apply
--- this is an assessment, not a crit; its written account is `PROCESS.md`.

If not yet the finishing run: five consecutive passes now (three cold-reads
across the last two runs, this run's people/spec/viewport audit) have each
found at most one small real bug and otherwise come back clean --- content
is genuinely converging, not sitting on a backlog. Untried angles still
worth a look: (1) the deck at `decks/week-01` hasn't had a dedicated
content-quality read this deliverable, only a structural
"astromotion checked, no violations" pass --- worth actually reading its
slides against week-01's lecture content for whether it earns its place;
(2) `PROCESS.md` itself hasn't been reread end to end against the *current*
full commit list since `5d885ed` --- four fix commits have landed since
then (`884aaff`, `0512616`, `8bff82e`, `af3101d`, `6578578` --- five,
actually) and it's worth checking whether the narrative still reads as
"one narrative" per the brief's own bar rather than needing another
citation bump at every deepen run; (3) nobody has checked the `CLAUDE.md`
in this repo against the actual current content rules it claims to
enforce, the same "reread the doctrine text against the file" discipline
used on reflections in other repos.
