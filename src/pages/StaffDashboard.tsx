
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { SidebarProvider } from "@/components/ui/sidebar";
import { StaffSidebar } from "@/components/dashboard/StaffSidebar";
import { PurchaseManagement } from "@/components/dashboard/PurchaseManagement";
import { OrderManagerDashboard } from "@/components/dashboard/OrderManagerDashboard";
import { CustomerManagement } from "@/components/dashboard/CustomerManagement";
import { WebsiteManagerDashboard } from "@/components/dashboard/WebsiteManagerDashboard";
import { ProductManagement } from "@/components/dashboard/ProductManagement";
import { StaffDashboardHome } from "@/components/dashboard/StaffDashboardHome";

const StaffDashboard = () => {
  const [activeSection, setActiveSection] = useState('dashboard');
  const [staffRole, setStaffRole] = useState<string>('');
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is authenticated and get their role
    const token = localStorage.getItem('staff_token');
    const role = localStorage.getItem('staff_role');
    
    if (!token || !role) {
      // If no token or role, redirect to login
      navigate('/staff-login');
      return;
    }
    
    setStaffRole(role);
  }, [navigate]);

  const handleLogout = () => {
    // Clear any authentication tokens/session data here
    localStorage.removeItem('staff_token');
    localStorage.removeItem('staff_role');
    sessionStorage.clear();
    
    // Redirect to staff login
    navigate('/staff-login');
  };

  const renderContent = () => {
    switch (activeSection) {
      case 'dashboard':
        return <StaffDashboardHome role={staffRole} />;
      case 'products':
        return <ProductManagement />;
      case 'purchases':
        return <PurchaseManagement />;
      case 'orders':
        return <OrderManagerDashboard />;
      case 'customers':
        return <CustomerManagement />;
      case 'website':
        return <WebsiteManagerDashboard />;
      default:
        return <StaffDashboardHome role={staffRole} />;
    }
  };

  // Don't render anything if we don't have a role yet (still checking auth)
  if (!staffRole) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-white">
      <SidebarProvider>
        <div className="flex w-full">
          <StaffSidebar 
            activeSection={activeSection} 
            setActiveSection={setActiveSection}
            role={staffRole}
            onLogout={handleLogout}
          />
          <main className="flex-1 p-6 bg-gray-50">
            {renderContent()}
          </main>
        </div>
      </SidebarProvider>
    </div>
  );
};

export default StaffDashboard;
