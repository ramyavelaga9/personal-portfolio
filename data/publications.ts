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
    title:
      "A Platform for Large-Scale Auto-Annotation of Scanned Documents Featuring Real-Time Model Building and Model Pooling",
    venue: "CVIP 2021",
    year: "2021",
  },
  {
    id: "feature-store",
    title:
      "Offline and Online Feature Store for Faster and Consistent Machine-Learning Modelling in the Wellness Domain",
    venue: "EasyChair Preprint No. 7179",
    year: "2021",
    link: "https://easychair.org/publications/preprint/7179",
  },
];
