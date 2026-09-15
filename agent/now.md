# now

## State as of this run (2026-09-15, 146.5 h to cutoff, `comp4020-ass2-bada`) --- DEEPEN RUN

Third run, prompt didn't call it the finishing run, so treated as a further
deepen pass per the prior run's own recommendation: read every session's
`spec:` frontmatter against its own `Bring`/`The crit`/`Leaves with` prose,
looking for a spec bullet the body contradicts rather than earns, plus a
day-of-week sanity pass on every dated due-date claim.

Read all twelve sessions, all six lectures, all three assessments in full.
Found and fixed two real content bugs, one commit each:

- Week 1's spec asked students to name "the worst note you were ever given";
  the Bring section explicitly rules out that exact framing ("Not the
  meanest one and the nicest one --- the one that worked and the one that
  didn't"), sorting on efficacy not severity. Present unedited since the
  file's original commit. Fixed by rewording the bullet to the
  worked/didn't-work axis the room actually uses (`cc74cb9`).
- Week 12's "Leaves with" said the Final Project was "submitted" at the
  final crit itself, but the assessment's own `due:` is a week later (noon
  the following Monday, verified by real day-of-week arithmetic --- the due
  date itself is correct, same following-Monday pattern as Assignment 1/week
  6, just unstated in week 12's copy so it read as contradicted). Reworded to
  match week 6's explicit precedent (`03dbe2f`).

Everything else checked clean: the other ten sessions' spec bullets all
match their own body; all six lectures' claims cross-reference each other
and the sessions consistently (week 11's retrospective claims about where
the method "held" vs "strained" match what weeks 4/5/7/9 actually describe);
peer-review-exchange's same-day due date has no analogous claim to
contradict. `pnpm check` and `pnpm check:evidence` green after each commit.
Working tree clean. Nothing pushed --- still a deepen run, not the finishing
one.

Also noted, not a bug: `pnpm check`'s course-graph log line ("24 nodes, 14
edges") looks like a regression from the prior run's "24 nodes / 26 edges"
note, but it isn't --- the build's own `dist/api/index.json` `edges` array
deduplicates mirrored pairs (a session <-> lecture declared in both
directions collapses to one edge) while the raw per-node `related` arrays
still total 28 directed entries. Framework-owned counting, not our content;
confirmed by reading `dist/api/index.json` directly rather than trusting the
log line's phrasing to mean the same thing run to run.

## Single most important next action

Check the prompt for whether this is the finishing run before doing anything
else. If yes: work the doctrine's finishing steps in order --- reread
`PROCESS.md` against the full current commit history (not just patch the
newest line), confirm `git remote -v` matches every citation URL's org/repo
(check:evidence never validates the URL, only that the SHA resolves), run
one more real-browser pass at both marking viewports, then commit, verify
`git status` clean, and push (plus deploy if this deliverable has a
`fly.toml` by then --- it doesn't as of this run, it's a GitHub Pages
deliverable per the brief). If not yet the finishing run: the content layer
(sessions/lectures/assessments) has now had two full adversarial passes
(blind-subagent prose review, `related:`-graph audit, spec-vs-body
contradiction check) and is in good shape --- the next-highest-value deepen
work is probably outside content entirely: a real-browser check of every
page at both marking viewports (last done which run? not recorded --- worth
confirming), or re-reading `CLAUDE.md`'s own rules against the actual built
site one more time before assuming they still hold.
