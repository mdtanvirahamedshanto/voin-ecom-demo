
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { CreditCard, MessageSquare, Save, Truck } from 'lucide-react';

export const Settings = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-black">Settings</h1>
        <Button className="bg-black text-white hover:bg-gray-800">
          <Save className="h-4 w-4 mr-2" />
          Save Changes
        </Button>
      </div>

      <Tabs defaultValue="payment" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="payment" className="flex items-center">
            <CreditCard className="h-4 w-4 mr-2" />
            Payment Gateway
          </TabsTrigger>
          <TabsTrigger value="sms" className="flex items-center">
            <MessageSquare className="h-4 w-4 mr-2" />
            SMS Gateway
          </TabsTrigger>
          <TabsTrigger value="delivery" className="flex items-center">
            <Truck className="h-4 w-4 mr-2" />
            Delivery Settings
          </TabsTrigger>
        </TabsList>

        <TabsContent value="payment">
          <Card className="border border-gray-200">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-black">Payment Gateway Configuration</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-md font-semibold">bKash Configuration</h3>
                  <div className="space-y-2">
                    <Label htmlFor="bkash-username">bKash Username</Label>
                    <Input id="bkash-username" placeholder="Enter bKash username" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="bkash-password">bKash Password</Label>
                    <Input id="bkash-password" type="password" placeholder="Enter bKash password" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="bkash-app-key">App Key</Label>
                    <Input id="bkash-app-key" placeholder="Enter app key" />
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-md font-semibold">Nagad Configuration</h3>
                  <div className="space-y-2">
                    <Label htmlFor="nagad-merchant-id">Merchant ID</Label>
                    <Input id="nagad-merchant-id" placeholder="Enter merchant ID" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="nagad-merchant-key">Merchant Key</Label>
                    <Input id="nagad-merchant-key" type="password" placeholder="Enter merchant key" />
                  </div>
                  <div className="flex items-center space-x-2 mt-4">
                    <Switch id="nagad-sandbox" />
                    <Label htmlFor="nagad-sandbox">Sandbox Mode</Label>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-md font-semibold">SSLCommerz Configuration</h3>
                  <div className="space-y-2">
                    <Label htmlFor="ssl-store-id">Store ID</Label>
                    <Input id="ssl-store-id" placeholder="Enter store ID" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="ssl-store-password">Store Password</Label>
                    <Input id="ssl-store-password" type="password" placeholder="Enter store password" />
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-md font-semibold">Upay Configuration</h3>
                  <div className="space-y-2">
                    <Label htmlFor="upay-merchant-id">Merchant ID</Label>
                    <Input id="upay-merchant-id" placeholder="Enter merchant ID" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="upay-secret-key">Secret Key</Label>
                    <Input id="upay-secret-key" type="password" placeholder="Enter secret key" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="sms">
          <Card className="border border-gray-200">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-black">BulkSMSBD Configuration</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="sms-api-key">API Key</Label>
                  <Input id="sms-api-key" placeholder="Enter BulkSMSBD API key" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="sms-sender-id">Sender ID</Label>
                  <Input id="sms-sender-id" placeholder="8809601000000" />
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold">SMS Notification Settings</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="order-confirmation-sms">Order Confirmation SMS</Label>
                    <Switch id="order-confirmation-sms" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="status-update-sms">Order Status Update SMS</Label>
                    <Switch id="status-update-sms" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="delivery-sms">Delivery Confirmation SMS</Label>
                    <Switch id="delivery-sms" defaultChecked />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="sms-template">Default SMS Template</Label>
                <textarea 
                  id="sms-template" 
                  className="w-full h-24 px-3 py-2 border border-gray-300 rounded-md"
                  placeholder="Hi [CUSTOMER_NAME], your order [ORDER_ID] status has been updated to [STATUS]. Track: [TRACKING_ID]"
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="delivery">
          <Card className="border border-gray-200">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-black">Delivery Cost Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-md font-semibold">Inside Dhaka Delivery</h3>
                  <div className="space-y-2">
                    <Label htmlFor="inside-dhaka-cost">Delivery Cost (BDT)</Label>
                    <Input id="inside-dhaka-cost" type="number" defaultValue="70" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="inside-dhaka-time">Delivery Time</Label>
                    <Input id="inside-dhaka-time" defaultValue="1 Day Delivery" />
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-md font-semibold">Outside Dhaka Delivery</h3>
                  <div className="space-y-2">
                    <Label htmlFor="outside-dhaka-cost">Delivery Cost (BDT)</Label>
                    <Input id="outside-dhaka-cost" type="number" defaultValue="130" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="outside-dhaka-time">Delivery Time</Label>
                    <Input id="outside-dhaka-time" defaultValue="3 Days Delivery" />
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">How Delivery Costs Work:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Costs are automatically applied based on customer location selection</li>
                  <li>• Inside Dhaka: Same day or next day delivery</li>
                  <li>• Outside Dhaka: 3-5 business days delivery</li>
                  <li>• Costs are added to the final order total</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};
