export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  image: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "revenue-optimization",
    title: "Revenue Optimization using ML",
    description:
      "Optimized publisher bidding strategies using gradient boosting and Spark pipelines, resulting in millions of dollars of annual revenue impact across the PubMatic marketplace.",
    techStack: ["Python", "LightGBM", "Spark", "SQL"],
    githubUrl: "https://github.com/ramyavelaga9",
    image: "/projects/revenue.svg",
    featured: true,
  },
  {
    id: "recommendation-engine",
    title: "Recommendation Engine",
    description:
      "Built a collaborative filtering recommendation system for virtual fitness classes using LightFM, improving user engagement and class discovery at Mindbody.",
    techStack: ["LightFM", "Python", "Collaborative Filtering"],
    githubUrl: "https://github.com/ramyavelaga9",
    image: "/projects/recommendation.svg",
    featured: true,
  },
  {
    id: "business-advisor-chatbot",
    title: "Business Advisor Chatbot",
    description:
      "Developed an NLP-powered chatbot to help business owners answer operational questions, reducing support ticket volume and improving response times.",
    techStack: ["NLP", "Flask", "Python"],
    githubUrl: "https://github.com/ramyavelaga9",
    image: "/projects/chatbot.svg",
    featured: true,
  },
  {
    id: "annotation-platform",
    title: "Annotation Platform",
    description:
      "Collaborative annotation platform with automatic label propagation using OpenCV and ML, presented at CVIP 2021 conference.",
    techStack: ["Flask", "OpenCV", "ML"],
    githubUrl: "https://github.com/ramyavelaga9",
    image: "/projects/annotation.svg",
    featured: true,
  },
];
