---
name: kobana-finance
description: "Operate Kobana Smart Finance through the kobana-finance MCP server. Use for the financial back-office - accounts payable and receivable, entries and installments, categories and cost centers, vendors and clients, bank reconciliation, multi-company workspaces, cash flow and projections. Always pick a workspace first. Portuguese and Spanish terms: Financeiro Inteligente, contas a pagar, contas a receber, lançamento, parcela, categoria, centro de custo, fornecedor, conciliação bancária, fluxo de caixa, workspace; Financiero Inteligente, cuentas por pagar, cuentas por cobrar, asiento, cuota, categoría, centro de costo, proveedor, conciliación bancaria, flujo de caja."
license: MIT
metadata:
  author: Kobana
  version: "{{version}}"
---

# Kobana Smart Finance

Smart Finance is Kobana's financial back-office for Brazil: accounts payable and receivable, bank reconciliation and multi-company workspaces, with real-time balances. Its MCP server exposes about 96 tools.

- Server: `kobana-finance` at `https://mcp.finance.kobana.com.br`
- Docs: https://docs.finance.kobana.com.br/en/mcp/overview/introduction

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

## Reading data reliably

Most mistakes with Smart Finance data are silent: nothing errors, a total is just wrong. Check these before you report a number.

### Rate limit and pagination

- Reads share a quota of about 60 calls per hour. Plan large pulls, and prefer filters (period, status, `updated_at`) over listing everything.
- **A rate limit can arrive inside a successful response**: `isError: true` with error code `RATE_LIMITED` and `details.retry_after_seconds`. Treat it as a failure. Stop, tell the user when the quota frees up, and never report or save a partial result as if it were complete.
- List pages hold at most 100 records, even if you ask for more. A short page is not the last page: keep going until `next_cursor` is empty.
- Filtering by `updated_at` returns changes, not deletions. To detect a deleted entry, compare the current list of IDs with the previous one.

### Status and amounts

- Status is `pending`, `paid` or `cancelled`; `is_reconciled` tells whether a paid entry was matched to a bank statement line. **Exclude `cancelled` from every total.**
- `amount` is the entry's value; `ticket_amount` is what actually moved in the bank (fees, interest, discounts). Use `ticket_amount` when reconciling with a statement.
- `expected_account_id` is where a pending entry is expected to settle; `financial_account_id` is where it actually settled. Do not treat the expected account as the real one.
- **Forecast entries are replaced, not edited.** The system keeps a projected entry until the real one is registered, paid or reconciled. While that happens, an entry can briefly disappear, or its amount can differ from what the bank or the card acquirer shows. A missing entry is not a cancellation and a mismatched amount is not an error: say so, and do not drop it from a projection without checking with the user.

### Balances and statements

- Account balances come from several sources (`banking`, `calculated`, `open_finance`). **Use `banking`** for the real bank balance; `calculated` is the ledger and can be far off.
- Check `capture_date` account by account. Balances are captured at different times, so do not add balances from different moments into one figure without saying so.
- A balance of zero right after a sync can be a broken sync, not an empty account. A statement whose last line is old is not necessarily broken: some providers only add lines when there is a new transaction.
- **Statement lines prefixed with `[PAGTO]` or `[RECB]` are created by the system, not by the bank**, and often duplicate a bank line. Remove them before summing a statement. Their account label is the *expected* account, so match receipts by bank reference (for example the boleto's nosso número), not by that label.
- The statement can lag the balance by hours. If the balance moved and no line explains it yet, say that instead of guessing which entry it was.
- An amount that adds up is not proof of identity. When several entries could explain a bank movement, match by counterpart name, date and amount, not by finding a combination that sums.

### Data migrated from Fintera

Entries imported with "Fintera data import" keep the original record in `metadata.fintera` (including the old integer `id`). Use it to cross-reference old reports; entries created later have no `metadata.fintera`.

## Good first questions

- "Which workspaces can you act on?"
- "Which accounts payable are due this week?"
- "How does the cash flow look this month?"
- "Which statement lines are not reconciled yet?"

{{core}}
