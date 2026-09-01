export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
      <div className="flex flex-col items-center gap-4">
        <div className="h-8 w-8 rounded-full border-2 border-border-strong border-t-accent animate-spin" />
        <p className="text-sm text-muted-foreground">Loading&hellip;</p>
      </div>
    </div>
  );
}
