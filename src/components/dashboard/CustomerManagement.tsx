
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, UserPlus, Merge, Phone, MapPin } from 'lucide-react';

export const CustomerManagement = () => {
  const customers = [
    {
      id: 1,
      name: "Rahman Ahmed",
      phone: "+8801712345678",
      email: "rahman@example.com",
      location: "Dhanmondi, Dhaka",
      totalOrders: 5,
      totalSpent: "৳8,470",
      lastOrder: "2024-01-15"
    },
    {
      id: 2,
      name: "Fatima Khan", 
      phone: "+8801987654321",
      email: "fatima@example.com",
      location: "Chittagong",
      totalOrders: 3,
      totalSpent: "৳5,890",
      lastOrder: "2024-01-14"
    },
    {
      id: 3,
      name: "Rahman Ahmed",
      phone: "+8801712345678", 
      email: "rahman.different@gmail.com",
      location: "Gulshan, Dhaka",
      totalOrders: 2,
      totalSpent: "৳3,180",
      lastOrder: "2024-01-10"
    },
    {
      id: 4,
      name: "Ayesha Begum",
      phone: "+8801555666777",
      email: "ayesha@example.com",
      location: "Sylhet",
      totalOrders: 4,
      totalSpent: "৳6,720",
      lastOrder: "2024-01-12"
    }
  ];

  const duplicatePhone = "+8801712345678";

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-black">Customer Management</h1>
        <div className="flex space-x-4">
          <div className="relative w-64">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input placeholder="Search customers..." className="pl-10" />
          </div>
          <Button className="bg-black text-white hover:bg-gray-800">
            <UserPlus className="h-4 w-4 mr-2" />
            Add Customer
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="border border-gray-200">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Total Customers</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-black">124</div>
          </CardContent>
        </Card>

        <Card className="border border-gray-200">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">New This Month</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">18</div>
          </CardContent>
        </Card>

        <Card className="border border-gray-200">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Repeat Customers</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">73%</div>
          </CardContent>
        </Card>

        <Card className="border border-gray-200">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Potential Duplicates</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-yellow-600">2</div>
          </CardContent>
        </Card>
      </div>

      <Card className="border border-gray-200">
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle className="text-lg font-semibold text-black">All Customers</CardTitle>
            <Button variant="outline" className="text-yellow-600 border-yellow-600">
              <Merge className="h-4 w-4 mr-2" />
              Merge Duplicates
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Customer Name</TableHead>
                <TableHead>Contact Info</TableHead>
                <TableHead>Location</TableHead>
                <TableHead>Total Orders</TableHead>
                <TableHead>Total Spent</TableHead>
                <TableHead>Last Order</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {customers.map((customer) => (
                <TableRow key={customer.id} className={customer.phone === duplicatePhone ? "bg-yellow-50" : ""}>
                  <TableCell className="font-medium">{customer.name}</TableCell>
                  <TableCell>
                    <div className="space-y-1">
                      <p className="text-sm flex items-center">
                        <Phone className="h-3 w-3 mr-1" />
                        {customer.phone}
                      </p>
                      <p className="text-sm text-gray-600">{customer.email}</p>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      <MapPin className="h-3 w-3 mr-1 text-gray-400" />
                      <span className="text-sm">{customer.location}</span>
                    </div>
                  </TableCell>
                  <TableCell>{customer.totalOrders}</TableCell>
                  <TableCell className="font-semibold">{customer.totalSpent}</TableCell>
                  <TableCell>{customer.lastOrder}</TableCell>
                  <TableCell>
                    {customer.phone === duplicatePhone ? (
                      <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">
                        Duplicate Phone
                      </Badge>
                    ) : (
                      <Badge className="bg-green-100 text-green-800">
                        Active
                      </Badge>
                    )}
                  </TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">View Orders</Button>
                      {customer.phone === duplicatePhone && (
                        <Button variant="outline" size="sm" className="text-yellow-600">
                          Merge
                        </Button>
                      )}
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};
