# O2C Intelligence Architecture - Executive Demo Script

**Audience:** Senior executives with strong O2C domain knowledge (VP Finance, CFO, VP Supply Chain, Head of Shared Services, CIO)
**Duration:** 25-35 minutes with Q&A
**Goal:** Leave the room with a clear answer to: "What does this do that SAP does not, and is it worth the investment?"

---

## Before You Open the Screen

Set the room expectation before you touch the laptop.

> "What I am going to show you is not a replacement for SAP. SAP runs your business and it will continue to. What I want to show you is the intelligence layer that sits on top of it - reading signals that SAP captures but never acts on, and surfacing decisions to your people before they become problems. Every recommendation you see in this system requires a human to approve it before anything executes in SAP."

This line lands before a single slide loads. It neutralises the first objection before it is raised.

---

## Section 1: Where the Process Breaks Today

**What is on screen:** Eight pain cards, numbered 01 to 08, each calling out a specific failure point across the O2C chain.

**How to walk it:**

Start at 01 - Credit Management.

> "Credit decisions in SAP are rule-based. You set a limit, and SAP checks whether the customer is over it. That is a static threshold, not a risk score. A customer can be sitting at 85% utilisation, showing three consecutive late payments, and SAP will still accept the next order because the rule says 100% is the trigger. By the time the block fires, the risk is already in the system."

Move to 03 - Order Management.

> "Every sales team lives in VKM1 or a variant of it. Blocked orders, credit holds, pricing errors. The list tells you what is stuck. It does not tell you which stuck order costs you the most if it stays stuck, or why it is stuck, or what specifically needs to happen to release it. Your people spend their morning triage-ing a flat list by instinct."

Jump to 08 - Cash Application.

> "This one is worth pausing on. When a bank statement comes in, SAP knows money arrived. It does not know who sent it, which invoices they intended to pay, or what to do with a payment that covers seven invoices across three different amounts. Someone on your team is sitting with a spreadsheet, a PDF remittance, and a phone call to the customer to figure that out. For a business doing significant volume, that is hours of daily work and a DSO number that never fully closes."

You do not need to read all eight. Pick the three most relevant to the executive in the room. If you are talking to the CFO, lead with Credit Management and Cash Application. If you are talking to Supply Chain, lead with Delivery Tracking and Order Management.

---

## Section 2: Foundation Accelerator Layer

**What is on screen:** A 2-column grid of six compact cards - all visible at once. Each card shows an icon, a layer name, and what is already built.

**How to walk it:**

> "Before I show you the architecture, I want to show you what we are not building from scratch. These are reusable components our team has built and validated across previous engagements. When we come into your O2C landscape, we establish a single integration to your SAP system - one connection via standard RFC or OData interfaces, and then we configure extraction jobs for the specific data objects we need: SD orders, MM inventory positions, FI AR and payment data. We are not building credit risk models from blank paper either - those exist. The delivery delay prediction model has been tuned on real carrier and shipment data. What we are doing is configuring and adapting these to your specific process, your SAP instance, and your customer base."

Point to the Data Ingestion card.

> "Specifically for O2C in a discrete manufacturing environment: the SAP integration is established once and we pull from the modules we need. Your third-party delivery tracker is connected with a near-real-time event feed. And the Excel sales plan your commercial team manages outside SAP - that gets a dedicated ingestion pipeline so it is no longer a manual reconciliation at month-end."

This section answers the "how long will this take" question before it is asked. The accelerators are your time-to-value story.

---

## Section 3: O2C Intelligence Architecture

**This is the centrepiece of the demo. Spend the most time here.**

### Opening the section

**What is on screen:** Section heading "O2C Intelligence Architecture", intro copy, then the "Users act via" bar.

Read the intro copy aloud or paraphrase:

> "SAP SD, MM and FI remain your systems of record. They are not touched, not replaced, not re-implemented. The intelligence layer reads from them continuously, scores what it sees, and surfaces decisions to your people. Nothing writes back to SAP without a human approving it first."

Point to the "Users act via" bar.

> "Before we go into the agents, this row tells you where your people actually work. The O2C Control Tower is where your operations team has a live end-to-end view - orders, in-transit shipments, AR, collections. The Collections Workbench is where your AR team works their book ranked by risk, not alphabetically or by date. The Credit Risk Dashboard is where your credit controllers see customer scores, recommended limit changes, and approve or reject them. The Approval and Alert Queue is where every agent recommendation lands before it becomes an action."

### Walking the six agent lanes

**Principle:** For each lane, the structure is: what SAP does today, what the agent adds, and who approves. Never skip the human approval.

---

**Lane 1: Credit Risk Agent** (call this out as different - it has the orange border for a reason)

