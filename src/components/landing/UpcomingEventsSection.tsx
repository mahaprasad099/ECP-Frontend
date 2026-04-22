import { Calendar, MapPin, Clock, ArrowRight, Video, Users, BookOpen, Sparkles } from "lucide-react";
import eventsHero from "@/assets/events-hero.jpg";
import cultureTeam from "@/assets/culture-team.jpg";
import impactTeam from "@/assets/impact-team.jpg";
import championsHero from "@/assets/champions-hero.jpg";

const events = [
  {
    image: eventsHero,
    date: { day: "08", month: "MAY" },
    title: "Annual Compliance Summit 2025",
    type: "Summit",
    time: "09:00 – 17:00 IST",
    location: "Manesar HQ",
    icon: Users,
    accent: "bg-primary/10 text-primary border-primary/20",
    chip: "bg-primary text-primary-foreground",
    desc: "Flagship gathering of compliance leaders, regulators and industry partners.",
  },
  {
    image: cultureTeam,
    date: { day: "01", month: "OCT" },
    title: "Compliance Awareness Month",
    type: "Month-long",
    time: "Whole of October",
    location: "All MSIL locations",
    icon: Sparkles,
    accent: "bg-violet-50 text-violet-700 border-violet-200",
    chip: "bg-violet-600 text-white",
    desc: "Quizzes, plant pledges, leadership talks and Champion-of-the-Month finale.",
  },
  {
    image: impactTeam,
    date: { day: "15", month: "MAY" },
    title: "Anti-Bribery & POSH Workshop",
    type: "Workshop",
    time: "14:00 – 16:30 IST",
    location: "Virtual · MS Teams",
    icon: Video,
    accent: "bg-teal-50 text-teal-700 border-teal-200",
    chip: "bg-teal-600 text-white",
    desc: "Scenario-based deep dive with the Legal & HR teams. Open to all employees.",
  },
  {
    image: championsHero,
    date: { day: "03", month: "JUN" },
    title: "Code of Conduct Refresher",
    type: "Training",
    time: "11:00 – 12:00 IST",
    location: "Virtual · LMS",
    icon: BookOpen,
    accent: "bg-amber-50 text-amber-700 border-amber-200",
    chip: "bg-amber-600 text-white",
    desc: "Mandatory annual refresher with new dilemmas from FY26 case-book.",
  },
];

const UpcomingEventsSection = () => {
  return (
    <section className="w-full bg-gradient-to-b from-background via-muted/20 to-background py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-end justify-between mb-8 flex-wrap gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-3">
              <Calendar className="h-3.5 w-3.5" /> What's Next
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
              Upcoming <span className="text-primary">Events</span>
            </h2>
            <p className="text-sm text-muted-foreground mt-2 max-w-xl">
              A timeline of summits, awareness drives, workshops and trainings across MSIL.
            </p>
          </div>
          <button className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all">
            View full calendar <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        {/* Timeline rail */}
        <div className="relative">
          {/* Vertical line on md+ */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/40 via-violet-300 to-transparent -translate-x-1/2" />

          <div className="flex flex-col gap-6">
            {events.map((e, i) => {
              const Icon = e.icon;
              const isLeft = i % 2 === 0;
              return (
                <div
                  key={i}
                  className={`relative md:grid md:grid-cols-2 md:gap-10 items-center ${
                    isLeft ? "" : "md:[&>*:first-child]:order-2"
                  }`}
                >
                  {/* Card */}
                  <article
                    className={`group relative overflow-hidden rounded-2xl border border-border/50 bg-card shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 ${
                      isLeft ? "md:mr-6" : "md:ml-6"
                    }`}
                  >
                    <div className="flex">
                      <div className="relative w-28 sm:w-36 shrink-0 overflow-hidden">
                        <img
                          src={e.image}
                          alt={e.title}
                          loading="lazy"
                          className="absolute inset-0 h-full w-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-tr from-black/60 to-transparent" />
                        <div className="absolute top-2 left-2 flex flex-col items-center justify-center w-11 h-11 rounded-xl bg-white/95 shadow">
                          <span className="text-sm font-extrabold text-foreground leading-none">{e.date.day}</span>
                          <span className="text-[8px] font-bold text-muted-foreground tracking-wider mt-0.5">{e.date.month}</span>
                        </div>
                      </div>
                      <div className="flex-1 p-4">
                        <span className={`inline-flex items-center gap-1 text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${e.chip} mb-1.5`}>
                          <Icon className="h-2.5 w-2.5" /> {e.type}
                        </span>
                        <h3 className="font-bold text-foreground text-sm leading-snug mb-1.5 line-clamp-2">
                          {e.title}
                        </h3>
                        <p className="text-[11px] text-muted-foreground leading-snug mb-2 line-clamp-2">{e.desc}</p>
                        <div className="flex flex-wrap gap-x-3 gap-y-0.5 text-[10px] text-muted-foreground">
                          <span className="inline-flex items-center gap-1"><Clock className="h-2.5 w-2.5" /> {e.time}</span>
                          <span className="inline-flex items-center gap-1"><MapPin className="h-2.5 w-2.5" /> {e.location}</span>
                        </div>
                      </div>
                    </div>
                  </article>

                  {/* Center node */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 z-10">
                    <div className={`h-4 w-4 rounded-full border-4 border-background shadow ${e.chip.split(" ")[0]}`} />
                  </div>

                  {/* Spacer for alternate side */}
                  <div className="hidden md:block" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpcomingEventsSection;
