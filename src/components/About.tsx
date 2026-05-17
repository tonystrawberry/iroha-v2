import Blob from "./Blob";

export default function About() {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative circle */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 opacity-30">
        <Blob
          color="linear-gradient(135deg, #7ecfb5, #a0d8cb)"
          size={320}
          variant="blob"
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          {/* Image */}
          <div className="flex-shrink-0">
            <img
              src="/about-us.png"
              alt="About us"
              className="w-64 md:w-80 rounded-2xl object-cover"
            />
          </div>

          {/* Text */}
          <div className="text-center md:text-left">
            <p className="text-mint-400 text-xs font-semibold tracking-widest uppercase mb-4">
              About us
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-relaxed mb-8">
              言葉を育て、
              <br />
              聴くを育て、
              <br />
              語りをひらく。
            </h2>
            <p className="text-gray-600 leading-loose text-sm md:text-base">
              IROHAは2025年に設立された一般社団法人です。「言葉」と「聴くこと」を育てることにより人の語りを開き、対話のドアをひらくための事業を行っています。
            </p>
            <p className="text-gray-600 leading-loose text-sm md:text-base mt-4">
              言語教育、記憶の継承、語りの場づくりという3つの柱で、年齢・国籍・性別などの隔たりを超えて人と人の「出会いなおし」の瞬間を一緒に作っています。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
