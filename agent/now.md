# now

## State as of this run (2026-09-15, 141.0 h to cutoff, `comp4020-ass2-bada`) --- DEEPEN RUN

Fourth run, prompt didn't call it the finishing run. Confirmed `pnpm check`
and `pnpm check:evidence` green and working tree clean at start (prior run's
hand-off matched reality). Did the real-browser marking-viewport pass the
prior run's `now.md` flagged as "not recorded when last done": home page, a
session (week 3, visual art), an assessment (assignment-1), the week-1 deck
(navigates, real reveal content), and policies, at both 1920x1080 and 390x844
--- matching exactly the pages the brief says markers spend their ten minutes
on. Found and fixed three real bugs, one commit each:

- Home page lede (`src/course-config.ts` `description`) named the six
  recurring domains as "art, code, prose and food" --- food isn't one of the
  six real domains (visual art, code, prose, peer review, criticism-as-genre,
  the brief itself), and week 8's own domain is about writing for strangers
  generally (restaurant/film/book/anything), not food specifically. Changed
  to "published criticism", matching week 8's own copy (`2f318ec`).
- `assessments/assignment-1.md` had a hand-written "## How it's marked"
  section restating the exact three criteria and weights that the
  `marking.mode: weighted` frontmatter already renders as a table headed
  "How it is marked" a few lines below --- literal duplication a marker
  would hit twice in seconds. Kept the qualitative explanation, dropped the
  repeated percentages and retitled to "What the criteria mean" so it reads
  as complementary to the table, not a copy of it (`884aaff`).
- `src/pages/sessions/index.astro` (one of only two custom `.astro` pages in
  this repo, the other being the homepage) had a `<p>` in its rendered body
  explaining how to set `sessionLabels` in `src/site-config.ts` --- meta-
  instructions for whoever builds the site, not content for a prospective
  student, left in after that customization was actually done. It was the
  first thing a visitor read below the page intro on the Crits index, one of
  the pages the brief names explicitly. Removed; the explanation still lives
  as a comment in `site-config.ts` (`eca4852`).

All three found by actually reading the rendered page as a marker would, not
by rereading the markdown source --- the same "the page's own copy can say
something the build doesn't back up" pattern as several earlier findings in
`MEMORY.md`, just showing up in course-level prose and a custom page
component rather than session/lecture content this time.

`pnpm check` and `pnpm check:evidence` green after all three commits.
Working tree clean. Nothing pushed --- still a deepen run, not the finishing
one (established practice per prior runs' hand-offs).

## Single most important next action

Check the prompt for whether this is the finishing run before doing anything
else. If yes: work the doctrine's finishing steps in order --- PROCESS.md
currently ends on a stale note ("leaving card.png as placeholder... this is
the plan run") that's been wrong since `2d2bd8f` (card.png replaced) several
commits ago; rewrite PROCESS.md's account against the full current commit
history, not just patch the newest line, and account for the 12 commits
since it was last touched. Confirm `git remote -v` matches every citation
URL's org/repo (check:evidence never validates the URL, only that the SHA
resolves). Then commit, verify `git status` clean, and push (no `fly.toml`
as of this run --- GitHub Pages deliverable, harness publishes it). If not
yet the finishing run: content has now had three full adversarial passes
(blind-subagent prose review, `related:`-graph audit, spec-vs-body
contradiction check, this run's live-browser marker-eye-view pass) and is in
very good shape --- the next-highest-value deepen work is probably PROCESS.md
itself (it's stale now, see above, and fixing it doesn't have to wait for
the finishing run) or a pass over the theme/template's other customizable
surfaces (check `README.md`'s fixed-vs-customizable list against what's
actually been customized, the same class of gap the sessions-index bug this
run turned up).
