"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Star, GitFork, ExternalLink, Loader2 } from "lucide-react";
import { GitHubIcon } from "./icons/SocialIcons";
import { siteConfig } from "@/data/site";
import { SectionHeading } from "./SectionHeading";
import { Badge } from "./ui/badge";
import { ButtonLink } from "./ui/button";

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
  const reduce = useReducedMotion();
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
    <section id="github" className="py-24 relative bg-muted/40">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading title="GitHub" subtitle="Live from the account, updated hourly." />

        {loading && (
          <div className="flex justify-center py-12">
            <Loader2 className="h-6 w-6 animate-spin text-accent" />
          </div>
        )}

        {error && (
          <div className="text-center py-12">
            <p className="text-muted-foreground mb-4">
              Unable to load GitHub data right now. Visit the profile directly.
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
          <div className="space-y-6">
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-wrap items-center gap-x-10 gap-y-4 p-6 rounded-2xl border border-border bg-card"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={data.profile.avatar_url}
                alt={`${data.profile.login} on GitHub`}
                width={56}
                height={56}
                className="rounded-full border border-border"
              />
              <div>
                <p className="text-2xl font-semibold tabular text-foreground">
                  {data.profile.public_repos}
                </p>
                <p className="text-sm text-muted-foreground">Repositories</p>
              </div>
              <div>
                <p className="text-2xl font-semibold tabular text-foreground">
                  {data.profile.followers}
                </p>
                <p className="text-sm text-muted-foreground">Followers</p>
              </div>
              {data.languages.slice(0, 4).map((lang) => (
                <div key={lang.name}>
                  <p className="text-base font-medium text-foreground">{lang.name}</p>
                  <p className="text-sm text-muted-foreground">{lang.count} repos</p>
                </div>
              ))}
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {data.repos.slice(0, 6).map((repo, i) => (
                <motion.div
                  key={repo.id}
                  initial={reduce ? false : { opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="rounded-2xl border border-border bg-card p-5"
                >
                  <h3 className="text-sm font-semibold text-foreground flex items-center gap-2 mb-2">
                    <GitHubIcon className="h-4 w-4 text-muted-foreground" />
                    {repo.name}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2 mb-3 min-h-[40px]">
                    {repo.description || "No description provided."}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-subtle-foreground mb-3">
                    {repo.language && (
                      <span className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent" />
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
                        <Badge key={topic} variant="outline" className="text-[11px]">
                          {topic}
                        </Badge>
                      ))}
                    </div>
                  )}
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-accent hover:brightness-110"
                  >
                    View repo
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </motion.div>
              ))}
            </div>

            <div className="text-center pt-2">
              <ButtonLink
                variant="outline"
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHubIcon className="h-4 w-4" />
                View all repositories
              </ButtonLink>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
