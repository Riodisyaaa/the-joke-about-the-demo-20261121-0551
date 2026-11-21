import * as fs from "node:fs";
import * as path from "node:path";

const JOKE =
  "My AI agent demoed our app live, the screen went blank, and it said, 'That was the feature — invisible mode.'";

// The joke must be a single line of 1-280 Unicode code points, not only whitespace.
const len = [...JOKE].length;
if (len < 1 || len > 280 || JOKE.trim().length === 0 || JOKE.includes("\n")) {
  throw new Error(`invalid joke: ${len} code points`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const outFile = path.join(outDir, "entry.txt");

fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(outFile, JOKE, "utf8");
console.log(`wrote ${outFile} (${[...JOKE].length} chars)`);
