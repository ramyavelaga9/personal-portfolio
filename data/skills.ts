export interface SkillCategory {
  name: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: "Programming",
    skills: ["Python", "Scala", "SQL", "C++"],
  },
  {
    name: "Machine Learning",
    skills: [
      "PyTorch",
      "Scikit-learn",
      "LightGBM",
      "Recommendation Systems",
      "NLP",
      "Computer Vision",
    ],
  },
  {
    name: "Big Data & Cloud",
    skills: ["Spark", "Hadoop", "Snowflake", "AWS"],
  },
  {
    name: "Tools & Frameworks",
    skills: ["Docker", "Flask", "MongoDB", "DynamoDB", "Git"],
  },
];

export const techStackIcons = [
  { name: "Python", color: "#3776AB" },
  { name: "PyTorch", color: "#EE4C2C" },
  { name: "Spark", color: "#E25A1C" },
  { name: "Docker", color: "#2496ED" },
  { name: "AWS", color: "#FF9900" },
  { name: "Git", color: "#F05032" },
  { name: "SQL", color: "#336791" },
  { name: "MongoDB", color: "#47A248" },
  { name: "Snowflake", color: "#29B5E8" },
  { name: "LightGBM", color: "#10B981" },
];

export const heroTechIcons = [
  "Python",
  "Spark",
  "AWS",
  "PyTorch",
  "LightGBM",
  "Docker",
];