> "This is the only lane with a different visual treatment because it has cross-cutting impact. A credit decision affects every other lane downstream. If this agent gets it wrong, an order gets blocked that should not be, or a risky customer gets through when they should not.

> SAP today: you have a credit limit, and you have a utilisation percentage. That is it. No probability, no trend, no customer behaviour model.

> This agent reads live AR - payment history, days outstanding, dispute frequency, current exposure - and scores each customer's default probability continuously. When that score crosses a threshold, it does not fire a block. It recommends a specific action: adjust the limit to this number, or place a soft hold with this rationale, and it routes that recommendation to your credit controller for a one-click approval or override. SAP is updated only after the controller says yes."

---

**Lane 2: Revenue Intelligence Agent**

> "Your commercial team manages the sales plan in Excel. That is not a criticism - it is how it works at most discrete manufacturers because the planning process involves regional managers, product line owners and finance and SAP was never designed to be the tool for that collaboration.

> The problem is that as of today, comparing what is in that Excel file to what SAP SD is actually booking requires someone to export, reconcile and format a report. This agent eliminates that. The plan is ingested live when it is uploaded. SAP SD actuals are fed continuously. The agent computes the gap by region and by customer, scores which regions are at risk of missing target based on current trend, and surfaces those to your sales leadership as alerts - not a static monthly report, but a live signal they can act on."

---

**Lane 3: Order Exception Agent**

> "VKM1. Your team knows it well. A list of blocked orders. This agent does not replace that list - it gives it a brain.

> When an order blocks, the agent diagnoses why across three systems simultaneously: is this a credit issue in FI, an inventory issue in MM, a pricing error in SD? It then ranks every blocked order in the queue by revenue at risk and SLA proximity. The top of the queue is not the oldest order - it is the order that costs you the most if it stays blocked one more hour. The agent drafts the resolution step and routes it to the owner for approval. Your team goes from triage to action."

---

**Lane 4: Delivery Risk Agent**

> "SAP knows your delivery status when your team updates it. Your third-party tracker knows it in real time from the carrier. There is a gap between those two, and that gap is where customer escalations come from.

> This agent monitors every in-transit shipment continuously against the live carrier feed. It scores delay probability - not 'this shipment is late' but 'this shipment has a 73% probability of missing the delivery window based on current route conditions and this carrier's historical pattern on this lane.' It surfaces reroute options ranked by cost and delivery impact. Your logistics coordinator makes the call. Nothing changes in SAP or with the carrier until they say so."

---

**Lane 5: Collections and Dispute Resolution Agent**

> "Collections today is typically a combination of dunning runs, a manual AR aging report, and account manager relationships. The problem is that dunning treats every overdue invoice the same, and your best collector is spending time on accounts that would have paid anyway.

> This agent scores every account in the AR ledger daily by ML-driven default probability and customer payment behaviour - not just how many days overdue they are, but how likely they actually are to default based on their full history. It drafts the outreach for the highest-risk accounts: the right tone, the right amount referenced, the right contact. Your controller reviews and approves it before it goes. For deductions - short payments - it classifies the reason, pulls the supporting evidence from SAP, and routes it to the right person with context, not just an open item."

---

**Lane 6: Cash Application Agent**

> "This is the one that surprises people most, because on the surface it sounds simple - someone paid, apply the cash. But at volume, with customers who lump together seven invoices, or pay against a purchase order number rather than an invoice number, or whose remittance comes as a PDF attachment three days after the bank statement - it is anything but simple.

> SAP's bank statement import knows that money arrived. It does not know who sent it or what it is for without clean reference data. This agent correlates the MT940 bank statement against incoming remittance advice - email attachments, EDI, portal - identifies the payer, matches the payment against open AR using the combination of amount, invoice reference and the customer's historical payment behaviour, and posts it to SAP FI. Only the genuinely ambiguous cases land with your finance team for manual review. Your team goes from processing every payment to reviewing the hard ones."

---

### Dependencies, Governance, Period Close Gate

**Dependencies row:**

> "These are the data handoffs between agents that matter for sequencing within a single record lifecycle. The agents run in parallel across the portfolio - but within one customer's journey, the order of these matters. A credit block has to be cleared before an order ships. A dispute has to be resolved before the cash application run for that customer makes sense. These are not agent-to-agent instructions - they are the natural data dependencies your process already has, now made explicit and monitored."

**Governance row:**

> "Three things I want you to notice here. First - every action that touches SAP requires a human approval. Not a notification, an approval. Second - SLA breach does not just fire an alert. The system identifies the root cause and the recovery action, and routes it to the process owner with both. Third - every recommendation the agent makes, every approval or rejection a human gives, is logged. Full audit trail. When your auditor asks why a credit limit was changed or why a payment was applied a certain way, you have a complete record."

