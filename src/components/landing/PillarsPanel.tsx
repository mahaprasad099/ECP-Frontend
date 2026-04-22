const pillars = [
  {
    title: "Safety Standards",
    desc: "Comprehensive vehicle safety protocols and recall management",
    color: "text-primary",
    bgColor: "bg-primary/10",
    borderColor: "border-primary/20",
    icon: (
      <svg viewBox="0 0 48 48" className="w-12 h-12">
        <path d="M24 4 L40 14 L40 28 C40 38 32 44 24 46 C16 44 8 38 8 28 L8 14 Z" fill="none" stroke="hsl(205 78% 45%)" strokeWidth="2.5" className="animate-draw-path" />
        <path d="M17 24 L22 29 L31 19" fill="none" stroke="hsl(205 78% 45%)" strokeWidth="2.5" strokeLinecap="round" className="animate-checkmark-draw" style={{ animationDelay: "0.5s" }} />
      </svg>
    ),
  },
  {
    title: "Environmental Compliance",
    desc: "Emissions standards, green manufacturing & sustainability",
    color: "text-teal",
    bgColor: "bg-teal/10",
    borderColor: "border-teal/20",
    icon: (
      <svg viewBox="0 0 48 48" className="w-12 h-12">
        <circle cx="24" cy="24" r="18" fill="none" stroke="hsl(174 60% 42%)" strokeWidth="2" className="animate-draw-path" />
        <path d="M24 12 C20 18 16 22 16 28 C16 32 20 36 24 36 C28 36 32 32 32 28 C32 22 28 18 24 12Z" fill="hsl(174 60% 42%)" opacity="0.3" className="animate-shield-pulse" />
        <path d="M20 26 L24 20 L28 26" fill="none" stroke="hsl(174 60% 42%)" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Supply Chain Ethics",
    desc: "Ethical sourcing, fair labor & conflict mineral compliance",
    color: "text-amber",
    bgColor: "bg-amber/10",
    borderColor: "border-amber/20",
    icon: (
      <svg viewBox="0 0 48 48" className="w-12 h-12">
        <rect x="8" y="20" width="12" height="20" rx="2" fill="none" stroke="hsl(38 92% 55%)" strokeWidth="2" className="animate-draw-path" />
        <rect x="18" y="14" width="12" height="26" rx="2" fill="none" stroke="hsl(38 92% 55%)" strokeWidth="2" className="animate-draw-path" style={{ animationDelay: "0.3s" }} />
        <rect x="28" y="8" width="12" height="32" rx="2" fill="none" stroke="hsl(38 92% 55%)" strokeWidth="2" className="animate-draw-path" style={{ animationDelay: "0.6s" }} />
      </svg>
    ),
  },
  {
    title: "Data Privacy",
    desc: "GDPR, CCPA & connected vehicle data protection",
    color: "text-coral",
    bgColor: "bg-coral/10",
    borderColor: "border-coral/20",
    icon: (
      <svg viewBox="0 0 48 48" className="w-12 h-12">
        <rect x="12" y="20" width="24" height="20" rx="3" fill="none" stroke="hsl(16 80% 60%)" strokeWidth="2" className="animate-draw-path" />
        <path d="M16 20 L16 14 C16 9 20 6 24 6 C28 6 32 9 32 14 L32 20" fill="none" stroke="hsl(16 80% 60%)" strokeWidth="2.5" className="animate-draw-path" style={{ animationDelay: "0.4s" }} />
        <circle cx="24" cy="30" r="3" fill="hsl(16 80% 60%)" className="animate-shield-pulse" />
      </svg>
    ),
  },
  {
    title: "Anti-Corruption",
    desc: "Bribery prevention, whistleblower & transparent governance",
    color: "text-purple",
    bgColor: "bg-purple/10",
    borderColor: "border-purple/20",
    icon: (
      <svg viewBox="0 0 48 48" className="w-12 h-12">
        <circle cx="24" cy="24" r="18" fill="none" stroke="hsl(270 60% 55%)" strokeWidth="2" className="animate-draw-path" />
        <path d="M24 12 L24 24 L32 28" fill="none" stroke="hsl(270 60% 55%)" strokeWidth="2.5" strokeLinecap="round" className="animate-draw-path" style={{ animationDelay: "0.5s" }} />
        <circle cx="24" cy="24" r="3" fill="hsl(270 60% 55%)" className="animate-shield-pulse" />
      </svg>
    ),
  },
  {
    title: "Regulatory Affairs",
    desc: "Global regulatory tracking across 50+ jurisdictions",
    color: "text-ocean",
    bgColor: "bg-ocean/10",
    borderColor: "border-ocean/20",
    icon: (
      <svg viewBox="0 0 48 48" className="w-12 h-12">
        <path d="M8 40 L24 8 L40 40 Z" fill="none" stroke="hsl(205 78% 45%)" strokeWidth="2" className="animate-draw-path" />
        <path d="M14 34 L24 14 L34 34 Z" fill="hsl(205 78% 45%)" opacity="0.15" className="animate-shield-pulse" />
        <circle cx="24" cy="30" r="2" fill="hsl(205 78% 45%)" />
        <line x1="24" y1="20" x2="24" y2="27" stroke="hsl(205 78% 45%)" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    ),
  },
];

const PillarsPanel = () => {
  return (
    <section className="relative w-screen h-screen flex-shrink-0 scroll-snap-panel flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/5 via-background to-teal/5">
      <div className="absolute top-10 left-1/4 w-32 h-32 bg-amber/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-10 right-1/4 w-40 h-40 bg-purple/10 rounded-full blur-3xl animate-float-slow" />

      <div className="relative z-10 px-8 md:px-16 w-full max-w-6xl">
        <div className="text-center mb-10">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20 mb-3">Core Framework</span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Compliance <span className="text-primary">Pillars</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {pillars.map((p, i) => (
            <div
              key={i}
              className={`group ${p.bgColor} border ${p.borderColor} rounded-2xl p-5 hover:shadow-xl hover:-translate-y-2 transition-all duration-500 animate-slide-up opacity-0 cursor-default`}
              style={{ animationDelay: `${0.1 + i * 0.12}s`, animationFillMode: "forwards" }}
            >
              <div className="mb-3">{p.icon}</div>
              <h3 className={`font-bold text-sm md:text-base ${p.color}`}>{p.title}</h3>
              <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PillarsPanel;
