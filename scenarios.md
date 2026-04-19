# O2C Intelligence Platform - Scenario Reference

---

## Page: Order Exceptions Workbench

**Scenario 1: Order Stuck Before It Even Ships**

**The situation**

MetroPlex Industries has placed an order worth $87,400. The order has not moved to the warehouse for packing and shipping. It has been sitting for 4 days, already past the internal SLA.

**Why it is stuck**

The company has a rule: before shipping to any customer, check whether the total of what they currently owe (unpaid invoices plus the value of this new order) exceeds the credit limit set for them. If it does, stop the order automatically until someone reviews it. In most configurations, SAP's credit management functionality enforces this automatically. In this case, MetroPlex has $48,000 in unpaid invoices from previous months sitting overdue. Adding this new $87,400 order pushes their total outstanding above the $100,000 limit. The order has been placed on hold and the credit controller has been alerted, typically through a workflow notification depending on how the system is configured.

**What the credit controller sees today without the agent**

SAP shows the controller that the order is blocked and displays the exposure versus the limit. What it does not explain is:

- Why the exposure grew
- How long the customer's payment behaviour has been deteriorating
- What the fastest path to releasing the order looks like
- Whether this situation has happened before and how it was resolved

The controller has to piece that together manually by moving between the overdue invoice report, the customer risk score, payment history records and old case notes. That takes time, and in the meantime the order sits and the SLA clock keeps running.

**What the agent does**

The agent runs that diagnosis automatically and finds:

- Three overdue invoices totalling $48,000 are the sole reason the credit limit has been breached. The new order itself is not the problem.
- The customer's risk score has been declining for three months, from 41 to 28, crossing the internal escalation threshold without triggering a review because the formal review only runs once a year.
- In November 2025, the exact same situation was resolved in 8 days by asking the customer to pay the overdue invoices as a condition of releasing the order.

**The outcome**

The credit controller receives a clear recommendation: request payment of the overdue invoices and release the order once the commitment is received. The context, root cause, resolution path and a comparable precedent are compiled and ready to review. No manual investigation needed. The agent also flags that a once-a-year review cycle is insufficient for a customer whose payment behaviour has been changing month to month, so the same situation does not quietly develop again. The credit controller makes the final call. The agent does not release the order independently.

**Scenario 2: The Invoice That Could Not Be Raised**

**The situation**

Axford Global placed an order worth $45,200. The goods have shipped. The order is sitting in the billing queue, ready to invoice. But no invoice has been raised, and the order has been stuck for three days.

**Why it is stuck**

SAP's billing process has applied a billing block. Before generating an invoice, the system checks whether a valid, current price condition exists for the product on the order. In this case, it found nothing. A billing block does not mean the price is wrong or disputed. It means the system could not confirm what price to use, so it stopped rather than invoice at the wrong amount. This is standard SD billing behaviour in most configurations.

**What the billing team sees today without the agent**

The team can see the block and the reason code. What SAP cannot tell them is:

- Why there is no valid price on record
- Whether the pricing gap affects other open orders for this customer
- Whether this is a system administration issue or a genuine commercial dispute

The instinct is to route it to the pricing team and wait. That adds days.

**What the agent does**

The agent traces the root cause. The framework agreement with Axford Global was renewed on April 1st, but the associated price condition record was not extended to cover the new contract period. The system finds an expired record and typically blocks in this situation. The agent also checks all other open orders for the same product and finds two more that have not yet reached the billing stage. They will likely hit the exact same block when they do.

The indicated fix is a single administrative update: extend the price condition record to the correct end date. If confirmed by the pricing team, one action resolves all three orders.

**The outcome**

The billing team receives a clear diagnosis and a contained action for the pricing team to confirm. The pricing team does not need to reopen a commercial conversation. The two downstream orders are caught before they stall. A gap that looked like a pricing dispute strongly points to a missed renewal date rather than a commercial disagreement. The pricing team validates and initiates the update through the standard pricing transaction.

**Scenario 3: When the Right Answer Is to Do Nothing**

**The situation**

Pinnacle Systems has an order sitting on a credit hold. On the surface, this looks the same as any other blocked order: a customer has exceeded their credit limit, the system has stopped the order, and someone needs to act.

**Why it is stuck**

