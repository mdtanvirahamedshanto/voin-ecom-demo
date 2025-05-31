
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Plus, TrendingUp, TrendingDown } from 'lucide-react';

export const PurchaseManagement = () => {
  const [showAddForm, setShowAddForm] = useState(false);

  const purchases = [
    {
      id: "PUR-001",
      product: "Bold Statement T-Shirt",
      quantity: 50,
      purchasePrice: "৳890",
      totalCost: "৳44,500",
      sellPrice: "৳1,490",
      expectedRevenue: "৳74,500",
      profit: "৳30,000",
      date: "2024-01-10",
      supplier: "Textile Manufacturing Ltd."
    },
    {
      id: "PUR-002", 
      product: "Urban Bold Hoodie",
      quantity: 30,
      purchasePrice: "৳1,200",
      totalCost: "৳36,000",
      sellPrice: "৳1,890",
      expectedRevenue: "৳56,700",
      profit: "৳20,700",
      date: "2024-01-08",
      supplier: "Premium Apparel Co."
    }
  ];

  const totalPurchaseValue = purchases.reduce((sum, p) => sum + parseFloat(p.totalCost.replace('৳', '').replace(',', '')), 0);
  const totalExpectedRevenue = purchases.reduce((sum, p) => sum + parseFloat(p.expectedRevenue.replace('৳', '').replace(',', '')), 0);
  const totalProfit = totalExpectedRevenue - totalPurchaseValue;
  const profitMargin = ((totalProfit / totalPurchaseValue) * 100).toFixed(1);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-black">Purchase Management</h1>
        <Button 
          className="bg-black text-white hover:bg-gray-800"
          onClick={() => setShowAddForm(!showAddForm)}
        >
          <Plus className="h-4 w-4 mr-2" />
          Add Purchase
        </Button>
      </div>

      {showAddForm && (
        <Card className="border border-gray-200">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-black">Add New Purchase Entry</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <Label htmlFor="product-select">Select Product</Label>
                <select id="product-select" className="w-full h-10 px-3 py-2 border border-gray-300 rounded-md">
                  <option>Bold Statement T-Shirt</option>
                  <option>Urban Bold Hoodie</option>
                  <option>Zen Master Tee</option>
                </select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="quantity">Quantity</Label>
                <Input id="quantity" type="number" placeholder="50" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="purchase-price">Purchase Price per Unit (BDT)</Label>
                <Input id="purchase-price" type="number" placeholder="890" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="purchase-date">Purchase Date</Label>
                <Input id="purchase-date" type="date" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="supplier">Supplier Name</Label>
                <Input id="supplier" placeholder="Supplier Company Name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="selling-price">Expected Selling Price (BDT)</Label>
                <Input id="selling-price" type="number" placeholder="1490" />
              </div>
            </div>
            <div className="flex justify-end space-x-3 mt-6">
              <Button variant="outline" onClick={() => setShowAddForm(false)}>
                Cancel
              </Button>
              <Button className="bg-red-600 text-white hover:bg-red-700">
                Save Purchase
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="border border-gray-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Total Purchase Value</CardTitle>
            <TrendingDown className="h-4 w-4 text-red-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">৳{totalPurchaseValue.toLocaleString()}</div>
            <p className="text-xs text-gray-600 mt-1">This month</p>
          </CardContent>
        </Card>

        <Card className="border border-gray-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Expected Revenue</CardTitle>
            <TrendingUp className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">৳{totalExpectedRevenue.toLocaleString()}</div>
            <p className="text-xs text-gray-600 mt-1">If all sold at retail</p>
          </CardContent>
        </Card>

        <Card className="border border-gray-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Expected Profit</CardTitle>
            <TrendingUp className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">৳{totalProfit.toLocaleString()}</div>
            <p className="text-xs text-gray-600 mt-1">Total expected profit</p>
          </CardContent>
        </Card>

        <Card className="border border-gray-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Profit Margin</CardTitle>
            <TrendingUp className="h-4 w-4 text-purple-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-purple-600">{profitMargin}%</div>
            <p className="text-xs text-gray-600 mt-1">Average markup</p>
          </CardContent>
        </Card>
      </div>

      <Card className="border border-gray-200">
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-black">Purchase History</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Purchase ID</TableHead>
                <TableHead>Product</TableHead>
                <TableHead>Quantity</TableHead>
                <TableHead>Unit Cost</TableHead>
                <TableHead>Total Cost</TableHead>
                <TableHead>Sell Price</TableHead>
                <TableHead>Expected Profit</TableHead>
                <TableHead>Supplier</TableHead>
                <TableHead>Date</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {purchases.map((purchase) => (
                <TableRow key={purchase.id}>
                  <TableCell className="font-medium">{purchase.id}</TableCell>
                  <TableCell>{purchase.product}</TableCell>
                  <TableCell>{purchase.quantity}</TableCell>
                  <TableCell className="text-red-600">{purchase.purchasePrice}</TableCell>
                  <TableCell className="font-semibold text-red-600">{purchase.totalCost}</TableCell>
                  <TableCell className="text-green-600">{purchase.sellPrice}</TableCell>
                  <TableCell className="font-semibold text-green-600">{purchase.profit}</TableCell>
                  <TableCell>{purchase.supplier}</TableCell>
                  <TableCell>{purchase.date}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};
