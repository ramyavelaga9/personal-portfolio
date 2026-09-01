import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "accent" | "outline";
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
        variant === "default" && "bg-muted text-foreground/80",
        variant === "accent" &&
          "bg-accent/12 text-accent border border-accent/25",
        variant === "outline" &&
          "border border-border-strong text-muted-foreground bg-card",
        className
      )}
      {...props}
    />
  );
}
