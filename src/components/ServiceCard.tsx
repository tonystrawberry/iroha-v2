import { Service } from "@/data/services";
import ImageCarousel from "./ImageCarousel";

function HighlightedText({ text }: { text: string }) {
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return (
    <>
      {parts.map((part, i) =>
        part.startsWith("**") && part.endsWith("**") ? (
          <span key={i} className="text-mint-500">
            {part.slice(2, -2)}
          </span>
        ) : (
          part
        )
      )}
    </>
  );
}


type Props = {
  service: Service;
};

export default function ServiceCard({ service }: Props) {
  const isReverse = service.reverse;

  const mockupColors: Record<string, string> = {
    "bg-mint": "linear-gradient(135deg, #a0d8cb 0%, #e8f7f3 100%)",
    "bg-peach": "linear-gradient(135deg, #f5c4a0 0%, #fdf0e8 100%)",
  };

  return (
    <div
      className={`flex flex-col ${isReverse ? "md:flex-row-reverse" : "md:flex-row"} items-center gap-10 md:gap-16`}
    >
      {/* Text side */}
      <div className="flex-1 max-w-lg">
        <div className="flex items-center gap-3 mb-4">
          {service.image && !service.hideTitleLogo && (
            <img
              src={service.image}
              alt={service.subtitle}
              className="w-12 h-12 rounded-xl object-cover"
            />
          )}
          <h3 className="text-2xl md:text-3xl font-bold text-foreground leading-snug whitespace-pre-line">
            {service.nameJa}<br />{service.subtitle}
          </h3>
        </div>
        <p className="text-gray-600 text-sm leading-loose mb-6 whitespace-pre-line">
          <HighlightedText text={service.description} />
        </p>

        {/* Buttons row */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          {service.link && (
            <a
              href={service.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-black text-white rounded-lg px-4 h-10 opacity-90 hover:opacity-100 transition-opacity cursor-pointer border border-white/20"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="shrink-0">
                <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
              <div className="flex flex-col" style={{ lineHeight: 1.15 }}>
                <span className="text-[9px] text-white/70 font-normal">Visit our</span>
                <span className="text-sm font-semibold">Website</span>
              </div>
            </a>
          )}
          {service.appStoreLink && (
            <a href={service.appStoreLink} className="opacity-90 hover:opacity-100 transition-opacity inline-block">
              <img src="/appstore.svg" alt="Download on the App Store" className="h-10" />
            </a>
          )}
        </div>
      </div>

      {/* Mockup side */}
      <div className="flex-1 flex justify-center">
        <div
          className={`relative w-64 md:w-80 rounded-2xl flex items-center justify-center ${
            !service.images && service.image
              ? "overflow-hidden"
              : "overflow-visible py-8 px-6"
          }`}
          style={{ background: mockupColors[service.mockupBg] ?? mockupColors["bg-mint"] }}
        >
          {service.images ? (
            <ImageCarousel images={service.images} alt={service.subtitle} />
          ) : service.image ? (
            <img
              src={service.image}
              alt={service.subtitle}
              className="w-full aspect-[4/5] object-cover"
            />
          ) : (
            /* Book mockup */
            <div className="relative transform rotate-6">
              <div className="w-40 h-52 bg-white rounded-lg shadow-2xl flex flex-col overflow-hidden border border-peach-200">
                <div className="h-3 bg-peach-300" />
                <div className="flex-1 p-3">
                  <div className="h-2 w-3/4 bg-peach-200 rounded mb-2" />
                  <div className="h-2 w-1/2 bg-peach-100 rounded mb-4" />
                  <div className="h-20 bg-peach-100 rounded mb-2" />
                  <div className="h-1.5 w-full bg-gray-100 rounded mb-1" />
                  <div className="h-1.5 w-4/5 bg-gray-100 rounded" />
                </div>
              </div>
              <div className="absolute -bottom-2 -right-2 w-40 h-52 bg-peach-200 rounded-lg -z-10" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
