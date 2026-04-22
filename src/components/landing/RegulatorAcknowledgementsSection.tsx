import { ShieldCheck, BadgeCheck, Landmark, ExternalLink } from "lucide-react";
import newsAward from "@/assets/news-award.jpg";
import newsEsg from "@/assets/news-esg.jpg";
import newsPrivacy from "@/assets/news-privacy.jpg";
import impactPlant from "@/assets/impact-plant.jpg";

const acks = [
  {
    image: newsAward,
    acronym: "ICSI",
    full: "Institute of Company Secretaries of India",
    title: "Lifetime Achievement Award — R.C. Bhargava",
    date: "20 December 2025",
    note:
      "Chairman R.C. Bhargava conferred ICSI Lifetime Achievement Award at the National Awards for Excellence in Corporate Governance.",
    tint: "from-sky-100 to-blue-100",
    accent: "text-sky-700",
    badge: "bg-sky-600",
    source: "marutisuzuki.com",
  },
  {
    image: newsEsg,
    acronym: "SEBI",
    full: "Securities and Exchange Board of India",
    title: "LODR & BRSR Compliance — FY 2024-25",
    date: "05 August 2025",
    note:
      "44th AGM Annual Report filed with NSE & BSE; full LODR adherence with integrated BRSR and Business Responsibility disclosures.",
    tint: "from-violet-100 to-indigo-100",
    accent: "text-violet-700",
    badge: "bg-violet-600",
    source: "bseindia.com",
  },
  {
    image: newsPrivacy,
    acronym: "MCA",
    full: "Ministry of Corporate Affairs",
    title: "Annual Secretarial Compliance Report 2024-25",
    date: "FY 2024-25",
    note:
      "Independent Secretarial Audit certifies adherence to all applicable laws, regulations and Listing Obligations of MCA & SEBI.",
    tint: "from-emerald-100 to-teal-100",
    accent: "text-emerald-700",
    badge: "bg-emerald-600",
    source: "marketscreener.com",
  },
  {
    image: impactPlant,
    acronym: "NSE/BSE",
    full: "National & Bombay Stock Exchanges",
    title: "Integrated Governance Report — Dec 2025",
    date: "31 December 2025",
    note:
      "Quarterly integrated governance disclosures filed on time across both exchanges; zero non-compliance observations.",
    tint: "from-amber-100 to-orange-100",
    accent: "text-amber-700",
    badge: "bg-amber-600",
    source: "marketscreener.com",
  },
];

const RegulatorAcknowledgementsSection = () => {
  return (
    <section className="relative w-full bg-gradient-to-br from-background via-indigo-50/30 to-violet-50/30 py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold bg-indigo-100 text-indigo-700 border border-indigo-200 mb-3">
            <Landmark className="h-3 w-3" /> Recognised by Regulators
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
            Regulator <span className="text-indigo-600">Acknowledgements</span>
          </h2>
          <p className="text-sm md:text-base text-muted-foreground mt-3 max-w-2xl mx-auto">
            Independent recognitions and filings with India's apex regulatory bodies — proof that compliance at MSIL is measurable, audited and trusted.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {acks.map((a, i) => (
            <article
              key={i}
              className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${a.tint} border border-white/60 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col sm:flex-row`}
            >
              {/* Image */}
              <div className="relative sm:w-2/5 h-44 sm:h-auto shrink-0 overflow-hidden">
                <img
                  src={a.image}
                  alt={a.title}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-black/50 via-black/10 to-transparent" />
                <div className={`absolute top-3 left-3 inline-flex items-center justify-center h-11 px-3 rounded-xl ${a.badge} text-white font-extrabold text-xs tracking-wider shadow-lg`}>
                  {a.acronym}
                </div>
                <div className={`absolute top-3 right-3 ${a.accent} bg-white/95 rounded-full p-1 shadow-md`}>
                  <BadgeCheck className="h-4 w-4" strokeWidth={2.5} />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 p-5">
                <p className={`text-[10px] font-bold uppercase tracking-wider ${a.accent} mb-1`}>{a.full}</p>
                <h3 className="font-bold text-foreground text-base leading-snug mb-2">{a.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed mb-4">{a.note}</p>
                <div className="flex items-center justify-between pt-3 border-t border-white/60">
                  <div className="inline-flex items-center gap-1.5">
                    <ShieldCheck className={`h-3 w-3 ${a.accent}`} />
                    <span className={`text-[10px] font-bold uppercase tracking-wider ${a.accent}`}>{a.date}</span>
                  </div>
                  <div className="inline-flex items-center gap-1 text-[10px] text-muted-foreground">
                    <ExternalLink className="h-2.5 w-2.5" /> {a.source}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RegulatorAcknowledgementsSection;
