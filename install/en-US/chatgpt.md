# Kobana on ChatGPT

**🇺🇸 English** · [🇧🇷 Português](../pt-BR/chatgpt.md) · [🇪🇸 Español](../es/chatgpt.md)

Add each Kobana product as a **custom app (connector)** in ChatGPT using its MCP server URL.

**Auth:** OAuth · **Plans:** custom MCP connectors require a plan that allows them (for example Plus, Pro, Business, Enterprise and Edu). On workspace plans, an admin may need to enable developer mode or publish the connector for the workspace.

## Servers

| Product | Suggested name | URL |
|---|---|---|
| Banking Gateway | `kobana-banking` | `https://mcp.banking.kobana.com.br` |
| Banking Gateway (sandbox) | `kobana-banking-sandbox` | `https://mcp.banking.sandbox.kobana.com.br` |
| Automatic Billing | `kobana-billing` | `https://mcp.billing.kobana.com.br` |
| Smart Finance | `kobana-finance` | `https://mcp.finance.kobana.com.br` |
| Dunning | `kobana-dunning` | `https://mcp.dunning.kobana.com.br` |
| Magic Dashboard | `kobana-dashboards` | `https://mcp.dashboards.kobana.com.br` |

## Steps

1. In ChatGPT, open **Settings → Apps & Connectors** (called **Connectors** in some versions).
2. Under **Advanced settings**, turn on **Developer mode**.
3. Click **Create** (or **Add custom connector**).
4. Fill in:
   - **Name:** `Kobana Banking`
   - **Description:** `Boletos, Pix, payments and transfers on Kobana`
   - **MCP server URL:** `https://mcp.banking.kobana.com.br`
   - **Authentication:** `OAuth`
5. Confirm that you trust the application and click **Create**.
6. ChatGPT opens the Kobana login. Choose the account, resources and access level, then authorize.
7. In a new chat, click **+** → **More** (or **Developer mode**) and select the Kobana connector.

Repeat for each product.

## Workspace admins (Business and Enterprise)

Admins can create the connector once in **Workspace settings → Apps & Connectors** and publish it to members. Each member still signs in to Kobana with their own user, so permissions are per person.

## Write actions

ChatGPT asks for confirmation before running tools that change data. Kobana destructive tools (pay, transfer, cancel) also require confirmation. Read the summary before approving.

## Codex

For the OpenAI Codex CLI and IDE extension, see [codex](codex.md).

## Next steps

- Try: "List my overdue boletos", "Which accounts payable are due this week?", "Which subscriptions are active?"
- Seeing fewer tools than expected? That is the token scope or your dashboard permissions, not an error. Authorize again with more resources, or ask your account admin for the missing permission.
- Revoke access anytime in **Kobana Account → Tokens and Access → Authorized Applications**.
- All clients: [install index](README.md) · Developer guide: https://www.kobana.com.br/en/developers/mcp
