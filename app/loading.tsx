export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-950">
      <div className="flex flex-col items-center gap-6">
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 rounded-full border-2 border-blue-500/30 animate-ping" />
          <div className="absolute inset-2 rounded-full border-2 border-t-blue-500 border-r-emerald-500 border-b-transparent border-l-transparent animate-spin" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-xs font-bold gradient-text">AI</span>
          </div>
        </div>
        <p className="text-sm text-zinc-500 animate-pulse">Loading portfolio...</p>
      </div>
    </div>
  );
}
