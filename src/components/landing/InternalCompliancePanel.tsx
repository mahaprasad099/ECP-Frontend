import cultureTeam from "@/assets/culture-team.jpg";
import { Heart, Users, Sparkles, TrendingUp } from "lucide-react";

const InternalCompliancePanel = () => {
  return (
    <section className="relative w-full h-full flex items-start justify-center pt-8 overflow-hidden bg-gradient-to-br from-cyan-50/40 via-background to-teal-50/30">
      <div className="absolute top-16 right-16 w-52 h-52 bg-coral/5 rounded-full blur-3xl animate-float" />
      
      <div className="absolute bottom-16 left-16 w-44 h-44 bg-amber/5 rounded-full blur-3xl animate-float-slow" />

      <div className="relative z-10 max-w-4xl mx-auto px-8 md:px-16">
        <div className="text-center mb-8">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-coral/10 text-coral border border-coral/20 mb-3 animate-slide-up">
            Our DNA
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground animate-slide-up" style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}>
            Compliance <span className="text-coral">Culture</span> at MSIL
          </h2>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto animate-slide-up opacity-0" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
            Moving beyond "following rules" to building a deep-rooted internal culture of integrity.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="relative rounded-2xl overflow-hidden shadow-xl animate-slide-up opacity-0" style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}>
            <img src={cultureTeam} alt="Compliance culture team" loading="lazy" width={1024} height={768} className="w-full h-64 md:h-72 object-cover" />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/60 via-teal/20 to-transparent" />
            <div className="absolute bottom-3 left-3 right-3 grid grid-cols-3 gap-2">
              {[
                { Icon: Users, label: "17K+ Employees", color: "text-white" },
                { Icon: Heart, label: "One Culture", color: "text-white" },
                { Icon: Sparkles, label: "Daily Integrity", color: "text-white" },
              ].map((s, i) => (
                <div key={i} className="rounded-lg bg-white/15 backdrop-blur-md border border-white/20 px-2 py-1.5 flex items-center gap-1.5">
                  <s.Icon className="w-3.5 h-3.5 text-white" />
                  <span className="text-[10px] font-semibold text-white truncate">{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-foreground mb-4 animate-slide-up" style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}>
              Beyond <span className="text-coral">Rules</span>
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed animate-slide-up opacity-0" style={{ animationDelay: "0.35s", animationFillMode: "forwards" }}>
              At MSIL, compliance is a <em className="text-coral font-medium">human</em> effort — embedded in our culture, driven by our people, and strengthened by our shared commitment to doing what's right.
            </p>

            <div className="space-y-3">
              {[
                { label: "Culture of Integrity", value: "95%", color: "bg-coral/50" },
                { label: "Employee Awareness", value: "92%", color: "bg-amber/50" },
                { label: "Ethical Leadership", value: "98%", color: "bg-teal/50" },
              ].map((bar, i) => (
                <div key={i} className="animate-slide-up opacity-0" style={{ animationDelay: `${0.4 + i * 0.15}s`, animationFillMode: "forwards" }}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-foreground font-medium">{bar.label}</span>
                    <span className="text-muted-foreground">{bar.value}</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div
                      className={`h-full ${bar.color} rounded-full animate-bar-grow`}
                      style={{ width: bar.value, animationDelay: `${0.6 + i * 0.2}s` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Compliance Champions & Leaders */}
        <div className="mt-10 grid md:grid-cols-2 gap-5">
          <div
            className="bg-card/70 backdrop-blur-sm border border-coral/20 rounded-2xl p-5 hover:shadow-lg transition-all duration-500 animate-slide-up opacity-0"
            style={{ animationDelay: "0.7s", animationFillMode: "forwards" }}
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 rounded-full bg-coral/10">
                <svg viewBox="0 0 24 24" className="w-5 h-5 text-coral" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" /><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" /><path d="M4 22h16" /><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" /><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" /><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
                </svg>
              </div>
              <h4 className="text-lg font-bold text-coral">Compliance Champions</h4>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-3">
              Front-line ambassadors across departments — peer mentors who bring compliance to life through everyday actions, awareness drives, and team-level coaching.
            </p>
            <ul className="text-xs text-foreground/80 space-y-1.5">
              <li className="flex gap-2"><span className="text-coral font-bold">›</span> 250+ certified champions across plants &amp; offices</li>
              <li className="flex gap-2"><span className="text-coral font-bold">›</span> Run quarterly integrity dialogues within their teams</li>
              <li className="flex gap-2"><span className="text-coral font-bold">›</span> First point of contact for ethical guidance</li>
            </ul>
          </div>

          <div
            className="bg-card/70 backdrop-blur-sm border border-amber/20 rounded-2xl p-5 hover:shadow-lg transition-all duration-500 animate-slide-up opacity-0"
            style={{ animationDelay: "0.85s", animationFillMode: "forwards" }}
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 rounded-full bg-amber/10">
                <svg viewBox="0 0 24 24" className="w-5 h-5 text-amber" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 4l3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14" />
                </svg>
              </div>
              <h4 className="text-lg font-bold text-amber">Compliance Leaders</h4>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-3">
              Senior governance custodians who set the compliance agenda, drive policy adoption, and ensure accountability at every functional vertical.
            </p>
            <ul className="text-xs text-foreground/80 space-y-1.5">
              <li className="flex gap-2"><span className="text-amber font-bold">›</span> Functional heads owning compliance KPIs</li>
              <li className="flex gap-2"><span className="text-amber font-bold">›</span> Chair monthly risk &amp; ethics review forums</li>
              <li className="flex gap-2"><span className="text-amber font-bold">›</span> Sponsor enterprise-wide training mandates</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InternalCompliancePanel;
