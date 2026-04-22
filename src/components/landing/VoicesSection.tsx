import { Quote, Star } from "lucide-react";
import voicesHero from "@/assets/voices-hero.jpg";

const testimonials = [
  {
    quote: "Compliance isn't a department here — it's how we engineer every car.",
    name: "Hisashi Takeuchi",
    role: "MD & CEO",
    tint: "from-sky-100 to-blue-100",
    accent: "text-sky-700",
  },
  {
    quote: "The Speak-Up culture isn't a poster — it's lived every day.",
    name: "Rakesh Sharma",
    role: "Plant Head, Manesar",
    tint: "from-cyan-100 to-teal-100",
    accent: "text-teal-700",
  },
  {
    quote: "Our Code of Ethics isn't negotiable — and that clarity makes us stronger.",
    name: "Anjali Mehta",
    role: "Head of Procurement",
    tint: "from-violet-100 to-purple-100",
    accent: "text-violet-700",
  },
  {
    quote: "The helpdesk responded within an hour. That's real compliance culture.",
    name: "Vikram Singh",
    role: "Senior Engineer, R&D",
    tint: "from-indigo-100 to-blue-100",
    accent: "text-indigo-700",
  },
];

const VoicesSection = () => {
  return (
    <section className="relative w-full bg-gradient-to-br from-background via-sky-50/40 to-teal-50/30 py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden mb-10 shadow-xl">
          <img src={voicesHero} alt="MSIL employees in conversation" width={1280} height={400} loading="lazy" className="w-full h-36 md:h-44 object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-teal-900/85 via-sky-800/60 to-transparent" />
          <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-12">
            <span className="inline-flex items-center gap-1.5 w-fit px-3 py-1 rounded-full text-[11px] font-semibold bg-white/15 text-white border border-white/30 backdrop-blur mb-2">
              <Quote className="h-3 w-3" /> Voices from MSIL
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
              In Their <span className="text-cyan-300">Words</span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${t.tint} border border-white/60 p-6 md:p-7 hover:shadow-xl hover:-translate-y-1 transition-all duration-300`}
            >
              <Quote className={`absolute top-4 right-4 h-12 w-12 ${t.accent} opacity-20`} strokeWidth={1.5} />
              <div className="flex gap-0.5 mb-3">
                {[...Array(5)].map((_, s) => (
                  <Star key={s} className={`h-3.5 w-3.5 ${t.accent} fill-current`} />
                ))}
              </div>
              <p className="text-sm md:text-base text-foreground leading-relaxed mb-5 italic">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-3 pt-3 border-t border-white/60">
                <div className={`h-10 w-10 rounded-full bg-white/80 ${t.accent} flex items-center justify-center font-bold shadow-sm`}>
                  {t.name.split(" ").map(n => n[0]).join("")}
                </div>
                <div>
                  <div className="font-bold text-sm text-foreground">{t.name}</div>
                  <div className={`text-xs font-semibold ${t.accent}`}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VoicesSection;
