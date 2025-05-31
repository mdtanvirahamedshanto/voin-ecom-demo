
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { CreditCard, Smartphone, MapPin, Clock, Truck } from 'lucide-react';

interface CheckoutFormProps {
  cartItems: any[];
  total: number;
  onOrderComplete: (orderId: string) => void;
}

const CheckoutForm = ({ cartItems, total, onOrderComplete }: CheckoutFormProps) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    location: '', // 'inside_dhaka' or 'outside_dhaka'
    paymentMethod: 'cod',
    bkashNumber: '',
    nagadNumber: '',
    agreeToTerms: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const deliveryInfo = {
    inside_dhaka: {
      cost: 70,
      time: '1 Day Delivery',
      description: 'Fast delivery within Dhaka city'
    },
    outside_dhaka: {
      cost: 130,
      time: '3 Days Delivery',
      description: 'Standard delivery outside Dhaka'
    }
  };

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const getDeliveryCost = () => {
    return formData.location ? deliveryInfo[formData.location as keyof typeof deliveryInfo]?.cost || 0 : 0;
  };

  const getFinalTotal = () => {
    return total + getDeliveryCost();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.agreeToTerms) {
      alert('Please agree to the terms and conditions');
      return;
    }

    if (!formData.location) {
      alert('Please select your delivery location');
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      const orderId = 'VOIN' + Date.now();
      onOrderComplete(orderId);
      setIsSubmitting(false);
    }, 2000);
  };

  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg">
      <h2 className="font-grotesk text-2xl font-bold text-voin-black mb-6">
        Delivery Information
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Personal Information */}
        <div className="space-y-4">
          <h3 className="font-grotesk text-lg font-semibold text-voin-black">
            Personal Information
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="name" className="text-sm font-semibold text-gray-700">
                Full Name *
              </Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                placeholder="Enter your full name"
                required
              />
            </div>
            
            <div>
              <Label htmlFor="phone" className="text-sm font-semibold text-gray-700">
                Phone Number *
              </Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                placeholder="01XXXXXXXXX"
                required
              />
            </div>
          </div>
        </div>

        {/* Delivery Address */}
        <div className="space-y-4">
          <h3 className="font-grotesk text-lg font-semibold text-voin-black flex items-center gap-2">
            <MapPin className="w-5 h-5 text-voin-red" />
            Delivery Address
          </h3>
          
          <div>
            <Label htmlFor="address" className="text-sm font-semibold text-gray-700">
              Full Address *
            </Label>
            <Input
              id="address"
              value={formData.address}
              onChange={(e) => handleInputChange('address', e.target.value)}
              placeholder="House/Flat number, Road, Area, City"
              required
            />
          </div>
        </div>

        {/* Delivery Terms */}
        <div className="space-y-4">
          <h3 className="font-grotesk text-lg font-semibold text-voin-black flex items-center gap-2">
            <Truck className="w-5 h-5 text-voin-red" />
            Delivery Terms
          </h3>
          
          <div>
            <Label className="text-sm font-semibold text-gray-700 mb-3 block">
              Select Delivery Location *
            </Label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div 
                className={`border-2 rounded-lg p-4 cursor-pointer transition-all ${
                  formData.location === 'inside_dhaka' 
                    ? 'border-voin-red bg-red-50' 
                    : 'border-gray-200 hover:border-gray-300'
                }`}
                onClick={() => handleInputChange('location', 'inside_dhaka')}
              >
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-gray-900">Inside Dhaka</h4>
                  <Badge className="bg-green-100 text-green-800">Fast</Badge>
                </div>
                <div className="space-y-1 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{deliveryInfo.inside_dhaka.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Truck className="w-4 h-4" />
                    <span>৳{deliveryInfo.inside_dhaka.cost} delivery charge</span>
                  </div>
                  <p className="text-xs">{deliveryInfo.inside_dhaka.description}</p>
                </div>
              </div>

              <div 
                className={`border-2 rounded-lg p-4 cursor-pointer transition-all ${
                  formData.location === 'outside_dhaka' 
                    ? 'border-voin-red bg-red-50' 
                    : 'border-gray-200 hover:border-gray-300'
                }`}
                onClick={() => handleInputChange('location', 'outside_dhaka')}
              >
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-gray-900">Outside Dhaka</h4>
                  <Badge className="bg-blue-100 text-blue-800">Standard</Badge>
                </div>
                <div className="space-y-1 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{deliveryInfo.outside_dhaka.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Truck className="w-4 h-4" />
                    <span>৳{deliveryInfo.outside_dhaka.cost} delivery charge</span>
                  </div>
                  <p className="text-xs">{deliveryInfo.outside_dhaka.description}</p>
                </div>
              </div>
            </div>

            {/* Delivery Summary */}
            {formData.location && (
              <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Delivery Summary</h4>
                <div className="flex justify-between items-center text-sm">
                  <span>Expected Delivery Time:</span>
                  <span className="font-semibold text-green-600">
                    {deliveryInfo[formData.location as keyof typeof deliveryInfo]?.time}
                  </span>
                </div>
                <div className="flex justify-between items-center text-sm mt-1">
                  <span>Delivery Charge:</span>
                  <span className="font-semibold">৳{getDeliveryCost()}</span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Order Items Review */}
        <div className="space-y-4">
          <h3 className="font-grotesk text-lg font-semibold text-voin-black">
            Order Review ({cartItems.length} items)
          </h3>
          
          <div className="space-y-3 max-h-48 overflow-y-auto">
            {cartItems.map((item) => (
              <div key={item.id} className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-12 h-12 rounded-lg object-cover"
                />
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-sm truncate">{item.name}</p>
                  <p className="text-xs text-gray-600">
                    {item.size} • {item.color} • Qty: {item.quantity}
                  </p>
                </div>
                <div className="text-sm font-semibold text-voin-red">
                  ৳{item.price * item.quantity}
                </div>
              </div>
            ))}
          </div>
          
          {/* Order Total */}
          <div className="border-t pt-4 space-y-2">
            <div className="flex justify-between text-sm">
              <span>Subtotal:</span>
              <span>৳{total}</span>
            </div>
            {formData.location && (
              <div className="flex justify-between text-sm">
                <span>Delivery Charge:</span>
                <span>৳{getDeliveryCost()}</span>
              </div>
            )}
            <div className="flex justify-between font-semibold text-lg border-t pt-2">
              <span>Total:</span>
              <span className="text-voin-red">৳{getFinalTotal()}</span>
            </div>
          </div>
        </div>

        {/* Payment Method */}
        <div className="space-y-4">
          <h3 className="font-grotesk text-lg font-semibold text-voin-black">
            Payment Method
          </h3>
          
          <RadioGroup
            value={formData.paymentMethod}
            onValueChange={(value) => handleInputChange('paymentMethod', value)}
          >
            <div className="flex items-center space-x-3 p-4 border rounded-lg hover:bg-gray-50">
              <RadioGroupItem value="cod" id="cod" />
              <Label htmlFor="cod" className="flex-1 cursor-pointer">
                <div className="flex items-center gap-3">
                  <CreditCard className="w-5 h-5 text-green-600" />
                  <div>
                    <div className="font-semibold">Cash on Delivery</div>
                    <div className="text-sm text-gray-600">Pay when you receive your order</div>
                  </div>
                </div>
              </Label>
              <Badge className="bg-green-100 text-green-800">Recommended</Badge>
            </div>
            
            <div className="flex items-center space-x-3 p-4 border rounded-lg hover:bg-gray-50">
              <RadioGroupItem value="bkash" id="bkash" />
              <Label htmlFor="bkash" className="flex-1 cursor-pointer">
                <div className="flex items-center gap-3">
                  <Smartphone className="w-5 h-5 text-pink-600" />
                  <div>
                    <div className="font-semibold">bKash</div>
                    <div className="text-sm text-gray-600">Pay with bKash mobile banking</div>
                  </div>
                </div>
              </Label>
            </div>
            
            <div className="flex items-center space-x-3 p-4 border rounded-lg hover:bg-gray-50">
              <RadioGroupItem value="nagad" id="nagad" />
              <Label htmlFor="nagad" className="flex-1 cursor-pointer">
                <div className="flex items-center gap-3">
                  <Smartphone className="w-5 h-5 text-orange-600" />
                  <div>
                    <div className="font-semibold">Nagad</div>
                    <div className="text-sm text-gray-600">Pay with Nagad mobile banking</div>
                  </div>
                </div>
              </Label>
            </div>
          </RadioGroup>

          {/* bKash Number */}
          {formData.paymentMethod === 'bkash' && (
            <div>
              <Label htmlFor="bkashNumber" className="text-sm font-semibold text-gray-700">
                bKash Account Number *
              </Label>
              <Input
                id="bkashNumber"
                value={formData.bkashNumber}
                onChange={(e) => handleInputChange('bkashNumber', e.target.value)}
                placeholder="01XXXXXXXXX"
                required
              />
            </div>
          )}

          {/* Nagad Number */}
          {formData.paymentMethod === 'nagad' && (
            <div>
              <Label htmlFor="nagadNumber" className="text-sm font-semibold text-gray-700">
                Nagad Account Number *
              </Label>
              <Input
                id="nagadNumber"
                value={formData.nagadNumber}
                onChange={(e) => handleInputChange('nagadNumber', e.target.value)}
                placeholder="01XXXXXXXXX"
                required
              />
            </div>
          )}
        </div>

        {/* Terms and Conditions */}
        <div className="flex items-start space-x-3">
          <Checkbox
            id="terms"
            checked={formData.agreeToTerms}
            onCheckedChange={(checked) => handleInputChange('agreeToTerms', checked)}
            className="mt-1"
          />
          <Label htmlFor="terms" className="text-sm text-gray-700 cursor-pointer">
            I agree to the{' '}
            <a href="/terms" className="text-voin-red hover:underline">
              Terms & Conditions
            </a>{' '}
            and{' '}
            <a href="/privacy" className="text-voin-red hover:underline">
              Privacy Policy
            </a>
          </Label>
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          size="lg"
          disabled={isSubmitting || !formData.location}
          className="w-full bg-voin-red hover:bg-voin-red/90 text-white font-semibold py-4 text-lg rounded-full transition-all duration-300 hover:scale-105"
        >
          {isSubmitting ? 'Processing...' : `Place Order - ৳${getFinalTotal()}`}
        </Button>
      </form>
    </div>
  );
};

export default CheckoutForm;
