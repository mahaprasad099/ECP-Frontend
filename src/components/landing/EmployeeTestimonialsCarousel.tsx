import { Star, MessageCircle } from "lucide-react";

const testimonials = [
  { quote: "The Speak-Up portal felt safe from day one. My concern was acted on within 48 hours.", name: "Suresh Patil", role: "Line Engineer", dept: "Manesar Plant", tint: "from-sky-50 to-blue-50", accent: "text-sky-700" },
  { quote: "Compliance training here is actually engaging — gamified, short and relevant.", name: "Kavita Rao", role: "HR Business Partner", dept: "Gurugram HQ", tint: "from-violet-50 to-purple-50", accent: "text-violet-700" },
  { quote: "Vendors take us seriously because they know our anti-bribery stance is non-negotiable.", name: "Mohammed Irfan", role: "Procurement Manager", dept: "Supply Chain", tint: "from-teal-50 to-cyan-50", accent: "text-teal-700" },
  { quote: "Our quarterly ethics dialogues changed how my team thinks about everyday decisions.", name: "Deepa Krishnan", role: "Senior Manager", dept: "Quality Assurance", tint: "from-amber-50 to-orange-50", accent: "text-amber-700" },
  { quote: "I won the Pulse Check in March. The recognition meant more than the prize.", name: "Aniket Joshi", role: "Junior Engineer", dept: "R&D Rohtak", tint: "from-rose-50 to-pink-50", accent: "text-rose-700" },
  { quote: "Data privacy is treated with the same rigour as vehicle safety. That's rare.", name: "Sunita Reddy", role: "IT Security Lead", dept: "Digital", tint: "from-indigo-50 to-blue-50", accent: "text-indigo-700" },
  { quote: "As a new joiner, the compliance onboarding helped me feel I belong somewhere principled.", name: "Rohan Desai", role: "Graduate Trainee", dept: "Finance", tint: "from-emerald-50 to-teal-50", accent: "text-emerald-700" },
  { quote: "Anonymous reporting actually stays anonymous. I've seen it work for colleagues.", name: "Meera Nair", role: "Shop Floor Lead", dept: "Gujarat Plant", tint: "from-cyan-50 to-sky-50", accent: "text-cyan-700" },
];

const Card = ({ t }: { t: typeof testimonials[number] }) => (
  <div className={`shrink-0 w-[300px] md:w-[340px] mx-2 rounded-2xl bg-gradient-to-br ${t.tint} border border-white/80 p-5 shadow-sm hover:shadow-md transition-shadow`}>
    <div className="flex gap-0.5 mb-2">
      {[...Array(5)].map((_, s) => (
        <Star key={s} className={`h-3 w-3 ${t.accent} fill-current`} />
      ))}
    </div>
    <p className="text-sm text-foreground leading-relaxed mb-4 italic line-clamp-3">"{t.quote}"</p>
    <div className="flex items-center gap-3 pt-3 border-t border-white/80">
      <div className={`h-9 w-9 rounded-full bg-white/80 ${t.accent} flex items-center justify-center font-bold text-xs shadow-sm`}>
        {t.name.split(" ").map((n) => n[0]).join("")}
      </div>
      <div className="min-w-0">
        <div className="font-bold text-xs text-foreground truncate">{t.name}</div>
        <div className={`text-[10px] font-semibold ${t.accent} truncate`}>{t.role} · {t.dept}</div>
      </div>
    </div>
  </div>
);

const EmployeeTestimonialsCarousel = () => {
  const loop = [...testimonials, ...testimonials];
  return (
    <section className="relative w-full bg-gradient-to-br from-background via-sky-50/20 to-violet-50/20 py-16 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-12 mb-8">
        <div className="text-center">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold bg-sky-100 text-sky-700 border border-sky-200 mb-3">
            <MessageCircle className="h-3 w-3" /> Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
            What Our People <span className="text-sky-600">Are Saying</span>
          </h2>
          <p className="text-sm md:text-base text-muted-foreground mt-3 max-w-2xl mx-auto">
            Unscripted reflections from across plants, offices and functions.
          </p>
        </div>
      </div>

      <div className="group relative w-full">
        {/* Edge fades */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <div className="flex animate-scroll-x group-hover:[animation-play-state:paused] w-max">
          {loop.map((t, i) => (
            <Card key={i} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmployeeTestimonialsCarousel;
