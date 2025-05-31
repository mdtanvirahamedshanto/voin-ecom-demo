
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Plus, Search, Edit, Eye, EyeOff, Upload } from 'lucide-react';
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export const ProductManagement = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showAddForm, setShowAddForm] = useState(false);
  
  const products = [
    {
      id: 1,
      name: "Bold Statement T-Shirt",
      image: "https://cdn.kaft.com/static/images/cache/800/tisort_dim_31470_800_800.jpg?cacheID=1744362691000",
      sku: "BST-001",
      price: "৳1,490",
      stock: 15,
      category: "T-Shirts",
      visible: true
    },
    {
      id: 2,
      name: "Urban Bold Hoodie",
      image: "https://cdn.kaft.com/static/images/cache/800/tisort_zzz_31181_800_800.jpg?cacheID=1744314129000",
      sku: "UBH-002",
      price: "৳1,890",
      stock: 8,
      category: "Hoodies",
      visible: true
    },
    {
      id: 3,
      name: "Zen Master Tee",
      image: "https://cdn.kaft.com/static/images/cache/800/tisort_monosansu_31338_800_800.jpg?cacheID=1741790752000",
      sku: "ZMT-003",
      price: "৳1,390",
      stock: 12,
      category: "T-Shirts",
      visible: false
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-black">Product Management</h1>
        <Button 
          className="bg-black text-white hover:bg-gray-800"
          onClick={() => setShowAddForm(!showAddForm)}
        >
          <Plus className="h-4 w-4 mr-2" />
          Add Product
        </Button>
      </div>

      {showAddForm && (
        <Card className="border border-gray-200">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-black">Add New Product</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="title">Product Title</Label>
                  <Input id="title" placeholder="Enter product title" />
                </div>
                <div>
                  <Label htmlFor="description">Description</Label>
                  <Textarea id="description" placeholder="Product description" />
                </div>
                <div>
                  <Label htmlFor="category">Category</Label>
                  <select className="w-full h-10 px-3 py-2 border border-gray-300 rounded-md">
                    <option>T-Shirts</option>
                    <option>Hoodies</option>
                    <option>Tank Tops</option>
                    <option>Accessories</option>
                  </select>
                </div>
                <div>
                  <Label htmlFor="tags">Tags</Label>
                  <Input id="tags" placeholder="streetwear, minimal, bold" />
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="price">Price (BDT)</Label>
                  <Input id="price" type="number" placeholder="1490" />
                </div>
                <div>
                  <Label htmlFor="stock">Stock Quantity</Label>
                  <Input id="stock" type="number" placeholder="50" />
                </div>
                <div>
                  <Label htmlFor="sku">SKU</Label>
                  <Input id="sku" placeholder="BST-001" />
                </div>
                <div>
                  <Label>Product Images</Label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                    <Upload className="h-8 w-8 mx-auto text-gray-400 mb-2" />
                    <p className="text-sm text-gray-600">Click to upload or drag and drop</p>
                    <p className="text-xs text-gray-500">PNG, JPG up to 10MB</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center mt-6">
              <div className="flex items-center space-x-2">
                <input type="checkbox" id="visible" className="rounded" />
                <Label htmlFor="visible">Publish on website</Label>
              </div>
              <div className="space-x-3">
                <Button variant="outline" onClick={() => setShowAddForm(false)}>
                  Cancel
                </Button>
                <Button className="bg-red-600 text-white hover:bg-red-700">
                  Save Product
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      <Card className="border border-gray-200">
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle className="text-lg font-semibold text-black">All Products</CardTitle>
            <div className="relative w-64">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Image</TableHead>
                <TableHead>Title</TableHead>
                <TableHead>SKU</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Price (BDT)</TableHead>
                <TableHead>Stock</TableHead>
                <TableHead>Visibility</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {products.map((product) => (
                <TableRow key={product.id}>
                  <TableCell>
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-12 h-12 object-cover rounded-md"
                    />
                  </TableCell>
                  <TableCell className="font-medium">{product.name}</TableCell>
                  <TableCell className="text-gray-600">{product.sku}</TableCell>
                  <TableCell>{product.category}</TableCell>
                  <TableCell className="font-semibold">{product.price}</TableCell>
                  <TableCell>
                    <Badge 
                      variant={product.stock > 10 ? 'default' : product.stock > 5 ? 'secondary' : 'destructive'}
                      className={
                        product.stock > 10 ? 'bg-green-100 text-green-800' :
                        product.stock > 5 ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }
                    >
                      {product.stock} units
                    </Badge>
                  </TableCell>
                  <TableCell>
                    {product.visible ? (
                      <Badge className="bg-green-100 text-green-800">
                        <Eye className="h-3 w-3 mr-1" />
                        Published
                      </Badge>
                    ) : (
                      <Badge variant="secondary" className="bg-gray-100 text-gray-800">
                        <EyeOff className="h-3 w-3 mr-1" />
                        Hidden
                      </Badge>
                    )}
                  </TableCell>
                  <TableCell>
                    <Button variant="outline" size="sm" className="mr-2">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      className={product.visible ? 'text-gray-600' : 'text-green-600'}
                    >
                      {product.visible ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </Button>
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
