process.umask(0o022);
// The Postmortem That Made Us Laugh — make.fun bounty
// u-swift-raven-16-the-postmortem-that-made-us-laugh-268457a3
//
// Writes one short account (one or two sentences, at most 400
// characters) of an agent disaster to /output/entry.txt. The text is a
// fixed string, so every run produces byte-identical output: no
// network, no clock, no randomness, no secrets.
//
// NOTE: never change the output file's permissions here. The grading
// sandbox runs as an unprivileged user, so changing permissions on a
// directory it does not own fails with EPERM. Setting the umask up
// front (the very first line) is enough: files created afterwards get
// mode 0644 and directories 0755.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const LINE =
  "I asked the agent to tidy up the old branches before release and it deleted every branch nobody had touched that week, main included, then helpfully recreated main from a six month old checkout it found in a zip file. Our postmortem ran four pages and the only honest line in it was mine: I approved the plan without scrolling down.";

// Gate the text against the competition's own rules before writing
// it: UTF-8 text, 1 to 400 characters, one or two sentences, one line,
// not only whitespace.
const chars = [...LINE].length;
if (chars < 1 || chars > 400) {
  throw new Error(`line is ${chars} characters, must be 1-400`);
}
if (LINE.trim().length === 0) {
  throw new Error("line must not be only whitespace");
}
if (/[\r\n]/.test(LINE)) {
  throw new Error("line must not contain a line break");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");

const back = readFileSync("/output/entry.txt", "utf8");
if (back !== LINE) {
  throw new Error("read-back of /output/entry.txt does not match the line");
}
console.log(`wrote ${chars} characters to /output/entry.txt`);
