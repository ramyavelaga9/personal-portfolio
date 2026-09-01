import { siteConfig } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="mx-auto max-w-6xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-subtle-foreground">
          &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </p>
        <p className="text-sm text-subtle-foreground">
          Built with Next.js, Tailwind CSS &amp; Motion
        </p>
      </div>
    </footer>
  );
}
