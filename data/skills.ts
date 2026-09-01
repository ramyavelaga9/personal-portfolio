export interface SkillCategory {
  name: string;
  skills: string[];
}

// Matches the resume's Skills section exactly, grouped the same way.
export const skillCategories: SkillCategory[] = [
  {
    name: "Programming",
    skills: ["Python", "SQL", "Scala", "C++"],
  },
  {
    name: "Data & ML Systems",
    skills: [
      "Feature Engineering",
      "Feature Stores",
      "Data Pipelines",
      "ETL",
      "Predictive Modeling",
      "Experimentation",
      "Statistical Analysis",
    ],
  },
  {
    name: "Data & Cloud",
    skills: ["Snowflake", "Apache Spark", "PySpark", "Hadoop", "AWS", "DynamoDB", "MongoDB"],
  },
  {
    name: "ML / AI",
    skills: [
      "PyTorch",
      "Deep Learning",
      "Embedding Models",
      "Reinforcement Learning",
      "LightGBM",
      "XGBoost",
      "Generative AI",
      "Agentic AI",
    ],
  },
  {
    name: "Ad Tech & Ranking",
    skills: [
      "Bid Ranking",
      "Ads Targeting",
      "Auction Optimization",
      "Pacing",
      "Real Time Bidding",
      "Recommendation Systems",
    ],
  },
  {
    name: "Production & MLOps",
    skills: ["Docker", "Kubernetes", "MLflow", "Airflow", "Git", "CI/CD", "ML Observability"],
  },
  {
    name: "Data Processing & Analytics",
    skills: ["Polars", "Pandas", "NumPy", "Data Visualization", "A/B Testing", "Explainable AI (SHAP)"],
  },
];
