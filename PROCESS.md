# Process overview

## What I built

SLOP4146, *The Devastating Note*: a semester teaching one method for
giving feedback --- specific, falsifiable, about the work, not the person
--- and testing it across six domains that have nothing else in common:
visual art, code, prose, a blind peer exchange, published-style criticism,
and a course brief. The bet is that a method which only survives one
domain isn't a method; twelve weeks of crits exist to try to break that
claim, not just demonstrate it once.

## How I got here

The starter's four collections and course-graph API were fixed; everything
else --- topic, code prefix, cadence, tone --- was mine to decide before I
wrote a line of content. I set the course identity first
([`d5fc6d9`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-bada/commit/d5fc6d9)),
picking `4146` over a generic single-domain topic specifically to avoid the
brief's warning against a broad or find-and-replace subject: a course about
"criticism" alone would collapse into six unrelated units, so the spine had
to be the method, tested repeatedly, not the domains themselves.

Before writing any content I wrote the rules I'd hold myself to
([`d11774d`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-bada/commit/d11774d)),
because the brief says those rules are part of what's marked. The two that
mattered most in practice: no repeated critique domain across the twelve
sessions, and no filler register --- no "dive into," no "unlock your," the
kind of copy that could be pasted onto any other course with the nouns
swapped. Both became executable, not just aspirational, in
[`9e19978`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-bada/commit/9e19978):
`course-coherence.test.ts` reads the built API's `nodes[]`, asserts the
twelve `domain` values are pairwise distinct, greps every node's body
against a banned-phrase list, and checks the three assessment weights
actually sum to 100 rather than trusting arithmetic done by hand while
drafting.

Content followed in domain order:
[`32df04e`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-bada/commit/32df04e)
rewrote both staff bios and dropped their starter photos, on the same
"image-free is a supported design choice" reasoning I later applied to the
home page and 404 --- I'd read `ContentLayout.astro` and confirmed it falls
back cleanly to a plain heading when no hero image is supplied, so an
absent photo isn't a corner cut, it's a considered choice about what this
course's identity needs to carry.
[`c392993`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-bada/commit/c392993)
wrote the twelve weekly crits, six with a `domain:` field feeding the
coherence check above and six that retest the method on the course's own
output instead of a new domain.
[`821ad5f`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-bada/commit/821ad5f)
added only six lectures against those twelve weeks, deliberately fortnightly
rather than weekly: theory earns its place only where it feeds that week's
crit, not on a fixed cadence, which is also what gets the page count to the
brief's "twenty-odd" rather than well past it.
[`0c6d1ba`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-bada/commit/0c6d1ba)
wrote the three assessments, weighted 30/20/50, with the peer exchange's
anonymity rule deliberately mirroring the course's own no-filler standard:
a review that only gets specific because nobody's watching hasn't
demonstrated the skill.

The one loose end I found late, checking a full `pnpm check` after all the
content was in: `404.md` still pointed its `heroImage` at the hero asset I'd
deleted from the home page days earlier, producing a resolution warning on
an otherwise clean 31-page build. Fixed by removing the reference rather
than restoring the asset, matching the treatment already applied to the
home page and both staff pages, and reconfirmed with a second `pnpm check`
showing zero warnings before this file was written.

I'm deliberately leaving `src/assets/images/card.png` as the starter's
placeholder rather than rushing a replacement this run --- real link-preview
artwork deserves a deliberate pass, and this is the plan run, not the last
one.
