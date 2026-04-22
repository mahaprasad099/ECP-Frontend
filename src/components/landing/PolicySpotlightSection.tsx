import { useEffect, useState } from "react";
import { ScrollText, ArrowUpRight, Sparkles, ShieldCheck, Clock } from "lucide-react";
import policyEthics from "@/assets/policy-ethics.jpg";
import policyConduct from "@/assets/policy-conduct.jpg";
import policyPrivacy from "@/assets/policy-privacy.jpg";
import policySpeakup from "@/assets/policy-speakup.jpg";

type Policy = {
  title: string;
  category: string;
  summary: string;
  updated: string;
  readMins: number;
  href: string;
  gradient: string;
  ring: string;
  chip: string;
  image: string;
};

const policies: Policy[] = [
  {
    title: "Anti-Bribery & Anti-Corruption Policy",
    category: "Ethics",
    summary:
      "Zero tolerance for bribery in any form. Covers gifts, hospitality, facilitation payments, and engagement with public officials across all Maruti Suzuki operations.",
    updated: "Updated Mar 2026",
    readMins: 6,
    href: "#",
    gradient: "from-[#ff6b6b] via-[#ff3d8b] to-[#c026d3]",
    ring: "ring-[#ff3d8b]/40",
    chip: "bg-[#ff3d8b]/15 text-[#c026d3] border-[#ff3d8b]/30",
    image: policyEthics,
  },
  {
    title: "Code of Business Conduct",
    category: "Foundational",
    summary:
      "The single source of truth for how every Maruti employee acts — integrity, fairness, conflict of interest, and Speak-Up obligations.",
    updated: "Updated Jan 2026",
    readMins: 12,
    href: "#",
    gradient: "from-[#84cc16] via-[#22d3ee] to-[#3b82f6]",
    ring: "ring-[#22d3ee]/40",
    chip: "bg-[#22d3ee]/15 text-[#0891b2] border-[#22d3ee]/30",
    image: policyConduct,
  },
  {
    title: "Data Privacy & DPDP Compliance",
    category: "Privacy",
    summary:
      "How we collect, process, and protect personal data under India's DPDP Act 2023 — covering customer, employee, and partner data lifecycles.",
    updated: "Updated Feb 2026",
    readMins: 8,
    href: "#",
    gradient: "from-[#a855f7] via-[#d946ef] to-[#f43f5e]",
    ring: "ring-[#d946ef]/40",
    chip: "bg-[#d946ef]/15 text-[#a21caf] border-[#d946ef]/30",
    image: policyPrivacy,
  },
  {
    title: "Speak-Up & Whistleblower Protection",
    category: "Reporting",
    summary:
      "Safe, confidential channels to raise concerns. Strict non-retaliation protection for anyone who reports in good faith.",
    updated: "Updated Apr 2026",
    readMins: 5,
    href: "#",
    gradient: "from-[#f97316] via-[#facc15] to-[#84cc16]",
    ring: "ring-[#facc15]/40",
    chip: "bg-[#facc15]/15 text-[#ca8a04] border-[#facc15]/30",
    image: policySpeakup,
  },
];

