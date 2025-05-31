
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Save, Upload, Globe, Instagram, Info, Settings } from 'lucide-react';

export const WebsiteManagement = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-black">Website Management</h1>
        <Button className="bg-black text-white hover:bg-gray-800">
          <Save className="h-4 w-4 mr-2" />
          Save All Changes
        </Button>
      </div>

      <Tabs defaultValue="general" className="space-y-6">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="general" className="flex items-center">
            <Settings className="h-4 w-4 mr-2" />
            General
          </TabsTrigger>
          <TabsTrigger value="hero" className="flex items-center">
            <Globe className="h-4 w-4 mr-2" />
            Hero Section
          </TabsTrigger>
          <TabsTrigger value="products" className="flex items-center">
            <Settings className="h-4 w-4 mr-2" />
            Featured
          </TabsTrigger>
          <TabsTrigger value="instagram" className="flex items-center">
            <Instagram className="h-4 w-4 mr-2" />
            Instagram
          </TabsTrigger>
          <TabsTrigger value="about" className="flex items-center">
            <Info className="h-4 w-4 mr-2" />
            About Us
          </TabsTrigger>
        </TabsList>

        <TabsContent value="general">
          <Card className="border border-gray-200">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-black">General Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="site-title">Website Title</Label>
                  <Input id="site-title" defaultValue="VOIN - Bold Streetwear" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="site-tagline">Tagline</Label>
                  <Input id="site-tagline" defaultValue="Express Your Bold Statement" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="meta-description">SEO Meta Description</Label>
                <Textarea 
                  id="meta-description" 
                  defaultValue="VOIN offers premium black and white streetwear for those who dare to make a statement. Shop our bold collection of t-shirts, hoodies, and accessories."
                  className="h-20"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label>Logo Upload</Label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                    <Upload className="h-8 w-8 mx-auto text-gray-400 mb-2" />
                    <p className="text-sm text-gray-600">Click to upload logo</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Favicon Upload</Label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                    <Upload className="h-8 w-8 mx-auto text-gray-400 mb-2" />
                    <p className="text-sm text-gray-600">Click to upload favicon</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="hero">
          <Card className="border border-gray-200">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-black">Hero Section</CardTitle>
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

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="cta-text">CTA Button Text</Label>
                  <Input id="cta-text" defaultValue="Shop Now" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cta-link">CTA Button Link</Label>
                  <Input id="cta-link" defaultValue="/shop" />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="products">
          <Card className="border border-gray-200">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-black">Featured Products & Shop by Mood</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Featured Drops</h3>
                <p className="text-sm text-gray-600">Select products to highlight on the homepage</p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {['Bold Statement', 'Calm Vibes', 'Rebel Soul'].map((product, index) => (
                    <div key={index} className="border rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium">{product}</h4>
                        <Switch defaultChecked />
                      </div>
                      <img 
                        src={`https://cdn.kaft.com/static/images/cache/800/tisort_${index === 0 ? 'dim' : index === 1 ? 'applien' : 'dailypractice'}_31${index === 0 ? '470' : index === 1 ? '175' : '507'}_800_800.jpg?cacheID=174${index === 0 ? '4362691000' : index === 1 ? '4314129000' : '4312291000'}`}
                        alt={product}
                        className="w-full h-32 object-cover rounded"
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Shop by Mood</h3>
                <p className="text-sm text-gray-600">Assign products to different moods for filtered shopping experience</p>
                
                <div className="space-y-4">
                  {['Bold', 'Calm', 'Rebel', 'Urban', 'Zen'].map((mood, index) => (
                    <div key={index} className="border rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium">{mood} Mood</h4>
                        <Switch defaultChecked />
                      </div>
                      <p className="text-sm text-gray-600 mb-2">Products: 3 assigned</p>
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
              <CardTitle className="text-lg font-semibold text-black">Instagram Gallery (VOINVibes)</CardTitle>
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

        <TabsContent value="about">
          <Card className="border border-gray-200">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-black">About Us Page Content</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="about-title">Section Title</Label>
                <Input id="about-title" defaultValue="The Story Behind VOIN" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="about-content">Content</Label>
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
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};
