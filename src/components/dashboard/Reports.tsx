
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import { Download, Calendar } from 'lucide-react';

export const Reports = () => {
  const salesData = [
    { name: 'Mon', purchase: 8000, sales: 12000, profit: 4000 },
    { name: 'Tue', purchase: 12000, sales: 19000, profit: 7000 },
    { name: 'Wed', purchase: 6000, sales: 8000, profit: 2000 },
    { name: 'Thu', purchase: 10000, sales: 16000, profit: 6000 },
    { name: 'Fri', purchase: 15000, sales: 22000, profit: 7000 },
    { name: 'Sat', purchase: 18000, sales: 28000, profit: 10000 },
    { name: 'Sun', purchase: 9000, sales: 14000, profit: 5000 }
  ];

  const topProducts = [
    { name: 'Bold Statement T-Shirt', value: 45, color: '#dc2626' },
    { name: 'Urban Bold Hoodie', value: 30, color: '#000000' },
    { name: 'Zen Master Tee', value: 25, color: '#6b7280' }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-black">Reports & Analytics</h1>
        <div className="flex space-x-4">
          <Select defaultValue="weekly">
            <SelectTrigger className="w-40">
              <Calendar className="h-4 w-4 mr-2" />
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="daily">Daily</SelectItem>
              <SelectItem value="weekly">Weekly</SelectItem>
              <SelectItem value="monthly">Monthly</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Export PDF
          </Button>
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Export CSV
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="border border-gray-200">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Total Purchase Amount</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">৳78,000</div>
            <p className="text-xs text-gray-600 mt-1">This period</p>
          </CardContent>
        </Card>

        <Card className="border border-gray-200">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Total Sales Amount</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">৳1,19,000</div>
            <p className="text-xs text-green-600 mt-1">+12.5% vs last period</p>
          </CardContent>
        </Card>

        <Card className="border border-gray-200">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Net Profit</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">৳41,000</div>
            <p className="text-xs text-blue-600 mt-1">52.6% margin</p>
          </CardContent>
        </Card>

        <Card className="border border-gray-200">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Outstanding Returns</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-yellow-600">৳8,500</div>
            <p className="text-xs text-gray-600 mt-1">Pending refunds</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="border border-gray-200">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-black">Income vs Expense</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={salesData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis tickFormatter={(value) => `৳${value/1000}k`} />
                <Tooltip formatter={(value) => [`৳${value}`, value === salesData[0]?.sales ? 'Sales' : value === salesData[0]?.purchase ? 'Purchase' : 'Profit']} />
                <Bar dataKey="purchase" fill="#dc2626" name="Purchase" />
                <Bar dataKey="sales" fill="#000000" name="Sales" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="border border-gray-200">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-black">Profit Trend</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={salesData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis tickFormatter={(value) => `৳${value/1000}k`} />
                <Tooltip formatter={(value) => [`৳${value}`, 'Profit']} />
                <Line type="monotone" dataKey="profit" stroke="#dc2626" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <Card className="border border-gray-200">
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-black">Top Selling Products</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex justify-center">
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={topProducts}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  dataKey="value"
                  label={({ name, value }) => `${name}: ${value}%`}
                >
                  {topProducts.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
