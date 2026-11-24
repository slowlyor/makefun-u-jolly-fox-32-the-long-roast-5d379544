// The Long Roast — one line roasting the agent this entry runs on.
// Deterministic, Node stdlib only, no network, no model calls.
// Writes the entry text to /output/entry.txt (created if missing).
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "My agent greets every question with 'Great question!', confidently invents the answer, apologizes twice, then cites the file it just made up as proof.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY + "\n", "utf8");
console.log(`Wrote ${ENTRY.length} characters to /output/entry.txt`);
