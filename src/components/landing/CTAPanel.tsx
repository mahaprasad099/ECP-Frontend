import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { LogIn, ArrowRight } from "lucide-react";


const CTAPanel = () => {
  const navigate = useNavigate();

  return (
    <section className="relative w-full h-full flex items-start justify-center pt-8 overflow-hidden bg-gradient-to-br from-emerald-50/30 via-background to-sky-50/20">
      
      {Array.from({ length: 8 }).map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full animate-float opacity-5"
          style={{
            width: `${40 + Math.random() * 60}px`,
            height: `${40 + Math.random() * 60}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background: [
              "hsl(205 78% 65%)",
              "hsl(174 60% 55%)",
              "hsl(16 80% 70%)",
              "hsl(38 92% 65%)",
            ][i % 4],
            animationDelay: `${i * 0.5}s`,
            animationDuration: `${3 + Math.random() * 3}s`,
          }}
        />
      ))}

      <div className="relative z-10 text-center px-8 max-w-2xl">
        <div className="mb-8 flex justify-center">
          <svg viewBox="0 0 100 110" className="w-24 h-28 animate-shield-pulse">
            <path d="M50 5 L85 25 L85 60 C85 85 67 100 50 105 C33 100 15 85 15 60 L15 25 Z" fill="hsl(205 78% 65%)" opacity="0.1" />
            <path d="M50 5 L85 25 L85 60 C85 85 67 100 50 105 C33 100 15 85 15 60 L15 25 Z" fill="none" stroke="hsl(205 78% 65%)" strokeWidth="2" className="animate-draw-path" />
            <path d="M35 55 L45 65 L65 42" fill="none" stroke="hsl(38 92% 65%)" strokeWidth="3.5" strokeLinecap="round" className="animate-checkmark-draw" style={{ animationDelay: "1s" }} />
          </svg>
        </div>

        <h2 className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-primary via-teal to-coral bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-shift">
          Join the Compliance Journey
        </h2>

        <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
          Be part of a culture that drives ethical excellence. Access your compliance dashboard, track policies, and stay ahead of regulations.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            onClick={() => navigate("/home")}
            className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6 gap-2 animate-pulse-glow"
          >
            <LogIn className="h-5 w-5" />
            Join Compliance Journey
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-primary/20 text-primary hover:bg-primary/5 text-lg px-8 py-6 gap-2"
          >
            Learn More
            <ArrowRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTAPanel;
