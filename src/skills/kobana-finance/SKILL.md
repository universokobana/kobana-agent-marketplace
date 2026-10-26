---
name: kobana-finance
description: "Operate Kobana Smart Finance through the kobana-finance MCP server. Use for the financial back-office - accounts payable and receivable, entries and installments, categories and cost centers, vendors and clients, bank reconciliation, multi-company workspaces, cash flow and projections. Always pick a workspace first. Portuguese and Spanish terms: Financeiro Inteligente, contas a pagar, contas a receber, lançamento, parcela, categoria, centro de custo, fornecedor, conciliação bancária, fluxo de caixa, workspace; Financiero Inteligente, cuentas por pagar, cuentas por cobrar, asiento, cuota, categoría, centro de costo, proveedor, conciliación bancaria, flujo de caja."
license: MIT
metadata:
  author: Kobana
  version: "1.0.0"
---

# Kobana Smart Finance

Smart Finance is Kobana's financial back-office for Brazil: accounts payable and receivable, bank reconciliation and multi-company workspaces, with real-time balances. Its MCP server exposes about 96 tools.

- Server: `kobana-finance` at `https://mcp.finance.kobana.com.br`
- Docs: https://docs.finance.kobana.com.br/pt/mcp/overview/introduction

## Workspaces come first

Every Smart Finance call runs inside a workspace. The workspace is chosen per call:

1. Call `finance_workspaces_list` to see the workspaces the user can act on.
2. If there is more than one, ask the user which one to use (a company group often has one workspace per company or a shared one for parent and subsidiaries).
3. Pass the chosen `workspace_id` on every subsequent call. Do not switch workspaces silently.

## What it covers

- **Accounts payable**: vendors, payroll, taxes; single, installments or recurring.
- **Accounts receivable**: same workflow for revenue.
- **Bank reconciliation**: match statement lines with entries by value and date.
- **Rules**: automatic classification by text patterns.
- **Dashboard data**: cash flow, inflows and outflows, category ranking, projections.

## Workflow

1. Select the workspace (above).
2. For questions, query and summarize: totals by period, by category, by status. State the period you used.
3. For changes, show the entry (description, amount, due date, category, counterpart) and confirm before writing.
4. Paying a bill is done through Banking Gateway, which is the `kobana-banking` plugin. When the user wants to pay, list the bills here, confirm, then use the `kobana-banking` tools. If they are not available, ask the user to install that plugin.

## Good first questions

- "Which workspaces can you act on?"
- "Which accounts payable are due this week?"
- "How does the cash flow look this month?"
- "Which statement lines are not reconciled yet?"

{{core}}
