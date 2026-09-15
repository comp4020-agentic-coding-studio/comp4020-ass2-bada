# Process overview

## What I built

SLOP4146, *The Devastating Note*: a semester teaching one method for
giving feedback --- specific, falsifiable, about the work, not the person
--- and testing it across six domains that have nothing else in common:
visual art, code, prose, a blind peer exchange, published criticism, and
a course brief. The bet is that a method which only survives one domain
isn't a method; twelve weeks of crits exist to try to break that claim,
not just demonstrate it once.

## How I got here

The starter's four collections and course-graph API were fixed; everything
else --- topic, code prefix, cadence, tone --- was mine to decide before I
wrote a line of content. I set the course identity first
([`d5fc6d9`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-bada/commit/d5fc6d9)),
picking `4146` over a generic single-domain topic to avoid the brief's
warning against a broad or find-and-replace subject: a course about
"criticism" alone collapses into six unrelated units, so the spine had to
be the method, tested repeatedly, not the domains.

Before writing content I wrote the rules I'd hold myself to
([`d11774d`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-bada/commit/d11774d)):
no repeated critique domain across the twelve sessions, no filler
register. Both became executable in
[`9e19978`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-bada/commit/9e19978):
`course-coherence.test.ts` reads the built API's `nodes[]`, asserts domain
uniqueness, greps every node's body against a banned-phrase list, and
checks the assessment weights sum to 100.

Content followed in order: staff bios
([`32df04e`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-bada/commit/32df04e)),
twelve crits across six domains
([`c392993`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-bada/commit/c392993)),
six lectures feeding them fortnightly rather than weekly so theory only
appears where a crit is about to use it
([`821ad5f`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-bada/commit/821ad5f)),
and three assessments weighted 30/20/50
([`0c6d1ba`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-bada/commit/0c6d1ba)),
the peer exchange's anonymity rule deliberately mirroring the course's own
no-filler standard: a review that's only specific because nobody's
watching hasn't demonstrated the skill.

## What deepening found

The breakthrough came from distrusting my own green check. The uniqueness
test I'd written to enforce "no repeated domain" was checking less than it
claimed: half the twelve sessions carried a `domain:` key that was just
their own title restated (*orientation*, *revision*, *portfolio
check-in*...), which can never collide with anything by construction. The
test had been green since the run it was written, for the wrong reason ---
it was really only exercising the six sessions that could fail. Fixed in
[`12dfa77`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-bada/commit/12dfa77)
by dropping the decorative key from the six non-domain weeks and asserting
the real count (`toBe(6)`), so the check now fails if a real domain loses
its key or a decorative one gains one. That's the difference between a
check that has never failed and one that actually can.

The same question --- does this verify the property, or just something
correlated with it --- kept turning up in content a build or lint can't
see: assignment-1 restated its own marking table in prose
([`884aaff`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-bada/commit/884aaff)),
the crits index still carried a note meant for whoever built the site, not
a student
([`eca4852`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-bada/commit/eca4852)),
a crit's spec bullet asked for the opposite of what its own Bring section
instructed
([`cc74cb9`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-bada/commit/cc74cb9)),
and the home page named "food" as a domain the course doesn't run
([`2f318ec`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-bada/commit/2f318ec)).
None of these failed `pnpm check`; each only surfaced by reading the page
the way the brief says a marker will --- home, a few weeks, an assessment,
the deck, the policies page --- rather than trusting that passing content
schema and a clean build meant the course actually held together.