When a customer's outstanding balance plus any new orders exceeds the credit limit set for them, SAP's credit management functionality typically places an automatic hold on new orders, depending on how the credit check is configured. The order cannot proceed to the warehouse until the hold is released by an authorised credit controller.

**What the orders team sees today without the agent**

The workbench shows the hold. The reason code points to credit exposure. What SAP cannot surface is:

- Whether someone else in the business is already handling this
- Whether a formal credit review is underway
- Whether acting here would conflict with a process already in motion

Without that context, the natural response is to start investigating and work toward releasing the hold.

**What the agent does**

The agent checks the FSCM credit management module and finds that a credit case for Pinnacle Systems is already open and actively being reviewed by the credit controller. This is not a stale or forgotten case. It is live.

Acting from the orders workbench at this point would create a parallel workflow running alongside the formal credit review. It would undermine the control framework and leave an audit trail with two separate people making decisions on the same exposure at the same time.

The agent recommends no action from the orders workbench and explains why.

**The outcome**

The value here is not a resolution. It is the prevention of a mistake. The orders team does not intervene in a process that is already being managed through the right channel. The credit controller retains clear ownership. The audit trail stays clean.

**Scenario 4: The Stock That Was There All Along**

**The situation**

Kensworth Ltd has an order for 24 units of a product. The order has been blocked. The committed delivery date is today.

**Why it is stuck**

Before confirming a delivery, SAP's availability check (ATP) runs against the stock held at the plant assigned to the order. If the required quantity is not confirmed at that location, the system typically holds the delivery. In this case, the primary plant has 18 units available. The order needs 24. The system identifies a shortfall of 6 units and, in standard configuration, holds the full order pending complete quantity confirmation rather than releasing a partial delivery without explicit authorisation.

**What the warehouse team sees today without the agent**

The workbench shows the ATP failure and the quantity gap. What it does not show is:

- Whether the missing units exist elsewhere in the network
- Which plants have a scheduled outbound route that can still reach the customer within the delivery window
- Whether the customer has agreed to split deliveries before

Resolving this manually means checking stock reports across plants, cross-referencing carrier route schedules, confirming transit times, and validating with the customer or account manager. That takes time the delivery date does not allow.

**What the agent does**

The agent checks stock across all plants in the network. Plant 1200 has 6 units unreserved. Plant 1300 also has units available, but the agent checks the outbound route schedule and finds that the carrier serving that zone has suspended departures until April 22. Including plant 1300 would mean committing stock to a route that cannot meet the delivery date.

The agent then confirms three things before recommending action:

- Plant 1200 has a scheduled outbound departure today at 14:00
- The 2-day transit time puts the delivery within the committed window
- Kensworth has accepted split deliveries before when both shipments arrive on the same day

**The outcome**

The warehouse team receives a recommendation grounded in stock availability, confirmed route schedules, and customer precedent. Proceed with a split delivery from plants 1100 and 1200. The customer gets their full order on time. Plant 1300 was considered and ruled out before it became a problem.

**Scenario 5: A Compliance Alert That Is Not a Compliance Problem**

**The situation**

A $15,300 order for Dalton Manufacturing has been sitting blocked for 5 days. The internal SLA allows 3 days. The compliance team has not responded to two notifications.

**Why it is stuck**

Before any international shipment is released, the trade compliance module (SAP GTS or an equivalent embedded capability, depending on the system landscape) runs a series of export compliance checks. These checks verify whether the destination country is under an embargo, whether the customer appears on any restricted party lists, and whether the product being shipped requires an export licence for that destination. If any check cannot be completed, the system typically blocks the delivery until compliance clears it. In this case, one check could not complete and the order stopped.

**What the orders team sees today without the agent**

The workbench shows an export control block and a compliance team that has not responded. What SAP cannot tell them is:

- Which specific check triggered the block
- Whether this is a genuine export control risk or an administrative gap
- Why the same customer received three shipments of this material without issue last year

Without that breakdown, the block looks serious and the instinct is to wait for compliance to investigate. That wait is now 5 days long.

**What the agent does**

The agent breaks down the three checks that SAP ran:

- Embargo check: passed. The destination country is not under any embargo.
- Restricted party screening: passed. Dalton Manufacturing does not appear on any restricted party list.
- Export licence check: flagged. The required product classification field is not maintained in the system. Without it, the trade compliance module cannot determine whether a licence is needed.

