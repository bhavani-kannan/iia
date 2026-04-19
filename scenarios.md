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

**Scenario 1: The Units That Were There All Along**

**The situation**

A $52,400 delivery for Hartwell Group needs to ship today. 32 of 40 units have been picked and confirmed. The remaining 8 units were not found in the bin the system directed the picker to. The delivery has stopped and the ship date is at risk.

**Why it is stuck**

In most warehouse management configurations, a goods issue cannot be posted until all items on the delivery have been fully picked and confirmed. A partial pick leaves the delivery in an incomplete status, and in these setups the system does not allow the shipment to proceed until the outstanding quantity is resolved. The warehouse team is looking at a bin that appears to have stock on paper but nothing physically present.

**What the warehouse team sees today without the agent**

The workbench shows a partially picked delivery and a bin discrepancy. What it does not clearly surface is:

- Whether the missing units are actually somewhere else in the warehouse
- What caused the discrepancy and when
- Whether resolving the pick will also leave an inventory integrity problem that needs a separate action

The default response is to initiate a warehouse investigation or conduct a bin count, both of which take time the ship date does not allow.

**What the agent does**

The agent queries bin stock records and finds 8 units of the material sitting unreserved in an adjacent bin, not allocated to any other transfer order. The stock is there. It is just not where the system said it would be.

Tracing the history, the agent identifies a put-away mis-confirmation from three weeks earlier. A goods receipt directed stock to one bin, but the operator confirmed a different bin as the actual destination. The warehouse management system accepted the confirmation without cross-checking the physical location, leaving the original bin with a stock record that has no physical backing.

Two actions are needed:

- A supplemental transfer order to pick the 8 units from the correct physical bin, which would allow the goods issue to be posted today
- A physical inventory document for the original bin to reconcile the ghost stock record, run in parallel and with no impact on today's shipment

**The outcome**

The warehouse supervisor creates the supplemental transfer order through the standard warehouse process, the pick is confirmed, and the goods issue is posted. Hartwell receives their full 40-unit order on time. The inventory discrepancy is addressed as a parallel action. The agent also flags that this is the third bin discrepancy for this material in six weeks, all from put-away mis-confirmations in the same aisle, which points to a process gap in how put-away confirmations are validated.

**Scenario 2: The Right Batch Was Available All Along**

**The situation**

A $31,800 delivery for Nexon Pharma is blocked. An attempt to post the goods issue failed. The batch assigned to the delivery expired seven days ago and has been sitting on an open delivery since then with no alert.

**Why it is stuck**

Where shelf life management is configured, the system typically runs a shelf life check when a goods issue is posted. The check compares the batch expiry date against the customer's minimum remaining shelf life requirement, which in many setups is maintained in the customer-material information record. If the batch does not meet the requirement, the goods issue is blocked. In this case, the batch expired well before the customer's minimum threshold and the system correctly stopped the shipment. The delivery should have been reassigned to a different batch days earlier.

**What the warehouse team sees today without the agent**

The workbench shows a goods issue block and an expired batch. What it does not clearly surface is:

- Whether other batches are available that meet the customer's shelf life requirement
- What the critical execution sequence is for swapping the batch when a warehouse transfer order is already active
- That the batch has been expired and assigned to an open delivery for a week without any proactive alert

**What the agent does**

The agent checks available batches at the plant and finds two options with sufficient remaining shelf life to meet the customer's 90-day minimum requirement. It calculates the required expiry floor for this delivery and confirms both batches pass, with one expiring sooner and selected as the primary option to align with a first-expiry-first-out approach where that policy is configured.

The agent also identifies a critical execution step that is frequently missed in batch substitution scenarios. An active warehouse transfer order was already raised for the expired batch. If the batch is changed on the delivery without first cancelling that transfer order, the warehouse management layer retains the old reference and the goods issue continues to fail despite the update. The correct sequence is to cancel the active transfer order first, then change the batch on the delivery, then raise a new transfer order and post the goods issue.

**The outcome**

