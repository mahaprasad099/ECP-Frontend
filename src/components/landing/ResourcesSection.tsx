import { useState } from "react";
import {
  FileText,
  Download,
  BookOpen,
  Video,
  Headphones,
  GraduationCap,
  ExternalLink,
  Library,
  Play,
  Pause,
  X,
  Maximize2,
} from "lucide-react";
import resourcesHero from "@/assets/resources-hero.jpg";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

type Kind = "pdf" | "video" | "audio" | "course" | "portal";

interface Resource {
  icon: typeof FileText;
  title: string;
  type: string;
  tint: string;
  accent: string;
  kind: Kind;
  // playback metadata
  duration?: string;
  pages?: number;
  episodes?: number;
  preview?: string; // short body preview for PDF
}

const resources: Resource[] = [
  {
    icon: FileText,
    title: "Code of Conduct",
    type: "PDF · 2.4 MB",
    tint: "from-sky-100 to-blue-100",
    accent: "text-sky-700",
    kind: "pdf",
    pages: 48,
    preview:
      "MSIL Code of Conduct sets out the principles that guide every employee, partner and supplier. Every decision we take must reflect integrity, fairness and respect — for our customers, our colleagues and our communities. This code applies without exception across all four plants, our R&D centres and corporate offices.",
  },
  {
    icon: BookOpen,
    title: "Anti-Bribery Policy",
    type: "PDF · 1.1 MB",
    tint: "from-teal-100 to-cyan-100",
    accent: "text-teal-700",
    kind: "pdf",
    pages: 18,
    preview:
      "Maruti Suzuki has zero tolerance for bribery and corruption in any form. This policy explains what constitutes a bribe, how to handle gifts and hospitality, and how to escalate concerns through the Speak-Up channel — anonymously, if needed.",
  },
  {
    icon: Video,
    title: "Ethics e-Learning",
    type: "Course · 45 min",
    tint: "from-violet-100 to-purple-100",
    accent: "text-violet-700",
    kind: "video",
    duration: "45:00",
  },
  {
    icon: Headphones,
    title: "Speak-Up Podcast",
    type: "Audio · 12 ep",
    tint: "from-amber-100 to-orange-100",
    accent: "text-amber-700",
    kind: "audio",
    episodes: 12,
    duration: "22:14",
  },
  {
    icon: GraduationCap,
    title: "Manager Toolkit",
    type: "Course · 6 modules",
    tint: "from-indigo-100 to-blue-100",
    accent: "text-indigo-700",
    kind: "course",
  },
  {
    icon: Library,
    title: "Regulatory Library",
    type: "Web Portal",
    tint: "from-rose-100 to-pink-100",
    accent: "text-rose-700",
    kind: "portal",
  },
];

