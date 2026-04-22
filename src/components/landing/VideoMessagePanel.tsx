import { Play } from "lucide-react";

interface VideoMessagePanelProps {
  name: string;
  title: string;
  initials: string;
  gradientFrom: string;
  gradientTo: string;
  accentColor: string;
  shieldSvg?: boolean;
}

const ComplianceShield = () => (
  <svg width="200" height="200" viewBox="0 0 200 200" className="animate-shield-pulse absolute -right-4 -bottom-4 opacity-20">
    <path
      d="M100 20 L160 50 L160 110 C160 150 130 180 100 190 C70 180 40 150 40 110 L40 50 Z"
      fill="none"
      stroke="hsl(174 60% 42%)"
      strokeWidth="3"
      className="animate-draw-path"
    />
    <path
      d="M75 100 L92 118 L130 78"
      fill="none"
      stroke="hsl(38 92% 55%)"
      strokeWidth="4"
      strokeLinecap="round"
      className="animate-checkmark-draw"
      style={{ animationDelay: "1s" }}
    />
  </svg>
);

const VideoMessagePanel = ({
  name,
  title,
  initials,
  gradientFrom,
  gradientTo,
  accentColor,
  shieldSvg,
}: VideoMessagePanelProps) => {
  return (
    <section className="relative w-screen h-screen flex-shrink-0 scroll-snap-panel flex items-center justify-center overflow-hidden"
      style={{ background: `linear-gradient(135deg, ${gradientFrom}, ${gradientTo})` }}
    >
      {/* Floating decorations */}
      <div className="absolute top-20 left-20 w-32 h-32 rounded-full blur-3xl animate-float" style={{ background: accentColor, opacity: 0.1 }} />
      <div className="absolute bottom-20 right-20 w-48 h-48 rounded-full blur-3xl animate-float-slow" style={{ background: accentColor, opacity: 0.08 }} />

      <div className="relative z-10 max-w-lg w-full mx-8">
        <div className="relative">
          {/* Video card */}
          <div className="bg-card/90 backdrop-blur-md rounded-2xl overflow-hidden border-2 animate-border-glow shadow-2xl">
            {/* Video area */}
            <div className="relative aspect-video bg-gradient-to-br from-foreground/5 to-foreground/10 flex items-center justify-center">
              {/* Play button */}
              <button className="relative group">
                <div className="w-20 h-20 rounded-full bg-primary/90 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300 animate-pulse-glow">
                  <Play className="h-8 w-8 text-primary-foreground ml-1" />
                </div>
                <div className="absolute inset-0 w-20 h-20 rounded-full bg-primary/30 animate-ping" style={{ animationDuration: "2s" }} />
              </button>

              {/* Duration badge */}
              <div className="absolute bottom-3 right-3 px-2 py-0.5 bg-foreground/80 text-background text-xs rounded font-mono">
                03:24
              </div>
            </div>

            {/* Info bar */}
            <div className="p-5 flex items-center gap-4">
              <div className="w-14 h-14 rounded-full flex items-center justify-center text-lg font-bold text-primary-foreground flex-shrink-0" style={{ background: accentColor }}>
                {initials}
              </div>
              <div>
                <h3 className="font-bold text-foreground text-lg">{name}</h3>
                <p className="text-sm text-muted-foreground">{title}</p>
              </div>
            </div>
          </div>

          {shieldSvg && <ComplianceShield />}
        </div>
      </div>
    </section>
  );
};

export default VideoMessagePanel;
