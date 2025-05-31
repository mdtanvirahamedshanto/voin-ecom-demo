
import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductGallery from '@/components/product/ProductGallery';
import ProductInfo from '@/components/product/ProductInfo';
import ProductDescription from '@/components/product/ProductDescription';
import RelatedProducts from '@/components/product/RelatedProducts';
import TrustBadges from '@/components/product/TrustBadges';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Heart, Share2 } from 'lucide-react';

const ProductDetail = () => {
  const { id } = useParams();
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [quantity, setQuantity] = useState(1);

  // Mock product data with the new images
  const product = {
    id: 1,
    name: "Bold Statement",
    price: 1500,
    originalPrice: 2000,
    images: [
      "https://cdn.kaft.com/static/images/cache/800/tisort_dim_31470_800_800.jpg?cacheID=1744362691000",
      "https://cdn.kaft.com/static/images/cache/800/tisort_applien_31175_800_800.jpg?cacheID=1744314129000", 
      "https://cdn.kaft.com/static/images/cache/800/tisort_dailypractice_31507_800_800.jpg?cacheID=1744312291000",
      "http://cdn.kaft.com/static/images/cache/800/tisort_plania_31187_800_800.jpg?cacheID=1744314129000"
    ],
    mood: "Bold",
    tagline: "Make your presence known",
    description: "Express your boldness with this premium T-shirt designed for those who dare to stand out.",
    isNew: true,
    isMostLoved: false,
    isLimited: false,
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Black', value: '#000000' },
      { name: 'White', value: '#FFFFFF' },
      { name: 'Gray', value: '#808080' }
    ],
    fabric: "100% Organic Cotton",
    fit: "Regular Fit",
    care: "Machine wash cold, tumble dry low",
    stock: 15
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <div className="flex items-center gap-4 mb-8">
            <Link to="/shop">
              <Button variant="outline" size="icon" className="rounded-full">
                <ArrowLeft className="w-4 h-4" />
              </Button>
            </Link>
            <nav className="text-sm text-gray-600">
              <Link to="/" className="hover:text-black">Home</Link>
              <span className="mx-2">/</span>
              <Link to="/shop" className="hover:text-black">Shop</Link>
              <span className="mx-2">/</span>
              <span className="text-black">{product.name}</span>
            </nav>
          </div>

          {/* Product Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            {/* Product Gallery */}
            <ProductGallery images={product.images} productName={product.name} />

            {/* Product Info */}
            <div className="space-y-8">
              <ProductInfo 
                product={product}
                selectedSize={selectedSize}
                setSelectedSize={setSelectedSize}
                selectedColor={selectedColor}
                setSelectedColor={setSelectedColor}
                quantity={quantity}
                setQuantity={setQuantity}
              />
              
              {/* Action Buttons */}
              <div className="flex gap-4">
                <Button size="icon" variant="outline" className="rounded-full">
                  <Heart className="w-5 h-5" />
                </Button>
                <Button size="icon" variant="outline" className="rounded-full">
                  <Share2 className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>

          {/* Product Description */}
          <ProductDescription product={product} />

          {/* Trust Badges */}
          <TrustBadges />
        </div>
      </div>

      {/* Related Products */}
      <div className="bg-white py-20">
        <div className="container mx-auto px-4">
          <RelatedProducts currentProductId={parseInt(id || '1')} />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductDetail;