The evidence strongly suggests this is an administrative gap rather than a confirmed compliance violation. The agent checks shipping history and finds three prior shipments to Dalton Manufacturing that cleared these same checks in 2025. This historical pattern indicates consistency and supports the hypothesis that the classification was previously maintained but was likely cleared during a routine master data update. It does not confirm there is no risk. Compliance must still validate.

Two parallel actions are needed: escalate the open compliance case to the Compliance Manager, and request the product team to populate the classification field once compliance confirms the correct value. The compliance team must sign off on the classification before the field is updated. This is not an administrative shortcut.

**The outcome**

The Compliance Manager receives a structured case with the check-by-check breakdown, the prior shipping history, and a clear explanation of why this is an administrative gap rather than a regulatory risk. The order is not cleared by the agent. That remains a compliance decision. What the agent does is remove the ambiguity so the right person can act on the right information quickly.

**Scenario 6: A Price That Was Never Written Down**

**The situation**

Frontier Corp has placed an order worth $8,100. The order is in the billing queue but no invoice has been raised. A billing block has been applied and it is sitting with the sales manager for a countersignature.

**Why it is stuck**

When a sales order is saved with a manually entered price, the SD pricing procedure checks whether the deviation from the standard price falls within an approved tolerance. In this case, the tolerance is set at 5.0%. The price entered was 5.2% below the standard rate, 0.2% over the threshold. In most configurations, the system automatically applies a billing block at that point and routes the case for manager approval before invoicing can proceed.

**What the sales manager sees today without the agent**

The case lands in the queue with the deviation flagged. The manager can see the numbers. What the system does not provide is:

- Whether this customer has had the same situation before
- Whether there is a pattern suggesting this price has become the de facto commercial rate
- Whether the right response is to approve this case or fix the underlying condition

Without that context, the manager approves or rejects based on the single case in front of them.

**What the agent does**

The agent checks the order history for this customer on this material. The same billing block has been raised four times in the past 12 months, always at a price in the same range, always approved by the sales manager within a day. There is no quotation or contract on record that commits the lower price, but the pattern strongly indicates this has become an accepted commercial practice that was never formalised in the system.

The immediate recommendation is a countersignature to unblock this order, processed via the standard approval in the sales order. The structural recommendation is to create a customer-specific pricing condition so the agreed price is captured in the system and this approval cycle does not repeat on every order.

**The outcome**

The sales manager approves with full context rather than just a deviation percentage. The invoice is raised through the standard billing process once the block is removed. The longer-term action, formalising the pricing condition, is flagged separately so it does not get lost once this order is resolved.

---

## Page: Credit Risk Workbench

**Scenario 1: The Case That Is Ready to Act On**

**The situation**

MetroPlex Industries is $35,400 over their credit limit. A linked sales order worth $87,400 is sitting blocked. No credit case has been opened yet. The SLA has been breached.

**Why it is stuck**

When a customer's total exposure exceeds their credit limit, the credit controller typically assesses the situation and decides on a course of action. In many configurations, this involves opening a formal case through the credit management workflow before any delivery block can be released. The case has not been opened yet, so nothing is moving.

**What the credit controller sees today without the agent**

The workbench surfaces the exposure and the breach. What it does not clearly surface is:

- Which factors are driving the overage and which represent the most actionable path to resolution
- How the customer's payment behaviour has been trending and for how long
- Whether a comparable situation has been handled before and how it was resolved
- Whether the current review cadence is still appropriate for this account

The controller often has to assemble that picture manually before they can open a case and act.

**What the agent does**

The agent diagnoses the exposure. Total exposure includes both the $48,000 in overdue invoices and the value of open orders. The overdue AR is the primary driver of the breach. Paying just two of the three overdue invoices would, in this case, bring exposure back below the limit and represents a more targeted resolution than increasing the credit limit.

The risk score trend adds further context. The score has declined from 41 to 28 since January 2026, crossing the internal escalation threshold. The annual review cycle did not catch this because the decline happened between review dates.

A November 2025 case on this account followed a similar pattern. A payment demand was issued, the customer paid within 8 days, and the order was released. That precedent supports the recommended approach but does not guarantee the same outcome.

