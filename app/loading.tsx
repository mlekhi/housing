export default function Loading() {
    return (
      <div className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-zinc-50">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,#000_70%,transparent_100%)]" />
  
        <div className="relative z-10 flex flex-col items-center">
          <div className="mb-8">
            <span className="text-3xl font-semibold tracking-tight">
              House
              <span className="text-purple-900">Western</span>
            </span>
          </div>
  
          <div className="flex space-x-2">
            {[0, 1, 2].map(i => (
              <div
                key={i}
                className="h-2 w-2 animate-bounce rounded-full bg-zinc-900"
                style={{
                  animationDelay: `${i * 150}ms`,
                  animationDuration: '1s',
                }}
              />
            ))}
          </div>
        </div>
  
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-zinc-200/50 to-transparent opacity-20" />
      </div>
    );
  }