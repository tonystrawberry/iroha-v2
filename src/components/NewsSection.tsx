import Blob from "./Blob";

const cards = [
  {
    bg: "linear-gradient(135deg, #e8f7f3 0%, #c8eae2 100%)",
    blobs: [
      { color: "linear-gradient(135deg, #7ecfb5, #a0d8cb)", size: 80, variant: "blob" as const, top: "10%", left: "10%" },
      { color: "linear-gradient(135deg, #f5a8a8, #fad8c0)", size: 55, variant: "blob-2" as const, top: "40%", left: "55%" },
    ],
  },
  {
    bg: "linear-gradient(135deg, #fdf0e8 0%, #fad8c0 100%)",
    blobs: [
      { color: "linear-gradient(135deg, #f5c4a0, #fad8c0)", size: 70, variant: "blob-3" as const, top: "15%", left: "50%" },
      { color: "linear-gradient(135deg, #88bcd8, #b8d8ec)", size: 50, variant: "blob" as const, top: "50%", left: "5%" },
    ],
  },
  {
    bg: "linear-gradient(135deg, #e0f0f8 0%, #b8d8ec 100%)",
    blobs: [
      { color: "linear-gradient(135deg, #88bcd8, #b8d8ec)", size: 75, variant: "blob-2" as const, top: "5%", left: "30%" },
      { color: "linear-gradient(135deg, #f5a8a8, #f9cfcf)", size: 50, variant: "blob-3" as const, top: "45%", left: "60%" },
    ],
  },
  {
    bg: "linear-gradient(135deg, #fdeaea 0%, #f9cfcf 100%)",
    blobs: [
      { color: "linear-gradient(135deg, #f5a8a8, #fad8c0)", size: 65, variant: "blob" as const, top: "20%", left: "5%" },
      { color: "linear-gradient(135deg, #7ecfb5, #c8eae2)", size: 55, variant: "blob-2" as const, top: "35%", left: "55%" },
    ],
  },
];

export default function NewsSection() {
  return (
    <section id="news" className="py-24 bg-mint-100/30 relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-0 right-0 translate-x-1/3 -translate-y-1/4 opacity-20 pointer-events-none">
        <Blob color="linear-gradient(135deg, #7ecfb5, #a0d8cb)" size={360} variant="blob-3" />
      </div>
      <div className="absolute bottom-0 left-1/4 translate-y-1/3 opacity-15 pointer-events-none">
        <Blob color="linear-gradient(135deg, #f5a8a8, #fad8c0)" size={300} variant="blob-2" />
      </div>
      <div className="absolute top-1/2 left-0 -translate-x-1/2 opacity-15 pointer-events-none">
        <Blob color="linear-gradient(135deg, #88bcd8, #b8d8ec)" size={260} variant="blob" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="mb-12">
          <p className="text-mint-400 text-xs font-semibold tracking-widest uppercase mb-2">
            News
          </p>
          <h2 className="text-3xl font-bold text-foreground">ニュース一覧</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, i) => (
            <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm">
              <div className="h-40 relative overflow-hidden" style={{ background: card.bg }}>
                {card.blobs.map((b, j) => (
                  <div
                    key={j}
                    className="absolute"
                    style={{ top: b.top, left: b.left }}
                  >
                    <Blob color={b.color} size={b.size} variant={b.variant} opacity={0.7} />
                  </div>
                ))}
              </div>
              <div className="p-4 flex items-center justify-center h-16">
                <span className="text-xs font-semibold tracking-widest text-gray-300 uppercase">
                  Coming Soon
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
