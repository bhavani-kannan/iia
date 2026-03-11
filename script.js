const acceleratorData = {
  canonicalModel: {
    title: "Canonical Data Model",
    impact: "Impact: faster standardization across source systems",
    what: "A canonical data model creates a common business structure across fragmented source systems. It standardizes how core entities like customer, product, supplier, plant, inventory, order, shipment, and asset are represented so downstream intelligence solutions do not need to reinterpret data every time.",
    why: "Without a canonical model, every engagement spends time reconciling different ERP structures, field names, and business logic. This slows onboarding, increases delivery effort, and makes reuse difficult. A reusable canonical layer creates consistency, accelerates integration, and becomes the structural backbone for every future predictive use case.",
    assets: [
      "Standard business entity models across enterprise source systems",
      "Reusable mappings for core objects such as orders, inventory, products, plants, assets, and customers",
      "Reference relationship models for operational and analytical workflows",
      "Normalization patterns for aligning heterogeneous ERP and source structures"
    ],
    benefits: [
      "Reduces repeated source-system interpretation work",
      "Accelerates downstream analytics and predictive use-case deployment",
      "Improves consistency across client implementations",
      "Creates a reusable backbone for future domain pods"
    ]
  },

  dataDictionary: {
    title: "Data Dictionary & KPI Library",
    impact: "Impact: trusted business semantics and faster KPI activation",
    what: "This accelerator defines reusable field descriptions, business terms, KPI formulas, and semantic logic so data is interpreted consistently across implementations. It captures what each field means, how KPIs are calculated, which assumptions apply, and how metrics should be consumed by business users.",
    why: "Many delays happen not because data is unavailable, but because definitions are inconsistent. Teams argue over how revenue, fill rate, inventory turns, downtime, or forecast accuracy should be measured. A reusable dictionary and KPI library eliminates ambiguity, improves trust, and enables faster reporting and model development.",
    assets: [
      "Standard field definitions and metadata patterns",
      "Reusable KPI formulas and business-rule definitions",
      "Semantic mapping guidance between raw source data and business metrics",
      "Reference metric catalog for analytics, dashboards, and predictive models"
    ],
    benefits: [
      "Improves trust in reporting and model outputs",
      "Reduces rework caused by metric-definition misalignment",
      "Accelerates dashboard and decision-layer delivery",
      "Creates a repeatable semantic layer across engagements"
    ]
  },

  connectors: {
    title: "ERP / Source Connectors",
    impact: "Impact: faster source onboarding and lower implementation effort",
    what: "This accelerator provides reusable connector patterns into common enterprise systems such as ERP, CRM, MES, planning systems, and operational data sources. It includes source extraction templates, standard field acquisition logic, and repeatable integration approaches for enterprise environments.",
    why: "Source onboarding is one of the most expensive and time-consuming phases in most engagements. Each project re-discovers how to connect to systems, what data is available, and how to structure extraction. Reusable connectors reduce that effort and make the offering more scalable and predictable.",
    assets: [
      "Reusable connectivity templates for common enterprise systems",
      "Source extraction patterns for operational and transactional data",
      "Reference input structures for downstream ingestion pipelines",
      "Integration design patterns for common enterprise landscapes"
    ],
    benefits: [
      "Cuts time spent on initial source integration",
      "Improves repeatability across client environments",
      "Reduces dependency on one-off custom extraction effort",
      "Makes pilot activation faster and easier to scope"
    ]
  },

  pipelines: {
    title: "Reusable Data Pipelines",
    impact: "Impact: faster ingestion, transformation, and data readiness",
    what: "Reusable data pipelines provide pre-engineered ingestion, transformation, validation, and harmonization flows. They move raw source data into analytics-ready structures using repeatable logic for cleansing, shaping, quality checks, and preparation.",
    why: "Even after systems are connected, projects often spend a large amount of time rebuilding ingestion and transformation logic from
