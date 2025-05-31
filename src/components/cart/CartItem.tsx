
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CartItemProps {
  item: {
    id: number;
    name: string;
    price: number;
    image: string;
    size: string;
    color: string;
    quantity: number;
    mood: string;
  };
  onUpdateQuantity: (id: number, quantity: number) => void;
  onRemove: (id: number) => void;
}

const CartItem = ({ item, onUpdateQuantity, onRemove }: CartItemProps) => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg">
      <div className="flex gap-6">
        {/* Product Image */}
        <Link to={`/product/${item.id}`} className="flex-shrink-0">
          <div className="w-24 h-24 bg-gray-100 rounded-xl overflow-hidden hover:scale-105 transition-transform duration-300">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover"
            />
          </div>
        </Link>

        {/* Product Details */}
        <div className="flex-1 space-y-3">
          <div className="flex items-start justify-between">
            <div>
              <Link 
                to={`/product/${item.id}`}
                className="font-grotesk text-xl font-bold text-voin-black hover:text-voin-red transition-colors"
              >
                {item.name}
              </Link>
              <div className="flex items-center gap-2 mt-1">
                <Badge variant="secondary" className="text-xs">
                  {item.mood}
                </Badge>
              </div>
            </div>
            <Button
              size="icon"
              variant="ghost"
              onClick={() => onRemove(item.id)}
              className="text-gray-400 hover:text-red-500 hover:bg-red-50"
            >
              <Trash2 className="w-4 h-4" />
            </Button>
          </div>

          {/* Size and Color */}
          <div className="flex gap-4 text-sm text-gray-600">
            <span>Size: <strong>{item.size}</strong></span>
            <span>Color: <strong>{item.color}</strong></span>
          </div>

          {/* Price and Quantity */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              {/* Quantity Controls */}
              <div className="flex items-center border border-gray-300 rounded-lg">
                <Button
                  size="icon"
                  variant="ghost"
                  onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                  disabled={item.quantity <= 1}
                  className="h-8 w-8"
                >
                  <Minus className="w-3 h-3" />
                </Button>
                <span className="px-3 py-1 font-semibold min-w-[2rem] text-center">
                  {item.quantity}
                </span>
                <Button
                  size="icon"
                  variant="ghost"
                  onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                  className="h-8 w-8"
                >
                  <Plus className="w-3 h-3" />
                </Button>
              </div>
            </div>

            {/* Price */}
            <div className="text-right">
              <div className="font-grotesk text-xl font-bold text-voin-red">
                ৳{item.price * item.quantity}
              </div>
              {item.quantity > 1 && (
                <div className="text-sm text-gray-500">
                  ৳{item.price} each
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
