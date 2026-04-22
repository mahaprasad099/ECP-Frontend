import { Camera, MapPin, Calendar } from "lucide-react";
import cultureTeam from "@/assets/culture-team.jpg";
import impactPlant from "@/assets/impact-plant.jpg";
import impactTeam from "@/assets/impact-team.jpg";
import impactIndia from "@/assets/impact-india.jpg";
import eventsHero from "@/assets/events-hero.jpg";
import championsHero from "@/assets/champions-hero.jpg";

const photos = [
  { src: cultureTeam, title: "Ethics Week 2026", place: "Manesar HQ", date: "Mar 2026", tag: "Culture" },
  { src: impactPlant, title: "Plant Floor Pledge", place: "Gurgaon Plant", date: "Feb 2026", tag: "Operations" },
  { src: impactTeam, title: "Code of Conduct Roll-out", place: "All India", date: "Jan 2026", tag: "Training" },
  { src: impactIndia, title: "Vendor Compliance Summit", place: "New Delhi", date: "Dec 2025", tag: "Partners" },
  { src: eventsHero, title: "Annual Compliance Day", place: "Manesar HQ", date: "Nov 2025", tag: "Event" },
  { src: championsHero, title: "Champions Felicitation", place: "Suzuki Auditorium", date: "Oct 2025", tag: "Awards" },
];

const CultureGallerySection = () => {
  return (
    <section className="relative w-full bg-gradient-to-br from-background via-sky-50/30 to-violet-50/30 py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold bg-sky-100 text-sky-700 border border-sky-200 mb-3">
            <Camera className="h-3 w-3" /> Compliance in Action
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
            Moments from <span className="text-sky-600">our culture</span>
          </h2>
          <p className="text-sm md:text-base text-muted-foreground mt-3 max-w-2xl mx-auto">
            A glimpse of how compliance comes alive across plants, offices and partners.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {photos.map((p, i) => (
            <article
              key={i}
              className={`group relative overflow-hidden rounded-2xl border border-border/50 shadow-md hover:shadow-2xl transition-all duration-500 ${
                i === 0 ? "md:col-span-2 md:row-span-2 aspect-square md:aspect-auto" : "aspect-square"
              }`}
            >
              <img
                src={p.src}
                alt={p.title}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute top-3 left-3">
                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/90 text-foreground backdrop-blur">
                  {p.tag}
                </span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <h3 className={`font-bold leading-tight mb-1 ${i === 0 ? "text-xl md:text-2xl" : "text-sm"}`}>
                  {p.title}
                </h3>
                <div className="flex items-center gap-3 text-[10px] md:text-xs text-white/80">
                  <span className="inline-flex items-center gap-1"><MapPin className="h-3 w-3" />{p.place}</span>
                  <span className="inline-flex items-center gap-1"><Calendar className="h-3 w-3" />{p.date}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CultureGallerySection;
