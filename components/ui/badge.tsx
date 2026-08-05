import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "blue" | "emerald" | "outline";
}

export function Badge({
  className,
  variant = "default",
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium transition-colors",
        variant === "default" && "bg-zinc-800 text-zinc-200",
        variant === "blue" && "bg-blue-500/15 text-blue-400 border border-blue-500/20",
        variant === "emerald" &&
          "bg-emerald-500/15 text-emerald-400 border border-emerald-500/20",
        variant === "outline" &&
          "border border-zinc-700 text-zinc-300 bg-zinc-900/50",
        className
      )}
      {...props}
    />
  );
}
