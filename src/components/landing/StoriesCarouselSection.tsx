import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ImageIcon, MapPin } from "lucide-react";

import cultureTeam from "@/assets/culture-team.jpg";
import impactPlant from "@/assets/impact-plant.jpg";
import impactTeam from "@/assets/impact-team.jpg";
import impactIndia from "@/assets/impact-india.jpg";
import eventsHero from "@/assets/events-hero.jpg";
import championsHero from "@/assets/champions-hero.jpg";
import globalFootprint from "@/assets/global-footprint.jpg";

const slides = [
  {
    image: eventsHero,
    tag: "Summit",
    title: "Annual Compliance Summit 2025",
    place: "Manesar HQ",
    caption: "Industry leaders and regulators converge to shape the next compliance horizon.",
  },
  {
    image: cultureTeam,
    tag: "Culture",
    title: "Compliance Awareness Month",
    place: "All India",
    caption: "Plant-floor pledges, quizzes and town-halls across every MSIL site.",
  },
  {
    image: championsHero,
    tag: "Champions",
    title: "Champion of the Month felicitation",
    place: "Suzuki Auditorium",
    caption: "Recognising employees who went above and beyond on ethics.",
  },
  {
    image: impactPlant,
    tag: "Operations",
    title: "Plant-floor compliance walk",
    place: "Gurgaon Plant",
    caption: "Leadership on the shop-floor — listening, learning, acting.",
  },
  {
    image: impactTeam,
    tag: "Training",
    title: "Code of Conduct roll-out",
    place: "Pan-India",
    caption: "Refreshed dilemmas, scenario-based learning, 100% coverage.",
  },
  {
    image: impactIndia,
    tag: "Partners",
    title: "Vendor Compliance Summit",
    place: "New Delhi",
    caption: "1,840+ suppliers onboarded to MSIL's responsible sourcing charter.",
  },
  {
    image: globalFootprint,
    tag: "Reach",
    title: "Global compliance footprint",
    place: "100+ countries",
    caption: "Maruti Suzuki vehicles and standards travel the world.",
  },
];

const StoriesCarouselSection = () => {
  const autoplay = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: false, stopOnMouseEnter: true })
  );

  return (
    <section className="relative w-full bg-gradient-to-br from-background via-sky-50/40 to-violet-50/40 py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold bg-sky-100 text-sky-700 border border-sky-200 mb-3">
            <ImageIcon className="h-3 w-3" /> Stories in Motion
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
            Compliance, <span className="text-sky-600">in pictures</span>
          </h2>
          <p className="text-sm md:text-base text-muted-foreground mt-3 max-w-2xl mx-auto">
            A drag-and-swipe tour through the moments that make our culture real. Auto-plays — pause it by hovering.
          </p>
        </div>

        <Carousel
          opts={{ loop: true, align: "start", dragFree: false }}
          plugins={[autoplay.current]}
          className="relative"
          onMouseLeave={() => autoplay.current.play()}
        >
          <CarouselContent className="-ml-4">
            {slides.map((s, i) => (
              <CarouselItem
                key={i}
                className="pl-4 md:basis-2/3 lg:basis-1/2"
              >
                <article className="group relative overflow-hidden rounded-3xl border border-border/50 shadow-xl aspect-[16/10] cursor-grab active:cursor-grabbing">
                  <img
                    src={s.image}
                    alt={s.title}
                    loading="lazy"
                    draggable={false}
                    className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-700 select-none"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

                  <div className="absolute top-4 left-4">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/95 text-foreground backdrop-blur shadow">
                      {s.tag}
                    </span>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6 text-white">
                    <h3 className="font-bold text-lg md:text-2xl leading-tight mb-1.5">
                      {s.title}
                    </h3>
                    <p className="text-xs md:text-sm text-white/80 leading-snug max-w-md mb-2 line-clamp-2">
                      {s.caption}
                    </p>
                    <div className="inline-flex items-center gap-1 text-[11px] text-white/70">
                      <MapPin className="h-3 w-3" /> {s.place}
                    </div>
                  </div>
                </article>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Navigation arrows — overlap edges */}
          <CarouselPrevious className="left-2 md:-left-4 bg-white/90 hover:bg-white shadow-lg border-0 h-10 w-10" />
          <CarouselNext className="right-2 md:-right-4 bg-white/90 hover:bg-white shadow-lg border-0 h-10 w-10" />
        </Carousel>

        <div className="mt-5 text-center text-[11px] text-muted-foreground">
          Tip: drag, swipe or use the arrows. Auto-plays every 4 seconds.
        </div>
      </div>
    </section>
  );
};

export default StoriesCarouselSection;
