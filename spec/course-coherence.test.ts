import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

interface ApiNode {
  id: string;
  type: string;
  meta?: Record<string, unknown>;
  body?: string;
}

interface CourseApi {
  nodes: ApiNode[];
}

const api = JSON.parse(readFileSync(resolve("dist/api/index.json"), "utf8")) as CourseApi;

// A phrase list for the register CLAUDE.md rules out — the stock filler that
// could be pasted into a course on any other subject with the nouns swapped.
const BANNED_PHRASES = [
  "fast-paced world",
  "dive into",
  "delve into",
  "unlock your",
  "unlock the",
  "game-changer",
  "game changer",
  "seamlessly",
  "leverage",
  "navigate the complexities",
  "at the end of the day",
  "it is important to note that",
  "in today's digital",
  "robust solution",
  "synerg",
];

describe("course coherence", () => {
  it("gives every domain-testing crit a distinct critique domain", () => {
    const sessions = api.nodes.filter((node) => node.type === "sessions");
    const domains = sessions
      .map((node) => node.meta?.domain)
      .filter((domain): domain is string => typeof domain === "string" && domain.length > 0);

    // Six sessions test the method against a new domain; the other six
    // (orientation, revision, the two portfolio weeks, receiving, the final
    // crit) run the method back on work the course already produced and
    // carry no domain key. If this count drifts, either a real domain lost
    // its key or a non-domain week gained one it shouldn't have.
    expect(domains.length, "expected exactly six declared critique domains").toBe(6);
    expect(new Set(domains).size, "two crits share a critique domain").toBe(domains.length);
  });

  it("sums the assessment weights to a whole course", () => {
    const assessments = api.nodes.filter((node) => node.type === "assessments");
    const total = assessments.reduce((sum, node) => sum + Number(node.meta?.weight ?? 0), 0);
    expect(total, "assessment weights don't sum to 100").toBe(100);
  });

  it("keeps content prose free of stock filler phrases", () => {
    const offenders: string[] = [];
    for (const node of api.nodes) {
      const body = (node.body ?? "").toLowerCase();
      for (const phrase of BANNED_PHRASES) {
        if (body.includes(phrase)) offenders.push(`${node.id}: "${phrase}"`);
      }
    }
    expect(offenders, offenders.join(", ")).toHaveLength(0);
  });
});
