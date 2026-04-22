import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { HomeSidebar } from "@/components/dashboard/HomeSidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, FileText, CheckCircle, AlertTriangle, TrendingUp, Users } from "lucide-react";

const metrics = [
  { title: "Active Policies", value: "2,431", change: "+12%", icon: FileText, color: "text-primary", bg: "bg-primary/10" },
  { title: "Audit Score", value: "98.2%", change: "+2.1%", icon: CheckCircle, color: "text-teal", bg: "bg-teal/10" },
  { title: "Compliance Rate", value: "99.1%", change: "+0.5%", icon: Shield, color: "text-amber", bg: "bg-amber/10" },
  { title: "Open Alerts", value: "7", change: "-3", icon: AlertTriangle, color: "text-coral", bg: "bg-coral/10" },
  { title: "Monthly Reviews", value: "142", change: "+18", icon: TrendingUp, color: "text-purple", bg: "bg-purple/10" },
  { title: "Trained Staff", value: "15,240", change: "+520", icon: Users, color: "text-ocean", bg: "bg-ocean/10" },
];

const Home = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <HomeSidebar />
        <div className="flex-1 flex flex-col">
          <header className="h-14 flex items-center border-b border-border px-4 bg-background/80 backdrop-blur-md">
            <SidebarTrigger className="mr-4" />
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-primary" />
              <span className="font-semibold text-foreground">AutoComply Dashboard</span>
            </div>
          </header>

          <main className="flex-1 p-6 md:p-8 bg-muted/30">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-foreground mb-2">Welcome back! 👋</h1>
              <p className="text-muted-foreground">Here's your compliance overview for today.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {metrics.map((m, i) => (
                <Card key={i} className="border border-border/50 hover:shadow-lg transition-shadow duration-300">
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-sm font-medium text-muted-foreground">{m.title}</CardTitle>
                    <div className={`p-2 rounded-lg ${m.bg}`}>
                      <m.icon className={`h-4 w-4 ${m.color}`} />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-foreground">{m.value}</div>
                    <p className="text-xs text-teal mt-1">{m.change} from last month</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Home;
