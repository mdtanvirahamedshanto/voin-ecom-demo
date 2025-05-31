
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Heart, Eye, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ProductCardProps {
  product: {
    id: number;
    name: string;
    price: number;
    image: string;
    mood: string;
    isNew?: boolean;
    isMostLoved?: boolean;
    isLimited?: boolean;
  };
}

const ProductCard = ({ product }: ProductCardProps) => {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
      {/* Product Image */}
      <div className="relative aspect-square overflow-hidden bg-gray-100">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        
        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {product.isNew && (
            <Badge className="bg-black hover:bg-gray-800 text-white">New</Badge>
          )}
          {product.isMostLoved && (
            <Badge className="bg-gray-600 hover:bg-gray-700 text-white">Most Loved</Badge>
          )}
          {product.isLimited && (
            <Badge className="bg-gray-800 hover:bg-black text-white">Limited</Badge>
          )}
        </div>

        {/* Mood Tag */}
        <div className="absolute bottom-4 left-4">
          <Badge variant="secondary" className="bg-white/90 text-black">
            {product.mood}
          </Badge>
        </div>

        {/* Quick Actions */}
        <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button 
            size="icon" 
            variant="secondary" 
            className="rounded-full bg-white/90 hover:bg-white"
            onClick={() => setIsLiked(!isLiked)}
          >
            <Heart className={`w-4 h-4 ${isLiked ? 'fill-black text-black' : ''}`} />
          </Button>
          <Link to={`/product/${product.id}`}>
            <Button size="icon" variant="secondary" className="rounded-full bg-white/90 hover:bg-white">
              <Eye className="w-4 h-4" />
            </Button>
          </Link>
        </div>

        {/* Quick Add to Cart */}
        <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button size="icon" className="rounded-full bg-black hover:bg-gray-800">
            <ShoppingBag className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-6">
        <h3 className="font-grotesk text-xl font-bold text-black mb-2">
          {product.name}
        </h3>
        <div className="flex items-center justify-between">
          <span className="font-grotesk text-2xl font-bold text-black">
            ৳{product.price}
          </span>
          <Link to={`/product/${product.id}`}>
            <Button 
              variant="outline" 
              className="border-black text-black hover:bg-black hover:text-white transition-colors duration-300"
            >
              View Details
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
