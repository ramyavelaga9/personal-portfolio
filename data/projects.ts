export interface Project {
  id: string;
  title: string;
  kind: "Production" | "Hackathon" | "Research";
  period: string;
  description: string;
  metric?: string;
  techStack: string[];
  icon: "activity" | "radar" | "mic" | "database" | "shuffle" | "message-square";
  featured?: boolean;
}

// Every project below is drawn directly from the resume's Experience and
// Projects & Hackathons sections.
export const projects: Project[] = [
  {
    id: "autotune",
    title: "AutoTune",
    kind: "Production",
    period: "2025",
    description:
      "A three-layer agentic system for QPS observability: deterministic health classification across 40+ metrics, paired with LLM based root cause analysis, running autonomously every two hours in production.",
    metric: "91% less QPS debugging time",
    techStack: ["Agentic AI", "LLM", "Python", "Observability"],
    icon: "activity",
    featured: true,
  },
  {
    id: "revenue-change-analysis",
    title: "AI-Powered Revenue Change Analysis for Publishers",
    kind: "Hackathon",
    period: "PubMatic Hackathon, Finalist — May 2025",
    description:
      "An anomaly detection framework (Prophet, ensemble Isolation Forest, Z-score) paired with a root cause framework (XGBoost delta analysis, SHAP attribution) to automatically flag and explain publisher revenue changes.",
    metric: "~$2.3M in addressable revenue loss",
    techStack: ["Prophet", "Isolation Forest", "XGBoost", "SHAP", "Python"],
    icon: "radar",
    featured: true,
  },
  {
    id: "bid-density-prediction",
    title: "Bid Density Prediction",
    kind: "Hackathon",
    period: "PubMatic Hackathon, Finalist — Jul 2024",
    description:
      "A multi-class XGBoost classifier predicting per-impression bid density (0 / 1 / 2+) from targeting features — geo, platform, format, user signals — to directly inform bid ranking decisions.",
    techStack: ["XGBoost", "LightGBM", "Python"],
    icon: "database",
    featured: true,
  },
  {
    id: "voice-ai-travel-assistant",
    title: "Voice AI Travel Assistant",
    kind: "Hackathon",
    period: "DeepLearning.ai Voice AI Hackathon",
    description:
      "An end-to-end voice-based travel assistant integrating flight, hotel, rental car, and payment APIs with personalized recommendations.",
    techStack: ["Vocal Bridge", "Sabre API", "PayPal Sandbox", "Landing AI"],
    icon: "mic",
    featured: true,
  },
  {
    id: "feature-store",
    title: "Real-Time & Offline Feature Store",
    kind: "Production",
    period: "Mindbody, 2020 – 2022",
    description:
      "Mindbody's first end-to-end feature store — Snowflake offline, DynamoDB real time — powering 10+ ML use cases across the consumer platform.",
    metric: "50%+ faster data processing",
    techStack: ["Snowflake", "DynamoDB", "Python", "ETL"],
    icon: "database",
    featured: true,
  },
  {
    id: "recommendation-engine",
    title: "Course & Trainer Recommendations",
    kind: "Production",
    period: "Mindbody, 2020 – 2022",
    description:
      "LightFM-based course recommendations and a Similar Trainer ranking model built on user and synthetic interaction data to grow engagement.",
    techStack: ["LightFM", "Python", "Collaborative Filtering"],
    icon: "shuffle",
    featured: false,
  },
  {
    id: "business-advisor-chatbot",
    title: "Business Advisor Chatbot",
    kind: "Production",
    period: "Mindbody, 2020 – 2022",
    description:
      "An NLP-powered chatbot that answers business owners' operational questions for self-service analytics.",
    techStack: ["NLP", "Flask", "Python"],
    icon: "message-square",
    featured: false,
  },
];
