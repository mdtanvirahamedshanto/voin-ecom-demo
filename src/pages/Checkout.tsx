
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CheckoutForm from '@/components/checkout/CheckoutForm';
import OrderSummary from '@/components/checkout/OrderSummary';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

const Checkout = () => {
  const navigate = useNavigate();
  
  // Mock cart data
  const cartItems = [
    {
      id: 1,
      name: "Bold Statement",
      price: 1500,
      image: "/placeholder.svg",
      size: "M",
      color: "Black",
      quantity: 2
    },
    {
      id: 2,
      name: "Calm Vibes",
      price: 1200,
      image: "/placeholder.svg",
      size: "L",
      color: "White",
      quantity: 1
    }
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = subtotal > 2000 ? 0 : 100;
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen bg-voin-light">
      <Header />
      
      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="flex items-center gap-4 mb-8">
            <Button
              variant="outline"
              size="icon"
              onClick={() => navigate('/cart')}
              className="rounded-full"
            >
              <ArrowLeft className="w-4 h-4" />
            </Button>
            <h1 className="font-grotesk text-3xl font-bold text-voin-black">
              Checkout
            </h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Checkout Form */}
            <div className="order-2 lg:order-1">
              <CheckoutForm 
                cartItems={cartItems}
                total={total}
                onOrderComplete={(orderId) => navigate(`/order-confirmation/${orderId}`)}
              />
            </div>

            {/* Order Summary */}
            <div className="order-1 lg:order-2">
              <OrderSummary
                items={cartItems}
                subtotal={subtotal}
                shipping={shipping}
                total={total}
              />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Checkout;
