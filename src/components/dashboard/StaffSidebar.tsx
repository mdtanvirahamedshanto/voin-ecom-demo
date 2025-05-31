
import { 
  LayoutDashboard, 
  Package, 
  ShoppingCart, 
  ClipboardList, 
  Users, 
  Globe, 
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
import { Badge } from "@/components/ui/badge";

interface StaffSidebarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
  role: string;
  onLogout: () => void;
}

const getMenuItemsForRole = (role: string) => {
  const baseItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard }
  ];

  switch (role) {
    case 'Purchase Manager':
      return [
        ...baseItems,
        { id: 'products', label: 'Product Management', icon: Package },
        { id: 'purchases', label: 'Purchase Management', icon: ShoppingCart },
      ];
    case 'Order Manager':
      return [
        ...baseItems,
        { id: 'orders', label: 'Order Management', icon: ClipboardList },
        { id: 'customers', label: 'Customer Management', icon: Users },
      ];
    case 'Website Manager':
      return [
        ...baseItems,
        { id: 'products', label: 'Product Management', icon: Package },
        { id: 'website', label: 'Website Management', icon: Globe },
      ];
    default:
      return baseItems;
  }
};

const getRoleBadgeColor = (role: string) => {
  switch (role) {
    case 'Purchase Manager':
      return 'bg-blue-100 text-blue-800';
    case 'Order Manager':
      return 'bg-green-100 text-green-800';
    case 'Website Manager':
      return 'bg-purple-100 text-purple-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

export const StaffSidebar = ({ activeSection, setActiveSection, role, onLogout }: StaffSidebarProps) => {
  const menuItems = getMenuItemsForRole(role);

  return (
    <Sidebar className="border-r border-gray-200">
      <SidebarHeader className="p-6 border-b border-gray-200">
        <h1 className="text-2xl font-bold text-black">VOIN</h1>
        <p className="text-sm text-gray-600">Staff Dashboard</p>
        <Badge className={`mt-2 ${getRoleBadgeColor(role)}`}>
          {role}
        </Badge>
      </SidebarHeader>
      
      <SidebarContent className="p-4">
        <SidebarMenu>
          {menuItems.map((item) => (
            <SidebarMenuItem key={item.id}>
              <SidebarMenuButton
                onClick={() => setActiveSection(item.id)}
                className={`w-full justify-start p-3 rounded-lg transition-colors ${
                  activeSection === item.id
                    ? 'bg-gray-800 text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <item.icon className="h-5 w-5 mr-3" />
                <span>{item.label}</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
          
          <SidebarMenuItem className="mt-8">
            <SidebarMenuButton 
              onClick={onLogout}
              className="w-full justify-start p-3 rounded-lg text-red-600 hover:bg-red-50"
            >
              <LogOut className="h-5 w-5 mr-3" />
              <span>Logout</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  );
};
