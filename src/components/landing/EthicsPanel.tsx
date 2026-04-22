const milestones = [
  { year: "2010", title: "Safety First Initiative", desc: "Comprehensive vehicle safety recall system established", color: "bg-primary" },
  { year: "2014", title: "Green Standards", desc: "Zero-emission compliance targets set across all product lines", color: "bg-teal" },
  { year: "2017", title: "Supply Chain Ethics", desc: "Ethical sourcing policy for all raw materials and components", color: "bg-amber" },
  { year: "2020", title: "Data Privacy Shield", desc: "GDPR-grade data protection for connected vehicle data", color: "bg-coral" },
  { year: "2023", title: "AI Governance", desc: "Autonomous driving ethics framework & bias auditing", color: "bg-purple" },
  { year: "2025", title: "Total Compliance", desc: "Integrated compliance across 50+ global markets", color: "bg-primary" },
];

const EthicsPanel = () => {
  return (
    <section className="relative w-screen h-screen flex-shrink-0 scroll-snap-panel flex items-center overflow-hidden bg-gradient-to-br from-teal/5 via-background to-primary/5">
      {/* Decorative */}
      <div className="absolute top-10 right-10 w-40 h-40 bg-teal/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-10 left-10 w-56 h-56 bg-amber/10 rounded-full blur-3xl animate-float-slow" />

      <div className="relative z-10 w-full px-12 md:px-20">
        <div className="mb-10">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-teal/10 text-teal border border-teal/20 mb-3 animate-slide-up">Our Journey</span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground animate-slide-up" style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}>
            The Compliance <span className="text-teal">Story</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute top-8 left-0 right-0 h-1 bg-border rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-primary via-teal to-coral animate-shimmer bg-[length:200%_100%]" />
          </div>

          <div className="flex gap-6 overflow-visible">
            {milestones.map((m, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-44 animate-slide-up opacity-0"
                style={{ animationDelay: `${0.2 + i * 0.15}s`, animationFillMode: "forwards" }}
              >
                {/* Dot */}
                <div className="flex justify-center mb-4">
                  <div className={`w-4 h-4 rounded-full ${m.color} ring-4 ring-background shadow-lg animate-shield-pulse`} style={{ animationDelay: `${i * 0.3}s` }} />
                </div>
                {/* Card */}
                <div className="bg-card/80 backdrop-blur-sm rounded-xl p-4 border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <span className={`text-xs font-bold ${m.color === "bg-primary" ? "text-primary" : m.color === "bg-teal" ? "text-teal" : m.color === "bg-amber" ? "text-amber" : m.color === "bg-coral" ? "text-coral" : "text-purple"}`}>
                    {m.year}
                  </span>
                  <h3 className="font-semibold text-sm mt-1 text-foreground">{m.title}</h3>
                  <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Animated gear SVG */}
        <div className="absolute bottom-16 right-16 opacity-10">
          <svg width="120" height="120" viewBox="0 0 100 100" className="animate-gear-rotate">
            <path d="M50 10 L55 25 L65 20 L60 35 L75 35 L65 45 L78 50 L65 55 L75 65 L60 65 L65 80 L55 75 L50 90 L45 75 L35 80 L40 65 L25 65 L35 55 L22 50 L35 45 L25 35 L40 35 L35 20 L45 25 Z" fill="hsl(174 60% 42%)" />
            <circle cx="50" cy="50" r="15" fill="hsl(40 33% 98%)" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default EthicsPanel;
