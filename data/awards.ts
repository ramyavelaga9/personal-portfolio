export interface Award {
  id: string;
  title: string;
  organization: string;
  description: string;
}

export const awards: Award[] = [
  {
    id: "gold-medal",
    title: "Gold Medal",
    organization: "IIT Tirupati",
    description: "Best Academic Performance in Computer Science",
  },
];