const PlayablePreview = ({ resource }: { resource: Resource }) => {
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(28);

  if (resource.kind === "pdf") {
    return (
      <div className="space-y-3">
        <div className="rounded-xl border border-border/60 bg-muted/30 p-6 shadow-inner max-h-[55vh] overflow-y-auto">
          <div className="bg-white rounded-lg shadow-md p-6 mx-auto max-w-md">
            <div className={`inline-flex p-2 rounded-lg bg-gradient-to-br ${resource.tint} ${resource.accent} mb-3`}>
              <FileText className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-bold text-foreground mb-1">{resource.title}</h3>
            <p className="text-[10px] uppercase tracking-wider font-bold text-muted-foreground mb-4">
              Maruti Suzuki India Limited · Confidential
            </p>
            <p className="text-sm text-foreground leading-relaxed">{resource.preview}</p>
            <div className="mt-4 pt-3 border-t border-border/40 flex items-center justify-between text-[11px] text-muted-foreground">
              <span>Page 1 of {resource.pages}</span>
              <span>v {new Date().getFullYear()}.1</span>
            </div>
          </div>
        </div>
        <div className="flex gap-2">
          <Button className="flex-1" size="sm">
            <Download className="h-3.5 w-3.5 mr-1.5" /> Download PDF
          </Button>
          <Button variant="outline" size="sm">
            <Maximize2 className="h-3.5 w-3.5 mr-1.5" /> Open in viewer
          </Button>
        </div>
      </div>
    );
  }

  if (resource.kind === "video") {
    return (
      <div className="space-y-3">
        <div className="relative aspect-video rounded-xl overflow-hidden bg-gradient-to-br from-violet-900 via-indigo-900 to-purple-900 shadow-lg">
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: `url(${resourcesHero})`, backgroundSize: "cover" }} />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          <button
            onClick={() => setPlaying((p) => !p)}
            className="absolute inset-0 flex items-center justify-center group"
          >
            <div className="h-16 w-16 rounded-full bg-white/95 group-hover:scale-110 transition-transform shadow-xl flex items-center justify-center text-violet-700">
              {playing ? <Pause className="h-7 w-7" /> : <Play className="h-7 w-7 ml-1" />}
            </div>
          </button>
          <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
            <div className="text-sm font-bold mb-2">{resource.title}</div>
            <div className="h-1 bg-white/30 rounded-full overflow-hidden">
              <div
                className="h-full bg-violet-400 transition-all"
                style={{ width: `${playing ? progress + 1 : progress}%` }}
              />
            </div>
            <div className="flex justify-between text-[11px] text-white/80 mt-1">
              <span>12:34</span>
              <span>{resource.duration}</span>
            </div>
          </div>
        </div>
        <p className="text-xs text-muted-foreground text-center">
          Scenario-based ethics learning · 4 modules · auto-saves your progress
        </p>
      </div>
    );
  }

  if (resource.kind === "audio") {
    return (
      <div className="space-y-3">
        <div className="rounded-xl bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200/60 p-6 shadow-md">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center shadow-lg shrink-0">
              <Headphones className="h-7 w-7 text-white" />
            </div>
            <div className="min-w-0">
              <div className="text-[10px] uppercase tracking-wider font-bold text-amber-700">Episode 8</div>
              <h3 className="font-bold text-base text-foreground truncate">Why Speak-Up matters more than ever</h3>
              <p className="text-xs text-muted-foreground">With Manjaree Chowdhary · Group GC</p>
            </div>
          </div>

          {/* Waveform mock */}
          <div className="flex items-center gap-0.5 h-12 mb-3 px-1">
            {Array.from({ length: 60 }).map((_, i) => {
              const h = 20 + ((i * 37) % 80);
              const passed = i / 60 < progress / 100;
              return (
                <div
                  key={i}
                  className={`flex-1 rounded-full ${passed ? "bg-amber-500" : "bg-amber-200"}`}
                  style={{ height: `${h}%` }}
                />
              );
            })}
          </div>

          <div className="flex items-center justify-between text-[11px] text-muted-foreground mb-3">
            <span>06:12</span>
            <span>{resource.duration}</span>
          </div>

          <div className="flex items-center justify-center gap-3">
            <Button variant="outline" size="sm" onClick={() => setProgress(Math.max(0, progress - 10))}>
              -10s
            </Button>
            <Button
              size="lg"
              onClick={() => setPlaying((p) => !p)}
              className="h-12 w-12 rounded-full bg-amber-600 hover:bg-amber-700 p-0"
            >
              {playing ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5 ml-0.5" />}
            </Button>
            <Button variant="outline" size="sm" onClick={() => setProgress(Math.min(100, progress + 10))}>
              +10s
            </Button>
          </div>
        </div>
        <p className="text-xs text-muted-foreground text-center">{resource.episodes} episodes available · new every other Monday</p>
      </div>
    );
  }

  if (resource.kind === "course") {
    const modules = [
      "Setting the tone for your team",
      "Difficult conversations on conduct",
      "Spotting red flags in vendor onboarding",
      "Investigations: what managers must (and mustn't) do",
      "Building a Speak-Up culture",
      "Year-end ethics review checklist",
    ];
    return (
      <div className="space-y-3">
        <div className="rounded-xl bg-gradient-to-br from-indigo-50 to-blue-50 border border-indigo-200/60 p-5 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-bold text-foreground">Course modules</h3>
            <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-indigo-600 text-white">
              2 of 6 done
            </span>
          </div>
          <ol className="space-y-2">
            {modules.map((m, i) => {
              const done = i < 2;
              const current = i === 2;
              return (
                <li
                  key={i}
                  className={`flex items-center gap-3 p-2.5 rounded-lg border ${
                    current ? "border-indigo-400 bg-white shadow-sm" : "border-border/40 bg-white/60"
                  }`}
                >
                  <div
                    className={`h-7 w-7 rounded-full flex items-center justify-center text-[11px] font-bold shrink-0 ${
                      done
                        ? "bg-emerald-500 text-white"
                        : current
                        ? "bg-indigo-600 text-white"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {done ? "✓" : i + 1}
                  </div>
                  <span className={`text-sm flex-1 ${done ? "text-muted-foreground line-through" : "text-foreground"}`}>{m}</span>
                  {current && <Play className="h-4 w-4 text-indigo-600" />}
                </li>
              );
            })}
          </ol>
        </div>
        <Button className="w-full bg-indigo-600 hover:bg-indigo-700">
          <Play className="h-3.5 w-3.5 mr-1.5" /> Continue module 3
        </Button>
      </div>
    );
  }

  // portal
  return (
    <div className="space-y-3">
      <div className="rounded-xl bg-gradient-to-br from-rose-50 to-pink-50 border border-rose-200/60 p-6 text-center shadow-sm">
        <div className="inline-flex p-3 rounded-2xl bg-rose-600 text-white mb-3 shadow-md">
          <Library className="h-6 w-6" />
        </div>
        <h3 className="font-bold text-foreground mb-1">Regulatory Library</h3>
        <p className="text-sm text-muted-foreground mb-4">
          240+ live policies, 11 languages, full text-search and bookmarks. Hosted on the MSIL intranet.
        </p>
        <Button className="bg-rose-600 hover:bg-rose-700">
          <ExternalLink className="h-3.5 w-3.5 mr-1.5" /> Launch Portal
        </Button>
      </div>
    </div>
  );
};

const ResourcesSection = () => {
  const [open, setOpen] = useState<Resource | null>(null);

  return (
    <section className="relative w-full bg-gradient-to-br from-background via-amber-50/20 to-sky-50/40 py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden mb-10 shadow-xl">
          <img src={resourcesHero} alt="Compliance resource library" width={1280} height={512} loading="lazy" className="w-full h-48 md:h-60 object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-amber-900/80 via-sky-800/60 to-teal-700/40" />
          <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-12">
            <span className="inline-flex items-center gap-1.5 w-fit px-3 py-1 rounded-full text-xs font-semibold bg-white/15 text-white border border-white/30 backdrop-blur mb-3">
              <Library className="h-3 w-3" /> Knowledge Hub
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white max-w-2xl leading-tight">
              Resources & <span className="text-amber-200">Downloads</span>
            </h2>
            <p className="text-sm md:text-base text-white/85 mt-3 max-w-xl">
              Tap any tile to play, preview or open the resource — no download needed.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {resources.map((r, i) => {
            const isPlayable = r.kind === "video" || r.kind === "audio";
            return (
              <button
                key={i}
                onClick={() => setOpen(r)}
                className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${r.tint} border border-white/60 p-4 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer text-left focus:outline-none focus:ring-2 focus:ring-primary/40`}
              >
                <div className={`inline-flex p-2.5 rounded-xl bg-white/80 backdrop-blur ${r.accent} shadow-sm mb-3 relative`}>
                  <r.icon className="h-5 w-5" />
                  {isPlayable && (
                    <span className="absolute -bottom-1 -right-1 h-5 w-5 rounded-full bg-white shadow flex items-center justify-center">
                      <Play className={`h-2.5 w-2.5 ${r.accent} ml-0.5`} fill="currentColor" />
                    </span>
                  )}
                </div>
                <h3 className="font-bold text-foreground text-sm mb-1 leading-tight">{r.title}</h3>
                <p className={`text-[10px] font-semibold uppercase tracking-wider ${r.accent} mb-3`}>{r.type}</p>
                <div className={`inline-flex items-center gap-1 text-xs font-bold ${r.accent} group-hover:gap-2 transition-all`}>
                  {isPlayable ? <Play className="h-3 w-3" fill="currentColor" /> : <Download className="h-3 w-3" />}
                  {isPlayable ? "Play" : "Open"}
                  <ExternalLink className="h-2.5 w-2.5 opacity-60" />
                </div>
              </button>
            );
          })}
        </div>

        {/* Quick stats strip */}
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { k: "Policies Online", v: "240+" },
            { k: "Training Hours / Year", v: "1.2M" },
            { k: "Languages Supported", v: "11" },
            { k: "Avg. Helpdesk Response", v: "< 2 hrs" },
          ].map((s, i) => (
            <div key={i} className="rounded-xl bg-white/70 backdrop-blur border border-border/40 p-4 text-center">
              <div className="text-2xl font-extrabold text-primary">{s.v}</div>
              <div className="text-[11px] uppercase tracking-wider text-muted-foreground mt-1 font-semibold">{s.k}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Playable / preview modal */}
      <Dialog open={!!open} onOpenChange={(v) => !v && setOpen(null)}>
        <DialogContent className="max-w-2xl">
          {open && (
            <>
              <DialogHeader>
                <DialogTitle className="flex items-center gap-2">
                  <span className={`inline-flex p-1.5 rounded-lg bg-gradient-to-br ${open.tint} ${open.accent}`}>
                    <open.icon className="h-4 w-4" />
                  </span>
                  {open.title}
                </DialogTitle>
                <DialogDescription>{open.type}</DialogDescription>
              </DialogHeader>
              <PlayablePreview resource={open} />
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ResourcesSection;
