
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Package, ShoppingCart, ClipboardList, Users, Globe, TrendingUp } from 'lucide-react';

interface StaffDashboardHomeProps {
  role: string;
}

export const StaffDashboardHome = ({ role }: StaffDashboardHomeProps) => {
  const getRoleSpecificData = () => {
    switch (role) {
      case 'Purchase Manager':
        return {
          title: 'Purchase Management Overview',
          cards: [
            { title: 'Products in Stock', value: '156', icon: Package, color: 'text-blue-600' },
            { title: 'Low Stock Items', value: '12', icon: Package, color: 'text-red-600' },
            { title: 'Suppliers', value: '8', icon: Users, color: 'text-green-600' },
            { title: 'Pending Orders', value: '5', icon: ShoppingCart, color: 'text-yellow-600' }
          ],
          recentActivities: [
            'Added 50 units of Bold Statement T-Shirt',
            'Updated supplier information for Urban Hoodies',
            'Created purchase order for Winter Collection',
            'Received shipment from Supplier ABC'
          ]
        };
      case 'Order Manager':
        return {
          title: 'Order Management Overview',
          cards: [
            { title: 'Total Orders Today', value: '23', icon: ClipboardList, color: 'text-blue-600' },
            { title: 'Pending Orders', value: '8', icon: ClipboardList, color: 'text-yellow-600' },
            { title: 'Completed Orders', value: '15', icon: ClipboardList, color: 'text-green-600' },
            { title: 'Total Customers', value: '124', icon: Users, color: 'text-purple-600' }
          ],
          recentActivities: [
            'Order #VOIN001 marked as delivered',
            'Updated tracking for Order #VOIN002',
            'Customer Rahman Ahmed placed new order',
            'SMS notification sent to customer'
          ]
        };
      case 'Website Manager':
        return {
          title: 'Website Management Overview',
          cards: [
            { title: 'Published Products', value: '89', icon: Package, color: 'text-blue-600' },
            { title: 'Draft Products', value: '6', icon: Package, color: 'text-yellow-600' },
            { title: 'Featured Items', value: '12', icon: TrendingUp, color: 'text-green-600' },
            { title: 'Page Views Today', value: '456', icon: Globe, color: 'text-purple-600' }
          ],
          recentActivities: [
            'Updated homepage hero section',
            'Added new products to Featured Drops',
            'Updated About Us page content',
            'Modified Shop by Mood categories'
          ]
        };
      default:
        return {
          title: 'Dashboard Overview',
          cards: [],
          recentActivities: []
        };
    }
  };

  const roleData = getRoleSpecificData();

  const getRoleBadgeColor = () => {
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

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-black">Welcome Back!</h1>
          <p className="text-gray-600 mt-1">Here's your {role.toLowerCase()} overview</p>
        </div>
        <Badge className={getRoleBadgeColor()}>
          {role}
        </Badge>
      </div>

      {roleData.cards.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {roleData.cards.map((card, index) => (
            <Card key={index} className="border border-gray-200">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-600 flex items-center gap-2">
                  <card.icon className="h-4 w-4" />
                  {card.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className={`text-2xl font-bold ${card.color}`}>{card.value}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="border border-gray-200">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-black">Recent Activities</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {roleData.recentActivities.map((activity, index) => (
                <div key={index} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                  <div className="w-2 h-2 bg-gray-400 rounded-full mt-2"></div>
                  <p className="text-sm text-gray-700">{activity}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="border border-gray-200">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-black">Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {role === 'Purchase Manager' && (
                <>
                  <button className="w-full text-left p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                    <p className="font-semibold text-blue-800">Add New Purchase</p>
                    <p className="text-sm text-blue-600">Record new inventory purchase</p>
                  </button>
                  <button className="w-full text-left p-3 bg-green-50 rounded-lg hover:bg-green-100 transition-colors">
                    <p className="font-semibold text-green-800">Update Stock</p>
                    <p className="text-sm text-green-600">Modify product quantities</p>
                  </button>
                </>
              )}
              
              {role === 'Order Manager' && (
                <>
                  <button className="w-full text-left p-3 bg-green-50 rounded-lg hover:bg-green-100 transition-colors">
                    <p className="font-semibold text-green-800">Process Orders</p>
                    <p className="text-sm text-green-600">Update order statuses</p>
                  </button>
                  <button className="w-full text-left p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                    <p className="font-semibold text-blue-800">Manage Customers</p>
                    <p className="text-sm text-blue-600">View customer information</p>
                  </button>
                </>
              )}
              
              {role === 'Website Manager' && (
                <>
                  <button className="w-full text-left p-3 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors">
                    <p className="font-semibold text-purple-800">Update Homepage</p>
                    <p className="text-sm text-purple-600">Modify website content</p>
                  </button>
                  <button className="w-full text-left p-3 bg-green-50 rounded-lg hover:bg-green-100 transition-colors">
                    <p className="font-semibold text-green-800">Manage Products</p>
                    <p className="text-sm text-green-600">Add or edit product listings</p>
                  </button>
                </>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
