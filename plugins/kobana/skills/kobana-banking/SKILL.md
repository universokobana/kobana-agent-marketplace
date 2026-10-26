---
name: kobana-banking
description: Operate Kobana Banking Gateway through the kobana-banking MCP server (or kobana-banking-sandbox for tests). Use for boletos, bolepix, Pix charges and QR codes, paying boletos and taxes, Pix and TED transfers, bank accounts, balances, statements, DDA and customers across 40+ Brazilian banks.
license: MIT
metadata:
  author: Kobana
  version: "1.0.0"
---

# Kobana Banking Gateway

Banking Gateway is Kobana's unified banking API: one integration, 40+ Brazilian banks. Its MCP server exposes about 289 tools.

- Production: `https://mcp.banking.kobana.com.br` (server `kobana-banking`)
- Sandbox: `https://mcp.banking.sandbox.kobana.com.br` (server `kobana-banking-sandbox`). Sandbox tokens and data are separate from production.
- Docs: https://docs.banking.kobana.com.br/pt/mcp/overview/introduction

Also follow the general rules in the `kobana` skill.

## What it covers

- **Receivables**: registered boletos, bolepix (boleto with Pix QR code), Pix charges (immediate and with due date), payment links.
- **Payments**: pay boletos, utility bills and taxes; pay Pix charges and QR codes.
- **Transfers**: Pix (by key or bank details), TED, between own accounts, in batches.
- **Accounts**: financial accounts, balances, statements and reconciliation.
- **DDA**: boletos issued against the company's CNPJ.
- **Customers**: payer records reused across charges.

## Workflow

1. **Choose the environment.** If the user is exploring, testing or building, use the sandbox server. Use production only when the user clearly wants a real operation.
2. **Find the account.** Most write operations need the financial account (bank account) they run on. List accounts first and ask the user to pick one when there is more than one.
3. **Look before acting.** For "pay", "cancel" or "transfer", fetch the record and show the summary: amount, due date, payee or payer, bank account, and the CPF/CNPJ.
4. **Confirm destructive actions.** Paying, transferring, cancelling a boleto or deleting a Pix key moves money or cannot be undone. Wait for explicit confirmation of the exact operation.
5. **Report the result** with the IDs, status and any receipt or QR code the tool returns.

## Good first questions

- "List my overdue boletos"
- "What is the balance of my financial accounts?"
- "Create a Pix charge of R$ 99.90"
- "Which boletos were paid yesterday?"

## Pitfalls

- A status like `pending` or `scheduled` is not a failure: many bank operations settle asynchronously. Check again later or rely on the returned status.
- Amounts are in BRL. Double-check decimal separators when the user writes `1.000,00`.
- Bank cut-off times and business days affect TED and boleto payments. Mention it when a payment is scheduled for a non-business day.