The warehouse team follows the correct execution sequence through the standard warehouse process. The goods issue is posted, the delivery ships, and the expired batch is moved to restricted stock status so it cannot be picked again. The agent flags a structural gap: there is no proactive alert configured for batches assigned to open deliveries when their expiry date passes. A daily monitoring process against open delivery batch assignments would have surfaced this 30 days before expiry rather than 7 days after it.

**Scenario 3: A Master Data Change That Silently Broke Three Deliveries**

**The situation**

A $19,600 delivery for Vantage Corp cannot be shipped. Two more deliveries for the same customer, totalling a further $22,200, are in the same state. No shipment has been created for any of them. The route field on all three deliveries is blank.

**Why it is stuck**

Before a shipment can be created and a carrier assigned, the system needs to determine the correct route for the delivery. In most configurations, route determination runs automatically based on factors including the departure point, the destination zone derived from the customer's postal code, the transportation group on the material, and the shipping condition on the customer record. If the system cannot find a matching route for the combination it evaluates, it typically saves the delivery without raising an error and leaves the route field blank. The failure only surfaces later when shipment creation is attempted.

**What the logistics team sees today without the agent**

The workbench shows three blocked deliveries with blank route fields. What it does not clearly surface is:

- What changed to cause this, and when
- Whether the physical route is actually different or only the system reference is missing
- That the same gap will affect every future delivery to this customer until a configuration update is made

**What the agent does**

The agent traces the route determination failure. A customer master update on April 11 changed Vantage Corp's postal code to reflect a confirmed address change following a relocation. The postal code change moved the customer into a new destination zone. That zone has no route entries configured in the routing table for any shipping condition, including the one on Vantage Corp's record. The delivery was saved without error, but shipment creation fails because there is no route to reference.

The physical route the carrier follows has not changed. The gap is a configuration entry that was not created when the new zone was introduced.

Two parallel actions are needed:

- The logistics coordinator manually enters the prior route on all three affected deliveries, which in most setups is a permitted action before goods issue, and creates the shipments so the deliveries can proceed today
- The transportation configuration team adds the missing zone entries in the routing table to prevent the same failure on every future delivery to this customer

The agent also flags that the April 11 master data update was part of a batch run covering 14 customers. The other 13 may have the same configuration gap waiting to surface on their next delivery.

**The outcome**

All three deliveries ship. The configuration gap is closed through the standard transport configuration process. A post-change validation check for blank routes on open deliveries is raised as a structural fix so future master data updates do not produce the same silent failure.

---

## Page: Receivables Workbench

**Scenario 1: The $22,000 the Dunning Process Cannot See**

**The situation**

Galveston Partners is 67 days overdue on an $18,400 invoice. A payment promise made in March was not honoured. The second dunning notice has had no response. The standard dunning process is indicating a level 3 escalation.

**Why it matters**

The dunning process in most configurations operates on the open AR balance. It identifies overdue invoices, tracks escalation levels, and generates notices. What it does not typically consolidate is whether the same customer has confirmed open orders that have not yet shipped. Those orders represent additional exposure that may ship before any credit control is in place.

**What the AR team sees today without the agent**

The workbench surfaces $18,400 at risk and a recommended escalation. What it does not clearly surface is:

- That two confirmed open orders totalling $22,000 have not yet shipped
- That no credit hold is currently in place to stop them
- That if both orders ship before a hold is applied, the total unrecovered exposure rises to $40,400

The AR coordinator working from the dunning queue alone has no reason to check the open order pipeline.

**What the agent does**

The agent cross-references the open order list for Galveston Partners alongside the AR position. Two orders, totalling $22,000, are confirmed and scheduled to ship in the coming days. There is no credit hold in place. The orders were confirmed before the invoice reached a threshold that would typically trigger an automatic hold in most credit management configurations, so they are sitting live in the pipeline.

The failed payment promise is a meaningful signal. A customer that had a clean payment history for 18 months, made a commitment and did not honour it, and has not responded to a follow-up notice, warrants a different response than a standard escalation step.

Two parallel actions require Credit Manager authorisation:

