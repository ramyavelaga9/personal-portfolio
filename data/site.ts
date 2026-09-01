export const siteConfig = {
  name: "Ramya Velaga",
  title: "Ramya Velaga | Senior Machine Learning Engineer",
  description:
    "Senior Machine Learning Engineer at PubMatic building real-time bid ranking, pacing, and targeting systems. $5M+ in annual revenue impact through end-to-end model ownership. IIT Tirupati, Rank 1 / Gold Medalist.",
  url: "https://ramyavelaga.dev",
  github: "https://github.com/ramyavelaga9",
  linkedin: "https://linkedin.com/in/ramyavelaga",
  email: "ramya.velaga9@gmail.com",
  phone: "+1 (408) 630-9977",
  location: "San Francisco Bay Area, CA",
  resumeUrl: "/resume.pdf",
  role: "Senior Machine Learning Engineer",
  tagline:
    "I build the real-time ranking and pacing systems that decide which ads win an auction, in milliseconds.",
  currentCompany: "PubMatic",
  previousCompany: "Mindbody",
  education: "IIT Tirupati, B.Tech CS — Rank 1, Institute Gold Medal",
};

// Sourced directly from the resume. Each figure keeps the qualifier the
// resume uses (e.g. "annualized", "daily") so nothing reads as more
// precise than it actually is.
export const impactStats = [
  {
    value: 16,
    prefix: "$",
    suffix: "M",
    decimals: 0,
    label: "Annualized ad spend recovered",
    detail: "from a single production inference defect, root-caused end to end",
    size: "lg" as const,
  },
  {
    value: 7.35,
    prefix: "$",
    suffix: "M",
    decimals: 2,
    label: "Incremental annual revenue",
    detail: "from redesigning take rate optimization models",
    size: "md" as const,
  },
  {
    value: 91,
    prefix: "",
    suffix: "%",
    decimals: 0,
    label: "Less QPS debugging time",
    detail: "after AutoTune shipped to production",
    size: "md" as const,
  },
  {
    value: 75,
    prefix: "",
    suffix: "%",
    decimals: 0,
    label: "Faster pipeline runtime",
    detail: "refactoring the bid ranking pipeline in Polars",
    size: "sm" as const,
  },
  {
    value: 1000,
    prefix: "",
    suffix: "+",
    decimals: 0,
    label: "Demand partners kept in pacing",
    detail: "under contractual QPS limits, daily",
    size: "sm" as const,
  },
  {
    value: 5,
    prefix: "",
    suffix: "+",
    decimals: 0,
    label: "Years in production ML",
    detail: "ad tech and consumer platforms",
    size: "sm" as const,
  },
];

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#recognition", label: "Recognition" },
  { href: "#contact", label: "Contact" },
];
