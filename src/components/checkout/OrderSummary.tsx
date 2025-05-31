
import { Badge } from '@/components/ui/badge';
import { Truck, Shield, RotateCcw } from 'lucide-react';

interface OrderSummaryProps {
  items: any[];
  subtotal: number;
  shipping: number;
  total: number;
}

const OrderSummary = ({ items, subtotal, shipping, total }: OrderSummaryProps) => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg sticky top-24">
      <h2 className="font-grotesk text-2xl font-bold text-voin-black mb-6">
        Order Summary
      </h2>

      {/* Order Items */}
      <div className="space-y-4 mb-6">
        {items.map((item) => (
          <div key={item.id} className="flex gap-4">
            <div className="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="font-semibold text-sm truncate">{item.name}</h4>
              <p className="text-xs text-gray-600 mb-1">
                {item.size} • {item.color}
              </p>
              <div className="flex justify-between items-center">
                <span className="text-xs text-gray-600">Qty: {item.quantity}</span>
                <span className="font-semibold text-voin-red">
                  ৳{item.price * item.quantity}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <hr className="border-gray-200 mb-6" />

      {/* Price Breakdown */}
      <div className="space-y-3 mb-6">
        <div className="flex justify-between text-gray-600">
          <span>Subtotal ({items.length} items)</span>
          <span>৳{subtotal}</span>
        </div>
        
        <div className="flex justify-between text-gray-600">
          <span>Shipping</span>
          <span>{shipping === 0 ? 'Free' : `৳${shipping}`}</span>
        </div>
        
        {shipping > 0 && (
          <div className="text-xs text-gray-500">
            💡 Free shipping on orders above ৳2000
          </div>
        )}
        
        <hr className="border-gray-200" />
        
        <div className="flex justify-between font-grotesk text-xl font-bold">
          <span>Total</span>
          <span className="text-voin-red">৳{total}</span>
        </div>
      </div>

      {/* Trust Indicators */}
      <div className="space-y-4">
        <div className="flex items-center gap-3 text-sm text-gray-600">
          <Shield className="w-5 h-5 text-green-600" />
          <span>Secure payment processing</span>
        </div>
        
        <div className="flex items-center gap-3 text-sm text-gray-600">
          <Truck className="w-5 h-5 text-blue-600" />
          <span>3-day delivery across Bangladesh</span>
        </div>
        
        <div className="flex items-center gap-3 text-sm text-gray-600">
          <RotateCcw className="w-5 h-5 text-orange-600" />
          <span>7-day easy returns</span>
        </div>
      </div>

      {/* Payment Methods */}
      <div className="mt-6 pt-6 border-t border-gray-200">
        <p className="text-sm text-gray-600 mb-3">We accept:</p>
        <div className="flex flex-wrap gap-2">
          <Badge variant="outline" className="text-xs">Cash on Delivery</Badge>
          <Badge variant="outline" className="text-xs">bKash</Badge>
          <Badge variant="outline" className="text-xs">Nagad</Badge>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
