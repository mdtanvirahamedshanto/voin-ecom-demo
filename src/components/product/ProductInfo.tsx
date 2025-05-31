
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Minus, Plus, ShoppingCart, Star } from 'lucide-react';

interface ProductInfoProps {
  product: {
    name: string;
    price: number;
    originalPrice?: number;
    mood: string;
    tagline: string;
    description: string;
    isNew?: boolean;
    isMostLoved?: boolean;
    isLimited?: boolean;
    sizes: string[];
    colors: { name: string; value: string }[];
    stock: number;
  };
  selectedSize: string;
  setSelectedSize: (size: string) => void;
  selectedColor: string;
  setSelectedColor: (color: string) => void;
  quantity: number;
  setQuantity: (quantity: number) => void;
}

const ProductInfo = ({
  product,
  selectedSize,
  setSelectedSize,
  selectedColor,
  setSelectedColor,
  quantity,
  setQuantity
}: ProductInfoProps) => {
  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const increaseQuantity = () => {
    if (quantity < product.stock) setQuantity(quantity + 1);
  };

  return (
    <div className="space-y-8">
      {/* Product Title & Badges */}
      <div className="space-y-4">
        <div className="flex flex-wrap gap-2">
          {product.isNew && (
            <Badge className="bg-voin-red hover:bg-voin-red text-white">New</Badge>
          )}
          {product.isMostLoved && (
            <Badge className="bg-pink-500 hover:bg-pink-600 text-white">Most Loved</Badge>
          )}
          {product.isLimited && (
            <Badge className="bg-orange-500 hover:bg-orange-600 text-white">Limited Edition</Badge>
          )}
          <Badge variant="secondary" className="bg-gray-100">
            {product.mood}
          </Badge>
        </div>

        <h1 className="font-grotesk text-4xl font-bold text-voin-black">
          {product.name}
        </h1>

        <p className="text-xl text-gray-600 italic">
          "{product.tagline}"
        </p>

        {/* Rating */}
        <div className="flex items-center gap-2">
          <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <span className="text-sm text-gray-600">(127 reviews)</span>
        </div>
      </div>

      {/* Price */}
      <div className="space-y-2">
        <div className="flex items-baseline gap-4">
          <span className="font-grotesk text-4xl font-bold text-voin-red">
            ৳{product.price}
          </span>
          {product.originalPrice && (
            <span className="text-2xl text-gray-500 line-through">
              ৳{product.originalPrice}
            </span>
          )}
        </div>
        {product.originalPrice && (
          <p className="text-green-600 font-semibold">
            Save ৳{product.originalPrice - product.price} ({Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% off)
          </p>
        )}
      </div>

      {/* Description */}
      <p className="text-gray-700 leading-relaxed">
        {product.description}
      </p>

      {/* Size Selection */}
      <div className="space-y-3">
        <h3 className="font-grotesk text-lg font-bold text-voin-black">
          Size {selectedSize && <span className="text-voin-red">({selectedSize})</span>}
        </h3>
        <div className="flex gap-3">
          {product.sizes.map((size) => (
            <Button
              key={size}
              variant={selectedSize === size ? "default" : "outline"}
              onClick={() => setSelectedSize(size)}
              className={selectedSize === size ? 
                "bg-voin-red hover:bg-voin-red/90" : 
                "border-gray-300 hover:border-voin-red hover:text-voin-red"
              }
            >
              {size}
            </Button>
          ))}
        </div>
      </div>

      {/* Color Selection */}
      <div className="space-y-3">
        <h3 className="font-grotesk text-lg font-bold text-voin-black">
          Color {selectedColor && <span className="text-voin-red">({selectedColor})</span>}
        </h3>
        <div className="flex gap-3">
          {product.colors.map((color) => (
            <button
              key={color.name}
              className={`w-12 h-12 rounded-full border-2 transition-all duration-200 ${
                selectedColor === color.name
                  ? 'border-voin-red scale-110'
                  : 'border-gray-300 hover:border-gray-400'
              }`}
              style={{ backgroundColor: color.value }}
              onClick={() => setSelectedColor(color.name)}
              title={color.name}
            >
              {color.name === 'White' && (
                <div className="w-full h-full border border-gray-200 rounded-full"></div>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Quantity */}
      <div className="space-y-3">
        <h3 className="font-grotesk text-lg font-bold text-voin-black">Quantity</h3>
        <div className="flex items-center gap-4">
          <div className="flex items-center border border-gray-300 rounded-lg">
            <Button
              size="icon"
              variant="ghost"
              onClick={decreaseQuantity}
              disabled={quantity <= 1}
              className="h-10 w-10"
            >
              <Minus className="w-4 h-4" />
            </Button>
            <span className="px-4 py-2 font-semibold min-w-[3rem] text-center">
              {quantity}
            </span>
            <Button
              size="icon"
              variant="ghost"
              onClick={increaseQuantity}
              disabled={quantity >= product.stock}
              className="h-10 w-10"
            >
              <Plus className="w-4 h-4" />
            </Button>
          </div>
          <span className="text-sm text-gray-600">
            {product.stock} in stock
          </span>
        </div>
      </div>

      {/* Add to Cart */}
      <div className="space-y-4">
        <Button
          size="lg"
          className="w-full bg-voin-red hover:bg-voin-red/90 text-white font-semibold py-4 text-lg rounded-full transition-all duration-300 hover:scale-105"
          disabled={!selectedSize || !selectedColor}
        >
          <ShoppingCart className="w-5 h-5 mr-2" />
          Add to Cart - ৳{product.price * quantity}
        </Button>
        
        {(!selectedSize || !selectedColor) && (
          <p className="text-sm text-gray-500 text-center">
            Please select size and color to continue
          </p>
        )}

        <Button
          variant="outline"
          size="lg"
          className="w-full border-voin-black text-voin-black hover:bg-voin-black hover:text-white font-semibold py-4 text-lg rounded-full"
        >
          Buy Now
        </Button>
      </div>

      {/* Stock Warning */}
      {product.stock <= 5 && (
        <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
          <p className="text-orange-800 font-semibold">
            ⚠️ Only {product.stock} left in stock!
          </p>
        </div>
      )}
    </div>
  );
};

export default ProductInfo;
