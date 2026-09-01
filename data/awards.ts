export interface Award {
  id: string;
  title: string;
  meta: string;
}

export interface AwardGroup {
  id: string;
  label: string;
  items: Award[];
}

// Sourced directly from the resume's Awards & Recognition and Education sections.
export const awardGroups: AwardGroup[] = [
  {
    id: "hackathons",
    label: "Hackathon recognition",
    items: [
      {
        id: "autotune-mention",
        title: "Special Mention — AutoTune",
        meta: "PubMatic Hackathon, now running in production daily",
      },
      {
        id: "revenue-change-finalist",
        title: "Finalist — AI-Powered Revenue Change Analysis for Publishers",
        meta: "PubMatic Hackathon, May 2025",
      },
      {
        id: "bid-density-finalist",
        title: "Finalist — Bid Density Prediction",
        meta: "PubMatic Hackathon, Jul 2024",
      },
    ],
  },
  {
    id: "company",
    label: "Company recognition",
    items: [
      { id: "biased-action-2026", title: "Biased Toward Action Award", meta: "PubMatic, 2026" },
      { id: "innovation-2025", title: "Innovation Award", meta: "PubMatic, 2025" },
      { id: "leaders-2023", title: "Leaders & Innovators Award", meta: "PubMatic, Q2 2023" },
      { id: "leaders-2022", title: "Leaders & Innovators Award", meta: "PubMatic, Q2 2022" },
    ],
  },
  {
    id: "academic",
    label: "Academic honors",
    items: [
      {
        id: "gold-medal",
        title: "Institute Gold Medal",
        meta: "IIT Tirupati — top academic performance",
      },
      {
        id: "rank-1",
        title: "Rank 1 in batch, B.Tech CS",
        meta: "IIT Tirupati, all four years",
      },
    ],
  },
];
