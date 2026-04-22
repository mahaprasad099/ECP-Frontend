import { Globe2, MapPin, Plane, Factory, Truck, Users } from "lucide-react";
import globalFootprint from "@/assets/global-footprint.jpg";

const regions = [
  { icon: Factory, label: "Manufacturing Plants", value: "18", desc: "Across India & global JVs" },
  { icon: Plane, label: "Export Markets", value: "100+", desc: "Countries on every continent" },
  { icon: Truck, label: "Supplier Network", value: "1,400+", desc: "Code-of-Ethics aligned" },
  { icon: Users, label: "Workforce", value: "42K", desc: "100% Code certified" },
];

const GlobalFootprintPanel = () => {
  return (
    <section className="relative h-full w-full overflow-hidden bg-gradient-to-br from-blue-950 via-indigo-900 to-sky-800">
      <img src={globalFootprint} alt="Global compliance footprint" className="absolute inset-0 w-full h-full object-cover opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950/80 via-indigo-900/70 to-transparent" />

      <div className="relative h-full flex flex-col justify-center px-8 md:px-16 py-12 max-w-6xl mx-auto">
        <span className="inline-flex items-center gap-1.5 w-fit px-3 py-1 rounded-full text-xs font-semibold bg-white/15 text-white border border-white/30 backdrop-blur mb-4">
          <Globe2 className="h-3 w-3" /> Global Footprint
        </span>
        <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-[1.05] mb-4">
          Compliance, <span className="text-cyan-300">Without Borders</span>
        </h2>
        <p className="text-base md:text-lg text-white/85 max-w-2xl mb-10 leading-relaxed">
          From Manesar to Mexico, our integrity standards travel with every car we ship. One framework, one culture, one promise — across every market we serve.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl">
          {regions.map((r, i) => (
            <div key={i} className="rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 p-5 hover:bg-white/15 transition-all hover:-translate-y-1">
              <r.icon className="h-6 w-6 text-cyan-300 mb-3" />
              <div className="text-3xl font-extrabold text-white mb-1">{r.value}</div>
              <div className="text-sm font-semibold text-white/95">{r.label}</div>
              <div className="text-xs text-white/70 mt-1">{r.desc}</div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-2 max-w-3xl">
          {["India", "Japan", "Mexico", "South Africa", "UAE", "Indonesia", "Chile", "Australia", "Nepal", "Sri Lanka"].map((c, i) => (
            <span key={i} className="inline-flex items-center gap-1.5 text-xs text-white/90 bg-white/10 backdrop-blur border border-white/20 px-3 py-1.5 rounded-full">
              <MapPin className="h-3 w-3" /> {c}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GlobalFootprintPanel;
