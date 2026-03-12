/* rewritten to support category-button navigation with expandable details */

const categoryData = {
  processIntelligence: {
    title: "Process Intelligence & Design",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>`,
    description: "Reusable process frameworks, governance templates and workflow design patterns built from successful client engagement across multiple industries - establishing process maturity as the foundation for automation.",
    assets: [
      { label: "As-is process mapping templates", desc: "Rapid assessment frameworks that document current workflows, bottlenecks, handoffs and decision points across core business processes." },
      { label: "To-be workflow design patterns", desc: "Industry-proven process designs for common functions (onboarding, procurement, order-to-cash) that serve as blueprints for automation-ready workflows." },
      { label: "SLA and KPI governance frameworks", desc: "Standardised definitions for service levels, KPIs and escalation thresholds that make process expectations explicit and measurable." },
      { label: "Decision logic and escalation rules", desc: "Reusable rule libraries for when to escalate, who owns each decision, and what conditions trigger different process paths." },
      { label: "Role-based access and governance models", desc: "Process governance templates defining who can approve, modify or override decisions at each workflow stage." },
      { label: "Process discovery and analysis tools", desc: "Diagnostic frameworks to identify waste, cycle time variance, bottlenecks and automation opportunities within existing workflows." },
      { label: "Process orchestration patterns", desc: "Proven multi-step coordination patterns for complex workflows spanning multiple systems and teams." },
      { label: "Performance benchmarking templates", desc: "Industry baselines and internal targets for cycle time, quality, cost and compliance across standard processes." }
    ],
    examples: [
      { label: "HR onboarding workflow - mapped, redesigned and optimization targets defined" },
      { label: "Procurement approval hierarchy and escalation rules - documented and standardised" },
      { label: "Order-to-cash SLAs and decision thresholds - defined for agent decision-making" },
      { label: "Supply chain process bottleneck analysis - cycle time variance and automation candidates identified" }
    ],
    outcomes: [
      "Explicit process documentation",
      "Clear decision governance",
      "Automation-ready workflows",
      "Measurable process maturity",
      "Reduced coordination overhead"
    ]
  },
  dataFoundation: {
    title: "Data Foundation",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>`,
    description: "A suite of shared data components developed and refined across multiple client engagements - eliminating repeated semantic and integration work on every new project.",
    assets: [
      { label: "Source system mappings (ERP, CRM etc.)", desc: "Reusable templates that cut data onboarding time on every engagement." },
      { label: "Canonical data models", desc: "Unified entity structures for joining data across multiple source systems." },
      { label: "Industry data dictionaries", desc: "Standardised field definitions maintained consistently across all projects." },
      { label: "Predefined KPI definitions", desc: "Agreed metric logic that ensures every team measures the same thing." },
      { label: "Shared reference tables (currency, units)", desc: "Common lookup tables that normalise values at source." },
      { label: "Prebuilt data quality rules", desc: "Automated checks that catch data issues before they reach models." },
      { label: "Master data management templates", desc: "Governance frameworks that maintain clean, trusted reference data across all deployments." },
      { label: "Standard security classifications", desc: "Predefined access tiers applied consistently across all data assets." }
    ],
    examples: [
      { label: "SAP to canonical supply chain model" },
      { label: "Oracle to canonical finance model" },
      { label: "Salesforce to customer master template" },
      { label: "IoT sensor schema normalized for analytics" }
    ],
    outcomes: [
      "Rapid data onboarding",
      "Consistent semantics across pods",
      "Reduced integration disputes",
      "Faster model deployment"
    ]
  },
  dataIngestion: {
    title: "Data Ingestion Accelerators",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 3v4a2 2 0 0 1-2 2H3"></path><path d="M14 21v-4a2 2 0 0 1 2-2h5"></path><line x1="14" y1="7" x2="21" y2="7"></line><line x1="3" y1="17" x2="10" y2="17"></line></svg>`,
    description: "Production-ready pipelines and connectors for the most common enterprise systems, built from real client integrations and continuously improved.",
    assets: [
      { label: "Reusable pipelines for SAP", desc: "Tested integration templates connecting SAP systems in days, not weeks." },
      { label: "Oracle ingestion flows", desc: "Preconfigured data pulls from Oracle ERP with transformation logic included." },
      { label: "Salesforce connectors", desc: "Battle-tested CRM connector deployed across multiple client environments." },
      { label: "Manufacturing MES & IoT feeds", desc: "Structured streams from factory systems connecting to our analytics layer." },
      { label: "Streaming SDK for real-time events", desc: "Purpose-built SDK for event-driven, real-time data ingestion at scale." },
      { label: "API ingestion kits", desc: "Standardised wrappers for REST and GraphQL sources that remove boilerplate." }
    ],
    examples: [
      { label: "SAP integration template deployed in days" },
      { label: "Salesforce customer feed ready out-of-the-box" },
      { label: "IoT sensor stream connected with zero code" },
      { label: "Oracle ERP batch imported nightly without customization" }
    ],
    outcomes: [
      "Minimal engineering effort",
      "Faster data readiness",
      "Reduced onboarding costs",
      "Higher first-time reliability"
    ]
  },
  modelLibrary: {
    title: "Intelligence Model Library",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M8 12h8"></path><path d="M12 8v8"></path></svg>`,
    description: "A growing catalogue of analytics and ML assets developed from live client deployments - forecasting, anomaly detection, optimisation and more, ready to deploy into any domain.",
    assets: [
      { label: "Forecasting templates", desc: "Demand and revenue forecasting models validated and refined across multiple industries." },
      { label: "Anomaly detection models", desc: "Statistical and ML-based outlier detection applied to quality, ops and finance." },
      { label: "Optimization algorithms", desc: "Mathematical solvers configured for scheduling, routing and resource allocation problems." },
      { label: "Simulation components", desc: "Scenario and what-if tools used to stress-test strategies before deployment." },
      { label: "Feature engineering pipelines", desc: "Modular transformation logic reused and refined across every model build." },
      { label: "Monitoring & drift alerts", desc: "Dashboards and alert rules that keep deployed models accurate and reliable over time." }
    ],
    examples: [
      { label: "Forecasting model reused across three pods" },
      { label: "Anomaly detector plugged into ops dashboard" },
      { label: "Optimization algorithm applied to inventory planning" },
      { label: "Simulation component used for scenario testing" }
    ],
    outcomes: [
      "Reduced modelling time",
      "Consistent performance metrics",
      "Lower development costs",
      "Faster iteration cycles"
    ]
  },
  visualization: {
    title: "Visualization & Decision Layer",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 17 9 11 13 15 21 7"></polyline></svg>`,
    description: "A library of dashboard templates and decision tools built for business audiences - role-specific, action-oriented and proven in production environments.",
    assets: [
      { label: "Executive KPI dashboards", desc: "Leadership-facing views calibrated to drive decisions, not just report on them." },
      { label: "Persona-based monitoring", desc: "Role-specific dashboards built for each function - ops, finance, sales - with action-ready context." },
      { label: "Simulation interfaces", desc: "Interactive what-if tools that let business users test decisions before committing." },
      { label: "Decision support tools", desc: "Guided workflows that translate model output into clear, actionable business decisions." },
      { label: "Alert configuration packs", desc: "Predefined alert rules tuned to each domain's operational thresholds and priorities." },
      { label: "Mobile dashboard templates", desc: "Responsive layouts optimised for field and mobile users without custom development." }
    ],
    examples: [
      { label: "Executive KPIs prewired for C-suite" },
      { label: "Persona dashboards delivered with role-specific alerts" },
      { label: "Finance dashboard updated whitelabel" },
      { label: "Sales pipeline view available day one" }
    ],
    outcomes: [
      "Business teams gain value from day one",
      "Decisions informed by consistent metrics",
      "Faster stakeholder buy-in",
      "Improved cross-functional alignment"
    ]
  },
  platform: {
    title: "Platform Accelerator",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l0 0a2 2 0 0 1-2.83 2.83l0 0A1.65 1.65 0 0 0 13 19.4a1.65 1.65 0 0 0-1.82.33l0 0a2 2 0 0 1-2.83-2.83l0 0A1.65 1.65 0 0 0 4.6 13a1.65 1.65 0 0 0-.33-1.82l0 0a2 2 0 0 1 2.83-2.83l0 0A1.65 1.65 0 0 0 11 4.6a1.65 1.65 0 0 0 1.82-.33l0 0a2 2 0 0 1 2.83 2.83l0 0A1.65 1.65 0 0 0 19.4 11a1.65 1.65 0 0 0 .33 1.82z"></path></svg>`,
    description: "A pre-configured, cloud-native deployment stack hardened across engagements - covering data lake architecture, pipeline orchestration, ML release patterns and built-in governance.",
    assets: [
      { label: "Data lake/warehouse scaffolding", desc: "Structured storage architecture applied as a consistent, proven starting point across projects." },
      { label: "Pipeline orchestration templates", desc: "Automated workflow patterns we reuse to keep data flows reliable and maintainable." },
      { label: "ML deployment blueprints", desc: "Standardised model release patterns refined across multiple production deployments." },
      { label: "Governance framework setup", desc: "Data governance policies and controls configured for client ownership from day one." },
      { label: "CI/CD scripts", desc: "Reusable build and release pipelines for analytics code, adapted from production projects." },
      { label: "Monitoring & logging stack", desc: "Full observability tooling deployed at platform launch to ensure health from day one." }
    ],
    examples: [
      { label: "Full stack deployed to client cloud in weeks" },
      { label: "Platform spin-up with zero new infrastructure" },
      { label: "Prototype environment cloned for second use case" },
      { label: "Governance framework reused across two regions" }
    ],
    outcomes: [
      "Flexible foundation for long-term scale",
      "Optional platform adoption",
      "Accelerates multi-use deployments",
      "Reduces repeat architecture work"
    ]
  }
};

