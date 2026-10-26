# Security Policy

**🇺🇸 English** · [🇧🇷 Português](i18n/SECURITY.pt-BR.md) · [🇪🇸 Español](i18n/SECURITY.es.md)

## Scope

This repository contains configuration and instructions (manifests, MCP server URLs and Agent Skills). The Kobana MCP servers, APIs and dashboards are operated by Kobana and are covered by the [Kobana White Hat Policy](https://www.kobana.com.br/en/white-hat).

Report through this policy:

- A manifest or guide in this repository that points to a wrong, unofficial or malicious URL.
- A skill instruction that could lead an agent to bypass confirmations, leak credentials or follow instructions found in third-party data.
- Any vulnerability in the Kobana MCP servers, OAuth flow or APIs.

## Reporting a vulnerability

**Do not open a public issue.** Read our [White Hat Policy](https://www.kobana.com.br/en/white-hat) and email **security@kobana.com.br** (or **whitehat@kobana.com.br** for the reward program) with:

- A description of the issue and its impact.
- Steps to reproduce, affected URLs or files, and any proof of concept.
- Your contact information.

You can also use GitHub's [private vulnerability reporting](https://github.com/universokobana/kobana-agent-marketplace/security/advisories/new) for this repository.

We acknowledge reports within 3 business days and keep you updated until the issue is resolved. Researchers who follow responsible disclosure are protected as described in the White Hat Policy and may be eligible for a reward.

## Responsible disclosure

- Give us reasonable time to investigate and fix before any public disclosure.
- Do not access, modify or delete data that is not yours. Use the Banking Gateway sandbox for testing.
- Do not degrade the service (no denial of service, spam or social engineering).

## Supported versions

Only the latest release on the `main` branch is supported. The MCP servers are remote and always run the current version.

## Safe use

- Prefer OAuth over personal tokens. If you use a personal token, give it the MCP usage only, the smallest scope and the shortest validity.
- Never commit tokens. Configuration files that contain tokens are secrets.
- Revoke access anytime in **Kobana Account → Tokens and Access → Authorized Applications**.
