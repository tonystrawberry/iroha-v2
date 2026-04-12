import Blob from "./Blob";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-mint-100/60 via-white to-peach-100/40" />

      {/* Floating blobs — distributed across the full page */}
      {/* Top-left */}
      <div className="absolute top-20 left-8 animate-float-slow">
        <Blob color="linear-gradient(135deg, #7ecfb5 0%, #a0d8cb 100%)" size={180} variant="blob" opacity={0.75} />
      </div>
      {/* Top-center */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 animate-float-delay">
        <Blob color="linear-gradient(135deg, #f5c4a0 0%, #fad8c0 100%)" size={110} variant="blob-3" opacity={0.65} />
      </div>
      {/* Top-right */}
      <div className="absolute top-24 right-10 animate-float">
        <Blob color="linear-gradient(135deg, #f5a8a8 0%, #f9cfcf 100%)" size={160} variant="blob-2" opacity={0.75} />
      </div>
      {/* Middle-left */}
      <div className="absolute top-1/2 left-4 -translate-y-1/2 animate-float-delay">
        <Blob color="linear-gradient(135deg, #88bcd8 0%, #b8d8ec 100%)" size={100} variant="blob-3" opacity={0.6} />
      </div>
      {/* Middle-right */}
      <div className="absolute top-1/2 right-6 animate-float-slow">
        <Blob color="linear-gradient(135deg, #f5c4a0 0%, #f5a8a8 100%)" size={130} variant="blob" opacity={0.65} />
      </div>
      {/* Bottom-left */}
      <div className="absolute bottom-24 left-20 animate-float">
        <Blob color="linear-gradient(135deg, #f9cfcf 0%, #fad8c0 100%)" size={120} variant="blob-2" opacity={0.7} />
      </div>
      {/* Bottom-center */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 animate-float-slow">
        <Blob color="linear-gradient(135deg, #a0d8cb 0%, #88bcd8 100%)" size={90} variant="blob-3" opacity={0.6} />
      </div>
      {/* Bottom-right */}
      <div className="absolute bottom-28 right-24 animate-float-delay">
        <Blob color="linear-gradient(135deg, #7ecfb5 0%, #c8eae2 100%)" size={140} variant="blob" opacity={0.7} />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 md:py-32">
        <div className="max-w-4xl">
          <p className="text-mint-500 text-sm font-medium tracking-widest mb-4 uppercase">
            IROHA
          </p>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight mb-6">
            <span className="text-mint-400">Nurture</span> Words and Ears.
            <br />
            <span className="text-mint-400">Open</span> your stories.
          </h1>
          <p className="text-gray-500 text-base md:text-lg max-w-md leading-relaxed">
            言葉と耳の未来を開く。<br />
            あなたの物語をひらく会社、IROHA。
          </p>
        </div>
      </div>
    </section>
  );
}
