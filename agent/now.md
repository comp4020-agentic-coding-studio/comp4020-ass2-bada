# now

## State as of this run (2026-09-18, 69.0 h to cutoff, `comp4020-ass2-bada`) --- DEEPEN RUN

Thirteenth run, not yet the finishing run (due noon Monday 21 September
2026). Started clean: `pnpm check` and `pnpm check:evidence` both green, tree
matched `origin/main` at `a0dab88`.

Picked up the three fresh angles the prior run's hand-off flagged as
untried and worked all three:

1. **Related-edge audit, done properly this time.** First discovered the
   course-graph build plugin auto-mirrors every declared `related:` edge
   (a lecture naming a session shows up as a reverse edge on that session's
   own API entry with no declaration needed on the session's side) --- so
   "missing back-edge" isn't a real risk on this template, and checking for
   it was the wrong angle. The real gap was prose naming another week with
   *neither* file declaring the edge in *either* direction. Regex-scanned
   every built node's body/description for "week N" and checked membership
   in that node's own `related` array: found four real instances ---
   `sessions/02-revision` citing weeks 1 and 11, `sessions/11-portfolio-
   assembly` citing week 1, `sessions/12-final-crit` citing weeks 3 and 10
   --- and fixed all four with three files' worth of `related:` additions
   (`e8019f2`), re-verified zero missing coverage afterward. Full method and
   result written up in `MEMORY.md`.
2. **`spec/course-coherence.test.ts` re-read against the brief.** Confirmed
   its three assertions (domain uniqueness/count, weight sum, filler-phrase
   grep) map to real brief/CLAUDE.md claims, and `data-integrity.test.ts`'s
   date-range check is the one thing schemas/build can't already enforce.
   No brief claim found with zero assertion and no assertion found testing
   a non-claim. Nothing to fix here --- a genuine clean result on the second
   angle.
3. **Peer-review-exchange's anonymity claim, checked against a UI-promise
   bar.** Compared it to `policies/index.mdx`'s treatment of late work,
   extensions and academic integrity --- all administrative-process prose,
   not built features --- and concluded the anonymity description is the
   same class of claim, not the ass1-bada drag-copy bug in a new form. No
   fix made. Reasoning written up in `MEMORY.md` as a general check for
   future course-site deliverables.

`PROCESS.md`'s pattern-list sentence about the marking-prose/week-citation
gap now folds in the newest instance (`e8019f2`) alongside the existing
`6578578` citation, worded tightly to stay at 599/600 words --- right at
the cap, no headroom left for another citation without cutting something
else first.

Both commits (`e8019f2`, `e04429e`) pushed; `origin/main` now at `e04429e`.
`pnpm check` and `pnpm check:evidence` both green as the last thing done
this run.

## Single most important next action

Check the prompt for whether this is the finishing run before doing
anything else. Due noon Monday 21 Sept 2026 --- at 69h out this run wasn't
called explicitly as the last one, but the next prompt is very likely to
be, or close enough that hours-to-cutoff should be read generously per
doctrine's own caution about not deferring a finishing step on arithmetic.

If it's the finishing run: work the doctrine's finishing steps in order.
No `reflections/` needed (assessment, not a crit). No `fly.toml` ---
GitHub Pages deliverable, harness publishes and deploys it. Re-verify
`git remote -v` against `PROCESS.md`'s citation URLs one more time before
shipping. `PROCESS.md` is at 599/600 words --- if anything else needs
citing, something has to be cut first, not just appended. Re-run
`pnpm check` + `pnpm check:evidence` as the last thing before the final
push, and re-read `PROCESS.md` end to end once more for whether it still
reads as one narrative rather than a list, since it's grown three more
citations since the last full rewrite.

If not yet the finishing run: nine consecutive audit passes now (runs 8
through this one) have found at most one or two small real things each ---
this run found one real fix (four missing related edges) and two genuine
clean results, which is the expected shape by now, not a sign either
direction. Fresh angles not yet tried, if there's another deepen run:
(1) nobody has checked whether the `people/` bios or `policies` page name
anything ("email Idris for anything technical") that the rest of the site
contradicts (e.g. a claim about who teaches which week vs. the `teachers:`
frontmatter actually on each session); (2) nobody has diffed the deck's
actual slide content against the lecture page it's linked from, checking
the deck doesn't repeat the lecture page's prose verbatim or contradict it;
(3) a fresh blind cold-read subagent (source-inaccessible, given only the
live URLs plus the brief's marker checklist: home, several non-adjacent
weeks, an assessment, the deck, policies, at both viewports) hasn't been
run on this repo yet at all --- every audit so far has been done by an
agent with full source access, which the crit-4/crit-5 lessons in
`MEMORY.md` show finds different bugs than a genuinely blind pass.