const podData = {
  procurement: {
    title: "Procurement",
    icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>`,
    description: "We help procurement teams move from reactive buying to intelligent, automated sourcing - reducing cost, risk and cycle time.",
    predictive: [
      {
        title: "Spend Forecasting",
        desc: "Predict future category spend based on historical patterns, contracts and pipeline demand.",
        value: "Avoid unbudgeted spend and negotiate contracts before price spikes hit."
      },
      {
        title: "Supplier Rating and Risk Model",
        desc: "Score and rate each supplier across financial health, delivery performance and geopolitical risk using a structured rating model.",
        value: "Proactively identify at-risk suppliers before disruption impacts operations."
      },
      {
        title: "Demand-Driven Replenishment",
        desc: "Forecast replenishment needs by category using consumption trends, lead-time variability and forward demand signals.",
        value: "Reduce emergency orders and stock-outs across critical categories."
      }
    ],
    prescriptive: [
      {
        title: "Optimal Sourcing Recommendations",
        desc: "Recommend the best supplier and contract terms for each category based on cost, quality and risk trade-offs.",
        value: "Increase savings realisation and reduce decision time from weeks to hours."
      },
      {
        title: "Maverick Spend Guardrails",
        desc: "Detect non-compliant purchase requests in real time and automatically re-route them to contracted preferred suppliers.",
        value: "Recover 5-10% of spend that leaks outside preferred channels each year."
      },
      {
        title: "Contract Renewal Triggers",
        desc: "Monitor contract expiry dates and generate timely renewal alerts with supplier-specific negotiation playbooks.",
        value: "Ensure no contract auto-renews at unfavourable rates without procurement review."
      }
    ],
    agentic: [
      {
        title: "Autonomous RFx Drafting",
        desc: "AI agent generates RFQ/RFP documents from business requirements and historical specs.",
        value: "Cut RFx cycle time from weeks to days with zero manual authoring effort."
      },
      {
        title: "Supplier Negotiation Assist",
        desc: "Agent surfaces benchmark prices, risk context and walk-away points to support live negotiations.",
        value: "Improve negotiation outcomes and equip buyers with data at the table."
      },
      {
        title: "Assisted Purchase Order Resolution",
        desc: "Agent auto-detects PO exceptions, diagnoses root cause and drafts resolution actions for buyer approval before any supplier contact.",
        value: "Reduce exception handling time and free buyers for strategic work, with full audit trail on every resolution."
      }
    ]
  },
  manufacturing: {
    title: "Manufacturing",
    icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>`,
    description: "We help manufacturing teams move from reactive operations to intelligent, self-optimising production - reducing downtime, defects and cost.",
    predictive: [
      {
        title: "Equipment Failure Prediction",
        desc: "Analyse sensor telemetry, maintenance history and operating conditions to forecast machine failures.",
        value: "Reduce unplanned downtime by 30-40% and extend asset lifespan across critical production lines."
      },
      {
        title: "Quality Defect Prediction",
        desc: "Score production batches using process parameters to flag defect events before they reach inspection.",
        value: "Cut scrap and rework costs and improve first-pass yield rates across all product lines."
      },
      {
        title: "Energy Demand Forecasting",
        desc: "Model energy consumption across shifts and production lines to predict peak demand and cost exposure.",
        value: "Identify 10-15% energy cost reduction opportunities through informed load shifting and scheduling."
      }
    ],
    prescriptive: [
      {
        title: "Cost-per-Ton and Schedule Optimisation",
        desc: "Optimise shift and machine assignments to minimise cost of production per ton while balancing throughput and changeover costs.",
        value: "Create a live cost-per-ton baseline and drive continuous reduction through data-led scheduling decisions."
      },
      {
        title: "Maintenance Work Order Prioritisation",
        desc: "Rank open maintenance tasks by failure impact, safety risk and line dependency to guide technician daily priorities.",
        value: "Maximise uptime by ensuring the highest-impact assets are serviced first, every shift."
      },
      {
        title: "Root Cause and Corrective Action Guidance",
        desc: "On any quality or downtime event, surface probable root cause and corrective actions from historical playbooks.",
        value: "Shorten mean-time-to-repair and reduce repeat failure events through evidence-based response."
      }
    ],
    agentic: [
      {
        title: "Autonomous Maintenance Dispatch",
        desc: "Agent monitors sensor thresholds, raises work orders and assigns technicians without manual intervention.",
        value: "Eliminate manual maintenance coordination and respond to at-risk assets in minutes, not days."
      },
      {
        title: "AI-Assisted Production Re-Sequencing",
        desc: "Agent generates updated production sequences from live demand and machine status, queuing proposed changes for planner approval before activation.",
        value: "Cut planning cycle time from hours to minutes while keeping planners in control of every schedule change."
      },
      {
        title: "Automated Quality Deviation Alerting",
        desc: "Agent detects out-of-spec readings and alerts QA teams with diagnostics and pre-staged containment options for authorised personnel to activate.",
        value: "Compress response time from detection to containment decision and reduce the cost and volume of escapes."
      }
    ]
  },
  logistics: {
    title: "Logistics",
    icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 20 13 16 13"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="13.5" cy="18.5" r="2.5"></circle></svg>`,
    description: "We help logistics teams move from reactive firefighting to intelligent, automated network orchestration - cutting cost, delay and manual effort.",
    predictive: [
      {
        title: "Delivery Delay Prediction",
        desc: "Model weather, carrier performance, port congestion and route data to forecast late deliveries before they occur.",
        value: "Enable proactive customer communication and reduce claims and penalties from late deliveries."
      },
      {
        title: "Shipment Volume Forecasting",
        desc: "Forecast shipment volumes by lane and region to inform capacity planning and carrier commitments.",
        value: "Avoid costly spot-rate exposure and improve utilisation of negotiated carrier contracts."
      },
      {
        title: "Carrier Performance Scoring",
        desc: "Score carrier reliability, damage rates and cost trends to predict future SLA compliance by partner.",
        value: "Shift volume to top-performing carriers and renegotiate with underperformers before failures escalate."
      }
    ],
    prescriptive: [
      {
        title: "Dynamic Route Optimisation",
        desc: "Recommend best-cost, on-time routes across all carriers and modes, accounting for real-time capacity and constraints.",
        value: "Reduce cost per shipment 15-20% while maintaining or improving delivery speed across the network."
      },
      {
        title: "Total Logistics Cost Modelling",
        desc: "Model end-to-end logistics cost across transport, warehousing and handling to expose the true cost by lane and mode.",
        value: "Build a credible total cost baseline and unlock structural savings beyond day-to-day route optimisation."
      },
      {
        title: "Carrier and Mode Selection Guidance",
        desc: "Prescribe the best carrier and mode per shipment based on cost, speed and sustainability targets.",
        value: "Balance service levels with cost and sustainability goals systematically across every lane."
      }
    ],
    agentic: [
      {
        title: "Intelligent Shipment Rerouting Recommendations",
        desc: "Agent flags at-risk shipments from live tracking data and surfaces alternative carrier and routing options for dispatcher approval.",
        value: "Recover at-risk deliveries faster and structurally improve on-time performance with minimal manual search effort."
      },
      {
        title: "AI-Driven Load Planning",
        desc: "Agent builds optimal load plans across mixed SKUs and auto-generates pick-list and load instructions for warehouse teams.",
        value: "Maximise truck utilisation and reduce the total number of trips and associated fuel cost."
      },
      {
        title: "Automated Exception Triage and Resolution",
        desc: "Agent auto-classifies exceptions, files low-value claims directly and routes complex cases to the right team with pre-loaded context.",
        value: "Free logistics teams from repetitive triage work and accelerate resolution times across all exception types."
      }
    ]
  },
  sales: {
    title: "Sales",
    icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="21 8 21 21 3 21 3 10"></polyline><path d="M7 4h10v4H7z"></path><path d="M9 9v2m6-2v2"></path></svg>`,
    description: "We help sales teams move from gut-feel forecasting to intelligent, data-driven pipeline execution - improving win rates, cycle time and revenue visibility.",
    predictive: [
      {
        title: "Revenue Forecast Modelling",
        desc: "Build ML-driven revenue projections at deal, rep and segment level using CRM signals and pipeline velocity.",
        value: "Improve forecast accuracy from the mid-70s to high-80s, reducing end-of-quarter revenue surprises."
      },
      {
        title: "Deal Risk Scoring",
        desc: "Score open opportunities on engagement, competitive and deal pattern signals to flag at-risk pipeline.",
        value: "Focus rep attention and management intervention on the deals most likely to slip or be lost."
      },
      {
        title: "Churn and Expansion Prediction",
        desc: "Flag churn risk and upsell readiness per account using product usage, engagement and relationship signals.",
        value: "Increase net revenue retention by surfacing the right expansion and save plays at the right time."
      }
    ],
    prescriptive: [
      {
        title: "Next Best Action for Stalled Deals",
        desc: "Recommend the best next outreach, content and stakeholder for each stalled deal based on won deal patterns.",
        value: "Unstick pipeline and reduce average sales cycle length across all segments and rep tenures."
      },
      {
        title: "Playbook and Messaging Recommendations",
        desc: "Surface the right sales playbook, talk tracks and competitive objection handlers for each deal stage and buyer profile.",
        value: "Increase win rates through consistent, evidence-based sales execution across the entire team."
      },
      {
        title: "Margin Maximisation and Pricing Guidance",
        desc: "Recommend deal structures and discount levels per opportunity to maximise margin without sacrificing win probability.",
        value: "Protect gross margin on every deal and reduce discount leakage systematically across the portfolio."
      }
    ],
    agentic: [
      {
        title: "Autonomous CRM Hygiene Agent",
        desc: "Agent reads call transcripts and emails to auto-update deal stages, next steps and contact records in the CRM.",
        value: "Eliminate manual CRM data entry and ensure pipeline data remains accurate and actionable at all times."
      },
      {
        title: "AI Sales Coach",
        desc: "Agent analyses every rep call and email, surfacing missed questions, competitor mentions and coaching moments for managers.",
        value: "Accelerate rep ramp time and lift performance across the entire sales team without scaling management headcount."
      },
      {
        title: "AI-Assisted Pipeline Nurture Outreach",
        desc: "Agent drafts personalised outreach for dormant prospects and queues sequences for rep review and approval before any message is sent.",
        value: "Keep the top of funnel active without consuming rep time - while maintaining brand control and compliance on every send."
      }
    ]
  },
  finance: {
    title: "Finance",
    icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>`,
    description: "We help finance teams move from manual, backward-looking reporting to intelligent, automated financial management - accelerating the close, improving forecasts and strengthening controls.",
    predictive: [
      {
        title: "Working Capital and Cash Flow Forecasting",
        desc: "Model cash, AR, AP and inventory positions daily to give treasury a complete working capital forward view.",
        value: "Reduce reliance on short-term borrowing and improve working capital efficiency across the business."
      },
      {
        title: "Cost and Revenue Variance Prediction",
        desc: "Flag budget-to-actual variances before month-end using mid-period transactional signals and trend analysis.",
        value: "Give FP&A time to investigate and explain variances before the close, not after it."
      },
      {
        title: "Accounts Receivable Risk Scoring",
        desc: "Score invoices by late payment or default probability using customer payment history and macro signals.",
        value: "Prioritise collections effort on the highest-risk balances and reduce bad debt exposure."
      }
    ],
    prescriptive: [
      {
        title: "Close Task Orchestration",
        desc: "Prescribe the close activity sequence across teams, surface blockers early and recommend tasks to parallelise.",
        value: "Reduce month-end close from 8+ days to 3-4 days without adding headcount or increasing error risk."
      },
      {
        title: "Budget Reallocation Recommendations",
        desc: "When actuals drift from plan, recommend budget reallocation across cost centres to protect full-year outcomes.",
        value: "Enable agile financial management and reduce year-end budget waste through timely redeployment."
      },
      {
        title: "EBITDA and Margin Maximisation",
        desc: "Trace gross-to-EBITDA margin by customer, product and channel and prescribe price, mix or cost actions to improve it.",
        value: "Make EBITDA improvement a daily operational discipline, not just an annual budgeting exercise."
      }
    ],
    agentic: [
      {
        title: "Automated Reconciliation Agent",
        desc: "Agent auto-matches GL entries to bank statements and sub-ledgers, routing only genuine exceptions for human review.",
        value: "Eliminate 60-70% of manual reconciliation effort and accelerate the financial close."
      },
      {
        title: "Automated Accrual Preparation and Review",
        desc: "Agent prepares accruals, prepayments and eliminations from rules and actuals, staging all entries for accountant approval before GL posting.",
        value: "Cut manual preparation effort and accelerate the close while preserving the approval controls required under SOX and audit standards."
      },
      {
        title: "Anomaly-Triggered Audit Workflow",
        desc: "Agent monitors all transactions for fraud signals and policy breaches, auto-triggering investigation workflows on detection.",
        value: "Strengthen controls with always-on monitoring and reduce end-of-year audit preparation time."
      }
    ]
  }
};

