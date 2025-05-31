
import ProductCard from '@/components/shop/ProductCard';

interface RelatedProductsProps {
  currentProductId: number;
}

const RelatedProducts = ({ currentProductId }: RelatedProductsProps) => {
  // Mock related products with the new images
  const relatedProducts = [
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
    }
  ];

  return (
    <section>
      <h2 className="font-grotesk text-3xl font-bold text-black text-center mb-12">
        You Might Also Like
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {relatedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default RelatedProducts;
