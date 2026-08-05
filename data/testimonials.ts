export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Engineering Leader",
    role: "Director of Engineering",
    company: "PubMatic",
    content:
      "Ramya consistently delivers ML solutions that translate directly into measurable revenue impact. Her ability to take models from research to production at scale is exceptional.",
  },
  {
    id: "2",
    name: "Product Manager",
    role: "Senior Product Manager",
    company: "Mindbody",
    content:
      "The recommendation system Ramya built significantly improved class discovery for our users. She combines deep ML expertise with a strong product mindset.",
  },
];
