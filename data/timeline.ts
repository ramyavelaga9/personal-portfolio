export interface TimelineEntry {
  id: string;
  title: string;
  company: string;
  period: string;
  highlights: string[];
  current?: boolean;
}

export const timeline: TimelineEntry[] = [
  {
    id: "pubmatic-senior",
    title: "Senior Machine Learning Engineer",
    company: "PubMatic",
    period: "2025 – Present",
    current: true,
    highlights: [
      "Leading ML initiatives across the marketplace",
      "SPO Optimization for supply path efficiency",
      "Revenue Optimization at scale",
    ],
  },
  {
    id: "pubmatic-ml",
    title: "Machine Learning Engineer",
    company: "PubMatic",
    period: "2022 – 2025",
    highlights: [
      "Increased annual revenue by **$7.35M** through Take Rate Optimization",
      "Improved gross eCPM by **10%** via bid throttling enhancements",
      "Increased platform spend by **$90K/day** after production rollout",
      "Built and deployed production ML systems for Bid Optimization",
      "Designed Take Rate Optimization algorithms at marketplace scale",
    ],
  },
  {
    id: "mindbody",
    title: "Machine Learning Engineer",
    company: "Mindbody",
    period: "2020 – 2022",
    highlights: [
      "Built recommendation systems using LightFM for virtual fitness classes",
      "Designed and implemented an offline/online Feature Store",
      "Developed Business Advisor Chatbot with NLP capabilities",
      "Built anomaly detection systems for operational monitoring",
    ],
  },
  {
    id: "tcs",
    title: "Research Intern",
    company: "TCS Innovation Labs",
    period: "2019",
    highlights: [
      "Wind Turbine AI — predictive maintenance modeling",
      "Predictive modeling for renewable energy systems",
    ],
  },
];
