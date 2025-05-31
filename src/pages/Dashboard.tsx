
import { useState } from 'react';
import { Sidebar, SidebarContent, SidebarProvider } from "@/components/ui/sidebar";
import { DashboardSidebar } from "@/components/dashboard/DashboardSidebar";
import { DashboardHome } from "@/components/dashboard/DashboardHome";
import { ProductManagement } from "@/components/dashboard/ProductManagement";
import { PurchaseManagement } from "@/components/dashboard/PurchaseManagement";
import { OrderManagement } from "@/components/dashboard/OrderManagement";
import { CustomerManagement } from "@/components/dashboard/CustomerManagement";
import { Reports } from "@/components/dashboard/Reports";
import { RolesPermissions } from "@/components/dashboard/RolesPermissions";
import { WebsiteManagement } from "@/components/dashboard/WebsiteManagement";
import { Settings } from "@/components/dashboard/Settings";

const Dashboard = () => {
  const [activeSection, setActiveSection] = useState('dashboard');

  const renderContent = () => {
    switch (activeSection) {
      case 'dashboard':
        return <DashboardHome />;
      case 'products':
        return <ProductManagement />;
      case 'purchases':
        return <PurchaseManagement />;
      case 'orders':
        return <OrderManagement />;
      case 'customers':
        return <CustomerManagement />;
      case 'reports':
        return <Reports />;
      case 'roles':
        return <RolesPermissions />;
      case 'website':
        return <WebsiteManagement />;
      case 'settings':
        return <Settings />;
      default:
        return <DashboardHome />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <SidebarProvider>
        <div className="flex w-full">
          <DashboardSidebar 
            activeSection={activeSection} 
            setActiveSection={setActiveSection} 
          />
          <main className="flex-1 p-6 bg-gray-50">
            {renderContent()}
          </main>
        </div>
      </SidebarProvider>
    </div>
  );
};

export default Dashboard;
