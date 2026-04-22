import { TrendingUp, Globe2, ShieldCheck, Award, ArrowUpRight } from "lucide-react";
import globalFootprint from "@/assets/global-footprint.jpg";
import newsAward from "@/assets/news-award.jpg";
import newsEsg from "@/assets/news-esg.jpg";
import newsPrivacy from "@/assets/news-privacy.jpg";

const metrics = [
  { icon: ShieldCheck, label: "Code of Conduct Coverage", value: "100%", trend: "+2%", color: "from-emerald-500 to-teal-500" },
  { icon: Globe2, label: "Suppliers Onboarded", value: "1,840", trend: "+128", color: "from-sky-500 to-indigo-500" },
  { icon: Award, label: "Awards FY26", value: "12", trend: "+4", color: "from-amber-500 to-orange-500" },
  { icon: TrendingUp, label: "Speak-Up Resolution", value: "96%", trend: "+5%", color: "from-violet-500 to-fuchsia-500" },
];

const stories = [
  { img: newsAward, tag: "Recognition", title: "Best-in-Class Governance — ICSI", date: "April 2026" },
  { img: newsEsg, tag: "ESG", title: "DJSI Emerging Markets Index 2026", date: "March 2026" },
  { img: newsPrivacy, tag: "Privacy", title: "DPDP Act readiness certified", date: "February 2026" },
];

const ImpactSpotlightSection = () => {
  return (
    <section className="relative w-full overflow-hidden py-16 px-6 md:px-12 bg-gradient-to-br from-slate-950 via-indigo-950 to-violet-950 text-white">
      <div
        className="absolute inset-0 opacity-20"
        style={{ backgroundImage: `url(${globalFootprint})`, backgroundSize: "cover", backgroundPosition: "center" }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950/80 via-indigo-950/70 to-violet-950/80" />

      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold bg-white/10 backdrop-blur text-white border border-white/20 mb-3">
            <TrendingUp className="h-3 w-3" /> Impact Spotlight
          </span>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            Compliance that <span className="bg-gradient-to-r from-cyan-300 to-violet-300 bg-clip-text text-transparent">moves the business</span>
          </h2>
          <p className="text-sm md:text-base text-white/70 mt-3 max-w-2xl mx-auto">
            Live indicators from our compliance, ethics and governance programs across India.
          </p>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {metrics.map((m, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-5 hover:bg-white/10 hover:-translate-y-1 transition-all duration-300"
            >
              <div className={`absolute -top-8 -right-8 h-24 w-24 rounded-full bg-gradient-to-br ${m.color} opacity-30 blur-2xl`} />
              <div className={`inline-flex p-2 rounded-xl bg-gradient-to-br ${m.color} shadow-lg mb-3`}>
                <m.icon className="h-4 w-4 text-white" strokeWidth={2.4} />
              </div>
              <div className="text-3xl font-extrabold tracking-tight">{m.value}</div>
              <div className="text-[11px] text-white/60 uppercase tracking-wider font-semibold mt-1">{m.label}</div>
              <div className="inline-flex items-center gap-1 mt-2 text-[11px] font-bold text-emerald-300">
                <ArrowUpRight className="h-3 w-3" /> {m.trend}
              </div>
            </div>
          ))}
        </div>

        {/* Story tiles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {stories.map((s, i) => (
            <a
              key={i}
              href="#"
              className="group relative overflow-hidden rounded-2xl border border-white/10 aspect-[4/3] block"
            >
              <img src={s.img} alt={s.title} loading="lazy" className="absolute inset-0 h-full w-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
              <div className="absolute top-3 left-3">
                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/90 text-foreground backdrop-blur">
                  {s.tag}
                </span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="font-bold text-base leading-tight mb-1">{s.title}</h3>
                <div className="flex items-center justify-between text-[11px] text-white/70">
                  <span>{s.date}</span>
                  <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactSpotlightSection;
