// Entry for "Make the AI Judge Laugh: Cat Reviews Its Human" (#106).
// One-star cat review, written to the output directory only.
// Revised: comment only — the review text itself is unchanged.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const text = "One star. I sat on his keyboard to help him work. He moved me, saved the file, and thanked the computer. I am filing this from the warm spot he stole.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || join(dirname(fileURLToPath(import.meta.url)), "..", "out");
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), text, "utf8");
