import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Shield, LogIn } from "lucide-react";
import marutiLogo from "@/assets/maruti-suzuki-logo.png";

interface NavbarProps {
  currentPanel: number;
  totalPanels: number;
  onDotClick: (index: number) => void;
}

const Navbar = ({ currentPanel, totalPanels, onDotClick }: NavbarProps) => {
  const navigate = useNavigate();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-5 h-14 bg-white border-b border-border/50 shadow-sm">
      <div className="flex items-center gap-2">
        <div className="relative">
          <Shield className="h-6 w-6 text-primary animate-shield-pulse" />
          <div className="absolute -top-0.5 -right-0.5 h-2 w-2 bg-coral rounded-full animate-bounce-subtle" />
        </div>
        <span className="text-base font-bold tracking-tight text-foreground">
          Comply<span className="text-primary">Sphere</span>
        </span>
      </div>

      <div className="absolute left-1/2 -translate-x-1/2 flex items-center">
        <img src={marutiLogo} alt="Maruti Suzuki" className="h-9 md:h-10 object-contain" />
      </div>

      <Button
        onClick={() => navigate("/home")}
        className="bg-primary text-primary-foreground hover:bg-primary/90 gap-1.5 h-8 px-3 text-xs whitespace-nowrap"
        size="sm"
      >
        <LogIn className="h-3.5 w-3.5" />
        Join Compliance Journey
      </Button>
    </nav>
  );
};

export default Navbar;
