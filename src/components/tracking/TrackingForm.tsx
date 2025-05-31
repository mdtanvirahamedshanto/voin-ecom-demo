
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Search } from 'lucide-react';

interface TrackingFormProps {
  onTrackOrder: (orderId: string, phone: string) => void;
}

const TrackingForm = ({ onTrackOrder }: TrackingFormProps) => {
  const [orderId, setOrderId] = useState('');
  const [phone, setPhone] = useState('');
  const [activeTab, setActiveTab] = useState('order-id');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (activeTab === 'order-id' && orderId) {
      onTrackOrder(orderId, '');
    } else if (activeTab === 'phone' && phone) {
      onTrackOrder('', phone);
    }
  };

  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg max-w-md mx-auto">
      <div className="text-center mb-6">
        <div className="w-16 h-16 bg-voin-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <Search className="w-8 h-8 text-voin-red" />
        </div>
        <h2 className="font-grotesk text-2xl font-bold text-voin-black mb-2">
          Find Your Order
        </h2>
        <p className="text-gray-600">
          Track your VOIN order status and delivery information
        </p>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-6">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="order-id">Order ID</TabsTrigger>
          <TabsTrigger value="phone">Phone Number</TabsTrigger>
        </TabsList>
        
        <form onSubmit={handleSubmit}>
          <TabsContent value="order-id" className="space-y-4">
            <div>
              <Label htmlFor="order-id" className="text-sm font-semibold text-gray-700">
                Order ID
              </Label>
              <Input
                id="order-id"
                value={orderId}
                onChange={(e) => setOrderId(e.target.value)}
                placeholder="VOIN1234567890"
                required
              />
              <p className="text-xs text-gray-500 mt-1">
                You can find your order ID in the confirmation email or SMS
              </p>
            </div>
          </TabsContent>

          <TabsContent value="phone" className="space-y-4">
            <div>
              <Label htmlFor="phone" className="text-sm font-semibold text-gray-700">
                Phone Number
              </Label>
              <Input
                id="phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="01XXXXXXXXX"
                required
              />
              <p className="text-xs text-gray-500 mt-1">
                Enter the phone number used during checkout
              </p>
            </div>
          </TabsContent>

          <Button 
            type="submit" 
            className="w-full mt-6 bg-voin-red hover:bg-voin-red/90"
            disabled={
              (activeTab === 'order-id' && !orderId) || 
              (activeTab === 'phone' && !phone)
            }
          >
            Track My Order
          </Button>
        </form>
      </Tabs>

      {/* Help Section */}
      <div className="text-center text-sm text-gray-600">
        <p className="mb-2">Need help?</p>
        <div className="flex justify-center gap-4">
          <button className="text-voin-red hover:underline">WhatsApp Support</button>
          <button className="text-voin-red hover:underline">Call Us</button>
        </div>
      </div>
    </div>
  );
};

export default TrackingForm;
