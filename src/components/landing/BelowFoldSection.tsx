import { ChevronDown, ShieldCheck, Gavel, BookOpen, TrendingUp, AlertTriangle, FileCheck, Users2, Globe2, Sparkles, Calendar, Award, Mic, GraduationCap, MapPin, Activity, Lock, Scale, Lightbulb, Target, Zap, HeartHandshake, Eye, CheckCircle2, Bell, Trophy, MessageSquare, Network, Radio, Clock } from "lucide-react";
import { Card } from "@/components/ui/card";
import snapshotHero from "@/assets/snapshot-hero.jpg";
import eventsHero from "@/assets/events-hero.jpg";

const liveFeed = [
  { icon: CheckCircle2, color: "text-emerald-600", bg: "bg-emerald-50", text: "Plant Manesar passed Q2 ethics audit", time: "2 min ago" },
  { icon: Bell, color: "text-sky-600", bg: "bg-sky-50", text: "New POSH module assigned to 1,240 employees", time: "18 min ago" },
  { icon: Trophy, color: "text-amber-600", bg: "bg-amber-50", text: "Gurugram HQ recognized: Compliance Champion", time: "1 hr ago" },
  { icon: MessageSquare, color: "text-violet-600", bg: "bg-violet-50", text: "12 Speak-Up cases resolved this week", time: "3 hrs ago" },
  { icon: Network, color: "text-teal-600", bg: "bg-teal-50", text: "Vendor onboarding: 28 new ESG attestations", time: "5 hrs ago" },
];

const maturityStages = [
  { label: "Awareness", pct: 100, color: "bg-emerald-500" },
  { label: "Adoption", pct: 100, color: "bg-sky-500" },
  { label: "Integration", pct: 92, color: "bg-violet-500" },
  { label: "Optimization", pct: 78, color: "bg-amber-500" },
  { label: "Innovation", pct: 64, color: "bg-rose-500" },
];

const radialMetrics = [
  { label: "Policy Adherence", value: 96, stroke: "hsl(205 78% 55%)", text: "text-sky-600" },
  { label: "Training Done", value: 100, stroke: "hsl(160 70% 45%)", text: "text-emerald-600" },
  { label: "Audit Closure", value: 88, stroke: "hsl(265 70% 60%)", text: "text-violet-600" },
  { label: "ESG Index", value: 91, stroke: "hsl(38 92% 55%)", text: "text-amber-600" },
];

const widgets = [
  { icon: ShieldCheck, title: "Risk Coverage", value: "98%", tint: "from-sky-100 to-blue-100", accent: "text-sky-600", trend: "+4% YoY" },
  { icon: FileCheck, title: "Policies", value: "240+", tint: "from-cyan-100 to-teal-100", accent: "text-teal-600", trend: "32 new" },
  { icon: Users2, title: "Trained", value: "42K", tint: "from-indigo-100 to-blue-100", accent: "text-indigo-600", trend: "100%" },
  { icon: Globe2, title: "ISO 37301", value: "Certified", tint: "from-violet-100 to-purple-100", accent: "text-violet-600", trend: "2025" },
  { icon: Activity, title: "Audit Score", value: "9.6", tint: "from-emerald-100 to-teal-100", accent: "text-emerald-600", trend: "Top tier" },
  { icon: Lock, title: "Data Integrity", value: "100%", tint: "from-blue-100 to-indigo-100", accent: "text-blue-600", trend: "0 breaches" },
  { icon: Scale, title: "Cases Closed", value: "312", tint: "from-amber-100 to-orange-100", accent: "text-amber-700", trend: "Avg 7d" },
  { icon: HeartHandshake, title: "Vendors", value: "1,400+", tint: "from-rose-100 to-pink-100", accent: "text-rose-600", trend: "+18%" },
];

const focusAreas = [
  { icon: Target, title: "Anti-Bribery", desc: "ISO 37001 framework.", color: "text-sky-600", bg: "bg-sky-50" },
  { icon: Eye, title: "Transparency", desc: "Public ESG disclosures.", color: "text-teal-600", bg: "bg-teal-50" },
  { icon: Lightbulb, title: "Ethics AI", desc: "Conflict-of-interest detection.", color: "text-violet-600", bg: "bg-violet-50" },
  { icon: Zap, title: "Rapid Response", desc: "24/7 helpdesk · 2hr SLA.", color: "text-amber-700", bg: "bg-amber-50" },
];

