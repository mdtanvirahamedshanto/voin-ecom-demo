
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, MessageSquare, Phone, Clock, MapPin } from 'lucide-react';

export const OrderManagerDashboard = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const orders = [
    {
      id: "ORD-001",
      customer: "Rahman Ahmed",
      phone: "+8801712345678",
      location: "Inside Dhaka",
      product: "Bold Statement T-Shirt (M, Black)",
      quantity: 2,
      total: "৳3,050",
      status: "Confirm",
      tracking: "TRK123456",
      date: "2024-01-15",
      address: "House 25, Road 5, Dhanmondi, Dhaka"
    },
    {
      id: "ORD-002",
      customer: "Fatima Khan",
      phone: "+8801987654321",
      location: "Outside Dhaka",
      product: "Urban Bold Hoodie (L, White)",
      quantity: 1,
      total: "৳2,020",
      status: "Courier Ase",
      tracking: "TRK789012",
      date: "2024-01-14",
      address: "Village: Savar, Upazila: Savar, District: Dhaka"
    },
    {
      id: "ORD-003",
      customer: "Karim Hassan",
      phone: "+8801122334455",
      location: "Inside Dhaka",
      product: "Zen Master Tee (L, Gray)",
      quantity: 1,
      total: "৳1,460",
      status: "Pending",
      tracking: "",
      date: "2024-01-16",
      address: "Flat 3B, Gulshan Avenue, Gulshan-1, Dhaka"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Delivery Complete':
        return 'bg-green-100 text-green-800';
      case 'Courier Ase':
        return 'bg-blue-100 text-blue-800';
      case 'Confirm':
        return 'bg-yellow-100 text-yellow-800';
      case 'Pending':
        return 'bg-gray-100 text-gray-800';
      case 'Cancel':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-black">Order Management</h1>
          <p className="text-gray-600">Manage customer orders and delivery tracking</p>
        </div>
        <div className="flex space-x-4">
          <div className="relative w-64">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="Search orders..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="border border-gray-200">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Today's Orders</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-black">8</div>
            <p className="text-xs text-gray-500">+2 from yesterday</p>
          </CardContent>
        </Card>

        <Card className="border border-gray-200">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Pending Orders</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-yellow-600">23</div>
            <p className="text-xs text-gray-500">Awaiting confirmation</p>
          </CardContent>
        </Card>

        <Card className="border border-gray-200">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">In Transit</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">45</div>
            <p className="text-xs text-gray-500">With courier</p>
          </CardContent>
        </Card>

        <Card className="border border-gray-200">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Completed Today</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">12</div>
            <p className="text-xs text-gray-500">Delivered successfully</p>
          </CardContent>
        </Card>
      </div>

      <Card className="border border-gray-200">
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-black">Recent Orders</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Order Details</TableHead>
                <TableHead>Customer Info</TableHead>
                <TableHead>Location & Delivery</TableHead>
                <TableHead>Product</TableHead>
                <TableHead>Total</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {orders.map((order) => (
                <TableRow key={order.id}>
                  <TableCell>
                    <div>
                      <p className="font-medium">{order.id}</p>
                      <p className="text-sm text-gray-600">{order.date}</p>
                      {order.tracking && (
                        <code className="bg-gray-100 px-2 py-1 rounded text-xs">
                          {order.tracking}
                        </code>
                      )}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div>
                      <p className="font-medium">{order.customer}</p>
                      <p className="text-sm text-gray-600 flex items-center">
                        <Phone className="h-3 w-3 mr-1" />
                        {order.phone}
                      </p>
                      <p className="text-xs text-gray-500 flex items-center mt-1">
                        <MapPin className="h-3 w-3 mr-1" />
                        {order.address}
                      </p>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline" className={order.location === "Inside Dhaka" ? "text-green-700" : "text-blue-700"}>
                      {order.location}
                    </Badge>
                    <p className="text-xs text-gray-500 mt-1 flex items-center">
                      <Clock className="h-3 w-3 mr-1" />
                      {order.location === "Inside Dhaka" ? "1 Day Delivery" : "3 Days Delivery"}
                    </p>
                  </TableCell>
                  <TableCell>
                    <div>
                      <p className="font-medium">{order.product}</p>
                      <p className="text-sm text-gray-600">Qty: {order.quantity}</p>
                    </div>
                  </TableCell>
                  <TableCell className="font-semibold">{order.total}</TableCell>
                  <TableCell>
                    <Select defaultValue={order.status}>
                      <SelectTrigger className="w-32">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Pending">Pending</SelectItem>
                        <SelectItem value="Confirm">Confirm</SelectItem>
                        <SelectItem value="Courier Ase">Courier Ase</SelectItem>
                        <SelectItem value="Delivery Complete">Delivery Complete</SelectItem>
                        <SelectItem value="Cancel">Cancel</SelectItem>
                      </SelectContent>
                    </Select>
                  </TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm" title="Send SMS">
                        <MessageSquare className="h-4 w-4" />
                      </Button>
                      {!order.tracking && (
                        <Button variant="outline" size="sm">
                          Generate Tracking
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