**Period Close Gate:**

> "This is the O2C equivalent of a period close checklist. Before a finance period closes, these four conditions have to be true. Not 'the SAP batch ran' - these are intelligence-layer conditions. Every agent-flagged exception has an owner and a resolution. High-risk AR accounts have been reviewed by a controller, not just aged. The remittance correlation cycle is complete and your finance team has cleared the genuinely ambiguous items. And customer default scores have been refreshed post-payment so your credit team is not working on stale risk data when the next order cycle opens."

**KPIs strip:**

> "These are the metrics this architecture is designed to move. DSO reduction of 20-40% is the headline. Cash match rate of 90-95% means your team is manually touching less than one in ten payments. Dispute resolution under seven days because the evidence assembly is automated. Exception triage automated means your team is approving decisions, not finding them."

---

## Section 4: O2C Intelligence Pod

**What is on screen:** Three columns - Predictive, Prescriptive, Agentic.

> "Three levels of intelligence, each with a different ask of your team. Predictive tells you what is likely to happen - delivery delay probability, default risk on the AR book. Prescriptive tells you what to do about it - ranked exception queue, recommended outreach, suggested limit change. Agentic does it, with your approval - applies the cash, sends the outreach, updates SAP.

> The intelligence builds on itself. The predictive score is what powers the prescriptive recommendation. The prescriptive recommendation is what the agentic action executes when your person approves it. These are not three separate tools - they are one intelligence layer operating at three levels of autonomy."

---

## Closing the Demo

Before questions, close with one sentence:

> "SAP tells your teams what happened. This tells them what to do about it - before it costs you."

---

## Expected Questions and Suggested Answers

---

### "SAP already does [X]. Why do I need this?"

The version most likely to come up: credit limits, AR aging reports, dunning, delivery status.

**Answer:**

> "You are right that SAP does those things. SAP knows your credit utilisation. It does not know the probability that a customer at 70% utilisation will default. SAP shows you an aging report. It does not score which accounts in that report are genuinely at risk versus habitually late but always pay. SAP posts your bank statement. It does not correlate a lump payment against seven invoices using the customer's payment history. The pattern is consistent: SAP captures the data. This layer acts on it. Everything we have built sits in the gap between those two things."

If they push harder on a specific feature, the answer is:

> "Show me the SAP screen that does that, and I will tell you specifically what this adds on top of it."

---

### "We have SAP S/4HANA. Doesn't it have embedded analytics and AI?"

**Answer:**

> "S/4HANA has made genuine progress on embedded analytics. The Fiori dashboard for credit management, the cash application ML in some versions - these are real. But there are three things S/4HANA does not solve. First, your sales plan lives in Excel outside SAP - S/4HANA analytics cannot bridge that without custom work. Second, S/4HANA analytics surfaces information inside SAP; it does not correlate signals across SAP SD, FI, and your third-party delivery tracker in a single intelligence layer. Third, S/4HANA's ML for cash application works well on clean remittance data - it struggles with the real-world complexity of lump payments and late or missing remittance advice. Those are the three gaps this fills."

---

### "What does this cost and what is the ROI?"

**Answer:**

> "The investment depends on your landscape - specifically your SAP version, the complexity of your customer base, and how much of the process you want to start with. What I can give you is the benchmark from comparable deployments: DSO improvement of 20-40 days in the first six months is the consistent number. On a AR book of [insert client's approximate AR balance], each day of DSO is [insert calculation]. The cash application automation alone typically eliminates 60-70% of manual matching effort in AR. We can model the specific case for your numbers before the next conversation."

Do not give a price on the spot. Commit to a modelled ROI case with their actual numbers.

---

### "How long does implementation take?"

**Answer:**

> "We structure it in two phases. The foundation - SAP integration, data layer, the first two or three agent use cases - lands in eight to twelve weeks. That is enough to be running a live credit risk agent and order exception agent against your real data. The full architecture you saw today is typically live within five to six months. The reason we can move at that pace is the foundation accelerators - the SAP integration layer, the base models, the platform infrastructure - these are not built from scratch on your engagement."

---

### "Does this require us to upgrade SAP or change our SAP configuration?"

**Answer:**

> "No SAP upgrade required and no changes to your SAP configuration. The connectors read from SAP using standard interfaces - RFC, BAPI, OData depending on your version and module. When an agent recommendation is approved and needs to update SAP, it does so through the same standard interfaces your team would use manually. We are not touching your SAP system architecture."

---

### "What happens when the agent gets it wrong?"

**Answer:**

> "Two things. First, every agent action requires human approval before it executes in SAP. The agent cannot get something wrong in SAP without a human agreeing with it first. If the agent recommends the wrong credit limit and your controller approves it, that is a process question not a technology question - and the full audit trail tells you exactly what the agent said and what the controller approved.

