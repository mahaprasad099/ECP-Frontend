import { Milestone, Award, Globe, Leaf, ShieldCheck, Trophy, Sparkles } from "lucide-react";
import journeyHero from "@/assets/journey-hero.jpg";

const milestones = [
  { year: "1983", icon: Milestone, title: "Foundation", color: "text-sky-600", bg: "bg-sky-50" },
  { year: "2002", icon: ShieldCheck, title: "Code of Conduct", color: "text-teal-600", bg: "bg-teal-50" },
  { year: "2010", icon: Leaf, title: "Green Manufacturing", color: "text-emerald-600", bg: "bg-emerald-50" },
  { year: "2017", icon: Award, title: "ISO 37001", color: "text-amber-600", bg: "bg-amber-50" },
  { year: "2021", icon: Globe, title: "Global Standards", color: "text-violet-600", bg: "bg-violet-50" },
  { year: "2024", icon: Trophy, title: "ISO 37301", color: "text-indigo-600", bg: "bg-indigo-50" },
];

const JourneySection = () => {
  return (
    <section className="relative w-full bg-gradient-to-br from-background via-violet-50/30 to-sky-50/40 py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden mb-12 shadow-xl">
          <img src={journeyHero} alt="Compliance journey timeline" width={1280} height={400} loading="lazy" className="w-full h-36 md:h-44 object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/85 via-violet-800/60 to-transparent" />
          <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-12">
            <span className="inline-flex items-center gap-1.5 w-fit px-3 py-1 rounded-full text-[11px] font-semibold bg-white/15 text-white border border-white/30 backdrop-blur mb-2">
              <Sparkles className="h-3 w-3" /> Four decades
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
              Our <span className="text-cyan-300">Journey</span>
            </h2>
          </div>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute top-8 left-0 right-0 h-0.5 bg-gradient-to-r from-sky-300 via-violet-300 to-indigo-300" />

          <div className="grid grid-cols-2 md:grid-cols-6 gap-6 md:gap-3">
            {milestones.map((m, i) => (
              <div key={i} className="relative flex flex-col items-center text-center group">
                <div className={`relative z-10 inline-flex p-3 rounded-full ${m.bg} ${m.color} border-4 border-background shadow-md group-hover:scale-110 transition-transform duration-300`}>
                  <m.icon className="h-5 w-5" strokeWidth={2.2} />
                </div>
                <div className={`mt-3 text-xl font-extrabold ${m.color}`}>{m.year}</div>
                <h3 className="font-semibold text-xs text-foreground mt-0.5 leading-tight">{m.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
