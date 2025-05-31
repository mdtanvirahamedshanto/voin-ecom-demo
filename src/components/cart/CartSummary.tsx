
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart, Tag, Truck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

interface CartSummaryProps {
  subtotal: number;
  shipping: number;
  total: number;
  itemCount: number;
}

const CartSummary = ({ subtotal, shipping, total, itemCount }: CartSummaryProps) => {
  const [promoCode, setPromoCode] = useState('');
  const [appliedPromo, setAppliedPromo] = useState('');
  const [discount, setDiscount] = useState(0);

  const applyPromoCode = () => {
    // Mock promo code logic
    if (promoCode.toUpperCase() === 'VOIN10') {
      setAppliedPromo(promoCode);
      setDiscount(subtotal * 0.1); // 10% discount
      setPromoCode('');
    } else {
      alert('Invalid promo code');
    }
  };

  const finalTotal = total - discount;

  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg sticky top-24">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <ShoppingCart className="w-6 h-6 text-voin-red" />
        <h2 className="font-grotesk text-2xl font-bold text-voin-black">
          Order Summary
        </h2>
      </div>

      {/* Promo Code */}
      {!appliedPromo && (
        <div className="mb-6">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Promo Code
          </label>
          <div className="flex gap-2">
            <Input
              value={promoCode}
              onChange={(e) => setPromoCode(e.target.value)}
              placeholder="Enter code"
              className="flex-1"
            />
            <Button 
              onClick={applyPromoCode}
              variant="outline"
              className="border-voin-red text-voin-red hover:bg-voin-red hover:text-white"
            >
              Apply
            </Button>
          </div>
        </div>
      )}

      {/* Applied Promo */}
      {appliedPromo && (
        <div className="mb-6 p-3 bg-green-50 border border-green-200 rounded-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Tag className="w-4 h-4 text-green-600" />
              <span className="text-sm font-semibold text-green-800">
                {appliedPromo} Applied
              </span>
            </div>
            <Button
              size="sm"
              variant="ghost"
              onClick={() => {
                setAppliedPromo('');
                setDiscount(0);
              }}
              className="text-green-600 hover:text-green-800 h-auto p-1"
            >
              Remove
            </Button>
          </div>
        </div>
      )}

      {/* Order Details */}
      <div className="space-y-4 mb-6">
        <div className="flex justify-between text-gray-600">
          <span>Subtotal ({itemCount} items)</span>
          <span>৳{subtotal}</span>
        </div>
        
        {discount > 0 && (
          <div className="flex justify-between text-green-600">
            <span>Discount</span>
            <span>-৳{discount}</span>
          </div>
        )}
        
        <div className="flex justify-between text-gray-600">
          <div className="flex items-center gap-2">
            <Truck className="w-4 h-4" />
            <span>Shipping</span>
          </div>
          <span>{shipping === 0 ? 'Free' : `৳${shipping}`}</span>
        </div>
        
        {shipping > 0 && (
          <div className="text-xs text-gray-500">
            💡 Free shipping on orders above ৳2000
          </div>
        )}
        
        <hr className="border-gray-200" />
        
        <div className="flex justify-between font-grotesk text-xl font-bold text-voin-black">
          <span>Total</span>
          <span className="text-voin-red">৳{finalTotal}</span>
        </div>
      </div>

      {/* Checkout Button */}
      <Link to="/checkout">
        <Button 
          size="lg"
          className="w-full bg-voin-red hover:bg-voin-red/90 text-white font-semibold py-4 text-lg rounded-full transition-all duration-300 hover:scale-105"
        >
          Proceed to Checkout
        </Button>
      </Link>

      {/* Security Badge */}
      <div className="mt-6 text-center">
        <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
          <Badge variant="secondary" className="gap-1 bg-green-50 text-green-700">
            🔒 Secure Checkout
          </Badge>
        </div>
        <p className="text-xs text-gray-500 mt-2">
          Your payment information is secure and encrypted
        </p>
      </div>

      {/* Accepted Payments */}
      <div className="mt-4 text-center">
        <p className="text-xs text-gray-500 mb-2">We accept:</p>
        <div className="flex justify-center gap-2">
          <Badge variant="outline" className="text-xs">Cash on Delivery</Badge>
          <Badge variant="outline" className="text-xs">bKash</Badge>
          <Badge variant="outline" className="text-xs">Nagad</Badge>
        </div>
      </div>
    </div>
  );
};

export default CartSummary;
