# Kobana on Slack (Slackbot)

**🇺🇸 English** · [🇧🇷 Português](../pt-BR/slack.md) · [🇪🇸 Español](../es/slack.md)

Use Kobana with **Slackbot**, Slack's AI assistant, through Kobana's official Slack apps, one per product. You don't need to create or configure anything: install the apps your team uses and each person connects their own Kobana account.

**Auth:** OAuth with your own Kobana login · **Plans:** Slackbot's access to apps depends on your Slack plan. Per-tool access controls are available on Enterprise Grid and Enterprise+.

## Kobana apps for Slack

| App | In Slackbot | What you can ask |
|---|---|---|
| Kobana Banking Gateway | Kobana - Banking Gateway | "List my overdue boletos", "What is the balance of my financial accounts?" |
| Kobana Automatic Billing | Kobana - Billing | "Which subscriptions are active?", "Which invoices are open this month?" |
| Kobana Smart Finance | Kobana - Smart Finance | "Which accounts payable are due this week?", "How does the cash flow look this month?" |
| Kobana Dunning | Kobana - Dunning | "Which charges are overdue?", "Which agreements are in progress?" |
| Kobana Magic Dashboard | Kobana - Magic Dashboard | "Which portal users have not accepted the invitation yet?", "Who is on my team?" |

> The **Add to Slack** links and Slack Marketplace listings will be added here as soon as the apps are published.

Each person can have up to 5 active MCP servers in Slackbot at a time, so install only the products your team uses.

## 1. Install the app

1. Open the app's **Add to Slack** link, or find it in Slack under **Agents & tools → Apps**.
2. Click **Add to Slack**, review the permission (`mcp:connect`, which lets Slackbot connect to Kobana) and allow it.
3. If your workspace requires app approval, Slack sends the request to your admins. On Enterprise, an Org Owner or Org Admin installs the app at the organization level and adds it to the workspaces.

Installing an app doesn't connect any Kobana account and doesn't share anyone's access.

## 2. Connect your Kobana account

1. In Slack, open **Slackbot → Apps** and click **Connect** next to the Kobana app.
2. Sign in to Kobana, choose the account, the resources and the access level, and authorize.
3. Slack shows **Your account is connected**. Close the window and go back to Slack.

Each person connects their own account, and each app only receives access to its own product. Slackbot only sees and does what that person can do in Kobana.

## 3. Use it

1. Open a conversation with **Slackbot** and make sure the Kobana app is turned on in the apps menu of the message box.
2. Ask in your own words, in Portuguese, English or Spanish. Examples are in the table above.
3. Before anything that moves money or deletes data, such as paying, transferring or cancelling, Slackbot shows what will happen and asks you to confirm. Read the summary before approving.

## For admins

On Enterprise Grid and Enterprise+, admins choose who can use each Kobana app and the default permission for read-only, write and other tools. We recommend **Needs approval** for write tools, because Kobana write tools can pay bills, transfer money and cancel charges.

## Troubleshooting

- **Slackbot doesn't use Kobana:** check that the app is turned on in the apps menu of the message box, and that your account is connected in **Slackbot → Apps**.
- **Fewer tools than expected:** that is the access you granted or your permissions in Kobana, not an error. Connect again choosing more resources, or ask your account admin for the missing permission.
- **The connection fails:** disconnect the app in **Slackbot → Apps**, connect again, and check that you are signing in to the right Kobana account.

## Next steps

- Slack's guide: [Connect Slackbot to other apps with MCP](https://slack.com/help/articles/52414744085139-Connect-Slackbot-to-other-apps-with-MCP)
- Revoke access anytime in **Kobana Account → Tokens and Access → Authorized Applications**, or disconnect the app in **Slackbot → Apps**.
- All clients: [install index](README.md) · Developer guide: https://www.kobana.com.br/en/developers/mcp
