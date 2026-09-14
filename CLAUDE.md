# The harness for SLOP4146: The Devastating Note

This course teaches one method --- a note is specific, falsifiable, and about
the work rather than the person --- and applies it across a different
critique domain every week, on the claim that a method which only survives in
one domain isn't a method. These rules exist so the site itself doesn't
violate the thing it's teaching.

## Content rules

- **No repeated domain.** Each crit (`src/content/sessions/`) names the
  critique domain it covers in a `domain:` frontmatter key. No two crits share
  a domain --- `spec/course-coherence.test.ts` enforces this. A course that
  repeats itself is exactly the failure mode this course is about.
- **A lecture earns its week.** A lecture exists only where it introduces
  theory the same week's crit is about to use. Weeks without new theory carry
  no lecture --- that's the practicum design, not a gap. Every lecture
  declares a `related:` edge to the crit it feeds.
- **Write notes, don't write reactions.** Any prose on this site that
  describes or models feedback --- a crit brief, a marking description, a
  lecture outline --- follows the course's own bar: name the specific thing,
  say what would prove it wrong, and keep it about the work. No "some
  students may find," no vague praise, no softening a claim into
  meaninglessness.
- **No filler register.** Plain sentences, concrete nouns, second person to
  the student. No em-dash-heavy hedging, no "in today's fast-paced world,"
  no "unlock," "leverage," "seamlessly," "dive into," or any other phrase
  that could have been written about a different course with the nouns
  swapped. `spec/course-coherence.test.ts` greps the built site for a list of
  these and fails on a match.
- **Assessment weights are real.** The three assessments' `weight` fields sum
  to 100; a `marking.mode: weighted` block's criteria always sum to 100 (the
  content schema already enforces the second; the coherence test checks the
  first).

## What's deliberately left out

- **No script judges a crit.** The room is where tone, care and whether a
  note actually landed get judged, by a person, live. Nothing here tries to
  encode that --- a check that could pass a cruel-but-specific note would be
  worse than no check.
- **No plagiarism/AI-use policy beyond what the policies page states in
  prose.** Detecting authorship isn't this course's problem to solve in
  `spec/`, and a mechanical check here would just be theatre.
- **No discussion-forum spec.** The course runs entirely in the room; nothing
  about asynchronous discussion is part of the contract this repo makes.
