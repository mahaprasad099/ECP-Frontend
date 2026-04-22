import {
  LayoutDashboard,
  FileText,
  Shield,
  Users,
  Settings,
  BarChart3,
  Bell,
  LogOut,
} from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
  useSidebar,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";

const menuItems = [
  { title: "Dashboard", url: "/home", icon: LayoutDashboard },
  { title: "Policies", url: "/home/policies", icon: FileText },
  { title: "Audits", url: "/home/audits", icon: Shield },
  { title: "Training", url: "/home/training", icon: Users },
  { title: "Reports", url: "/home/reports", icon: BarChart3 },
  { title: "Alerts", url: "/home/alerts", icon: Bell },
  { title: "Settings", url: "/home/settings", icon: Settings },
];

export function HomeSidebar() {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <Sidebar collapsible="icon">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>
            {!collapsed && (
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-sidebar-primary" />
                <span>AutoComply</span>
              </div>
            )}
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink
                      to={item.url}
                      end
                      className="hover:bg-sidebar-accent/50"
                      activeClassName="bg-sidebar-accent text-sidebar-primary font-medium"
                    >
                      <item.icon className="mr-2 h-4 w-4" />
                      {!collapsed && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <Button
          variant="ghost"
          className="w-full justify-start text-sidebar-foreground/60 hover:text-sidebar-foreground"
          onClick={() => navigate("/")}
        >
          <LogOut className="mr-2 h-4 w-4" />
          {!collapsed && <span>Back to Home</span>}
        </Button>
      </SidebarFooter>
    </Sidebar>
  );
}
