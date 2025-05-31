
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Save, Upload, Globe, Instagram, Info, Settings, Eye, Edit } from 'lucide-react';

export const WebsiteManagerDashboard = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-black">Website Management</h1>
          <p className="text-gray-600">Manage your website content and appearance</p>
        </div>
        <Button className="bg-black text-white hover:bg-gray-800">
          <Save className="h-4 w-4 mr-2" />
          Save All Changes
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="border border-gray-200">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Published Products</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-black">24</div>
            <p className="text-xs text-gray-500">Active on website</p>
          </CardContent>
        </Card>

        <Card className="border border-gray-200">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Featured Items</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">6</div>
            <p className="text-xs text-gray-500">Homepage featured</p>
          </CardContent>
        </Card>

        <Card className="border border-gray-200">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Instagram Posts</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-purple-600">12</div>
            <p className="text-xs text-gray-500">VOINVibes gallery</p>
          </CardContent>
        </Card>

        <Card className="border border-gray-200">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Last Updated</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">2h</div>
            <p className="text-xs text-gray-500">ago</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="hero" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="hero" className="flex items-center">
            <Globe className="h-4 w-4 mr-2" />
            Hero Section
          </TabsTrigger>
          <TabsTrigger value="products" className="flex items-center">
            <Settings className="h-4 w-4 mr-2" />
            Featured Products
          </TabsTrigger>
          <TabsTrigger value="instagram" className="flex items-center">
            <Instagram className="h-4 w-4 mr-2" />
            VOINVibes
          </TabsTrigger>
          <TabsTrigger value="content" className="flex items-center">
            <Info className="h-4 w-4 mr-2" />
            Page Content
          </TabsTrigger>
        </TabsList>

        <TabsContent value="hero">
          <Card className="border border-gray-200">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-black">Hero Section Management</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label>Hero Background Image</Label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                  <img 
                    src="https://cdn.kaft.com/static/images/content/banner/1746433654165.jpg" 
                    alt="Current hero" 
                    className="max-w-xs mx-auto rounded mb-4"
                  />
                  <Button variant="outline">
                    <Upload className="h-4 w-4 mr-2" />
                    Change Image
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="hero-title">Hero Title</Label>
                  <Input id="hero-title" defaultValue="Express Your Bold Statement" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="hero-subtitle">Hero Subtitle</Label>
                  <Input id="hero-subtitle" defaultValue="Premium streetwear for the fearless" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="hero-description">Hero Description</Label>
                <Textarea 
                  id="hero-description" 
                  defaultValue="Discover VOIN's exclusive collection of black and white streetwear. Each piece tells a story of rebellion, creativity, and uncompromising style."
                  className="h-20"
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="products">
          <Card className="border border-gray-200">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-black">Featured Products Management</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Featured Drops</h3>
                <p className="text-sm text-gray-600">Select products to highlight on the homepage</p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    { name: 'Bold Statement Tee', featured: true, stock: 15 },
                    { name: 'Urban Bold Hoodie', featured: true, stock: 8 },
                    { name: 'Zen Master Tee', featured: false, stock: 12 },
                    { name: 'Rebel Soul Shirt', featured: true, stock: 5 },
                    { name: 'Calm Vibes Hoodie', featured: false, stock: 20 },
                    { name: 'Street Walker Tee', featured: false, stock: 0 }
                  ].map((product, index) => (
                    <div key={index} className="border rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium text-sm">{product.name}</h4>
                        <Switch defaultChecked={product.featured} />
                      </div>
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="outline" className={product.stock > 0 ? "text-green-700" : "text-red-700"}>
                          {product.stock > 0 ? `Stock: ${product.stock}` : 'Out of Stock'}
                        </Badge>
                        {product.featured && <Badge className="bg-red-100 text-red-800">Featured</Badge>}
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          <Eye className="h-3 w-3 mr-1" />
                          Preview
                        </Button>
                        <Button variant="outline" size="sm">
                          <Edit className="h-3 w-3 mr-1" />
                          Edit
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Shop by Mood Categories</h3>
                <p className="text-sm text-gray-600">Manage mood-based product categories</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {['Bold', 'Calm', 'Rebel', 'Urban', 'Zen'].map((mood, index) => (
                    <div key={index} className="border rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium">{mood} Mood</h4>
                        <Switch defaultChecked />
                      </div>
                      <p className="text-sm text-gray-600 mb-2">Products: {Math.floor(Math.random() * 8) + 2} assigned</p>
                      <Button variant="outline" size="sm">Manage Products</Button>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="instagram">
          <Card className="border border-gray-200">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-black">VOINVibes Instagram Gallery</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  'https://cdn.kaft.com/static/images/cache/800/tisort_dim_31470_800_800.jpg?cacheID=1744362691000',
                  'https://cdn.kaft.com/static/images/cache/800/tisort_applien_31175_800_800.jpg?cacheID=1744314129000',
                  'https://cdn.kaft.com/static/images/cache/800/tisort_dailypractice_31507_800_800.jpg?cacheID=1744312291000',
                  'http://cdn.kaft.com/static/images/cache/800/tisort_plania_31187_800_800.jpg?cacheID=1744314129000',
                  'https://cdn.kaft.com/static/images/cache/800/tisort_zzz_31181_800_800.jpg?cacheID=1744314129000',
                  'https://cdn.kaft.com/static/images/cache/800/tisort_monosansu_31338_800_800.jpg?cacheID=1741790752000'
                ].map((image, index) => (
                  <div key={index} className="relative group">
                    <img 
                      src={image} 
                      alt={`Instagram post ${index + 1}`}
                      className="w-full h-32 object-cover rounded-lg"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center">
                      <Button variant="outline" size="sm" className="text-white border-white">
                        Replace
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="instagram-handle">Instagram Handle</Label>
                <Input id="instagram-handle" defaultValue="@voinvibes" />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="content">
          <Card className="border border-gray-200">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-black">Page Content Management</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="about-title">About Us Section Title</Label>
                <Input id="about-title" defaultValue="The Story Behind VOIN" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="about-content">About Us Content</Label>
                <Textarea 
                  id="about-content" 
                  defaultValue="VOIN was born from the belief that fashion should be a form of self-expression, not conformity. We create bold, minimalist pieces that speak to those who dare to be different."
                  className="h-32"
                />
              </div>

              <div className="space-y-2">
                <Label>Footer Content</Label>
                <Textarea 
                  defaultValue="© 2024 VOIN. All rights reserved. | Privacy Policy | Terms of Service | Design & Developed by ahasan.online"
                  className="h-20"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="seo-title">SEO Meta Title</Label>
                <Input id="seo-title" defaultValue="VOIN - Bold Streetwear Collection" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="seo-description">SEO Meta Description</Label>
                <Textarea 
                  id="seo-description" 
                  defaultValue="VOIN offers premium black and white streetwear for those who dare to make a statement. Shop our bold collection of t-shirts, hoodies, and accessories."
                  className="h-20"
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};