The agent prepares the full case for the controller to review and submit: the AR breakdown, the exposure calculation, the precedent reference, and a recommendation to issue a payment demand as the release condition. The controller opens the case and approves the action. The agent does not open the case or issue the demand directly.

**The outcome**

The controller does not need to investigate before acting. The case is submitted through the credit management workflow, the payment demand is issued, and the delivery block on the linked order is released through the standard process once the customer responds. The agent also flags that the annual review cadence is no longer appropriate for an account whose payment behaviour has been shifting month to month. That is raised separately for the Credit Manager, not tied to resolving this case.

**Scenario 2: When the Right Action Is to Hold**

**The situation**

Pinnacle Systems is 4.6% over their credit limit, with a blocked order on the workbench. A formal credit case is already open and under active review by a credit controller.

**Why it is stuck**

A credit limit breach typically surfaces on the workbench as something requiring action. In many configurations, the workbench and the credit case management module operate as separate views of the same situation. What is not always visible from the workbench is whether a formal review process is already underway elsewhere in the system.

**What the credit controller sees today without the agent**

The workbench shows the breach and the blocked order. What it does not clearly consolidate is:

- Whether a formal credit case has already been opened for this account
- Who owns it and what stage they are at
- Whether acting here would conflict with a process already in motion

Without that, the natural response is to investigate and work toward releasing the block.

**What the agent does**

The agent checks the credit management module and finds that a formal case is already open and assigned to a controller, opened the previous day and currently under active review. The exposure is driven by open order accumulation rather than overdue invoices, which suggests a volume and limit calibration issue rather than a payment behaviour concern. That said, the agent does not make a credit decision. It identifies that the formal review process is already engaged.

Acting independently from the workbench at this point would typically create a parallel workflow alongside the open case. In most configurations, this risks an audit gap and undermines the control structure designed to manage credit decisions through a single tracked process.

The agent recommends no action from the Credit workbench and explains why.

**The outcome**

The credit controller does not intervene. The formal review proceeds through the appropriate channel. A February 2026 case on this account with a similar profile was resolved within 4 hours, which indicates same-day resolution is plausible, though each case is assessed on its own merits. The Credit Manager has separately been flagged that the current limit may no longer reflect the customer's order run-rate, which is the structural question underlying the recurring breaches.

**Scenario 3: The Problem That Has Not Happened Yet**

**The situation**

Thornfield Holdings has no blocked orders today. Nothing on the workbench requires immediate action. But the account is already 11.5% over its credit limit, carrying $21,600 in overdue invoices, with a risk score that has been declining for months and no FSCM case open.

**Why it matters**

In many configurations, SAP's credit management functionality surfaces accounts when something is already blocked or a case is already open. Accounts that are over their limit but not yet causing an active disruption often sit below the visible threshold. There is no alert for an order that has not arrived yet.

**What the credit controller sees today without the agent**

The workbench does not clearly surface this account as requiring action today because nothing is blocked. The controller has no direct visibility into:

- Whether the next inbound order is likely to breach the limit and trigger a hold
- How the risk score trend is moving relative to escalation thresholds
- Whether the overdue invoices have been formally requested yet

**What the agent does**

The agent reviews the full exposure profile. At 111.5% utilisation, any standard inbound order for this customer, which based on order history typically falls in the $10,000 to $14,000 range, would in most credit check configurations push exposure further above the limit and likely trigger an automatic hold at order save. That disrupts the customer's order cycle with no advance communication.

The risk score has declined from 58 to 45 over the past six months, a consistent downward trend that the last annual review did not capture. Two overdue invoices totalling $21,600 have not yet had a formal payment request raised against them.

The agent flags the account as requiring proactive action: open a credit case, issue a formal payment request on the overdue invoices, and initiate a credit limit review in parallel. The goal is to address the exposure before a hold becomes the trigger rather than after.

**The outcome**

The controller acts before a disruption rather than in response to one. The customer receives a formal payment request through the standard process. The credit limit review is initiated separately. Whether the hold is avoided depends on the customer's response and the outcome of the limit review, but the controller is in a position to manage the situation rather than react to it.

**Scenario 4: A Signal Worth Acting On Before It Becomes a Problem**

**The situation**