> Second, the agents are continuously learning. A recommendation that gets consistently overridden is a signal that the model needs recalibration. We monitor override rates as a key model health metric. High override rates are not a failure - they are diagnostic data."

---

### "We have tried RPA and AI before. It failed. Why is this different?"

**Answer:**

> "The pattern I see most often in failed deployments is one of two things: either the automation was built on top of a broken process so it automated the breakage, or it was fully autonomous with no human in the loop so when it went wrong, it went wrong at scale.

> This architecture is different on both counts. We start with process intelligence - we map the actual process before we build anything. And the HITL model means your people stay in every decision loop that matters. The agent is not replacing your controller's judgement. It is giving your controller better information, faster, with less manual work to get there."

---

### "Who owns this after you leave?"

**Answer:**

> "Your operations team owns the workbenches and dashboards - the same way they own a Fiori app today. Your IT team owns the platform layer - it runs on your cloud infrastructure or on a managed service depending on your preference. We leave with full documentation, and we train your team on the model management and governance layer. The agents do not require data scientists to operate them day-to-day. Override rates, SLA dashboards and alert queues are managed by your process owners."

---

### "How does this handle our specific customer complexity - partial payments, multi-currency, intercompany?"

**Answer:**

> "These are configuration choices in the intelligence layer, not architecture changes. Multi-currency: the cash application correlation works at transaction currency and converts at the posting currency - standard. Partial payments: the matching logic is built to handle partial payment scenarios by design; that is one of the cases where the agent genuinely adds value over a standard SAP match. Intercompany: depends on how your intercompany process runs - if it flows through the same FI AR ledger, it is in scope; if it is a separate entity, we include or exclude it in the data layer. Give us your specific scenarios and we will confirm how each is handled."

---

### "What data does this use and where is it stored?"

**Answer:**

> "The intelligence layer reads from your SAP instance and your delivery tracker. It does not replicate your full SAP database. It ingests the specific transactional data needed for each agent - AR open items, order status, delivery events, bank statement lines. That data sits in your cloud environment - on your infrastructure or on a dedicated tenant depending on your preference. No customer data leaves your controlled environment. All access is role-based and audited."

### "We are on SAP ECC, not S/4HANA. Does this still work?"

This will come up in most discrete manufacturing rooms. A large portion of the market is still on ECC 6.0 with no near-term upgrade plan.

**Answer:**

> "Yes, and this is where we differ from SAP's own embedded tools. SAP's AI and analytics roadmap is largely S/4HANA-first - if you are on ECC, many of those capabilities are not available to you. Our integration layer uses RFC and BAPI interfaces that have been stable since ECC 5.0. Every agent you saw today works against an ECC landscape. We have done it. The data models and extraction jobs are configured for ECC table structures where they differ from S/4HANA - that is part of what the foundation accelerators cover. Your upgrade timeline does not need to be the blocker here."

---

### "Our delivery tracking comes via EDI or email from the carrier, not an API"

Very common in discrete manufacturing, particularly with regional or specialist 3PLs who do not expose a REST API.

**Answer:**

> "That is a standard scenario and the ingestion layer handles it. If your carrier sends ASN and status updates via EDIFACT or flat file over SFTP, we have a pipeline for that. If status updates arrive as structured emails or PDF attachments, we parse those into the event feed. The Delivery Risk Agent does not need a real-time API to be useful - it needs a reliable, timely feed of shipment status, and EDI typically provides that. Where a carrier has no digital feed at all, we would have a separate conversation about what manual inputs are available and whether the agent can still add value on that lane."

---

## Notes for the Presenter

- **Know your audience before you start.** If the CFO is in the room, lead with Credit Risk Agent and Cash Application - those are DSO and working capital. If Supply Chain leads, lead with Delivery Risk Agent and Order Exception. If it is a joint room, use the pain cards to let the audience anchor on what matters to them.

- **Do not over-demo.** You do not need to walk all six lanes in detail. Pick the three most relevant to your audience, go deep, and let them ask about the others.

- **Never say "the agent decides."** Always say "the agent recommends, your team approves." The language matters in the room.

- **If challenged on SAP overlap, invite specificity.** "Which screen specifically?" is a strong response. Generic objections collapse when they have to name a specific SAP transaction.

- **The Period Close Gate is your strongest governance moment.** If an executive is worried about control and auditability, this row closes that conversation. Four conditions, all agent-verified, before period close. This is more rigorous than most manual checklists in use today.

- **The KPIs are conservative.** 20-40% DSO improvement and 90-95% cash match rate are benchmarks, not promises. Present them as industry reference and offer to model the specific case for their numbers.
