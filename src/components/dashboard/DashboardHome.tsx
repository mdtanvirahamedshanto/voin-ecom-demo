
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { DollarSign, ShoppingBag, Users, TrendingUp, AlertTriangle } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export const DashboardHome = () => {
  const stats = [
    {
      title: "Total Sales",
      value: "৳1,28,470",
      icon: DollarSign,
      change: "+12.5%",
      changeType: "positive"
    },
    {
      title: "Today's Profit",
      value: "৳12,470",
      icon: TrendingUp,
      change: "+15.3%",
      changeType: "positive"
    },
    {
      title: "Total Orders",
      value: "156",
      icon: ShoppingBag,
      change: "+8.2%",
      changeType: "positive"
    },
    {
      title: "Total Customers",
      value: "89",
      icon: Users,
      change: "+4.1%",
      changeType: "positive"
    }
  ];

  const recentOrders = [
    { id: "ORD-001", customer: "Rahman Ahmed", location: "Inside Dhaka", product: "Bold Statement T-Shirt", amount: "৳1,560", status: "Confirm" },
    { id: "ORD-002", customer: "Fatima Khan", location: "Outside Dhaka", product: "Urban Bold Hoodie", amount: "৳2,020", status: "Courier Ase" },
    { id: "ORD-003", customer: "Karim Hassan", location: "Inside Dhaka", product: "Zen Master Tee", amount: "৳1,460", status: "Pending" },
    { id: "ORD-004", customer: "Ayesha Begum", location: "Outside Dhaka", product: "Rebel Soul Tank", amount: "৳1,820", status: "Delivery Complete" },
  ];

  const lowStockItems = [
    { name: "Bold Statement T-Shirt", stock: 3, sku: "BST-001" },
    { name: "Urban Bold Hoodie", stock: 1, sku: "UBH-002" },
    { name: "Zen Master Tee", stock: 2, sku: "ZMT-003" },
  ];

  const profitData = [
    { name: 'Mon', profit: 12000 },
    { name: 'Tue', profit: 19000 },
    { name: 'Wed', profit: 8000 },
    { name: 'Thu', profit: 16000 },
    { name: 'Fri', profit: 22000 },
    { name: 'Sat', profit: 28000 },
    { name: 'Sun', profit: 14000 }
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
        <h1 className="text-3xl font-bold text-black">Dashboard Overview</h1>
        <div className="text-sm text-gray-600">
          Last updated: {new Date().toLocaleDateString('en-BD')}
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="border border-gray-200 hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                {stat.title}
              </CardTitle>
              <stat.icon className="h-4 w-4 text-gray-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-black">{stat.value}</div>
              <p className="text-xs text-green-600 mt-1">
                {stat.change} from last month
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Profit Chart */}
        <Card className="border border-gray-200">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-black">Weekly Profit Trend</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={profitData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip formatter={(value) => [`৳${value}`, 'Profit']} />
                <Line type="monotone" dataKey="profit" stroke="#dc2626" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Low Stock Alerts */}
        <Card className="border border-gray-200">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-black flex items-center">
              <AlertTriangle className="h-5 w-5 text-red-600 mr-2" />
              Low Stock Alerts
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {lowStockItems.map((item, index) => (
                <div key={index} className="flex justify-between items-center p-3 bg-red-50 rounded-lg border border-red-200">
                  <div>
                    <p className="font-medium text-black">{item.name}</p>
                    <p className="text-sm text-gray-600">SKU: {item.sku}</p>
                  </div>
                  <Badge variant="destructive" className="bg-red-600">
                    {item.stock} left
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Latest Orders */}
      <Card className="border border-gray-200">
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-black">Latest Orders</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Order ID</TableHead>
                <TableHead>Customer</TableHead>
                <TableHead>Location</TableHead>
                <TableHead>Product</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {recentOrders.map((order) => (
                <TableRow key={order.id}>
                  <TableCell className="font-medium">{order.id}</TableCell>
                  <TableCell>{order.customer}</TableCell>
                  <TableCell>{order.location}</TableCell>
                  <TableCell>{order.product}</TableCell>
                  <TableCell className="font-semibold">{order.amount}</TableCell>
                  <TableCell>
                    <Badge className={getStatusColor(order.status)}>
                      {order.status}
                    </Badge>
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
