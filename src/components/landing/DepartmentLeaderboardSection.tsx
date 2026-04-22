import { Trophy, Medal, Award, Flame, Zap, Users, ChevronRight } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const podium = [
  { rank: 2, dept: "Procurement", completed: 414, employees: 420, color: "from-slate-300 to-slate-400", text: "text-slate-700", icon: Medal, label: "Silver" },
  { rank: 1, dept: "Legal & Compliance", completed: 180, employees: 180, color: "from-amber-300 to-yellow-400", text: "text-amber-800", icon: Trophy, label: "Gold" },
  { rank: 3, dept: "Human Resources", completed: 309, employees: 320, color: "from-orange-300 to-amber-400", text: "text-orange-800", icon: Award, label: "Bronze" },
];

const leaderboard = [
  { rank: 1, dept: "Legal & Compliance", completed: 180, employees: 180, badge: "🥇" },
  { rank: 2, dept: "Procurement", completed: 414, employees: 420, badge: "🔥" },
  { rank: 3, dept: "Human Resources", completed: 309, employees: 320, badge: "🔥" },
  { rank: 4, dept: "Finance & Audit", completed: 264, employees: 280, badge: "⚡" },
  { rank: 5, dept: "R&D — Rohtak", completed: 1138, employees: 1240, badge: "⚡" },
  { rank: 6, dept: "Manufacturing — Manesar", completed: 7518, employees: 8400, badge: "—" },
  { rank: 7, dept: "Sales & Marketing", completed: 1605, employees: 1860, badge: "—" },
  { rank: 8, dept: "Logistics", completed: 525, employees: 640, badge: "—" },
];

const DepartmentLeaderboardSection = () => {
  return (
    <section className="relative w-full bg-gradient-to-br from-background via-amber-50/30 to-teal-50/30 py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold bg-amber-100 text-amber-700 border border-amber-200 mb-3">
            <Trophy className="h-3 w-3" /> Training League · Q2 FY26
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
            Department <span className="text-amber-600">Leaderboard</span>
          </h2>
          <p className="text-sm md:text-base text-muted-foreground mt-3 max-w-2xl mx-auto">
            Compliance training completion across MSIL — celebrating every department that brought their people along.
          </p>
        </div>

        {/* Podium */}
        <div className="grid grid-cols-3 gap-3 md:gap-5 mb-10 items-end">
          {podium.map((p, i) => {
            const Icon = p.icon;
            const heights = [120, 160, 100];
            return (
              <div key={i} className="flex flex-col items-center">
                <div className={`mb-3 inline-flex items-center justify-center h-12 w-12 md:h-14 md:w-14 rounded-full bg-gradient-to-br ${p.color} shadow-lg`}>
                  <Icon className={`h-5 w-5 md:h-6 md:w-6 ${p.text}`} strokeWidth={2.5} />
                </div>
                <div
                  className={`w-full bg-gradient-to-b ${p.color} rounded-t-2xl shadow-md flex flex-col items-center justify-start pt-3 px-2 text-center`}
                  style={{ height: heights[i] }}
                >
                  <div className={`text-2xl md:text-3xl font-extrabold ${p.text}`}>#{p.rank}</div>
                  <div className={`text-[10px] md:text-xs font-bold uppercase tracking-wider ${p.text} opacity-80`}>{p.label}</div>
                </div>
                <div className="w-full bg-card border-x border-b border-border/60 rounded-b-2xl px-2 md:px-3 py-3 text-center shadow-sm">
                  <div className="font-bold text-xs md:text-sm text-foreground leading-tight line-clamp-2 min-h-[32px]">{p.dept}</div>
                  <div className={`text-lg md:text-xl font-extrabold ${p.text} mt-1`}>{p.completed.toLocaleString()}</div>
                  <div className="text-[9px] md:text-[10px] uppercase tracking-wider text-muted-foreground font-semibold inline-flex items-center gap-1 mt-0.5">
                    <Users className="h-2.5 w-2.5" /> completed
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Compact clickable preview */}
        <Dialog>
          <DialogTrigger asChild>
            <button className="group w-full max-w-md mx-auto flex items-center justify-between gap-3 rounded-full border border-border/60 bg-card/80 backdrop-blur shadow-sm hover:shadow-md hover:border-amber-300 transition-all px-4 py-2.5">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold text-foreground">
                <Flame className="h-3.5 w-3.5 text-amber-600" /> Full Standings
              </span>
              <span className="flex -space-x-1">
                {leaderboard.slice(0, 3).map((r) => (
                  <span key={r.rank} className="text-sm">{r.badge}</span>
                ))}
              </span>
              <span className="inline-flex items-center gap-1 text-[10px] font-semibold uppercase tracking-wider text-amber-700 group-hover:text-amber-800">
                View all <ChevronRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
              </span>
            </button>
          </DialogTrigger>
          <DialogContent className="max-w-lg p-0 overflow-hidden">
            <DialogHeader className="px-5 py-4 bg-gradient-to-r from-amber-50 to-teal-50 border-b border-border/60">
              <DialogTitle className="inline-flex items-center gap-2 text-base">
                <Flame className="h-4 w-4 text-amber-600" /> Full Standings
              </DialogTitle>
              <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Updated daily</p>
            </DialogHeader>
            <div className="divide-y divide-border/40 max-h-[60vh] overflow-y-auto">
              {leaderboard.map((row) => (
                <div key={row.rank} className="grid grid-cols-12 gap-2 items-center px-5 py-2.5 hover:bg-muted/30 transition-colors">
                  <div className="col-span-1 flex items-center gap-1.5">
                    <span className="text-sm font-extrabold text-foreground">{row.rank}</span>
                    <span className="text-sm">{row.badge}</span>
                  </div>
                  <div className="col-span-7 md:col-span-8 min-w-0">
                    <div className="font-semibold text-sm text-foreground truncate leading-tight">{row.dept}</div>
                    <div className="text-[10px] text-muted-foreground inline-flex items-center gap-1">
                      <Users className="h-2.5 w-2.5" /> {row.employees.toLocaleString()} employees
                    </div>
                  </div>
                  <div className="col-span-4 md:col-span-3 text-right">
                    <div className="font-extrabold text-sm text-foreground leading-tight">{row.completed.toLocaleString()}</div>
                    <div className="text-[9px] uppercase tracking-wider text-muted-foreground font-semibold">completed</div>
                  </div>
                </div>
              ))}
            </div>
          </DialogContent>
        </Dialog>

        <div className="mt-4 flex items-center justify-center gap-1.5 text-[11px] text-muted-foreground">
          <Zap className="h-3 w-3 text-amber-500" />
          New trainings unlock every Monday — bring your team along.
        </div>
      </div>
    </section>
  );
};

export default DepartmentLeaderboardSection;