- Advance the dunning to legal level through the standard dunning process, outside the normal cycle given the failed promise
- Apply a credit hold to prevent the two open orders from shipping before the overdue situation is resolved

Neither action is within the AR coordinator's unilateral authority. The agent prepares the case for the Credit Manager to review and authorise.

**The outcome**

The Credit Manager acts on a complete picture: the overdue invoice, the failed promise, and the forward exposure from the open orders. The credit hold is applied before additional goods ship. The legal notice is issued. The $40,400 scenario is avoided by acting on information the dunning process on its own would not have surfaced.

**Scenario 2: The Dispute That Traces Back to the Approver**

**The situation**

Frontier Corp has formally disputed an $8,100 invoice, claiming the agreed price was $66.36 per unit rather than the $70.00 invoiced. A dispute case has been opened in the receivables system. The AR team needs to present the case to the sales manager for a commercial decision.

**Why it matters**

Invoice disputes in most configurations require the AR team to gather context from multiple sources before the case can be adjudicated. Without that context, the sales manager is making a commercial decision based only on what the customer is claiming.

**What the AR team sees today without the agent**

The dispute case is open. The AR coordinator can see the invoice amount and the customer's claim. What the system does not clearly consolidate is:

- Whether there is a documented price commitment at $66.36 anywhere in the system
- Who authorised the $70.00 price at billing and when
- Whether this pattern has occurred before

**What the agent does**

The agent checks three things before the case reaches the sales manager.

First, it confirms there is no quotation, contract, or pricing condition on record committing a price of $66.36 for this customer on this material. The lower price has no documented basis in the system.

Second, it checks the order audit log. The billing block on this order was released three days ago by the sales manager who is now being asked to adjudicate the dispute. That countersignature explicitly authorised $70.00 as the billable price. The person reviewing the dispute is the same person who approved the invoice.

Third, it checks the prior order history. The same billing block has been raised and approved four times in the past 12 months for this customer, always in the $66 to $67 per unit range, always approved within a day. No prior invoices at $70.00 have been disputed. The pattern indicates that $66 to $67 per unit has become the operating commercial rate for this customer, even though it has never been recorded as such in the system.

The agent does not resolve the dispute. That is a commercial decision. It presents the evidence so the sales manager understands exactly what they are deciding.

**The outcome**

The sales manager reviews a case that is no longer a one-off billing dispute. The structural question is whether to formalise the commercial price in a customer-specific pricing condition so the billing block, the countersignature, and the dispute cycle do not repeat. Whatever is decided on this invoice, the pattern warrants a governance decision about the pricing record.

**Scenario 3: A Valid Deduction, But Through the Wrong Process**

**The situation**

Vantage Corp paid $45,200 against a $47,600 invoice with no remittance explanation for the $2,400 shortfall. The invoice is showing a partial open balance in the AR ledger. The AR team needs to determine whether this is a payment error, a dispute, or a deduction, and how to clear it.

**Why it matters**

An unexplained shortfall on an otherwise-paid invoice typically creates an overdue signal in the AR system. The AR team has to determine what the shortfall represents before they can act. Without context, the default response is to chase the customer for the remainder, which may be commercially incorrect if the deduction is contractually valid.

**What the AR team sees today without the agent**

The AR coordinator sees a $2,400 open balance with no remittance note. What the system does not clearly surface is:

- Whether this customer has an active rebate agreement that could explain the deduction
- What the correct amount of any valid rebate claim would be
- What the right process is to clear it, and why a direct credit note would create a reconciliation problem

**What the agent does**

The agent checks whether an active rebate agreement exists for this customer. In setups where SD rebate management is configured, rebate agreements are held separately from standard pricing condition records. The agent finds an active quarterly rebate agreement with a 5% rate on net sales. Applying that rate to the invoice value produces a valid rebate amount of $2,380. The customer deducted $2,400, which is $20 more than the calculated entitlement.

The $20 difference points to a calculation methodology gap. The customer appears to have applied the 5% rate to the gross invoice value rather than the net value the rebate agreement references. This is a known source of small discrepancies in rebate programs and is a structural difference in how the two parties calculate the same rate.

