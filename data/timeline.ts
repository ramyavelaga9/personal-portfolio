export interface TimelineEntry {
  id: string;
  title: string;
  company: string;
  location: string;
  period: string;
  highlights: string[];
  current?: boolean;
}

export const timeline: TimelineEntry[] = [
  {
    id: "pubmatic-senior",
    title: "Senior Machine Learning Engineer",
    company: "PubMatic",
    location: "Redwood City, CA",
    period: "Sep 2025 – Present",
    current: true,
    highlights: [
      "Improved the production LightGBM bid ranking and throttling system, refactoring pipelines in Polars to cut runtime **75%** and keep 1,000+ demand side buyers within contractual pacing.",
      "Prototyped user and domain level embedding models in PyTorch to test deep learning based targeting signals as an upgrade path for the production ranking model.",
      "Recovered an estimated **$45K in daily ad spend (~$16M annualized)** by root-causing a critical model inference defect in production.",
      "Authored design documents and led reviews across 3+ cross-functional teams to align on ranking and targeting model changes.",
      "Built **AutoTune**, a three-layer agentic system running autonomously every 2 hours, cutting QPS debugging time **91%** and unlocking $20K/day in revenue upside.",
    ],
  },
  {
    id: "pubmatic-ml-2",
    title: "Machine Learning Engineer",
    company: "PubMatic",
    location: "Redwood City, CA",
    period: "Jun 2024 – Aug 2025",
    highlights: [
      "Generated **$5K in incremental daily revenue (~$1.8M annualized)** by designing and rolling out the SPO Take Rate Optimization model.",
      "Retained an at-risk demand partnership (Beeswax) by doubling fill rate and growing Share of Voice by 15K QPS via a custom ML-driven objective metric.",
      "Strengthened QPS prediction accuracy by fixing critical bugs and migrating configuration to a SQL database driven architecture.",
    ],
  },
  {
    id: "pubmatic-ml-1",
    title: "Machine Learning Engineer",
    company: "PubMatic",
    location: "Pune, India",
    period: "Jan 2022 – Jun 2024",
    highlights: [
      "Delivered **$7.35M in incremental annual revenue** by redesigning and retraining take rate optimization models.",
      "Boosted eCPM **10%** and platform spend **$90K/day** via offline feature analysis and A/B tests on bid throttling algorithms.",
      "Added **$1M in annual revenue** by extending the take rate model to support multiple deal pricing structures.",
      "Improved data pipeline reliability by redesigning PySpark calculation workflows around existing data fields.",
    ],
  },
  {
    id: "mindbody",
    title: "Machine Learning Engineer",
    company: "Mindbody",
    location: "Pune, India",
    period: "Aug 2020 – Jan 2022",
    highlights: [
      "Built the company's first end-to-end feature store (Snowflake offline, DynamoDB real time), powering 10+ ML use cases and cutting Lead Scoring delivery time in half.",
      "Built anomaly detection models to catch outliers missed by rule-based thresholds, plus a business advisor chatbot for self-service analytics.",
      "Grew user engagement through LightFM-based course recommendations and a Similar Trainer ranking model.",
    ],
  },
];
