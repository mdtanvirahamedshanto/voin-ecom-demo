
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductGrid from '@/components/shop/ProductGrid';
import ShopFilters from '@/components/shop/ShopFilters';
import { Button } from '@/components/ui/button';
import { SlidersHorizontal } from 'lucide-react';

const Shop = () => {
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    size: '',
    color: '',
    mood: '',
    priceRange: [0, 5000]
  });

  return (
    <div className="min-h-screen bg-voin-light">
      <Header />
      
      {/* Shop Header */}
      <section className="pt-24 pb-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="font-grotesk text-4xl md:text-5xl font-bold text-voin-black mb-4">
              Shop Bold. Shop VOIN.
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover T-shirts that match your personality and express your unique style
            </p>
          </div>
          
          {/* Mobile Filter Toggle */}
          <div className="md:hidden flex justify-between items-center mb-6">
            <span className="text-gray-600">24 products</span>
            <Button 
              variant="outline" 
              onClick={() => setShowFilters(!showFilters)}
              className="gap-2"
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filters
            </Button>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 pb-20">
        <div className="flex gap-8">
          {/* Sidebar Filters */}
          <aside className={`${showFilters ? 'block' : 'hidden'} md:block w-full md:w-80 bg-white rounded-2xl p-6 h-fit shadow-lg`}>
            <ShopFilters filters={filters} onFiltersChange={setFilters} />
          </aside>

          {/* Product Grid */}
          <main className="flex-1">
            <ProductGrid filters={filters} />
          </main>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Shop;
