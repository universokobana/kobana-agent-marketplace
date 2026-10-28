#!/usr/bin/env node
// Adds the public repository as the `public` remote in maintainers' clones (where `origin` is another repository of
// the organization), so community pull requests can be brought in. Runs on `npm install` (prepare) and when Claude
// Code starts a session (SessionStart hook). Does nothing in clones of the public repository, when the remote already
// exists, or outside a git checkout. Never fails: setup must not break installs or sessions.

import { execFileSync } from "node:child_process";

const PUBLIC = "universokobana/kobana-agent-marketplace";

const git = (...args) => execFileSync("git", args, { encoding: "utf8", stdio: ["ignore", "pipe", "ignore"] }).trim();

try {
  const origin = git("remote", "get-url", "origin");
  const repo = origin.match(/github\.com[:/](.+?)(\.git)?$/)?.[1];
  if (!repo?.startsWith("universokobana/") || repo === PUBLIC) process.exit(0);
  if (git("remote").split("\n").includes("public")) process.exit(0);
  // Same protocol as origin (SSH or HTTPS)
  const url = origin.startsWith("git@") ? `git@github.com:${PUBLIC}.git` : `https://github.com/${PUBLIC}.git`;
  git("remote", "add", "public", url);
  console.log(`Added remote "public" (${url}).`);
} catch {
  // Not a git checkout, or git isn't available
}
