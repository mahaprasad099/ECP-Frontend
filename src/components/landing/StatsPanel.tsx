import { useEffect, useState, useRef } from "react";
import { MapPin, Factory, Scale, FileBadge, ListChecks, Leaf, ShieldCheck, Sparkles } from "lucide-react";
import impactPlant from "@/assets/impact-plant.jpg";
import impactTeam from "@/assets/impact-team.jpg";
import impactIndia from "@/assets/impact-india.jpg";

const useCountUp = (end: number, duration = 2000) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const start = performance.now();
          const animate = (now: number) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * end));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.4 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration]);

  return { count, ref };
};

const stats = [
  { icon: MapPin, value: 22, suffix: "", label: "States & UTs", grad: "from-sky-500 to-blue-600" },
  { icon: Factory, value: 60, suffix: "+", label: "Business Units", grad: "from-cyan-500 to-teal-600" },
  { icon: Scale, value: 400, suffix: "+", label: "Laws & Regulations", grad: "from-blue-500 to-indigo-600" },
  { icon: FileBadge, value: 400, suffix: "+", label: "Licenses & Permits", grad: "from-violet-500 to-purple-600" },
  { icon: ListChecks, value: 10000, suffix: "+", label: "Compliances Tracked", grad: "from-indigo-500 to-violet-600" },
];

const StatCard = ({ stat }: { stat: (typeof stats)[0] }) => {
  const { count, ref } = useCountUp(stat.value);
  const Icon = stat.icon;
  return (
    <div
      ref={ref}
      className="relative group text-center rounded-2xl p-4 bg-white/70 backdrop-blur-md border border-white/60 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
    >
      <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${stat.grad}`} />
      <div className={`inline-flex p-2 rounded-xl bg-gradient-to-br ${stat.grad} text-white mb-2 shadow-md`}>
        <Icon className="h-4 w-4" />
      </div>
      <div className={`text-3xl md:text-4xl font-extrabold tabular-nums bg-gradient-to-r ${stat.grad} bg-clip-text text-transparent`}>
        {count.toLocaleString()}
        {stat.suffix}
      </div>
      <div className="text-[11px] md:text-xs text-muted-foreground mt-1 font-medium uppercase tracking-wider">{stat.label}</div>
    </div>
  );
};

const highlights = [
  {
    icon: ShieldCheck,
    title: "Zero Major Non-Compliances",
    desc: "FY 2024-25 closed without a single material regulatory penalty across all plants and offices.",
    grad: "from-sky-500 to-blue-600",
  },
  {
    icon: Leaf,
    title: "ESG Leadership",
    desc: "Top quartile DJSI score in the global automotive sector — 3rd year in a row.",
    grad: "from-teal-500 to-cyan-600",
  },
  {
    icon: Sparkles,
    title: "Digital Compliance",
    desc: "AI-powered regulatory engine scans 12,000+ updates monthly across India & export markets.",
    grad: "from-violet-500 to-indigo-600",
  },
];

const StatsPanel = () => {
  return (
    <section className="relative w-full h-full overflow-y-auto bg-gradient-to-br from-sky-50 via-violet-50/40 to-teal-50/50">
      {/* Ambient blobs */}
      <div className="absolute top-10 right-20 w-56 h-56 bg-blue-400/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-10 left-20 w-44 h-44 bg-violet-400/10 rounded-full blur-3xl animate-float-slow" />
      <div className="absolute top-1/2 left-1/2 w-40 h-40 bg-teal-400/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1.5s" }} />

      <div className="relative z-10 px-6 md:px-12 py-8 w-full max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-6">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-sky-500/10 to-violet-500/10 text-primary border border-primary/20 mb-2">
            Our Scale · Our Impact
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold">
            <span className="bg-gradient-to-r from-sky-600 via-blue-600 to-violet-600 bg-clip-text text-transparent">
              Compliance at the Scale of a Nation
            </span>
          </h2>
          <p className="text-sm md:text-base text-muted-foreground mt-2 max-w-2xl mx-auto">
            From the assembly line to the boardroom — every metric tells a story of trust, vigilance and responsibility built over four decades.
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-6">
          {stats.map((s, i) => (
            <StatCard key={i} stat={s} />
          ))}
        </div>

        {/* Image strip + highlights */}
        <div className="grid md:grid-cols-[1.2fr_1fr] gap-4 mb-6">
          {/* Image collage */}
          <div className="grid grid-cols-3 gap-2 h-48 md:h-56">
            <div className="relative col-span-2 row-span-2 rounded-2xl overflow-hidden shadow-lg group">
              <img src={impactPlant} alt="Maruti Suzuki manufacturing plant with robotic assembly" loading="lazy" width={768} height={512} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 via-blue-900/10 to-transparent" />
              <div className="absolute bottom-2 left-3 text-white">
                <div className="text-[10px] uppercase tracking-wider opacity-80">Manufacturing</div>
                <div className="text-sm font-bold">11 Plants · ISO Certified</div>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-md group">
              <img src={impactIndia} alt="Pan-India compliance reach map" loading="lazy" width={512} height={512} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-violet-900/70 to-transparent" />
              <div className="absolute bottom-1 left-2 text-white text-[10px] font-bold">22 States</div>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-md group">
              <img src={impactTeam} alt="Compliance team meeting" loading="lazy" width={768} height={512} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-teal-900/70 to-transparent" />
              <div className="absolute bottom-1 left-2 text-white text-[10px] font-bold">42K Trained</div>
            </div>
          </div>

          {/* Highlights */}
          <div className="grid gap-2">
            {highlights.map((h, i) => {
              const Icon = h.icon;
              return (
                <div key={i} className="relative flex items-start gap-3 p-3 rounded-xl bg-white/70 backdrop-blur-md border border-white/60 shadow-sm hover:shadow-md transition-all">
                  <div className={`shrink-0 p-2 rounded-lg bg-gradient-to-br ${h.grad} text-white shadow-sm`}>
                    <Icon className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-foreground leading-tight">{h.title}</h4>
                    <p className="text-xs text-muted-foreground mt-0.5 leading-snug">{h.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer ribbon */}
        <div className="relative overflow-hidden rounded-2xl p-4 bg-gradient-to-r from-sky-600 via-blue-600 to-violet-600 text-white shadow-lg">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
          <div className="relative flex flex-wrap items-center justify-between gap-3">
            <div>
              <div className="text-[10px] uppercase tracking-[0.25em] opacity-80">Driven by Integrity</div>
              <div className="text-base md:text-lg font-bold">India's most compliant automaker — by design, not by accident.</div>
            </div>
            <div className="flex gap-4">
              <div className="text-center">
                <div className="text-xl font-extrabold">40+</div>
                <div className="text-[10px] uppercase tracking-wider opacity-80">Years</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-extrabold">#1</div>
                <div className="text-[10px] uppercase tracking-wider opacity-80">Auto OEM</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-extrabold">100%</div>
                <div className="text-[10px] uppercase tracking-wider opacity-80">Transparent</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsPanel;