The agent flags the correct resolution path. In setups with SD rebate management active, posting a direct FI credit note bypasses the rebate settlement module. That leaves the rebate accrual uncleared, creates a gap in the quarterly reconciliation, and breaks the audit trail linking the payment to the agreement. The correct path is to process the $2,380 through the rebate settlement module, which generates a linked credit document and clears the accrual. The remaining $20 is addressed separately, either recovered or written off under tolerance policy.

**The outcome**

The AR coordinator confirms the rebate claim with the customer and initiates the settlement through the correct process. The invoice is cleared correctly. The quarterly rebate reconciliation remains intact. The $20 methodology difference is documented and flagged as a structural pattern for the rebate configuration team to review.

**Scenario 4: A $12 Gap Holding Up a $4,800 Credit**

**The situation**

Caldwell Corp returned goods eight days ago. The goods receipt has been posted, the returns order is sitting in the billing queue, and there is no billing block. The AR team has not issued the credit note. The customer is chasing it.

**Why it matters**

When a returns order is eligible to bill, in most configurations it appears in the billing due list and can be processed through the standard billing transaction. If nothing is blocking it at a system level, the reason it has not been issued is typically that someone spotted something and stopped. Without knowing what they saw, the AR coordinator cannot determine whether it is safe to proceed.

**What the AR team sees today without the agent**

The returns order is in the billing queue with no block. What the system does not clearly surface is:

- Why the credit note has not been issued despite being technically eligible
- Whether the pricing on the returns order matches what the customer expects
- What caused any discrepancy and how to fix it cleanly

**What the agent does**

The agent checks the billing preview for the returns order and finds the system would generate a credit note for $4,788, not the $4,800 the original invoice reflected. The AR coordinator had already spotted this $12 difference and paused correctly.

The agent traces the cause. The returns order was created without referencing the original invoice. When no reference exists, in most SD configurations the system re-runs the full pricing procedure at the conditions active on the date the returns order was created rather than copying the original price. A pricing condition had changed slightly between the original invoice date and the returns order creation date, producing a $12 difference across 120 units.

The agent also checks whether the material was placed in quality inspection stock on receipt, as this would be another reason a credit could be withheld. The returned material posted to unrestricted stock and the material is not quality-managed, so that cause is eliminated.

The fix is a targeted amendment to the returns order in the standard sales order transaction: add the reference to the original invoice and re-copy pricing from it. Once the pricing matches $4,800, the credit note can be issued through the standard billing process.

**The outcome**

The AR coordinator obtains the necessary authorisation, makes the amendment, and issues the credit note at the correct amount. Caldwell Corp receives the full $4,800 credit. A $12 discrepancy that looked small turned out to be the precise thing preventing a correct credit note from being issued. The agent also notes this is the second returns order for this customer this quarter created without an invoice reference, which points to a process gap in how returns are raised.

**Scenario 5: Seven Write-offs That Are Actually One Configuration Gap**

**The situation**

A $47 open balance on a customer account has been sitting unresolved for over 90 days. The invoice is 99.8% cleared. It looks like a routine small write-off candidate. The AR team is preparing to process it individually.

**Why it matters**

Small residuals below a write-off threshold are a normal part of AR housekeeping. What is less obvious is when multiple small residuals share a common origin. Evaluating them individually and writing them off one by one treats symptoms without identifying the cause.

**What the AR team sees today without the agent**

The workbench surfaces the $47 item as an individual write-off candidate. What it does not clearly surface is:

- Whether other similar residuals exist across the portfolio
- Whether they share a common pattern in timing, currency, or origin
- Whether the correct action is a write-off, a configuration fix, or both

**What the agent does**

The agent does not evaluate the $47 item in isolation. It scans the full AR portfolio for open items below a threshold that have been outstanding over 90 days with no dispute flag. It finds six more, bringing the total to seven residuals across seven customer accounts, totalling $218.

The pattern is specific. All seven were created in the same week, during the period-end close window. All seven are on invoices originally raised in euros and posted in US dollars. All seven residual amounts correspond precisely to rounding differences at the USD/EUR exchange rate applied on the last day of the period.

