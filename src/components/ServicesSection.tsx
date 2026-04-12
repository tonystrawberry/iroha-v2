import { services } from "@/data/services";
import ServiceCard from "./ServiceCard";
import Blob from "./Blob";

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-white relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-10 left-1/4 opacity-20 pointer-events-none">
        <Blob color="linear-gradient(135deg, #7ecfb5, #a0d8cb)" size={340} variant="blob-2" />
      </div>
      <div className="absolute top-1/2 right-0 translate-x-1/3 opacity-15 pointer-events-none">
        <Blob color="linear-gradient(135deg, #f5a8a8, #fad8c0)" size={400} variant="blob-3" />
      </div>
      <div className="absolute bottom-10 left-0 -translate-x-1/3 opacity-20 pointer-events-none">
        <Blob color="linear-gradient(135deg, #88bcd8, #b8d8ec)" size={300} variant="blob" />
      </div>
      <div className="absolute bottom-1/3 right-1/4 opacity-15 pointer-events-none">
        <Blob color="linear-gradient(135deg, #f5c4a0, #fdf0e8)" size={220} variant="blob-2" />
      </div>

      <div className="max-w-6xl mx-auto px-6 flex flex-col gap-24 relative z-10">
        <div>
          <p className="text-mint-400 text-xs font-semibold tracking-widest uppercase mb-2">
            Services
          </p>
          <h2 className="text-3xl font-bold text-foreground">サービス紹介</h2>
        </div>
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </section>
  );
}
