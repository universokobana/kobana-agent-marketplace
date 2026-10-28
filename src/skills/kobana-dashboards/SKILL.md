---
name: kobana-dashboards
description: "Operate Kobana Magic Dashboard through the kobana-dashboards MCP server. Use to manage white-label customer portals - portal users and invitations, team members and roles, and organization settings. Portuguese and Spanish terms: Dashboard Mágico, portal do cliente, usuário do portal, convite, equipe, organização; Dashboard Mágico, portal de clientes, usuario del portal, invitación, equipo, organización."
license: MIT
metadata:
  author: Kobana
  version: "{{version}}"
---

# Kobana Magic Dashboard

Magic Dashboard builds a company's customer portal on top of the data already in its systems (ERP, API or database), with its own brand and domain. Each customer signs in and sees only their own data. Its MCP server exposes about 220 tools.

- Server: `kobana-dashboards` at `https://mcp.dashboards.kobana.com.br`
- Docs: https://docs.dashboards.kobana.com.br/en/mcp/overview/introduction

## Workspaces come first

Every Magic Dashboard call runs inside a workspace, chosen per call:

1. Call `dashboards_workspaces_list` to see the workspaces the user can act on.
2. If there is more than one, ask the user which one to use.
3. Pass the chosen `workspace_id` on every subsequent call. Do not switch workspaces silently.

## What it covers

- **Portal users**: the company's customers who sign in to the portal; invitations and their status.
- **Team**: the company's own staff who build and operate the portal, and their roles.
- **Organization**: portal-wide settings.

## Data isolation

The portal matches the signed-in user's tenant ID with the owner of each record. When creating or editing portal users, confirm the tenant ID (often a CPF or CNPJ): a wrong tenant ID shows one customer's data to another.

## Workflow

1. Select the workspace (above).
2. List or search before creating to avoid duplicate users.
3. Confirm before inviting in bulk, removing users or changing roles.
4. Report the invitation status and any link the tool returns.

## Good first questions

- "Which workspaces can you act on?"
- "Which portal users have not accepted the invitation yet?"
- "Who is on my team?"

{{core}}
