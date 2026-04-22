import { Trophy, Quote, Sparkles, ArrowRight, Calendar, MapPin } from "lucide-react";
import champion3 from "@/assets/champion-3.jpg";

const stats = [
  { value: "12", label: "Years at MSIL" },
  { value: "48", label: "Trainings Led" },
  { value: "27", label: "Speak-Up Cases Mentored" },
];

const ChampionOfTheMonthSection = () => {
  return (
    <section className="relative w-full bg-gradient-to-br from-background via-amber-50/40 to-rose-50/30 py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold bg-amber-100 text-amber-700 border border-amber-200 mb-3">
            <Trophy className="h-3 w-3" /> Hall of Honour
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
            Champion of the <span className="text-amber-600">Month</span>
          </h2>
        </div>

        <div className="relative overflow-hidden rounded-3xl bg-white border border-border/60 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-0">
            {/* Image */}
            <div className="md:col-span-2 relative overflow-hidden bg-gradient-to-br from-amber-100 to-rose-100">
              <img
                src={champion3}
                alt="Anjali Mehta — Compliance Champion of the Month"
                width={800}
                height={800}
                loading="lazy"
                className="w-full h-full object-cover min-h-[280px]"
              />
              <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur shadow-md">
                <Trophy className="h-3.5 w-3.5 text-amber-600" strokeWidth={2.5} />
                <span className="text-[11px] font-bold uppercase tracking-wider text-amber-700">April 2026</span>
              </div>
              <Sparkles className="absolute bottom-4 right-4 h-8 w-8 text-white/70 animate-pulse" />
            </div>

            {/* Content */}
            <div className="md:col-span-3 p-6 md:p-8 flex flex-col">
              <div className="flex items-center gap-2 mb-3">
                <div className="h-1 w-10 bg-gradient-to-r from-amber-500 to-rose-500 rounded-full" />
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-600">Featured Story</span>
              </div>

              <h3 className="text-2xl md:text-3xl font-bold text-foreground leading-tight mb-1">
                Anjali Mehta
              </h3>
              <p className="text-sm font-semibold text-amber-700 mb-1">Anti-Bribery Champion · Procurement</p>
              <div className="flex items-center gap-3 text-xs text-muted-foreground mb-4 flex-wrap">
                <span className="inline-flex items-center gap-1"><MapPin className="h-3 w-3" /> Gurugram HQ</span>
                <span className="inline-flex items-center gap-1"><Calendar className="h-3 w-3" /> Joined 2014</span>
              </div>

              <div className="relative bg-gradient-to-br from-amber-50 to-rose-50/50 rounded-xl p-4 border border-amber-100 mb-4">
                <Quote className="absolute top-2 right-2 h-6 w-6 text-amber-400/30" strokeWidth={1.5} />
                <p className="text-sm italic text-foreground leading-relaxed">
                  "Saying no to a routine vendor gift might feel small, but it's the everyday choices that build a culture of integrity."
                </p>
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed mb-2">
                Anjali led the rollout of our refreshed Anti-Bribery framework across 1,400+ vendors, designing a tiered due-diligence process that has since been adopted by three Suzuki global affiliates.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                She mentors the Speak-Up volunteer network and personally trained 48 procurement managers on conflict-of-interest disclosures this fiscal year.
              </p>

              <div className="grid grid-cols-3 gap-2 mb-5">
                {stats.map((s, i) => (
                  <div key={i} className="text-center px-2 py-3 bg-gradient-to-br from-amber-50 to-rose-50 rounded-xl border border-amber-100">
                    <div className="text-xl md:text-2xl font-extrabold text-amber-600">{s.value}</div>
                    <div className="text-[9px] uppercase tracking-wider text-muted-foreground font-bold mt-0.5 leading-tight">{s.label}</div>
                  </div>
                ))}
              </div>

              <button className="group inline-flex items-center gap-2 self-start text-sm font-bold text-amber-700 hover:gap-3 transition-all">
                Nominate next month's champion
                <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChampionOfTheMonthSection;