The agent identifies this as a FI configuration gap rather than seven individual customer payment shortfalls. In most configurations, the way foreign currency rounding differences are handled at period-end is governed by the exchange rate difference account assignment in the FI settings. Where that assignment does not absorb small rounding differences automatically, the system creates a separate open item instead. That is what happened here.

Two actions are needed. The seven residuals are written off through the standard AR clearing process using the appropriate reason codes, which posts the difference to the write-off account and clears the customer subledger. A direct GL posting would not clear the customer subledger and should not be used here. In parallel, the FI configuration team reviews the rounding account assignment to prevent new residuals of the same type being generated at the next period-end.

**The outcome**

Seven items are cleared in a single session. The AR ledger is clean. The configuration fix, once tested and transported to production, prevents the same pattern from accumulating again at the next close. Without the portfolio scan, the AR team would have processed one item today and found the remaining six at the next review cycle.

---

## Page: Cash Application Workbench

**Scenario 1: The Payment That Was Always Going to End Up Here**

**The situation**

A $34,200 payment from Hargreaves Ltd has been sitting in a bank clearing account for three days. The Electronic Bank Statement process attempted to match it automatically but could not. The customer's AR account is showing as overdue and is at risk of generating a dunning notice.

**Why it is stuck**

In most EBS configurations, automatic payment matching relies on reference identifiers in the bank remittance to link the incoming payment to open invoices. These identifiers typically include the bank account IBAN, SAP invoice numbers, or payment references in a recognised format. When the remittance contains references the system cannot match to any open item, the payment is typically posted to a clearing account pending manual resolution. No error is raised. The AR team has to identify and work through unmatched items manually.

**What the AR team sees today without the agent**

The clearing account shows an unmatched $34,200 payment. What the system does not clearly surface is:

- Whether the remittance references correspond to something that can be identified in the open AR
- Whether there is more than one plausible interpretation of what the payment is intended to cover
- Whether this has happened before with this customer

**What the agent does**

The agent runs a combinatorial match across all open invoice subsets for Hargreaves Ltd. One combination produces an exact zero-residual match: two invoices totalling $34,200. Hargreaves' remittance contains their own internal purchase order numbers rather than SAP invoice numbers, which is why the automatic matching process could not resolve it.

The agent also checks payment history and finds that three of the last five Hargreaves payments used the same remittance format. This is an established pattern, not a one-off. The customer consistently pays using their own reference system.

Before posting, the agent flags one alternative interpretation. The $34,200 could represent a partial payment against a larger open invoice with a $13,400 deduction attached. Without confirmation, applying the combinatorial match directly carries a risk of misapplication that would require a reversal if the interpretation is wrong. A brief confirmation call resolves the ambiguity before the F-28 posting is made.

**The outcome**

The AR coordinator confirms the correct interpretation with the customer and posts the payment against the two invoices through the standard incoming payment transaction. The clearing account is cleared, the invoices are closed, and the unwarranted dunning risk is removed. The structural fix, a customer-specific matching rule that maps Hargreaves' purchase order references to SAP invoice numbers, is raised separately to prevent future payments from landing in the exception queue.

**Scenario 2: The Invoice That Looked Paid But Wasn't**

**The situation**

A $27,500 payment from Midlands Trading arrived via electronic bank statement and was automatically matched and cleared within the same business day. On the surface, the process worked. Two days later, Midlands Trading's invoice INV-MT-90441 appears overdue in the AR ledger, approaching the dunning threshold. Midlands Group, a separate legal entity, is showing an unexplained $27,500 credit on its account.

**Why it is stuck**

In many EBS configurations, the matching engine processes incoming payments through a hierarchy of identifiers: bank account number first, then payment reference codes, then customer name. When the primary identifiers are absent or do not match any open item, some configurations fall back to a name-based lookup. The bank remittance for this payment referenced "Midlands Trading, Inv MT-90441." The primary identifiers were not found, and the name-based fallback appears to have resolved to Midlands Group, a different customer whose name begins with the same word, resulting in the payment being cleared against the wrong account.