Caldera Corp has no blocked orders today. The account is at 95.6% of its credit limit with $2,200 of headroom remaining. One overdue invoice for $8,900 has not yet had a formal payment request raised against it. The risk score has dropped 14 points in six weeks and sits 3 points above the threshold that, in many FSCM configurations, triggers automatic escalation.

**Why it matters**

Credit workbenches in most configurations surface accounts when a hold has already been triggered or a case is already open. An account with a deteriorating risk score, minimal headroom, and an unaddressed overdue invoice does not typically generate a workbench alert until something breaks. By that point, the options are more limited and the customer impact is more visible.

**What the credit controller sees today without the agent**

The account appears in a watch status but does not clearly surface:

- How close the risk score is to the auto-escalation threshold and how fast it is moving
- That the available headroom is insufficient for any standard inbound order
- That a single overdue invoice, if cleared, would materially change both the exposure and the score trajectory

**What the agent does**

The agent assesses the account trajectory rather than just the current state. Current exposure is $47,800 against a $50,000 limit. Based on historical order sizes for this customer, which have typically ranged from $8,000 to $15,000, any standard inbound order would in most credit check configurations push exposure above the limit and likely trigger a hold. The risk score decline, if it continues at the current rate, would approach the auto-escalation threshold within weeks, depending on the FSCM configuration in place.

A pattern observed across similar accounts in the past quarter indicates that a risk score decline of more than 10 points in six weeks has often preceded a hold event, though this is a directional signal rather than a certainty.

The recommended action is straightforward: send a formal payment request for the one overdue invoice. No FSCM case is needed at this stage. If payment is received, exposure drops by $8,900 and the payment behaviour component of the risk score stabilises. The May quarterly review is flagged to include a limit reassessment.

**The outcome**

A simple, targeted outreach replaces what could become a reactive hold and escalation. The controller acts on a signal rather than waiting for a trigger. Whether the hold is ultimately avoided depends on the customer's payment response and the trajectory of new orders, but the action taken is proportionate and timely.

---

## Page: Delivery Execution Workbench

**Scenario 1 - Partial Pick: The Stock Is There, Just in the Wrong Bin**

A $52,400 delivery for Hartwell Group needs to ship today. 32 of 40 units have been picked; the remaining 8 can't be found in the directed bin. SAP holds the goods issue until all items are fully picked. The agent traces the discrepancy to a put-away mis-confirmation from three weeks earlier - stock was physically placed in one bin but the system was told it went to another. It locates the 8 units in the correct physical location, recommends a supplemental transfer order to complete the pick, and flags the phantom inventory record for correction in parallel. The shipment goes today without waiting for a full inventory count.

**Scenario 2 - Batch Expiry: An Alternative That Meets the Customer's Actual Requirement**

Nexon Pharma's delivery is blocked because the allocated batch fails the shelf-life check for their minimum remaining shelf-life requirement. SAP stops there. The agent checks available batches and finds one with 38 days remaining shelf life - above the customer's 30-day minimum. It recommends re-allocating to the alternative batch, which meets the contractual requirement, and flags that the original batch should be redirected to a customer with a lower shelf-life threshold rather than sitting in stock.

**Scenario 3 - Carrier Failure: A Cost-Justified Alternative**

Vantage Corp's delivery is blocked because the primary carrier has no available capacity. SAP surfaces the block. The agent sources a spot carrier quote, calculates that the $340 premium is less than the penalty clause exposure in the customer contract, and recommends proceeding. It also flags the carrier's recent capacity failures as a pattern worth reviewing in the procurement relationship.

---

## Page: Receivables Workbench

**Scenario 1 - Dunning Escalation: The Invisible $22,000 at Risk**

Galveston Partners is 67 days overdue on $18,400, with a broken payment promise and no response to the second dunning notice. SAP's dunning process sees $18,400 at risk and recommends a level 3 escalation. The agent looks further: two open orders totalling $22,000 are confirmed and not yet shipped. If those orders ship before a credit hold is in place, the total unrecovered exposure doubles to $40,400. The dunning run has no visibility into the open order pipeline - that cross-check is the intelligence layer's contribution. The recommendation is two parallel actions: legal-level dunning and a credit hold, both requiring Credit Manager authorisation.