const insights = [
  { icon: Gavel, title: "Regulatory Watch", desc: "Real-time tracking of automotive, environmental and labour regulations across India and export markets." },
  { icon: AlertTriangle, title: "Risk Intelligence", desc: "Predictive analytics to surface compliance blind spots before they escalate into incidents." },
  { icon: TrendingUp, title: "Continuous Improvement", desc: "Quarterly audits, feedback loops and KPI dashboards keeping every business unit accountable." },
];

const events = [
  {
    icon: Calendar,
    title: "Compliance Week 2025",
    date: "12 — 16 May",
    location: "Pan-India · All MSIL Plants",
    desc: "A week-long celebration of integrity featuring daily themes, leadership talks, and ethics pledges.",
    tag: "Flagship",
    tint: "from-sky-100 to-blue-100",
    accent: "text-sky-700",
    badge: "bg-sky-600",
  },
  {
    icon: GraduationCap,
    title: "Certification Workshop",
    date: "27 June",
    location: "MSIL Learning Centre, Gurugram",
    desc: "Hands-on certification on Anti-Bribery (ISO 37001) and Compliance Management (ISO 37301) frameworks.",
    tag: "Workshop",
    tint: "from-cyan-100 to-teal-100",
    accent: "text-teal-700",
    badge: "bg-teal-600",
  },
  {
    icon: Mic,
    title: "Global Compliance Summit",
    date: "18 — 19 September",
    location: "Manesar · Hybrid",
    desc: "Industry leaders, regulators and Suzuki global counterparts converge to shape the future of ethical mobility.",
    tag: "Summit",
    tint: "from-violet-100 to-purple-100",
    accent: "text-violet-700",
    badge: "bg-violet-600",
  },
  {
    icon: Award,
    title: "Ethics Excellence Awards",
    date: "05 December",
    location: "Corporate HQ, New Delhi",
    desc: "Recognising compliance champions, whistle-blowers and business units with exemplary ethical track records.",
    tag: "Awards",
    tint: "from-indigo-100 to-blue-100",
    accent: "text-indigo-700",
    badge: "bg-indigo-600",
  },
];

