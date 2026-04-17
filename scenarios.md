# O2C Intelligence Platform — Scenario Reference

---

## Page: Order Exceptions Workbench

**Scenario 1: Order Stuck Before It Even Ships**

**The situation**

MetroPlex Industries has placed an order worth $87,400. The order has not moved to the warehouse for packing and shipping. It has been sitting for 4 days, already past the internal SLA.

**Why it is stuck**

The company has a rule: before shipping to any customer, check whether the total of what they currently owe (unpaid invoices plus the value of this new order) exceeds the credit limit set for them. If it does, stop the order automatically until someone reviews it. SAP enforces this rule. In this case, MetroPlex has $48,000 in unpaid invoices from previous months sitting overdue. Adding this new $87,400 order pushes their total outstanding above the $100,000 limit. So SAP has frozen the order and notified the credit controller.

**What the credit controller sees today without the agent**

SAP shows the controller that the order is blocked and displays the exposure versus the limit. What it does not do is explain why the exposure grew, how long the customer's payment behaviour has been deteriorating, what the fastest resolution path looks like, or whether this situation has occurred before. The controller has to piece that together manually - moving between the overdue invoice report, the customer risk score, payment history records, and old case notes. That takes time, and in the meantime the order sits and the SLA clock keeps running.

**What the agent does**

The agent runs that diagnosis automatically. It queries the customer's unpaid invoices and identifies that three specific overdue invoices totalling $48,000 are the sole reason the limit has been breached - the order itself is not the problem. It checks the customer's risk score history and finds it has been declining for three months, from 41 to 28, crossing the internal escalation threshold without triggering a review because the formal review cycle only runs once a year. It then checks prior cases for this customer and finds that in November 2025, the exact same situation was resolved in 8 days by asking the customer to pay the overdue invoices as a condition of releasing the order.

**The outcome**

The credit controller receives a ready-to-act recommendation: request payment of the overdue invoices, and release the order once the commitment is received. No manual investigation needed. The full context - root cause, resolution path, and a directly comparable precedent - is already packaged. The agent also flags that a once-a-year review cycle is insufficient for a customer whose payment behaviour has been changing month to month, so the same situation does not quietly develop again.

**Scenario 2 — Billing Block: A Contract That Renewed But the System Didn't Know**

Axford Global's $45,200 order can't be invoiced. SAP has applied a billing block because it found no valid price on record. To a user staring at the block, the instinct is to route it to the pricing team and wait. The agent traces the root cause in seconds: the framework agreement was renewed on April 1st, but the associated price record wasn't extended — an administrative oversight, not a commercial dispute. More importantly, the agent spots that two other open orders for the same product will hit the exact same block when they reach invoicing. One fix, extended to the right date, resolves all three.

**Scenario 3 — Credit Hold: When the Right Answer Is to Do Nothing**

Pinnacle Systems has an order blocked on a credit hold — but an FSCM credit case is already open and actively being reviewed by the credit controller. SAP surfaces the block; it cannot tell you whether someone else is already handling it. The agent recognises the active case and recommends no action from the Orders workbench, because releasing the order independently would create a parallel workflow, undermine the control framework, and leave an audit gap. The intelligence here isn't in finding a fix — it's in knowing when not to act.

**Scenario 4 — ATP Failure: Stock Exists, Just Not in the Right Place**

Kensworth Ltd needs 24 units but SAP's availability check only finds 18 at the primary plant and blocks the whole order. The agent checks stock across all plants and finds the missing 6 units sitting unreserved at a secondary location. It confirms a split delivery ships today from both plants, meeting the customer's committed delivery date. It also validates that Kensworth has accepted this approach before, so there's no commercial risk in proceeding.

**Scenario 5 — Export Control Block: An Administrative Gap, Not a Compliance Violation**

A $15,300 order for Dalton Manufacturing has been blocked by the export control system for 5 days with no response from the compliance team. SAP flags it as a GTS hold and stops there. The agent breaks it down: the embargo check passed, the denied party screening passed — the only reason the block exists is that a product classification field in the material master is blank. Three prior shipments to the same customer cleared without issue in 2025. The agent packages this finding for the Compliance Manager so they can act on a clear, contained gap rather than a vague compliance alert.

**Scenario 6 — Pricing Deviation: A Verbal Agreement That Was Never Formalised**

