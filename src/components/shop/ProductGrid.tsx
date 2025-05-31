
import ProductCard from './ProductCard';

interface ProductGridProps {
  filters: {
    size: string;
    color: string;
    mood: string;
    priceRange: number[];
  };
}

const ProductGrid = ({ filters }: ProductGridProps) => {
  // Mock products data with the new images
  const allProducts = [
    {
      id: 1,
      name: "Bold Statement",
      price: 1500,
      image: "https://cdn.kaft.com/static/images/cache/800/tisort_dim_31470_800_800.jpg?cacheID=1744362691000",
      mood: "Bold",
      isNew: true,
      isMostLoved: false,
      isLimited: false
    },
    {
      id: 2,
      name: "Calm Vibes",
      price: 1200,
      image: "https://cdn.kaft.com/static/images/cache/800/tisort_applien_31175_800_800.jpg?cacheID=1744314129000",
      mood: "Calm",
      isNew: false,
      isMostLoved: true,
      isLimited: false
    },
    {
      id: 3,
      name: "Rebel Soul",
      price: 1800,
      image: "https://cdn.kaft.com/static/images/cache/800/tisort_dailypractice_31507_800_800.jpg?cacheID=1744312291000",
      mood: "Rebel",
      isNew: false,
      isMostLoved: false,
      isLimited: true
    },
    {
      id: 4,
      name: "Love Express",
      price: 1400,
      image: "http://cdn.kaft.com/static/images/cache/800/tisort_plania_31187_800_800.jpg?cacheID=1744314129000",
      mood: "Lover",
      isNew: true,
      isMostLoved: true,
      isLimited: false
    },
    {
      id: 5,
      name: "Urban Bold",
      price: 1600,
      image: "https://cdn.kaft.com/static/images/cache/800/tisort_zzz_31181_800_800.jpg?cacheID=1744314129000",
      mood: "Bold",
      isNew: false,
      isMostLoved: false,
      isLimited: false
    },
    {
      id: 6,
      name: "Zen Master",
      price: 1300,
      image: "https://cdn.kaft.com/static/images/cache/800/tisort_monosansu_31338_800_800.jpg?cacheID=1741790752000",
      mood: "Calm",
      isNew: false,
      isMostLoved: true,
      isLimited: true
    },
    {
      id: 7,
      name: "Creative Mind",
      price: 1550,
      image: "https://cdn.kaft.com/static/images/cache/800/tisort_dim_31470_800_800.jpg?cacheID=1744362691000",
      mood: "Bold",
      isNew: true,
      isMostLoved: false,
      isLimited: false
    },
    {
      id: 8,
      name: "Peaceful Heart",
      price: 1250,
      image: "https://cdn.kaft.com/static/images/cache/800/tisort_applien_31175_800_800.jpg?cacheID=1744314129000",
      mood: "Calm",
      isNew: false,
      isMostLoved: true,
      isLimited: false
    }
  ];

  // Filter products based on applied filters
  const filteredProducts = allProducts.filter(product => {
    const matchesMood = !filters.mood || product.mood.toLowerCase() === filters.mood.toLowerCase();
    const matchesPrice = product.price >= filters.priceRange[0] && product.price <= filters.priceRange[1];
    
    return matchesMood && matchesPrice;
  });

  return (
    <div className="space-y-6">
      {/* Results Header */}
      <div className="flex justify-between items-center">
        <p className="text-gray-600">
          Showing {filteredProducts.length} of {allProducts.length} products
        </p>
        <select className="border border-gray-300 rounded-lg px-4 py-2 bg-white">
          <option>Sort by: Featured</option>
          <option>Price: Low to High</option>
          <option>Price: High to Low</option>
          <option>Newest First</option>
          <option>Most Popular</option>
        </select>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Load More */}
      {filteredProducts.length >= 6 && (
        <div className="text-center pt-8">
          <button className="bg-black hover:bg-gray-800 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105">
            Load More Products
          </button>
        </div>
      )}

      {/* No Results */}
      {filteredProducts.length === 0 && (
        <div className="text-center py-16">
          <h3 className="font-grotesk text-2xl font-bold text-black mb-4">
            No products found
          </h3>
          <p className="text-gray-600 mb-6">
            Try adjusting your filters to find what you're looking for
          </p>
          <button 
            onClick={() => window.location.reload()} 
            className="bg-black hover:bg-gray-800 text-white font-semibold px-6 py-3 rounded-full"
          >
            Clear All Filters
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductGrid;
