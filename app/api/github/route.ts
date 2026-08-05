import { NextResponse } from "next/server";

const GITHUB_USERNAME = "ramyavelaga9";

export const revalidate = 3600;

export async function GET() {
  try {
    const headers: HeadersInit = {
      Accept: "application/vnd.github.v3+json",
    };

    if (process.env.GITHUB_TOKEN) {
      headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
    }

    const [profileRes, reposRes] = await Promise.all([
      fetch(`https://api.github.com/users/${GITHUB_USERNAME}`, {
        headers,
        next: { revalidate: 3600 },
      }),
      fetch(
        `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=12`,
        { headers, next: { revalidate: 3600 } }
      ),
    ]);

    if (!profileRes.ok || !reposRes.ok) {
      return NextResponse.json(
        { error: "Failed to fetch GitHub data" },
        { status: 502 }
      );
    }

    const profile = await profileRes.json();
    const repos = await reposRes.json();

    const languageCounts: Record<string, number> = {};
    for (const repo of repos) {
      if (repo.language) {
        languageCounts[repo.language] = (languageCounts[repo.language] || 0) + 1;
      }
    }

    const languages = Object.entries(languageCounts)
      .map(([name, count]) => ({ name, count }))
      .sort((a, b) => b.count - a.count);

    return NextResponse.json({
      profile: {
        login: profile.login,
        public_repos: profile.public_repos,
        followers: profile.followers,
        avatar_url: profile.avatar_url,
        html_url: profile.html_url,
      },
      repos: repos.map(
        (repo: {
          id: number;
          name: string;
          description: string | null;
          html_url: string;
          stargazers_count: number;
          forks_count: number;
          language: string | null;
          topics: string[];
        }) => ({
          id: repo.id,
          name: repo.name,
          description: repo.description,
          html_url: repo.html_url,
          stargazers_count: repo.stargazers_count,
          forks_count: repo.forks_count,
          language: repo.language,
          topics: repo.topics || [],
        })
      ),
      languages,
    });
  } catch {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