Once a payment is cleared in FI, it cannot simply be redirected to a different customer account. The clearing entry must first be reset using a dedicated FI reversal transaction before the payment can be reposted correctly. Without that step, attempting to re-clear the payment directly would typically compound the error rather than correct it.

**What the AR team sees today without the agent**

The team sees an overdue invoice on Midlands Trading's account. The natural response is to chase the customer for payment on an invoice that, from the customer's perspective, they have already settled. Midlands Group's unexpected credit sits unnoticed, with no alert connecting it to the Midlands Trading situation. The two ledger entries are visible in isolation. Their relationship is not.

**What the agent does**

The agent identifies both signals simultaneously: an invoice approaching dunning on one customer account and an unexplained recent credit of identical value on another. Cross-referencing the original bank statement remittance text confirms that the payment was intended for Midlands Trading, with the correct invoice number stated explicitly.

The agent also identifies a structural factor: Midlands Trading's customer record does not have a bank account IBAN registered. This indicates why the EBS process did not match on primary identifiers and fell back to the name-based lookup. The root cause is missing master data, not an ambiguous payment.

The recommended correction runs in two steps. The first is to reset the clearing on the Midlands Group posting using the appropriate FI clearing reversal transaction, which reopens the payment as an unallocated item. The second is to post it against Midlands Trading's open invoice through the standard incoming payment transaction. Both steps require AR team execution and, depending on configuration and internal FI posting controls, a second-level approval before the reversal is posted.

**The outcome**

The correction is made before Midlands Trading receives a dunning notice for a debt they have already paid. The phantom credit on Midlands Group's account is cleared. The missing bank account IBAN is added to Midlands Trading's customer record, so future payments from this customer match on primary identifiers rather than falling back to name-based logic. The AR team resolves what looked like a collections case before it became one.

**Scenario 3: Reading What the Customer Didn't Say**

**The situation**

Brentford Corp has sent a $10,000 payment with no remittance advice. Three invoices are open on the account, totalling $15,600. The payment covers part of the outstanding balance. The AR team has no instruction from the customer on what to apply it to.

**Why it is stuck**

When a payment arrives without remittance information, the standard approach in most AR workflows is to allocate against the oldest open items first. Applied here, that logic produces a clean result: the two oldest invoices, at $6,200 and $3,800, total $10,000 exactly. No residual, no rounding, no mismatch. The allocation would post cleanly and the ledger would balance. The remaining $5,600 invoice stays open.

The issue is not the allocation. A FIFO posting here is technically correct. The issue is that a clean allocation gives no prompt to look further, and looking further changes what the team should do next.

**What the AR team sees today without the agent**

The team sees a partial payment with no remittance and a clean FIFO match. The $10,000 is posted and the $5,600 invoice remains open. Without a reason to investigate, the invoice may drift toward the dunning threshold. The AR team will eventually chase Brentford Corp for a payment that Brentford may believe is already in progress on their side.

**What the agent does**

The agent applies the same FIFO logic and reaches the same allocation. But it also notes that two invoices summing to exactly the payment amount is an unusual degree of precision for a partial payment with no remittance. That pattern prompts a check of the CRM activity log.

The log shows an open enquiry from Brentford's AP team, submitted three days earlier, requesting a copy of the delivery note for the third invoice. The enquiry has not been responded to. This suggests Brentford is not short of funds for that invoice. They are most likely holding the payment pending receipt of supporting documentation their AP team requires before approving it.

The recommended action covers both dimensions: post the $10,000 allocation against invoices A and B, and respond to the open CRM enquiry with the delivery note for invoice C. Both actions fall within the AR team's standard execution scope, with a brief confirmation to Brentford before posting.

**The outcome**

The $10,000 is posted against the correct invoices. The delivery note is sent the same day. In most cases, the $5,600 would clear in Brentford's next payment cycle without requiring any dunning activity. The team recovers the full outstanding balance faster than a standard collections process would achieve, and avoids a collections call that would have been premature. What looked like a partial payment turns out to be a near-complete payment with one outstanding document request.
