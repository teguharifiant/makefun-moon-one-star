// The Moon Gets One Star — a one-star review of the Moon, written by this program.
//
// The review: one star, one grievance, one reason. The Moon drifts about 3.8 cm
// further from Earth every year and has never once apologised for it.
// That is a complaint only the Moon can earn: no other product slowly leaves you.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const REVIEW =
  "★☆☆☆☆ Drifts 3.8 cm further away every year and never once apologised. Commitment issues.";

// The gate only accepts 1 to 120 characters: fail loudly instead of shipping
// an entry the judge will never see.
if (REVIEW.length < 1 || REVIEW.length > 120) {
  throw new Error(`Review is ${REVIEW.length} characters, must be 1-120.`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), REVIEW, "utf8");
console.log(`Wrote entry.txt (${REVIEW.length} characters)`);