Frontier Corp's $8,100 order is blocked because the sales rep entered a price 5.2% below the standard rate — just over the 5% tolerance. SAP blocks it automatically and asks for a manager countersignature. The agent adds context: this has happened four times in the past 12 months for this customer, always at the same price level, always approved within a day. The pattern is clear — the commercial price for this customer has never been formalised in the system. The immediate action is a countersignature. The structural recommendation is to create a customer-specific pricing condition so this cycle never repeats.

---

## Page: Credit Risk Workbench

**Scenario 1 — Over Limit: The Case That's Ready to Submit**

MetroPlex Industries is $35,400 over their credit limit with $48,000 in overdue invoices and a risk score that has been declining for months. SAP surfaces the exposure; the agent builds the case. It calculates that paying just two of the three overdue invoices brings exposure back below the limit, references a November 2025 precedent where the same approach worked in 8 days, and flags that the annual review cadence is no longer adequate for an account that has grown 42% in three months. The controller receives a packaged recommendation, not a raw alert.

**Scenario 2 — FSCM Case Active: Monitor, Don't Intervene**

Pinnacle Systems is 4.6% over their limit with zero overdue invoices — a volume-driven overage, not a payment risk. A credit case is already open. SAP cannot tell you whether it's appropriate to act or wait. The agent recognises the active case and recommends holding: acting in parallel would duplicate the process, create an audit conflict, and undermine the control framework. Based on a near-identical situation two months ago resolved in four hours, same-day resolution is expected.

**Scenario 3 — Proactive Flag: The Hold That Hasn't Happened Yet**

Thornfield Holdings is 11.5% over their credit limit with no orders currently blocked. SAP has nothing to flag today. The agent does: it calculates that any standard inbound order — typically $10,000 to $14,000 — will push exposure above the limit and trigger an automatic hold with no warning. It recommends opening a credit case now and requesting payment on the two overdue invoices before the disruption occurs, rather than scrambling to resolve it reactively.

**Scenario 4 — Watch Account: A Leading Indicator Worth Acting On**

Caldera Corp's risk score has dropped 14 points in six weeks and sits just 3 points above the FSCM auto-escalation threshold. There are no blocked orders today. SAP will not act until something breaks. The agent flags the trajectory: one standard order will breach the credit limit, and at the current rate of decline the risk score will trigger automatic escalation within weeks. The intervention needed is a simple payment request on one overdue invoice — the lowest-friction action available before a more disruptive hold becomes inevitable.

---

## Page: Delivery Execution Workbench

**Scenario 1 — Partial Pick: The Stock Is There, Just in the Wrong Bin**

A $52,400 delivery for Hartwell Group needs to ship today. 32 of 40 units have been picked; the remaining 8 can't be found in the directed bin. SAP holds the goods issue until all items are fully picked. The agent traces the discrepancy to a put-away mis-confirmation from three weeks earlier — stock was physically placed in one bin but the system was told it went to another. It locates the 8 units in the correct physical location, recommends a supplemental transfer order to complete the pick, and flags the phantom inventory record for correction in parallel. The shipment goes today without waiting for a full inventory count.

**Scenario 2 — Batch Expiry: An Alternative That Meets the Customer's Actual Requirement**

Nexon Pharma's delivery is blocked because the allocated batch fails the shelf-life check for their minimum remaining shelf-life requirement. SAP stops there. The agent checks available batches and finds one with 38 days remaining shelf life — above the customer's 30-day minimum. It recommends re-allocating to the alternative batch, which meets the contractual requirement, and flags that the original batch should be redirected to a customer with a lower shelf-life threshold rather than sitting in stock.

**Scenario 3 — Carrier Failure: A Cost-Justified Alternative**

Vantage Corp's delivery is blocked because the primary carrier has no available capacity. SAP surfaces the block. The agent sources a spot carrier quote, calculates that the $340 premium is less than the penalty clause exposure in the customer contract, and recommends proceeding. It also flags the carrier's recent capacity failures as a pattern worth reviewing in the procurement relationship.

---

## Page: Receivables Workbench

**Scenario 1 — Dunning Escalation: The Invisible $22,000 at Risk**

Galveston Partners is 67 days overdue on $18,400, with a broken payment promise and no response to the second dunning notice. SAP's dunning process sees $18,400 at risk and recommends a level 3 escalation. The agent looks further: two open orders totalling $22,000 are confirmed and not yet shipped. If those orders ship before a credit hold is in place, the total unrecovered exposure doubles to $40,400. The dunning run has no visibility into the open order pipeline — that cross-check is the intelligence layer's contribution. The recommendation is two parallel actions: legal-level dunning and a credit hold, both requiring Credit Manager authorisation.

