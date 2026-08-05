"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Star,
  GitFork,
  ExternalLink,
  Loader2,
} from "lucide-react";
import { GitHubIcon } from "./icons/SocialIcons";
import { siteConfig } from "@/data/site";
import { SectionHeading } from "./SectionHeading";
import { Badge } from "./ui/badge";
import { ButtonLink } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  topics: string[];
}

interface GitHubProfile {
  login: string;
  public_repos: number;
  followers: number;
  avatar_url: string;
  html_url: string;
}

interface GitHubData {
  profile: GitHubProfile;
  repos: GitHubRepo[];
  languages: { name: string; count: number }[];
}

export function GitHub() {
  const [data, setData] = useState<GitHubData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("/api/github")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch");
        return res.json();
      })
      .then(setData)
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section id="github" className="py-24 relative">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          title="GitHub"
          subtitle="Open source projects and contributions"
        />

        {loading && (
          <div className="flex justify-center py-12">
            <Loader2 className="h-8 w-8 animate-spin text-blue-400" />
          </div>
        )}

        {error && (
          <div className="text-center py-12">
            <p className="text-zinc-400 mb-4">
              Unable to load GitHub data. Visit my profile directly.
            </p>
            <ButtonLink
              variant="outline"
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon className="h-4 w-4" />
              View on GitHub
            </ButtonLink>
          </div>
        )}

        {data && (
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-wrap items-center justify-center gap-8 p-6 rounded-xl border border-zinc-800 bg-zinc-900/50"
            >
              <div className="text-center">
                <p className="text-3xl font-bold gradient-text">
                  {data.profile.public_repos}
                </p>
                <p className="text-sm text-zinc-500">Repositories</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold gradient-text">
                  {data.profile.followers}
                </p>
                <p className="text-sm text-zinc-500">Followers</p>
              </div>
              {data.languages.slice(0, 4).map((lang) => (
                <div key={lang.name} className="text-center">
                  <p className="text-lg font-semibold text-zinc-200">{lang.name}</p>
                  <p className="text-sm text-zinc-500">{lang.count} repos</p>
                </div>
              ))}
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {data.repos.slice(0, 6).map((repo, i) => (
                <motion.div
                  key={repo.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                >
                  <Card className="h-full">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base flex items-center gap-2">
                        <GitHubIcon className="h-4 w-4 text-zinc-500" />
                        {repo.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-zinc-400 line-clamp-2 mb-3 min-h-[40px]">
                        {repo.description || "No description"}
                      </p>
                      <div className="flex items-center gap-4 text-xs text-zinc-500 mb-3">
                        {repo.language && (
                          <span className="flex items-center gap-1">
                            <span className="w-2 h-2 rounded-full bg-blue-400" />
                            {repo.language}
                          </span>
                        )}
                        <span className="flex items-center gap-1">
                          <Star className="h-3 w-3" />
                          {repo.stargazers_count}
                        </span>
                        <span className="flex items-center gap-1">
                          <GitFork className="h-3 w-3" />
                          {repo.forks_count}
                        </span>
                      </div>
                      {repo.topics.length > 0 && (
                        <div className="flex flex-wrap gap-1 mb-3">
                          {repo.topics.slice(0, 3).map((topic) => (
                            <Badge key={topic} variant="outline" className="text-xs">
                              {topic}
                            </Badge>
                          ))}
                        </div>
                      )}
                      <a
                        href={repo.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm text-blue-400 hover:text-blue-300"
                      >
                        View Repo
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <div className="text-center">
              <ButtonLink
                variant="outline"
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHubIcon className="h-4 w-4" />
                View All Repositories
              </ButtonLink>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