const BelowFoldSection = () => {
  return (
    <section className="relative w-full bg-gradient-to-br from-background via-sky-50/40 to-violet-50/30 py-16 px-6 md:px-12">
      {/* Scroll-down indicator anchor */}
      <div className="flex justify-center -mt-24 mb-12">
        <div className="flex flex-col items-center gap-2 text-muted-foreground animate-bounce-subtle">
          <span className="text-xs uppercase tracking-[0.3em] font-semibold">Scroll for more</span>
          <ChevronDown className="h-5 w-5" />
        </div>
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Snapshot Hero with image */}
        <div className="relative rounded-3xl overflow-hidden mb-10 shadow-xl">
          <img src={snapshotHero} alt="Compliance dashboard visualization" width={1280} height={640} loading="lazy" className="w-full h-56 md:h-72 object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-sky-900/85 via-blue-800/65 to-violet-700/40" />
          <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-12">
            <span className="inline-block w-fit px-3 py-1 rounded-full text-xs font-semibold bg-white/15 text-white border border-white/30 backdrop-blur mb-3">
              Compliance Snapshot · FY 2024–25
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-white max-w-2xl leading-tight">
              Compliance, <span className="text-cyan-300">Quantified</span>
            </h2>
            <p className="text-sm md:text-base text-white/85 mt-3 max-w-xl">
              Real-time metrics from across 18 plants, 4,000+ touchpoints and a 42,000-strong workforce — proving integrity scales when measured.
            </p>
            <div className="flex items-center gap-4 mt-5 text-xs text-white/90">
              <div className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" /> Live data</div>
              <div className="hidden md:flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-cyan-300" /> Updated quarterly</div>
              <div className="hidden md:flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-amber-300" /> Independently audited</div>
            </div>
          </div>
        </div>

        {/* Modern KPI widgets — 8 metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {widgets.map((w, i) => (
            <Card key={i} className={`relative overflow-hidden border-0 bg-gradient-to-br ${w.tint} p-5 hover:shadow-lg hover:-translate-y-1 transition-all duration-300`}>
              <div className="flex items-center justify-between mb-3">
                <w.icon className={`h-6 w-6 ${w.accent}`} />
                <Sparkles className={`h-4 w-4 ${w.accent} opacity-50`} />
              </div>
              <div className={`text-3xl font-extrabold ${w.accent} mb-1`}>{w.value}</div>
              <div className="text-sm font-semibold text-foreground">{w.title}</div>
              
              <div className={`mt-3 inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider ${w.accent} bg-white/70 backdrop-blur px-2 py-0.5 rounded-full`}>
                <TrendingUp className="h-3 w-3" /> {w.trend}
              </div>
            </Card>
          ))}
        </div>

        {/* Focus areas strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-16">
          {focusAreas.map((f, i) => (
            <div key={i} className={`group rounded-2xl border border-border/60 ${f.bg} p-4 hover:shadow-md hover:-translate-y-0.5 transition-all`}>
              <div className={`inline-flex p-2 rounded-lg bg-white/80 ${f.color} mb-3`}>
                <f.icon className="h-4 w-4" />
              </div>
              <h4 className="font-bold text-foreground text-sm mb-1">{f.title}</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>

        {/* Interactive Dashboard Strip — Radial gauges + Live feed + Maturity meter */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-16">
          {/* Radial KPI gauges */}
          <Card className="p-5 border-0 bg-gradient-to-br from-white to-sky-50/60 shadow-md hover:shadow-lg transition-all">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="font-bold text-foreground text-base">Performance Index</h3>
                <p className="text-xs text-muted-foreground">Real-time pillar scores</p>
              </div>
              <div className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" /> LIVE
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {radialMetrics.map((m, i) => {
                const circ = 2 * Math.PI * 28;
                const offset = circ - (m.value / 100) * circ;
                return (
                  <div key={i} className="flex flex-col items-center group">
                    <div className="relative">
                      <svg width="72" height="72" viewBox="0 0 72 72" className="-rotate-90 transition-transform duration-500 group-hover:scale-110">
                        <circle cx="36" cy="36" r="28" fill="none" stroke="hsl(220 15% 92%)" strokeWidth="6" />
                        <circle cx="36" cy="36" r="28" fill="none" stroke={m.stroke} strokeWidth="6" strokeLinecap="round" strokeDasharray={circ} strokeDashoffset={offset} className="transition-all duration-1000" />
                      </svg>
                      <div className={`absolute inset-0 flex items-center justify-center text-sm font-extrabold ${m.text}`}>{m.value}%</div>
                    </div>
                    <span className="text-[11px] font-semibold text-foreground mt-1 text-center leading-tight">{m.label}</span>
                  </div>
                );
              })}
            </div>
          </Card>

          {/* Live activity feed */}
          <Card className="p-5 border-0 bg-gradient-to-br from-white to-violet-50/60 shadow-md hover:shadow-lg transition-all">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Radio className="h-4 w-4 text-violet-600 animate-pulse" />
                <h3 className="font-bold text-foreground text-base">Live Activity</h3>
              </div>
              <span className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider">Today</span>
            </div>
            <ul className="space-y-2.5">
              {liveFeed.map((item, i) => (
                <li key={i} className="flex items-start gap-3 group cursor-pointer hover:bg-white/80 rounded-lg p-1.5 -mx-1.5 transition-colors">
                  <div className={`p-1.5 rounded-lg ${item.bg} ${item.color} shrink-0 group-hover:scale-110 transition-transform`}>
                    <item.icon className="h-3.5 w-3.5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-medium text-foreground leading-snug">{item.text}</p>
                    <div className="flex items-center gap-1 text-[10px] text-muted-foreground mt-0.5">
                      <Clock className="h-2.5 w-2.5" />
                      {item.time}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </Card>

          {/* Maturity meter */}
          <Card className="p-5 border-0 bg-gradient-to-br from-white to-amber-50/50 shadow-md hover:shadow-lg transition-all">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="font-bold text-foreground text-base">Maturity Journey</h3>
                <p className="text-xs text-muted-foreground">Compliance evolution stages</p>
              </div>
              <div className="text-right">
                <div className="text-2xl font-extrabold text-amber-600">87%</div>
                <div className="text-[10px] text-muted-foreground uppercase font-semibold">Overall</div>
              </div>
            </div>
            <div className="space-y-2.5">
              {maturityStages.map((s, i) => (
                <div key={i} className="group">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-semibold text-foreground">{s.label}</span>
                    <span className="text-[10px] font-bold text-muted-foreground">{s.pct}%</span>
                  </div>
                  <div className="h-2 bg-muted/60 rounded-full overflow-hidden">
                    <div
                      className={`h-full ${s.color} rounded-full transition-all duration-1000 ease-out group-hover:brightness-110`}
                      style={{ width: `${s.pct}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Insights row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16">
          {insights.map((it, i) => (
            <div key={i} className="group relative p-6 rounded-2xl border border-border/60 bg-card/80 backdrop-blur hover:border-primary/40 hover:shadow-md transition-all">
              <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-primary via-teal to-coral rounded-t-2xl opacity-70" />
              <it.icon className="h-8 w-8 text-primary mb-3" />
              <h3 className="font-bold text-foreground mb-1">{it.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{it.desc}</p>
            </div>
          ))}
        </div>

        {/* Upcoming Events */}
        <div className="mb-16">
          <div className="relative rounded-3xl overflow-hidden mb-6 shadow-xl">
            <img src={eventsHero} alt="Compliance summit audience" width={1280} height={640} loading="lazy" className="w-full h-48 md:h-56 object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/85 via-violet-800/65 to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-10">
              <span className="inline-block w-fit px-3 py-1 rounded-full text-xs font-semibold bg-white/15 text-white border border-white/30 backdrop-blur mb-2">
                Mark Your Calendar
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                Upcoming <span className="text-cyan-300">Events</span>
              </h2>
              <p className="text-sm text-white/85 mt-1 max-w-md">
                Workshops, summits and celebrations shaping our compliance culture in 2025.
              </p>
              <div className="hidden md:flex items-center gap-2 text-xs text-white/90 mt-3">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                4 events scheduled
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {events.map((ev, i) => (
              <div
                key={i}
                className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${ev.tint} border border-white/60 p-5 hover:shadow-xl hover:-translate-y-1 transition-all duration-300`}
              >
                <div className={`absolute top-3 right-3 ${ev.badge} text-white text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full shadow-sm`}>
                  {ev.tag}
                </div>
                <div className={`inline-flex p-2.5 rounded-xl bg-white/80 backdrop-blur ${ev.accent} mb-4 shadow-sm`}>
                  <ev.icon className="h-5 w-5" />
                </div>
                <h3 className="font-bold text-foreground text-base mb-1 leading-tight">{ev.title}</h3>
                <div className={`flex items-center gap-1.5 text-xs font-semibold ${ev.accent} mb-1`}>
                  <Calendar className="h-3 w-3" />
                  {ev.date}
                </div>
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-3">
                  <MapPin className="h-3 w-3" />
                  {ev.location}
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">{ev.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Compliance Flyer */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-ocean to-teal text-primary-foreground p-8 md:p-12 shadow-2xl">
          <div className="absolute -top-16 -right-16 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-coral/20 rounded-full blur-3xl" />

          <div className="relative grid md:grid-cols-[1.4fr_1fr] gap-8 items-center">
            <div>
              <span className="inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-[0.25em] bg-white/15 backdrop-blur border border-white/30 mb-4">
                Official Compliance Flyer
              </span>
              <h3 className="text-3xl md:text-4xl font-extrabold mb-3 leading-tight">
                Drive with Integrity. Deliver with Trust.
              </h3>
              <p className="text-white/85 text-base md:text-lg mb-6 leading-relaxed">
                Every Maruti Suzuki associate is a custodian of compliance. Speak up, stay informed, and uphold the values that fuel India's most trusted automaker.
              </p>
              <div className="grid grid-cols-2 gap-3 max-w-md">
                {[
                  { k: "Speak-Up Helpline", v: "1800-180-0095" },
                  { k: "Ethics Email", v: "ethics@maruti.co.in" },
                  { k: "Code of Conduct", v: "v 4.2 — 2025" },
                  { k: "Whistleblower", v: "100% Confidential" },
                ].map((c, i) => (
                  <div key={i} className="bg-white/10 backdrop-blur rounded-lg px-3 py-2 border border-white/20">
                    <div className="text-[10px] uppercase tracking-wider opacity-70">{c.k}</div>
                    <div className="text-sm font-semibold">{c.v}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative flex items-center justify-center">
              <div className="absolute inset-0 bg-white/5 rounded-2xl blur-2xl" />
              <div className="relative bg-white/95 text-foreground rounded-2xl p-6 w-full max-w-xs shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
                <div className="flex items-center gap-2 mb-3">
                  <BookOpen className="h-5 w-5 text-primary" />
                  <span className="text-xs font-bold uppercase tracking-wider text-primary">Quick Read</span>
                </div>
                <h4 className="font-bold text-lg mb-2">5 Pillars of MSIL Compliance</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex gap-2"><span className="text-teal font-bold">01</span> Honesty in every transaction</li>
                  <li className="flex gap-2"><span className="text-teal font-bold">02</span> Respect for every stakeholder</li>
                  <li className="flex gap-2"><span className="text-teal font-bold">03</span> Zero tolerance for misconduct</li>
                  <li className="flex gap-2"><span className="text-teal font-bold">04</span> Transparent reporting</li>
                  <li className="flex gap-2"><span className="text-teal font-bold">05</span> Continuous learning</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BelowFoldSection;
