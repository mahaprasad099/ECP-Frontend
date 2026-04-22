import { useState, useCallback, useEffect, useRef } from "react";
import { Home, ScrollText, Crown, Users, Newspaper, BarChart3, Rocket } from "lucide-react";
import Navbar from "@/components/landing/Navbar";
import HeroPanel from "@/components/landing/HeroPanel";
import WhatIsCompliancePanel from "@/components/landing/WhatIsCompliancePanel";
import LeadershipPanel from "@/components/landing/LeadershipPanel";
import InternalCompliancePanel from "@/components/landing/InternalCompliancePanel";
import EvolutionPanel from "@/components/landing/EvolutionPanel";
import StatsPanel from "@/components/landing/StatsPanel";

import CTAPanel from "@/components/landing/CTAPanel";
import BelowFoldSection from "@/components/landing/BelowFoldSection";

import UpcomingEventsSection from "@/components/landing/UpcomingEventsSection";
import ResourcesSection from "@/components/landing/ResourcesSection";
import ComplianceChampionsSection from "@/components/landing/ComplianceChampionsSection";
import RegulatorAcknowledgementsSection from "@/components/landing/RegulatorAcknowledgementsSection";
import ChampionOfTheMonthSection from "@/components/landing/ChampionOfTheMonthSection";
import EmployeeTestimonialsCarousel from "@/components/landing/EmployeeTestimonialsCarousel";
import DepartmentLeaderboardSection from "@/components/landing/DepartmentLeaderboardSection";
import StoriesCarouselSection from "@/components/landing/StoriesCarouselSection";
import PolicySpotlightSection from "@/components/landing/PolicySpotlightSection";


// Blue / violet / turquoise gradient family — one shade per slide
const panels = [
  { id: 0, label: "Home", color: "from-sky-200 to-blue-300", icon: Home, component: HeroPanel },
  { id: 1, label: "What is Compliance", color: "from-violet-200 to-indigo-300", icon: ScrollText, component: WhatIsCompliancePanel },
  { id: 2, label: "Tone at the Top", color: "from-blue-200 to-cyan-300", icon: Crown, component: LeadershipPanel },
  { id: 3, label: "Compliance Culture", color: "from-cyan-200 to-teal-300", icon: Users, component: InternalCompliancePanel },
  { id: 4, label: "Latest News", color: "from-indigo-200 to-violet-300", icon: Newspaper, component: EvolutionPanel },
  { id: 5, label: "Our Impact", color: "from-teal-200 to-sky-300", icon: BarChart3, component: StatsPanel },
  { id: 6, label: "Get Started", color: "from-violet-200 to-blue-300", icon: Rocket, component: CTAPanel },
];

const TOTAL_PANELS = panels.length;

