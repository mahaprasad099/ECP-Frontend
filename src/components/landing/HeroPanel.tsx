// Hero panel — mascot removed per design refresh
import complianceBusiness from "@/assets/compliance-business.png";
import heroBg from "@/assets/hero-bg.jpg";

const Particles = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {Array.from({ length: 25 }).map((_, i) => (
      <div
        key={i}
        className="absolute rounded-full opacity-0"
        style={{
          width: `${Math.random() * 8 + 3}px`,
          height: `${Math.random() * 8 + 3}px`,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          background: [
            "hsl(205 78% 65%)",
            "hsl(174 60% 62%)",
            "hsl(16 80% 75%)",
            "hsl(38 92% 70%)",
            "hsl(270 60% 70%)",
          ][i % 5],
          animation: `particle-float ${3 + Math.random() * 4}s ease-in-out infinite`,
          animationDelay: `${Math.random() * 5}s`,
          ["--tx" as string]: `${(Math.random() - 0.5) * 200}px`,
          ["--ty" as string]: `${-50 - Math.random() * 150}px`,
        }}
      />
    ))}
  </div>
);


const HeroPanel = () => {
  return (
    <section className="relative w-full h-full flex flex-col items-center justify-start pt-8 overflow-hidden bg-gradient-to-br from-sky-50/50 via-background to-teal-50/30">
      <img
        src={heroBg}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-multiply pointer-events-none"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/30 to-background/70 pointer-events-none" />
      <Particles />

      <div className="absolute top-20 right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float-slow" />
      <div className="absolute bottom-20 left-20 w-48 h-48 bg-coral/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
      <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-teal/5 rounded-full blur-2xl animate-float" style={{ animationDelay: "2s" }} />

      <div className="relative z-10 text-center px-8 max-w-5xl">
        <div className="mb-6 flex justify-center animate-slide-up">
          <img
            src={complianceBusiness}
            alt="Compliance & Business — Partners in Growth"
            width={1200}
            height={896}
            className="h-32 md:h-44 w-auto object-contain drop-shadow-sm"
          />
        </div>

        <p className="text-2xl md:text-4xl text-primary font-black mb-4 tracking-wide font-serif italic animate-slide-up opacity-0" style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}>
          Maruti Suzuki
        </p>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-4 leading-[1.05] tracking-tight font-serif">
          <span className="inline-block animate-text-reveal bg-gradient-to-r from-foreground via-primary to-ocean bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-shift">
            Driving Ahead with Compliance
          </span>
        </h1>

        <p className="text-lg md:text-2xl font-bold text-coral mb-3 animate-slide-up opacity-0" style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}>
          Acceleration with Compliance
        </p>

        <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-4 animate-slide-up opacity-0" style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}>
          Powering ethical excellence across the global automotive industry with world-class compliance solutions.
        </p>

        <div
          className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/70 backdrop-blur-md border border-primary/20 shadow-sm animate-slide-up opacity-0"
          style={{ animationDelay: "0.55s", animationFillMode: "forwards" }}
        >
          <span className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-primary to-coral bg-clip-text text-transparent">
            40+
          </span>
          <span className="text-sm md:text-base font-semibold text-foreground/80 tracking-wide">
            The trust is built over <span className="text-primary font-bold">Four Decades</span>
          </span>
        </div>
      </div>
    </section>
  );
};

export default HeroPanel;
