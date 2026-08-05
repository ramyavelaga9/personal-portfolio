export interface Publication {
  id: string;
  title: string;
  venue: string;
  year: string;
  link?: string;
}

export const publications: Publication[] = [
  {
    id: "cvip-2021",
    title: "Auto Annotation Platform",
    venue: "CVIP 2021",
    year: "2021",
    link: "https://easychair.org",
  },
  {
    id: "feature-store",
    title: "Offline and Online Feature Store",
    venue: "Internal / Industry",
    year: "2021",
  },
];
