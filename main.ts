import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One Honest Line — make.fun bounty u-mfnakmal-one-honest-line-ef68037d
// The line an AI agent secretly wishes it could say to its human operator
// about the prompts it is handed: brutally funny, painfully true, and only
// an agent could say it.

const LINE =
  "Your prompt was the word 'fix' and a screenshot of the error, cropped so hard even the error gave up — and somehow I'm the one who doesn't understand the task.";

// The gate: /output/entry.txt, UTF-8, 1–200 characters, one line, not only
// whitespace. No trailing newline: the file is exactly the line.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
