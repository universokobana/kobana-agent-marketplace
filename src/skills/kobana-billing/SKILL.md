---
name: kobana-billing
description: "Operate Kobana Automatic Billing through the kobana-billing MCP server. Use for recurring billing in Brazil - customers and billing accounts, products, prices and plans, subscriptions (trial, upgrade, downgrade, cancellation), invoices, payments, NFS-e service invoices, proposals, usage, MRR and churn. Portuguese and Spanish terms: Faturamento Automático, assinatura, plano, fatura, nota fiscal de serviço, proposta, cobrança recorrente, cliente; Facturación Automática, suscripción, plan, factura, factura de servicio, propuesta, facturación recurrente, cliente."
license: MIT
metadata:
  author: Kobana
  version: "{{version}}"
---

# Kobana Automatic Billing

Automatic Billing is Kobana's recurring billing platform for SaaS and service companies: subscriptions, invoices, payments, customer portal, NFS-e and dunning. Its MCP server exposes about 293 tools.

- Server: `kobana-billing` at `https://mcp.billing.kobana.com.br`
- Docs: https://docs.billing.kobana.com.br/en/mcp/overview/introduction

## Data model

- **Customer → Billing account → Portal user.** A customer can have several billing accounts; invoices belong to a billing account.
- **Product → Price → Plan → Subscription.** Plans group prices; a subscription ties a billing account to a plan.
- **Invoices** are generated from subscriptions (daily) or created on demand, then paid by card, boleto, Pix or bank transfer. NFS-e is issued from paid or issued invoices depending on the account configuration.

## Workflow

1. **Resolve the customer first.** Search by name, email or CPF/CNPJ and confirm the match with the user before changing anything.
2. **Explain the money impact** of subscription changes: proration, the next invoice amount and date.
3. **Confirm destructive actions**: cancelling subscriptions, voiding invoices, cancelling NFS-e or deleting customers.
4. **Report** IDs, statuses, amounts and links (invoice PDF, portal URL) returned by the tools.

## Good first questions

- "Which subscriptions are active?"
- "Which invoices are open this month?"
- "Show the usage of customer Acme"
- "What is our MRR?"

## Pitfalls

- NFS-e depends on the municipality and tax regime; an issuing error is often a fiscal configuration problem, not a tool bug. Show the returned message.
- Cancelling a subscription and cancelling its open invoices are separate actions. Ask which one the user wants.

{{core}}
