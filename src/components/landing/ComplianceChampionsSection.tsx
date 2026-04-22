import { useEffect, useState } from "react";
import { Heart, Award } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import champion1 from "@/assets/champion-1.jpg";
import champion2 from "@/assets/champion-2.jpg";
import champion3 from "@/assets/champion-3.jpg";
import champion4 from "@/assets/champion-4.jpg";
import champion5 from "@/assets/champion-5.jpg";
import champion6 from "@/assets/champion-6.jpg";
import championsHero from "@/assets/champions-hero.jpg";

const champions = [
  { name: "Priya Sharma", dept: "Legal & Compliance", role: "Ethics Champion", photo: champion1, tint: "from-sky-100 to-blue-100", accent: "text-sky-600" },
  { name: "Rajesh Kumar", dept: "Manufacturing — Manesar", role: "Floor Compliance Lead", photo: champion2, tint: "from-cyan-100 to-teal-100", accent: "text-teal-600" },
  { name: "Anjali Mehta", dept: "Procurement", role: "Anti-Bribery Champion", photo: champion3, tint: "from-violet-100 to-purple-100", accent: "text-violet-600" },
  { name: "Vikram Singh", dept: "Finance & Audit", role: "Risk Champion", photo: champion4, tint: "from-indigo-100 to-blue-100", accent: "text-indigo-600" },
  { name: "Neha Iyer", dept: "Human Resources", role: "Speak-Up Ambassador", photo: champion5, tint: "from-blue-100 to-cyan-100", accent: "text-blue-600" },
  { name: "Arjun Patel", dept: "Sales & Marketing", role: "Code of Conduct Lead", photo: champion6, tint: "from-purple-100 to-violet-100", accent: "text-purple-600" },
];

const ComplianceChampionsSection = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());
    api.on("select", () => setCurrent(api.selectedScrollSnap()));
  }, [api]);

  return (
    <section className="relative w-full bg-gradient-to-br from-background via-violet-50/30 to-sky-50/40 py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden mb-10 shadow-xl">
          <img src={championsHero} alt="Maruti Suzuki compliance team" width={1280} height={400} loading="lazy" className="w-full h-36 md:h-44 object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-violet-900/80 via-indigo-800/60 to-transparent" />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold bg-white/15 text-white border border-white/30 backdrop-blur mb-2">
              <Heart className="h-3 w-3" /> Everyday Heroes
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
              Compliance <span className="text-cyan-300">Champions</span>
            </h2>
          </div>
        </div>

        <Carousel
          setApi={setApi}
          opts={{ align: "start", loop: true }}
          plugins={[Autoplay({ delay: 3000, stopOnInteraction: false, stopOnMouseEnter: true })]}
          className="px-8 md:px-12"
        >
          <CarouselContent className="-ml-4">
            {champions.map((c, i) => (
              <CarouselItem key={i} className="pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4">
                <div className="group relative flex flex-col items-center text-center py-2">
                  <div className={`relative mb-3 rounded-full p-1 bg-gradient-to-br ${c.tint} shadow-md group-hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1`}>
                    <img
                      src={c.photo}
                      alt={`${c.name}, ${c.dept}`}
                      width={512}
                      height={512}
                      loading="lazy"
                      className="h-24 w-24 md:h-28 md:w-28 rounded-full object-cover border-2 border-white"
                    />
                    <div className={`absolute -bottom-1 -right-1 ${c.accent} bg-white rounded-full p-1.5 shadow-md`}>
                      <Award className="h-4 w-4" strokeWidth={2.5} />
                    </div>
                  </div>
                  <h3 className="font-bold text-sm text-foreground leading-tight">{c.name}</h3>
                  <p className={`text-[11px] font-semibold uppercase tracking-wider ${c.accent} mt-0.5`}>{c.role}</p>
                  <p className="text-xs text-muted-foreground mt-1">{c.dept}</p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-0" />
          <CarouselNext className="right-0" />
        </Carousel>

        <div className="flex justify-center gap-2 mt-6">
          {Array.from({ length: count }).map((_, i) => (
            <button
              key={i}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => api?.scrollTo(i)}
              className={`h-2 rounded-full transition-all ${
                i === current ? "w-6 bg-violet-600" : "w-2 bg-violet-300 hover:bg-violet-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComplianceChampionsSection;
