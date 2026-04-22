import newsPrivacy from "@/assets/news-privacy.jpg";
import newsTraining from "@/assets/news-training.jpg";
import newsAward from "@/assets/news-award.jpg";
import newsEsg from "@/assets/news-esg.jpg";

const newsItems = [
  {
    date: "April 2026",
    tag: "Policy Update",
    title: "New Data Privacy Compliance Framework Launched",
    desc: "MSIL adopts a comprehensive data privacy framework aligned with global GDPR and India's DPDP Act standards.",
    color: "text-primary",
    tagBg: "bg-primary/10 text-primary border-primary/20",
    image: newsPrivacy,
  },
  {
    date: "March 2026",
    tag: "Training",
    title: "Annual Compliance Awareness Week Concluded",
    desc: "Over 15,000 employees participated in compliance workshops across 22 states and union territories.",
    color: "text-teal",
    tagBg: "bg-teal/10 text-teal border-teal/20",
    image: newsTraining,
  },
  {
    date: "February 2026",
    tag: "Recognition",
    title: "MSIL Receives Best Compliance Culture Award",
    desc: "Recognized by the Institute of Company Secretaries of India for outstanding compliance governance practices.",
    color: "text-amber",
    tagBg: "bg-amber/10 text-amber border-amber/20",
    image: newsAward,
  },
  {
    date: "January 2026",
    tag: "Regulation",
    title: "New ESG Reporting Standards Adopted",
    desc: "Maruti Suzuki integrates ESG compliance metrics into quarterly board reporting for enhanced transparency.",
    color: "text-coral",
    tagBg: "bg-coral/10 text-coral border-coral/20",
    image: newsEsg,
  },
];

const EvolutionPanel = () => {
  return (
    <section className="relative w-full h-full flex items-start justify-center pt-8 overflow-hidden bg-gradient-to-br from-amber-50/30 via-background to-sky-50/20">
      <div className="absolute top-10 right-10 w-48 h-48 bg-amber/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-10 left-10 w-56 h-56 bg-primary/5 rounded-full blur-3xl animate-float-slow" />
      

      <div className="relative z-10 w-full px-8 md:px-16 max-w-5xl">
        <div className="text-center mb-8">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-amber/10 text-amber border border-amber/20 mb-3 animate-slide-up">
            Stay Updated
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground animate-slide-up" style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}>
            Latest <span className="text-amber">News</span> & Announcements
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {newsItems.map((item, i) => (
            <div
              key={i}
              className="group bg-card/60 backdrop-blur-sm border border-border/50 rounded-2xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-500 animate-slide-up opacity-0 flex"
              style={{ animationDelay: `${0.3 + i * 0.15}s`, animationFillMode: "forwards" }}
            >
              <div className="w-28 flex-shrink-0 overflow-hidden bg-muted">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  width={800}
                  height={512}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4 flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className={`inline-block px-2 py-0.5 rounded-full text-[10px] font-semibold border ${item.tagBg}`}>
                    {item.tag}
                  </span>
                  <span className="text-xs text-muted-foreground">{item.date}</span>
                </div>
                <h3 className={`text-sm font-bold ${item.color} mb-1.5 leading-snug`}>{item.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EvolutionPanel;
