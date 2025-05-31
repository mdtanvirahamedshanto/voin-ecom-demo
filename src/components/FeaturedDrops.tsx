
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Heart, Eye, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';

const FeaturedDrops = () => {
  const products = [
    {
      id: 1,
      name: "Bold Statement",
      price: 1500,
      image: "https://cdn.kaft.com/static/images/cache/800/tisort_dim_31470_800_800.jpg?cacheID=1744362691000",
      mood: "Bold",
      isNew: true,
      isMostLoved: false,
      isLimited: false,
      tagline: "Make your presence known"
    },
    {
      id: 2,
      name: "Calm Vibes",
      price: 1200,
      image: "https://cdn.kaft.com/static/images/cache/800/tisort_applien_31175_800_800.jpg?cacheID=1744314129000",
      mood: "Calm",
      isNew: false,
      isMostLoved: true,
      isLimited: false,
      tagline: "Find your inner peace"
    },
    {
      id: 3,
      name: "Rebel Soul",
      price: 1800,
      image: "https://cdn.kaft.com/static/images/cache/800/tisort_dailypractice_31507_800_800.jpg?cacheID=1744312291000",
      mood: "Rebel",
      isNew: false,
      isMostLoved: false,
      isLimited: true,
      tagline: "Break the rules"
    },
    {
      id: 4,
      name: "Love Express",
      price: 1400,
      image: "http://cdn.kaft.com/static/images/cache/800/tisort_plania_31187_800_800.jpg?cacheID=1744314129000",
      mood: "Lover",
      isNew: true,
      isMostLoved: true,
      isLimited: false,
      tagline: "Spread the love"
    },
    {
      id: 5,
      name: "Urban Bold",
      price: 1600,
      image: "https://cdn.kaft.com/static/images/cache/800/tisort_zzz_31181_800_800.jpg?cacheID=1744314129000",
      mood: "Bold",
      isNew: false,
      isMostLoved: false,
      isLimited: false,
      tagline: "City streets, bold beats"
    },
    {
      id: 6,
      name: "Zen Master",
      price: 1300,
      image: "https://cdn.kaft.com/static/images/cache/800/tisort_monosansu_31338_800_800.jpg?cacheID=1741790752000",
      mood: "Calm",
      isNew: false,
      isMostLoved: true,
      isLimited: true,
      tagline: "Master your moment"
    }
  ];

  return (
    <section id="featured-drops" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-grotesk text-4xl md:text-5xl font-bold text-black mb-4">
            Featured Drops
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our latest collection of premium T-shirts designed to express your unique style
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {products.map((product) => (
            <div key={product.id} className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
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
                  <Button size="icon" variant="secondary" className="rounded-full bg-white/90 hover:bg-white">
                    <Heart className="w-4 h-4" />
                  </Button>
                  <Button size="icon" variant="secondary" className="rounded-full bg-white/90 hover:bg-white">
                    <Eye className="w-4 h-4" />
                  </Button>
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
                <p className="text-gray-600 text-sm mb-3 italic">
                  "{product.tagline}"
                </p>
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
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Link to="/shop">
            <Button 
              size="lg" 
              className="bg-black text-white hover:bg-gray-800 px-12 py-4 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105"
            >
              View All Products
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedDrops;
