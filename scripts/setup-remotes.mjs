#!/usr/bin/env node
// Adds the `public` remote in clones of the private repository, so maintainers can bring community pull requests in
// (see docs/publishing.md). Runs on `npm install` (prepare) and when Claude Code starts a session (SessionStart hook).
// Does nothing in clones of the public repository, when the remote already exists, or outside a git checkout.
// Never fails: setup must not break installs or sessions.

import { execFileSync } from "node:child_process";

const PRIVATE = "universokobana/kobana-agent-marketplace-private";
const PUBLIC = "universokobana/kobana-agent-marketplace";

const git = (...args) => execFileSync("git", args, { encoding: "utf8", stdio: ["ignore", "pipe", "ignore"] }).trim();

try {
  const origin = git("remote", "get-url", "origin");
  if (!origin.includes(PRIVATE)) process.exit(0);
  const remotes = git("remote").split("\n");
  if (remotes.includes("public")) process.exit(0);
  // Same protocol as origin (SSH or HTTPS)
  const url = origin.startsWith("git@") ? `git@github.com:${PUBLIC}.git` : `https://github.com/${PUBLIC}.git`;
  git("remote", "add", "public", url);
  console.log(`Added remote "public" (${url}). main is mirrored there automatically; see docs/publishing.md.`);
} catch {
  // Not a git checkout, or git isn't available
}
