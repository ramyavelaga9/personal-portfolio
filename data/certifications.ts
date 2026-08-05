export interface Certification {
  id: string;
  title: string;
  provider: string;
}

export const certifications: Certification[] = [
  { id: "python", title: "Python", provider: "LinkedIn Learning" },
  {
    id: "recommendation-systems",
    title: "Recommendation Systems",
    provider: "LinkedIn Learning",
  },
  { id: "web-data", title: "Web Data", provider: "LinkedIn Learning" },
  {
    id: "data-structures",
    title: "Data Structures",
    provider: "LinkedIn Learning",
  },
];
