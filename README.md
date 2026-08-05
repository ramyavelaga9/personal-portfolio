# Ramya Velaga — Portfolio

A modern, professional portfolio website showcasing ML engineering expertise, business impact, and production AI systems.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Deployment:** Vercel

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the portfolio.

## Deployment

Deploy to Vercel:

```bash
npx vercel
```

Or connect your GitHub repository to [vercel.com](https://vercel.com) for automatic deployments.

## Customization

- **Profile data:** Edit files in `data/` directory
- **Resume:** Replace `public/resume.pdf` with your actual resume
- **GitHub API:** Optionally set `GITHUB_TOKEN` env var for higher rate limits
- **Analytics:** Add Google Analytics script to `app/layout.tsx`

## Project Structure

```
├── app/              # Next.js app router pages & API routes
├── components/       # React components (Hero, Timeline, etc.)
├── data/             # Static content (projects, skills, timeline)
├── lib/              # Utility functions
└── public/           # Static assets (images, resume)
```

## Features

- Dark/light mode toggle
- Animated impact statistics
- Interactive career timeline
- GitHub API integration
- SEO optimized
- Fully responsive
- Smooth scroll animations
