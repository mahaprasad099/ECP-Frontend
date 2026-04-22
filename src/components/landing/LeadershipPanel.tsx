import hisashiImg from "@/assets/hisashi-takeuchi.png";
import manjareeImg from "@/assets/manjaree-chowdhary.png";
import rcBhargavaImg from "@/assets/rc-bhargava.png";


const leaders = [
  {
    name: "Mr. R.C. Bhargava",
    role: "Chairman",
    photo: rcBhargavaImg,
    quote:
      "Good governance and compliance are the cornerstones of sustainable business. At Maruti Suzuki, we have always believed that transparency, accountability, and adherence to the highest ethical standards are what set apart truly great organizations.",
    accentColor: "hsl(270 60% 65%)",
    borderColor: "border-purple/20",
    textColor: "text-purple",
    bgGlow: "bg-purple/5",
  },
  {
    name: "Mr. Hisashi Takeuchi",
    role: "Managing Director & CEO",
    photo: hisashiImg,
    quote:
      "At Maruti Suzuki, compliance is not merely a regulatory obligation — it is the engine that drives trust. Our commitment to integrity in every process ensures we deliver not just quality vehicles, but a promise of ethical excellence to every stakeholder.",
    accentColor: "hsl(205 78% 60%)",
    borderColor: "border-primary/20",
    textColor: "text-primary",
    bgGlow: "bg-primary/5",
  },
  {
    name: "Ms. Manjaree Chowdhary",
    role: "Senior Executive Director, General Counsel & Chief Compliance Officer",
    photo: manjareeImg,
    quote:
      "Governance must go beyond compliance. We are building a culture where integrity is embedded in every decision, every action, and every relationship. Our goal is to make compliance a shared value — not just a department, but a way of life at Maruti Suzuki.",
    accentColor: "hsl(16 80% 70%)",
    borderColor: "border-coral/20",
    textColor: "text-coral",
    bgGlow: "bg-coral/5",
  },
];

const LeadershipPanel = () => {
  return (
    <section className="relative w-full h-full flex items-start justify-center pt-8 overflow-hidden bg-gradient-to-br from-violet-50/30 via-background to-rose-50/20">
      <div className="absolute top-10 left-20 w-40 h-40 bg-primary/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-10 right-20 w-48 h-48 bg-coral/5 rounded-full blur-3xl animate-float-slow" />
      

      <div className="relative z-10 px-6 md:px-12 w-full max-w-6xl">
        <div className="text-center mb-8">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-purple/10 text-purple border border-purple/20 mb-3 animate-slide-up">
            Tone at the Top
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground animate-slide-up" style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}>
            Tone at the <span className="text-purple">Top</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {leaders.map((leader, i) => (
            <div
              key={i}
              className={`relative group bg-card/40 backdrop-blur-xl border ${leader.borderColor} rounded-2xl overflow-hidden animate-slide-up opacity-0 hover:shadow-lg transition-all duration-500`}
              style={{ animationDelay: `${0.3 + i * 0.2}s`, animationFillMode: "forwards" }}
            >
              <div className="absolute inset-0 opacity-30" style={{ background: `linear-gradient(135deg, ${leader.accentColor}10, transparent)` }} />

              <div className="relative z-10 p-5 md:p-6 flex flex-col items-center">
                <div
                  className="w-24 h-24 md:w-28 md:h-28 mx-auto mb-4 rounded-full overflow-hidden border-2 shadow-lg"
                  style={{ borderColor: leader.accentColor }}
                >
                  <img
                    src={leader.photo}
                    alt={leader.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>

                <h3 className="text-base font-bold text-foreground text-center">{leader.name}</h3>
                <p className={`text-xs ${leader.textColor} text-center font-medium mb-3 leading-tight`}>{leader.role}</p>

                <div className="relative flex-1">
                  <span className={`text-3xl ${leader.textColor} opacity-20 absolute -top-2 -left-1 font-serif`}>"</span>
                  <p className="text-xs text-muted-foreground leading-relaxed italic pl-4 pr-2">
                    {leader.quote}
                  </p>
                  <span className={`text-3xl ${leader.textColor} opacity-20 absolute -bottom-4 right-1 font-serif`}>"</span>
                </div>
              </div>

              <div className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full blur-2xl opacity-10" style={{ background: leader.accentColor }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeadershipPanel;