**Scenario 2 - Disputed Invoice: A Pattern the System Never Connected**

Frontier Corp is formally disputing an $8,100 invoice, claiming the price should be $66.36/unit rather than the $70.00 invoiced. SAP raises the dispute case. The agent finds that the sales manager who is now being asked to adjudicate the dispute is the same person who countersigned the $70.00 deviation at billing three days ago. It also surfaces that this has happened four times in the past year - always the same customer, always the same price range, always resolved as a goodwill gesture. The evidence package changes the nature of the conversation: this is a governance question about formalising a commercial practice, not a one-off billing error.

**Scenario 3 - Trade Deduction: A Valid Claim Through the Wrong Channel**

Vantage Corp paid $45,200 against a $47,600 invoice with no explanation for the $2,400 shortfall. The agent checks the rebate agreement - not the pricing condition record, which is a different transaction entirely - and finds that a 5% quarterly rebate on this customer's net sales calculates to $2,380. The deduction is valid. The $20 overage is a calculation methodology difference: the customer applies the rebate to the gross invoice value, SAP applies it to the net. The recommended path is through the rebate settlement module, not a direct credit note - which would bypass the accrual and break the quarterly reconciliation.

**Scenario 4 - Credit Note Stuck: A $12 Discrepancy Holding Up $4,800**

Caldwell Corp returned goods eight days ago. The goods receipt is posted, the returns order is in the billing queue, and there is no billing block. Yet no credit note has been issued. SAP can tell you the order is eligible to bill; it cannot tell you why no one has run it. The agent finds the answer: the returns order was created without referencing the original invoice, so the system re-priced it at today's conditions rather than copying the original price - producing $4,788 instead of $4,800. The AR coordinator spotted the discrepancy and stopped. The fix is a one-line amendment to the returns order to reference the original invoice, not a manual workaround.

**Scenario 5 - Write-off Candidates: Seven Individual Errors That Are Actually One**

A $47 residual on a customer account appears to be a routine small write-off. The agent doesn't evaluate it in isolation - it scans the full customer portfolio and finds six identical cases, all created in the same week, all on invoices originally in euros, all with residuals that match the USD/EUR exchange rate rounding differential on the last day of the period. This isn't seven customers slightly underpaying. It's a configuration gap in how the system handles foreign currency rounding at period-end close. Writing off seven items treats the symptom; fixing the configuration prevents it from recurring at every quarter-end.

---

## Page: Cash Application Workbench

**Scenario 1 - EBS Match Failure: Finding the Pattern Behind the Payment**

Hargreaves Ltd sent $34,200 with no SAP invoice numbers in the remittance - just their own internal purchase order references. The Electronic Bank Statement process couldn't match it and parked the payment in a clearing account. SAP stops there. The agent runs a combinatorial match across all open invoices and finds an exact two-invoice combination that totals $34,200 with zero remainder. It also checks the last five Hargreaves payments and finds the same remittance format in three of them - this is how the customer always pays. The immediate action is a brief confirmation call. The structural fix is a customer-specific matching rule so this never lands in the exception queue again.

**Scenario 2 - Misapplied Payment: The Invoice That Looked Paid But Wasn't**

A $27,500 payment arrived and the bank statement processing automatically matched it to Midlands Group. The problem: the payment was from Midlands Trading, a different legal entity. The bank reference explicitly named "Midlands Trading" but the system's name-matching fallback picked the first alphabetical match when the primary identifiers weren't found. Midlands Trading's invoice is now approaching the dunning threshold - for a debt that is effectively already settled. The correction requires a specific reversal transaction to undo the existing clearing entry; simply re-clearing would compound the error rather than fix it.

**Scenario 3 - On-Account Payment: Reading What the Customer Didn't Say**

Brentford Corp sent $10,000 with no remittance. Three invoices are open totalling $15,600. A mechanical FIFO allocation produces the right answer - oldest invoices first - but misses the signal: Invoice A plus Invoice B equals exactly $10,000, to the dollar. That's not coincidence. The agent cross-references CRM notes and finds an open enquiry from Brentford's AP team requesting a copy of the delivery note for the third invoice. They aren't short on cash - they're waiting on a document before they'll approve that payment. The recommended action isn't just an allocation; it's sending the delivery note so the $5,600 clears in the next payment run.