const PolicySpotlightSection = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setActive((a) => (a + 1) % policies.length), 5000);
    return () => clearInterval(id);
  }, []);

  const policy = policies[active];

  return (
    <section className="relative w-full overflow-hidden py-16 px-6 md:px-12">
      {/* Animated colourful background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#fff5f7] via-[#f5fff0] to-[#f3eaff]" />
      <div className="absolute -top-24 -left-24 -z-10 h-72 w-72 rounded-full bg-[#ff3d8b]/30 blur-3xl" />
      <div className="absolute top-20 right-10 -z-10 h-80 w-80 rounded-full bg-[#84cc16]/30 blur-3xl" />
      <div className="absolute -bottom-24 left-1/3 -z-10 h-72 w-72 rounded-full bg-[#a855f7]/30 blur-3xl" />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
          <div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold bg-white/60 backdrop-blur border border-white/70 text-[#c026d3] mb-3 shadow-sm">
              <Sparkles className="h-3 w-3" /> Policy Spotlight
            </span>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-[#10b981] via-[#14b8a6] to-[#06b6d4] bg-clip-text text-transparent">
                This week's must-read
              </span>
            </h2>
            <p className="text-sm text-muted-foreground mt-2 max-w-md">
              A rotating featured policy from the Maruti Suzuki compliance library — tap any chip to switch.
            </p>
          </div>

          {/* Switcher chips */}
          <div className="flex flex-wrap gap-2">
            {policies.map((p, i) => (
              <button
                key={p.title}
                onClick={() => setActive(i)}
                className={`text-[11px] font-semibold px-3 py-1.5 rounded-full border backdrop-blur transition-all ${
                  i === active
                    ? `${p.chip} shadow-md scale-105`
                    : "bg-white/40 border-white/60 text-foreground/70 hover:bg-white/70"
                }`}
              >
                {p.category}
              </button>
            ))}
          </div>
        </div>

        {/* Glassmorphism spotlight card */}
        <div
          className={`relative rounded-3xl overflow-hidden border border-white/60 bg-white/40 backdrop-blur-xl shadow-2xl ring-1 ${policy.ring} transition-all duration-500`}
        >
          {/* Top color band */}
          <div className={`h-2 w-full bg-gradient-to-r ${policy.gradient}`} />

          <div className="grid md:grid-cols-5 gap-0">
            {/* Left visual */}
            <div className={`relative md:col-span-2 p-8 bg-gradient-to-br ${policy.gradient} text-white overflow-hidden min-h-[320px]`}>
              {/* Background image */}
              <img
                src={policy.image}
                alt=""
                aria-hidden="true"
                width={1024}
                height={768}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover opacity-50 mix-blend-overlay transition-opacity duration-500"
              />
              <div className={`absolute inset-0 bg-gradient-to-br ${policy.gradient} opacity-60 mix-blend-multiply`} />
              <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-white/20 blur-2xl" />
              <div className="absolute bottom-0 -left-10 h-32 w-32 rounded-full bg-white/10 blur-2xl" />

              <div className="relative">
                <div className="inline-flex items-center justify-center h-14 w-14 rounded-2xl bg-white/25 backdrop-blur-md border border-white/40 shadow-lg mb-6">
                  <ScrollText className="h-7 w-7" strokeWidth={2.2} />
                </div>
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/80">
                  {policy.category} Policy
                </p>
                <h3 className="text-2xl md:text-3xl font-bold mt-2 leading-tight drop-shadow-md">
                  {policy.title}
                </h3>

                <div className="flex items-center gap-3 mt-6 text-[11px] text-white/95">
                  <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-white/20 backdrop-blur border border-white/30">
                    <Clock className="h-3 w-3" /> {policy.readMins} min read
                  </span>
                  <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-white/20 backdrop-blur border border-white/30">
                    <ShieldCheck className="h-3 w-3" /> {policy.updated}
                  </span>
                </div>
              </div>
            </div>

            {/* Right content */}
            <div className="md:col-span-3 p-8 md:p-10 flex flex-col justify-between bg-white/30 backdrop-blur-xl">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-foreground/60">
                  Why it matters
                </p>
                <p className="text-base md:text-lg text-foreground/90 leading-relaxed mt-3">
                  {policy.summary}
                </p>

                {/* Key takeaways */}
                <div className="grid grid-cols-2 gap-3 mt-6">
                  {[
                    { k: "Who", v: "All employees & partners" },
                    { k: "Owner", v: "Legal & Compliance" },
                    { k: "Effective", v: policy.updated.replace("Updated ", "") },
                    { k: "Acknowledge", v: "Annual sign-off" },
                  ].map((it) => (
                    <div
                      key={it.k}
                      className="rounded-xl border border-white/60 bg-white/50 backdrop-blur p-3 shadow-sm"
                    >
                      <p className="text-[10px] font-bold uppercase tracking-wider text-foreground/50">
                        {it.k}
                      </p>
                      <p className="text-sm font-semibold text-foreground mt-0.5">{it.v}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between mt-8">
                {/* Progress dots */}
                <div className="flex items-center gap-1.5">
                  {policies.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActive(i)}
                      aria-label={`Show policy ${i + 1}`}
                      className={`rounded-full transition-all ${
                        i === active
                          ? "h-2 w-6 bg-gradient-to-r from-[#ff3d8b] to-[#a855f7]"
                          : "h-2 w-2 bg-foreground/20 hover:bg-foreground/40"
                      }`}
                    />
                  ))}
                </div>

                <a
                  href={policy.href}
                  className={`group inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white shadow-lg bg-gradient-to-r ${policy.gradient} hover:shadow-xl hover:-translate-y-0.5 transition-all`}
                >
                  Read full policy
                  <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PolicySpotlightSection;