const Index = () => {
  const [activePanel, setActivePanel] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [showDots, setShowDots] = useState(true);
  const activePanelRef = useRef(0);
  const heroRef = useRef<HTMLDivElement>(null);

  const handlePanelClick = useCallback((index: number) => {
    setActivePanel(index);
    activePanelRef.current = index;
  }, []);

  // Hide dot nav once the user scrolls past the hero (7-panel) section
  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setShowDots(entry.intersectionRatio > 0.4),
      { threshold: [0, 0.4, 1] }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Auto-cycle through panels every 4s; pause on hover
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      const next = (activePanelRef.current + 1) % TOTAL_PANELS;
      activePanelRef.current = next;
      setActivePanel(next);
    }, 4000);
    return () => clearInterval(interval);
  }, [isPaused]);

  // Figma export mode: ?figma=1 → render all 7 panels fully expanded, stacked vertically.
  // One html.to.design import captures the entire design in a single pass.
  const isFigmaMode =
    typeof window !== "undefined" &&
    new URLSearchParams(window.location.search).get("figma") === "1";

  if (isFigmaMode) {
    return (
      <div className="w-screen bg-background">
        <Navbar currentPanel={0} totalPanels={TOTAL_PANELS} onDotClick={() => {}} />
        <div className="pt-14">
          {panels.map((panel) => {
            const PanelComponent = panel.component;
            return (
              <section
                key={panel.id}
                className="w-full"
                style={{ height: "100vh", minHeight: 720 }}
              >
                <PanelComponent />
              </section>
            );
          })}
        </div>
        <RegulatorAcknowledgementsSection />
        <PolicySpotlightSection />
        <UpcomingEventsSection />
        <DepartmentLeaderboardSection />
        <ChampionOfTheMonthSection />
        <ComplianceChampionsSection />
        <EmployeeTestimonialsCarousel />
        <StoriesCarouselSection />
        <ResourcesSection />
      </div>
    );
  }

  return (
    <div className="min-h-screen w-screen flex flex-col bg-background">
      <Navbar currentPanel={activePanel} totalPanels={TOTAL_PANELS} onDotClick={handlePanelClick} />

      <div
        ref={heroRef}
        className="flex pt-14 h-screen min-h-0"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {panels.map((panel, i) => {
          const isActive = activePanel === i;
          const PanelComponent = panel.component;

          return (
            <div
              key={panel.id}
              className="relative h-full overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.65,0,0.35,1)] cursor-pointer"
              style={{
                flex: isActive ? 20 : 0,
                minWidth: isActive ? 0 : 56,
                width: isActive ? "auto" : 56,
              }}
              onMouseEnter={() => !isActive && handlePanelClick(i)}
              onClick={() => !isActive && handlePanelClick(i)}
            >
              {/* Collapsed strip label */}
              <div
                className={`absolute inset-0 z-20 flex flex-col items-center justify-center gap-3 py-4 bg-gradient-to-b ${panel.color} transition-opacity duration-500 ${
                  isActive ? "opacity-0 pointer-events-none" : "opacity-100 hover:brightness-105"
                }`}
              >
                {/* Icon badge */}
                <div className="p-2 rounded-full bg-white/90 backdrop-blur-sm shadow-sm">
                  <panel.icon className="w-4 h-4 text-foreground" strokeWidth={2.2} />
                </div>

                {/* Vertical full heading */}
                <span
                  className="text-foreground/90 font-bold text-[12px] tracking-[0.22em] uppercase whitespace-nowrap"
                  style={{ writingMode: "vertical-rl", textOrientation: "mixed", transform: "rotate(180deg)" }}
                >
                  {panel.label}
                </span>
              </div>

              {/* Expanded panel content */}
              <div
                className={`h-full w-full transition-opacity duration-500 ${
                  isActive ? "opacity-100" : "opacity-0"
                }`}
              >
                <div className="h-full w-full overflow-hidden">
                  <PanelComponent />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Floating dot navigation — only while hero (7 panels) is in view */}
      <div
        className={`fixed bottom-3 left-1/2 -translate-x-1/2 z-40 flex items-center gap-1 px-1.5 py-1 rounded-full bg-white/90 backdrop-blur-md border border-border/50 shadow-md transition-all duration-300 ${
          showDots ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-3 pointer-events-none"
        }`}
      >
        <button
          onClick={() => handlePanelClick((activePanel - 1 + TOTAL_PANELS) % TOTAL_PANELS)}
          className="h-5 w-5 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground text-foreground flex items-center justify-center transition-colors text-[10px] font-bold"
          aria-label="Previous panel"
        >
          ‹
        </button>
        <div className="flex items-center gap-1 px-1">
          {panels.map((panel, i) => {
            const isActive = activePanel === i;
            return (
              <button
                key={panel.id}
                onClick={() => handlePanelClick(i)}
                aria-label={`Go to ${panel.label}`}
                title={panel.label}
                className={`rounded-full transition-all duration-300 ${
                  isActive
                    ? "h-1.5 w-4 bg-primary"
                    : "h-1.5 w-1.5 bg-muted-foreground/30 hover:bg-muted-foreground/60"
                }`}
              />
            );
          })}
        </div>
        <button
          onClick={() => handlePanelClick((activePanel + 1) % TOTAL_PANELS)}
          className="h-5 w-5 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground text-foreground flex items-center justify-center transition-colors text-[10px] font-bold"
          aria-label="Next panel"
        >
          ›
        </button>
      </div>

      <RegulatorAcknowledgementsSection />
      <PolicySpotlightSection />
      <UpcomingEventsSection />
      <DepartmentLeaderboardSection />
      <ChampionOfTheMonthSection />
      <ComplianceChampionsSection />
      <EmployeeTestimonialsCarousel />
      <StoriesCarouselSection />
      <ResourcesSection />
      
    </div>
  );
};

export default Index;
