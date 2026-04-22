import regulatoryImg from "@/assets/compliance-regulatory.jpg";
import ethicalImg from "@/assets/compliance-ethical.jpg";
import internalImg from "@/assets/compliance-internal.jpg";
import pillarsHero from "@/assets/compliance-pillars.jpg";
import { ShieldCheck, TrendingUp, AlertTriangle } from "lucide-react";

const cards = [
  {
    title: "Regulatory",
    subtitle: "Adhering to the laws of the land.",
    desc: "Meeting all federal, state, and international automotive regulations — from emissions to safety standards.",
    color: "text-primary",
    bgGlow: "bg-primary/10",
    borderColor: "border-primary/20",
    image: regulatoryImg,
  },
  {
    title: "Ethical",
    subtitle: "Doing the right thing, even when no one is watching.",
    desc: "Building a culture of integrity that goes beyond checkboxes — fostering trust, fairness, and accountability.",
    color: "text-teal",
    bgGlow: "bg-teal/10",
    borderColor: "border-teal/20",
    image: ethicalImg,
  },
  {
    title: "Internal",
    subtitle: "Living the values that make MSIL unique.",
    desc: "Upholding company-specific codes of conduct, policies, and standards that define our organizational DNA.",
    color: "text-purple",
    bgGlow: "bg-purple/10",
    borderColor: "border-purple/20",
    image: internalImg,
  },
];

const whyItems = [
  { t: "Protects Reputation", d: "Builds enduring trust with customers, regulators and society.", Icon: ShieldCheck, color: "text-primary", bg: "bg-primary/10" },
  { t: "Mitigates Risk", d: "Prevents fines, legal action and operational disruption.", Icon: AlertTriangle, color: "text-teal", bg: "bg-teal/10" },
  { t: "Drives Growth", d: "A compliant organisation scales responsibly and confidently.", Icon: TrendingUp, color: "text-purple", bg: "bg-purple/10" },
];

const WhatIsCompliancePanel = () => {
  return (
    <section className="relative w-full h-full flex items-start justify-center pt-6 overflow-y-auto bg-gradient-to-br from-teal-50/30 via-background to-sky-50/20">
      <div className="absolute top-10 right-20 w-48 h-48 bg-teal/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-10 left-10 w-40 h-40 bg-purple/5 rounded-full blur-3xl animate-float-slow" />

      <div className="relative z-10 px-6 md:px-12 w-full max-w-5xl pb-8">
        <div className="text-center mb-6">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-teal/10 text-teal border border-teal/20 mb-2 animate-slide-up">
            The Foundation
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground animate-slide-up" style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}>
            What is <span className="text-teal">Compliance?</span>
          </h2>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto text-sm md:text-base animate-slide-up opacity-0" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
            Compliance is the practice of operating in accordance with applicable laws, regulations, internal policies and ethical standards — ensuring every decision honours both the letter and the spirit of the rules.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6 animate-slide-up opacity-0" style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}>
          {whyItems.map((w, i) => (
            <div key={i} className="group rounded-xl border border-border/60 bg-card/70 backdrop-blur p-4 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
              <div className="flex items-center gap-3 mb-2">
                <div className={`p-2 rounded-lg ${w.bg}`}>
                  <w.Icon className={`w-4 h-4 ${w.color}`} />
                </div>
                <h4 className="font-semibold text-foreground text-sm">{w.t}</h4>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">{w.d}</p>
            </div>
          ))}
        </div>

        {/* Hero strip */}
        <div className="relative rounded-2xl overflow-hidden mb-6 shadow-lg animate-slide-up opacity-0" style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}>
          <img src={pillarsHero} alt="Compliance pillars" loading="lazy" width={1024} height={768} className="w-full h-32 md:h-40 object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-teal/60 to-purple/70" />
          <div className="absolute inset-0 flex items-center justify-center px-6 text-center">
            <h3 className="text-xl md:text-2xl font-bold text-white drop-shadow">
              The Three Pillars at <span className="underline decoration-white/40">MSIL</span>
            </h3>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {cards.map((card, i) => (
            <div
              key={i}
              className={`group relative bg-card/60 border ${card.borderColor} rounded-2xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-500 animate-slide-up opacity-0 cursor-default backdrop-blur-sm`}
              style={{ animationDelay: `${0.4 + i * 0.15}s`, animationFillMode: "forwards" }}
            >
              <div className="relative h-28 overflow-hidden">
                <img src={card.image} alt={card.title} loading="lazy" width={800} height={600} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className={`absolute inset-0 ${card.bgGlow}`} />
              </div>
              <div className="relative z-10 p-4">
                <h3 className={`text-lg font-bold ${card.color} mb-1`}>{card.title}</h3>
                <p className={`text-xs font-medium ${card.color} opacity-80 mb-2`}>{card.subtitle}</p>
                <p className="text-xs text-muted-foreground leading-relaxed">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatIsCompliancePanel;
