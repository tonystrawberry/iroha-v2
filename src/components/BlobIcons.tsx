import Blob from "./Blob";

const icons = [
  {
    color: "linear-gradient(135deg, #f5a8a8 0%, #fad8c0 100%)",
    variant: "blob" as const,
    size: 80,
  },
  {
    color: "linear-gradient(135deg, #f5c4a0 0%, #f9cfcf 100%)",
    variant: "blob-2" as const,
    size: 70,
  },
  {
    color: "linear-gradient(135deg, #f9cfcf 0%, #f5a8a8 100%)",
    variant: "blob-3" as const,
    size: 90,
  },
  {
    color: "linear-gradient(135deg, #fad8c0 0%, #f5c4a0 100%)",
    variant: "blob" as const,
    size: 65,
  },
];

export default function BlobIcons() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-gray-400 text-xs tracking-widest uppercase mb-8 text-center md:text-right">
          News のアイコン
        </p>
        <div className="flex flex-wrap justify-center md:justify-end gap-6 items-center">
          {icons.map((icon, i) => (
            <Blob
              key={i}
              color={icon.color}
              size={icon.size}
              variant={icon.variant}
              opacity={0.85}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
