
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CartItem from '@/components/cart/CartItem';
import CartSummary from '@/components/cart/CartSummary';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ShoppingBag } from 'lucide-react';

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Bold Statement",
      price: 1500,
      image: "/placeholder.svg",
      size: "M",
      color: "Black",
      quantity: 2,
      mood: "Bold"
    },
    {
      id: 2,
      name: "Calm Vibes",
      price: 1200,
      image: "/placeholder.svg",
      size: "L",
      color: "White",
      quantity: 1,
      mood: "Calm"
    }
  ]);

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity === 0) {
      removeItem(id);
      return;
    }
    setCartItems(items =>
      items.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = subtotal > 2000 ? 0 : 100;
  const total = subtotal + shipping;

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-voin-light">
        <Header />
        
        <div className="pt-24 pb-20">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center py-16">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <ShoppingBag className="w-12 h-12 text-gray-400" />
              </div>
              <h1 className="font-grotesk text-3xl font-bold text-voin-black mb-4">
                Your cart is empty
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Looks like you haven't added any items to your cart yet.
              </p>
              <Link to="/shop">
                <Button 
                  size="lg"
                  className="bg-voin-red hover:bg-voin-red/90 text-white font-semibold px-8 py-4 text-lg rounded-full"
                >
                  Start Shopping
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-voin-light">
      <Header />
      
      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="flex items-center gap-4 mb-8">
            <Link to="/shop">
              <Button variant="outline" size="icon" className="rounded-full">
                <ArrowLeft className="w-4 h-4" />
              </Button>
            </Link>
            <h1 className="font-grotesk text-3xl font-bold text-voin-black">
              Shopping Cart ({cartItems.length} {cartItems.length === 1 ? 'item' : 'items'})
            </h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-6">
              {cartItems.map((item) => (
                <CartItem
                  key={item.id}
                  item={item}
                  onUpdateQuantity={updateQuantity}
                  onRemove={removeItem}
                />
              ))}

              {/* Continue Shopping */}
              <div className="pt-6 border-t border-gray-200">
                <Link to="/shop">
                  <Button 
                    variant="outline"
                    className="border-voin-red text-voin-red hover:bg-voin-red hover:text-white"
                  >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Continue Shopping
                  </Button>
                </Link>
              </div>
            </div>

            {/* Cart Summary */}
            <div className="lg:col-span-1">
              <CartSummary
                subtotal={subtotal}
                shipping={shipping}
                total={total}
                itemCount={cartItems.length}
              />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Cart;
