
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { UserPlus, Shield, Edit } from 'lucide-react';

export const RolesPermissions = () => {
  const staff = [
    {
      id: 1,
      name: "Admin User",
      email: "admin@voin.com",
      role: "Administrator",
      status: "Active",
      lastLogin: "2024-01-16"
    },
    {
      id: 2,
      name: "Karim Hassan",
      email: "karim@voin.com", 
      role: "Purchase Manager",
      status: "Active",
      lastLogin: "2024-01-15"
    },
    {
      id: 3,
      name: "Fatima Rahman",
      email: "fatima@voin.com",
      role: "Order Manager",
      status: "Active",
      lastLogin: "2024-01-15"
    },
    {
      id: 4,
      name: "Arif Ahmed",
      email: "arif@voin.com",
      role: "Website Manager",
      status: "Inactive",
      lastLogin: "2024-01-10"
    }
  ];

  const permissions = [
    { module: "Products", admin: true, purchase: false, order: false, website: true },
    { module: "Purchase Management", admin: true, purchase: true, order: false, website: false },
    { module: "Orders", admin: true, purchase: false, order: true, website: false },
    { module: "Customers", admin: true, purchase: false, order: true, website: false },
    { module: "Website Content", admin: true, purchase: false, order: false, website: true },
    { module: "Reports (with Profit)", admin: true, purchase: false, order: false, website: false },
    { module: "Reports (Sales Only)", admin: true, purchase: false, order: true, website: false },
    { module: "Settings", admin: true, purchase: false, order: false, website: false }
  ];

  const getRoleBadgeColor = (role: string) => {
    switch (role) {
      case 'Administrator':
        return 'bg-red-100 text-red-800';
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
        <h1 className="text-3xl font-bold text-black">Roles & Permissions</h1>
        <Button className="bg-black text-white hover:bg-gray-800">
          <UserPlus className="h-4 w-4 mr-2" />
          Add Staff Member
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="border border-gray-200">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-black">Staff Members</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Role</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {staff.map((member) => (
                  <TableRow key={member.id}>
                    <TableCell>
                      <div>
                        <p className="font-medium">{member.name}</p>
                        <p className="text-sm text-gray-600">{member.email}</p>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge className={getRoleBadgeColor(member.role)}>
                        {member.role}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge 
                        className={
                          member.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                        }
                      >
                        {member.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Button variant="outline" size="sm">
                        <Edit className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card className="border border-gray-200">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-black flex items-center">
              <Shield className="h-5 w-5 mr-2" />
              Role-Based Permissions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-2">Module</th>
                      <th className="text-center py-2">Admin</th>
                      <th className="text-center py-2">Purchase</th>
                      <th className="text-center py-2">Order</th>
                      <th className="text-center py-2">Website</th>
                    </tr>
                  </thead>
                  <tbody>
                    {permissions.map((permission, index) => (
                      <tr key={index} className="border-b">
                        <td className="py-3 pr-4">{permission.module}</td>
                        <td className="text-center">
                          <Switch checked={permission.admin} disabled />
                        </td>
                        <td className="text-center">
                          <Switch checked={permission.purchase} />
                        </td>
                        <td className="text-center">
                          <Switch checked={permission.order} />
                        </td>
                        <td className="text-center">
                          <Switch checked={permission.website} />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg mt-4">
                <h4 className="font-semibold mb-2">Permission Notes:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• <strong>Administrator:</strong> Full access to all modules</li>
                  <li>• <strong>Purchase Manager:</strong> Can view purchase costs & profits</li>
                  <li>• <strong>Order Manager:</strong> Manages orders, customers (no profit data)</li>
                  <li>• <strong>Website Manager:</strong> Manages website content & products</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
