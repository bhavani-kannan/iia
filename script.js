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
    what: "This accelerator defines reusable field descriptions, business terms, KPI formulas, and semantic logic so data is interpreted consistently across implementations.",
    why: "Many delays happen not because data is unavailable, but because definitions are inconsistent. A reusable dictionary and KPI library eliminates ambiguity, improves trust, and enables faster reporting and model development.",
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
    what: "This accelerator provides reusable connector patterns into common enterprise systems such as ERP, CRM, MES, planning systems, and operational data sources.",
    why: "Source onboarding is one of the most expensive phases in most engagements. Reusable connectors reduce that effort and make the offering more scalable and predictable.",
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
    what: "Reusable data pipelines provide pre-engineered ingestion, transformation, validation, and harmonization flows.",
    why: "Projects often spend a large amount of time rebuilding ingestion and transformation logic from scratch. Standard pipelines reduce engineering effort and improve consistency.",
    assets: [
      "Reusable ingestion flow templates",
      "Transformation and harmonization patterns",
      "Quality validation and exception-handling components",
      "Analytics-ready preparation logic for downstream intelligence layers"
    ],
    benefits: [
      "Reduces repeated engineering effort",
      "Improves reliability and consistency of prepared data",
      "Shortens path from raw data to business-ready outputs",
      "Supports both direct deployments and scalable platform approaches"
    ]
  },
  modelLibrary: {
    title: "Predictive Model Library",
    impact: "Impact: reusable intelligence components for faster use-case deployment",
    what: "This accelerator contains reusable predictive and decision components such as forecasting methods, anomaly detection patterns, optimization approaches, and simulation logic.",
    why: "A reusable model library means each domain use case starts from a strong base rather than beginning model design from zero every time.",
    assets: [
      "Forecasting templates and reusable model patterns",
      "Anomaly detection and signal-monitoring logic",
      "Optimization and decision-support components",
      "Simulation structures for scenario analysis and business planning"
    ],
    benefits: [
      "Accelerates transition from data readiness to predictive intelligence",
      "Improves reuse of proven analytical approaches",
      "Strengthens differentiation of the offering",
      "Makes future domain pods more plug-and-play"
    ]
  },
  governance: {
    title: "Governance & Security Templates",
    impact: "Impact: trusted scale, auditability, and enterprise readiness",
    what: "This accelerator provides reusable governance structures for access control, role design, data trust, auditability, quality ownership, and security.",
    why: "Reusable intelligence cannot scale in enterprise environments without trust and control. Standard templates reduce compliance risk and improve deployment confidence.",
    assets: [
      "Reference access and role-control patterns",
      "Governance templates for data trust and quality ownership",
      "Auditability and control structures for enterprise deployments",
      "Reusable security-aligned design patterns for scale"
    ],
    benefits: [
      "Improves enterprise confidence in the solution",
      "Reduces design effort for controls and approvals",
      "Supports scalable and repeatable deployment",
      "Strengthens long-term sustainability of the catalogue"
    ]
  }
};

document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".accelerator-card");
  const detailTitle = document.getElementById("detail-title");
  const detailImpact = document.getElementById("detail-impact");
  const detailWhat = document.getElementById("detail-what");
  const detailWhy = document.getElementById("detail-why");
  const detailAssets = document.getElementById("detail-assets");
  const detailBenefits = document.getElementById("detail-benefits");

  function renderAccelerator(key) {
    const item = acceleratorData[key];
    if (!item) return;

    detailTitle.textContent = item.title;
    detailImpact.textContent = item.impact;
    detailWhat.textContent = item.what;
    detailWhy.textContent = item.why;
    detailAssets.innerHTML = item.assets.map(asset => `<li>${asset}</li>`).join("");
    detailBenefits.innerHTML = item.benefits.map(benefit => `<li>${benefit}</li>`).join("");

    cards.forEach(card => {
      card.classList.toggle("active", card.dataset.key === key);
    });

    if (window.gsap) {
      gsap.fromTo(
        ".detail-top, .detail-block",
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.45, stagger: 0.05, ease: "power2.out" }
      );
    }
  }

  cards.forEach(card => {
    card.addEventListener("click", function () {
      renderAccelerator(card.dataset.key);
    });
  });

  renderAccelerator("canonicalModel");

  if (window.gsap && window.ScrollTrigger) {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".site-header", {
      y: -24,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out"
    });

    gsap.from(".hero .eyebrow", {
      y: 16,
      opacity: 0,
      duration: 0.7,
      delay: 0.1
    });

    gsap.from(".hero h1", {
      y: 28,
      opacity: 0,
      duration: 0.9,
      delay: 0.2,
      ease: "power3.out"
    });

    gsap.from(".hero-copy", {
      y: 28,
      opacity: 0,
      duration: 0.9,
      delay: 0.35,
      ease: "power3.out"
    });

    gsap.from(".metric-card", {
      y: 24,
      opacity: 0,
      duration: 0.8,
      stagger: 0.12,
      delay: 0.45,
      ease: "power3.out"
    });

    gsap.from(".accelerator-card", {
      scrollTrigger: {
        trigger: ".foundation-layout",
        start: "top 80%"
      },
      y: 24,
      opacity: 0,
      duration: 0.7,
      stagger: 0.08,
      ease: "power3.out"
    });

    gsap.from(".detail-panel", {
      scrollTrigger: {
        trigger: ".foundation-layout",
        start: "top 80%"
      },
      x: 20,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out"
    });

    gsap.from(".preview-pill", {
      scrollTrigger: {
        trigger: ".preview-section",
        start: "top 85%"
      },
      y: 18,
      opacity: 0,
      duration: 0.7,
      stagger: 0.08,
      ease: "power2.out"
    });

    gsap.to(".bg-glow-1", {
      x: 40,
      y: 20,
      duration: 8,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

    gsap.to(".bg-glow-2", {
      x: -30,
      y: 30,
      duration: 10,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });
  }
});
