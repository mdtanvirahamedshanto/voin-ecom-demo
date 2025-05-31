
import { 
  LayoutDashboard, 
  Package, 
  ShoppingCart, 
  ClipboardList, 
  Users, 
  BarChart3, 
  Shield, 
  Globe, 
  Settings, 
  LogOut 
} from 'lucide-react';
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

interface DashboardSidebarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const menuItems = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { id: 'products', label: 'Product Management', icon: Package },
  { id: 'purchases', label: 'Purchase Management', icon: ShoppingCart },
  { id: 'orders', label: 'Order Management', icon: ClipboardList },
  { id: 'customers', label: 'Customer Management', icon: Users },
  { id: 'reports', label: 'Reports', icon: BarChart3 },
  { id: 'roles', label: 'Roles & Permissions', icon: Shield },
  { id: 'website', label: 'Website Management', icon: Globe },
  { id: 'settings', label: 'Settings', icon: Settings },
];

export const DashboardSidebar = ({ activeSection, setActiveSection }: DashboardSidebarProps) => {
  return (
    <Sidebar className="border-r border-gray-200">
      <SidebarHeader className="p-6 border-b border-gray-200">
        <h1 className="text-2xl font-bold text-black">VOIN</h1>
        <p className="text-sm text-gray-600">Admin Dashboard</p>
      </SidebarHeader>
      
      <SidebarContent className="p-4">
        <SidebarMenu>
          {menuItems.map((item) => (
            <SidebarMenuItem key={item.id}>
              <SidebarMenuButton
                onClick={() => setActiveSection(item.id)}
                className={`w-full justify-start p-3 rounded-lg transition-colors ${
                  activeSection === item.id
                    ? 'bg-black text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <item.icon className="h-5 w-5 mr-3" />
                <span>{item.label}</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
          
          <SidebarMenuItem className="mt-8">
            <SidebarMenuButton className="w-full justify-start p-3 rounded-lg text-red-600 hover:bg-red-50">
              <LogOut className="h-5 w-5 mr-3" />
              <span>Logout</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  );
};