function renderPod(key) {
  const data = podData[key];
  if (!data) return;

  const container = document.getElementById("pod-details");
  if (!container) return;

  // New 3-tier layout (predictive / prescriptive / agentic)
  if (data.predictive) {
    const renderColumn = (label, color, items) => `
      <div class="pod-column">
        <div class="tier-badge" style="background:${color}22; color:${color}; border:1px solid ${color}44;">${label}</div>
        <div class="pod-column-cards">
          ${items.map(item => `
            <div class="pod-use-case">
              <div class="puc-title">${item.title}</div>
              <div class="puc-desc">${item.desc}</div>
              <div class="puc-value"><span class="value-label">Business value:</span> ${item.value}</div>
            </div>
          `).join('')}
        </div>
      </div>
    `;

    container.innerHTML = `
      <h3 class="details-header">${data.icon ? `<span class="details-icon">${data.icon}</span>` : ''}<span>${data.title}</span></h3>
      <p class="pod-intro">${data.description}</p>
      <div class="pod-columns-grid">
        ${renderColumn('Predictive', '#7fd8ff', data.predictive)}
        ${renderColumn('Prescriptive', '#91f2d8', data.prescriptive)}
        ${renderColumn('Agentic', '#f26cbf', data.agentic)}
      </div>
    `;
  } else {
    // Legacy layout for pods not yet converted
    container.innerHTML = `
      <h3 class="details-header"><span>${data.title}</span></h3>
      <p style="color:var(--muted); margin-bottom:20px;">${data.description}</p>
      <div class="section assets-section">
        <h4>Reusable assets</h4>
        <div class="asset-grid">
          ${data.assets.map(a => `
            <div class="asset-item">
              <span class="icon">-</span>
              <div class="asset-text">
                <span class="asset-label">${a.label}</span>
                <span class="asset-desc">${a.desc}</span>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
      <div class="section examples-section">
        <h4>Examples</h4>
        <ol class="examples-list">${data.examples.map(ex => `<li>${ex.label}</li>`).join('')}</ol>
      </div>
      <div class="section outcomes-section">
        <h4>Outcomes</h4>
        <ul class="outcomes-list">${data.outcomes.map(o => `<li class="outcome-block">${o}</li>`).join('')}</ul>
      </div>
    `;
  }

  document.querySelectorAll(".preview-pill").forEach(pill => {
    pill.classList.toggle("active", pill.dataset.key === key);
  });
}

function renderCategory(key) {
  const data = categoryData[key];
  if (!data) return;

  const container = document.getElementById("category-details");
  container.innerHTML = `
    <h3 class="details-header">${data.icon || ''}<span>${data.title}</span></h3>
    ${data.description ? `<p>${data.description}</p>` : ''}

    <div class="section assets-section">
      <h4>Reusable assets</h4>
      <div class="asset-grid">
        ${data.assets.map(a => `
          <div class="asset-item">
            <span class="icon">-</span>
            <div class="asset-text">
              <span class="asset-label">${a.label}</span>
              <span class="asset-desc">${a.desc}</span>
            </div>
          </div>
        `).join('')}
      </div>
    </div>

    <div class="section examples-section">
      <h4>Examples</h4>
      <ol class="examples-list">
        ${ (data.examples || []).map(ex => `<li>${ex.label}</li>`).join('') }
      </ol>
    </div>

    <div class="section outcomes-section">
      <h4>Outcomes</h4>
      <ul class="outcomes-list">
        ${ (data.outcomes || []).map((o) => {
          return `
            <li class="outcome-block">
              ${o}
            </li>
          `;
        }).join('') }
      </ul>
    </div>
  `;

  document.querySelectorAll(".category-button").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.key === key);
  });
}

document.querySelectorAll(".category-button").forEach(btn => {
  btn.addEventListener("click", function() {
    renderCategory(this.dataset.key);
  });
});

window.addEventListener("DOMContentLoaded", function() {
  renderCategory("dataFoundation");
});

// Pod preview pill click handlers
document.querySelectorAll(".preview-pill").forEach(pill => {
  pill.addEventListener("click", function() {
    renderPod(this.dataset.key);
  });
  pill.style.cursor = "pointer";
});

// Render first pod on load
document.addEventListener("DOMContentLoaded", function() {
  renderPod("procurement");
}, { once: true });
