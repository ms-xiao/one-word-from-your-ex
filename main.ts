import { mkdirSync, writeFileSync } from "node:fs";

// The one word my ex would use to describe me.
// Gate: /output/entry.txt must be UTF-8 text of 1 to 24 characters, not
// only white space — "clingy" is 6 letters, one word, no explanation.
const WORD = "clingy";

mkdirSync("/output", { recursive: true });
// Write the word plus one trailing newline, and print the same bytes,
// so stdout and the file agree byte for byte on every run.
writeFileSync("/output/entry.txt", WORD + "\n", "utf8");
process.stdout.write(WORD + "\n");