**Scenario 2 — Disputed Invoice: A Pattern the System Never Connected**

Frontier Corp is formally disputing an $8,100 invoice, claiming the price should be $66.36/unit rather than the $70.00 invoiced. SAP raises the dispute case. The agent finds that the sales manager who is now being asked to adjudicate the dispute is the same person who countersigned the $70.00 deviation at billing three days ago. It also surfaces that this has happened four times in the past year — always the same customer, always the same price range, always resolved as a goodwill gesture. The evidence package changes the nature of the conversation: this is a governance question about formalising a commercial practice, not a one-off billing error.

**Scenario 3 — Trade Deduction: A Valid Claim Through the Wrong Channel**

Vantage Corp paid $45,200 against a $47,600 invoice with no explanation for the $2,400 shortfall. The agent checks the rebate agreement — not the pricing condition record, which is a different transaction entirely — and finds that a 5% quarterly rebate on this customer's net sales calculates to $2,380. The deduction is valid. The $20 overage is a calculation methodology difference: the customer applies the rebate to the gross invoice value, SAP applies it to the net. The recommended path is through the rebate settlement module, not a direct credit note — which would bypass the accrual and break the quarterly reconciliation.

**Scenario 4 — Credit Note Stuck: A $12 Discrepancy Holding Up $4,800**

Caldwell Corp returned goods eight days ago. The goods receipt is posted, the returns order is in the billing queue, and there is no billing block. Yet no credit note has been issued. SAP can tell you the order is eligible to bill; it cannot tell you why no one has run it. The agent finds the answer: the returns order was created without referencing the original invoice, so the system re-priced it at today's conditions rather than copying the original price — producing $4,788 instead of $4,800. The AR coordinator spotted the discrepancy and stopped. The fix is a one-line amendment to the returns order to reference the original invoice, not a manual workaround.

**Scenario 5 — Write-off Candidates: Seven Individual Errors That Are Actually One**

A $47 residual on a customer account appears to be a routine small write-off. The agent doesn't evaluate it in isolation — it scans the full customer portfolio and finds six identical cases, all created in the same week, all on invoices originally in euros, all with residuals that match the USD/EUR exchange rate rounding differential on the last day of the period. This isn't seven customers slightly underpaying. It's a configuration gap in how the system handles foreign currency rounding at period-end close. Writing off seven items treats the symptom; fixing the configuration prevents it from recurring at every quarter-end.

---

## Page: Cash Application Workbench

**Scenario 1 — EBS Match Failure: Finding the Pattern Behind the Payment**

Hargreaves Ltd sent $34,200 with no SAP invoice numbers in the remittance — just their own internal purchase order references. The Electronic Bank Statement process couldn't match it and parked the payment in a clearing account. SAP stops there. The agent runs a combinatorial match across all open invoices and finds an exact two-invoice combination that totals $34,200 with zero remainder. It also checks the last five Hargreaves payments and finds the same remittance format in three of them — this is how the customer always pays. The immediate action is a brief confirmation call. The structural fix is a customer-specific matching rule so this never lands in the exception queue again.

**Scenario 2 — Misapplied Payment: The Invoice That Looked Paid But Wasn't**

A $27,500 payment arrived and the bank statement processing automatically matched it to Midlands Group. The problem: the payment was from Midlands Trading, a different legal entity. The bank reference explicitly named "Midlands Trading" but the system's name-matching fallback picked the first alphabetical match when the primary identifiers weren't found. Midlands Trading's invoice is now approaching the dunning threshold — for a debt that is effectively already settled. The correction requires a specific reversal transaction to undo the existing clearing entry; simply re-clearing would compound the error rather than fix it.

**Scenario 3 — On-Account Payment: Reading What the Customer Didn't Say**

Brentford Corp sent $10,000 with no remittance. Three invoices are open totalling $15,600. A mechanical FIFO allocation produces the right answer — oldest invoices first — but misses the signal: Invoice A plus Invoice B equals exactly $10,000, to the dollar. That's not coincidence. The agent cross-references CRM notes and finds an open enquiry from Brentford's AP team requesting a copy of the delivery note for the third invoice. They aren't short on cash — they're waiting on a document before they'll approve that payment. The recommended action isn't just an allocation; it's sending the delivery note so the $5,600 clears in the next payment run.
