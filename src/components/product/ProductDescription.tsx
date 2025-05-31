
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Truck, RotateCcw, Shield, Star } from 'lucide-react';

interface ProductDescriptionProps {
  product: {
    name: string;
    description: string;
    fabric: string;
    fit: string;
    care: string;
  };
}

const ProductDescription = ({ product }: ProductDescriptionProps) => {
  const reviews = [
    {
      id: 1,
      name: "Sarah Ahmed",
      rating: 5,
      comment: "Amazing quality! The fabric is so soft and the design is exactly what I wanted.",
      date: "2 days ago",
      verified: true
    },
    {
      id: 2,
      name: "Rahman Khan",
      rating: 5,
      comment: "Perfect fit and great material. Will definitely order more!",
      date: "1 week ago",
      verified: true
    },
    {
      id: 3,
      name: "Fatima Islam",
      rating: 4,
      comment: "Love the design but wished it came in more colors.",
      date: "2 weeks ago",
      verified: true
    }
  ];

  return (
    <section className="bg-white rounded-2xl p-8 shadow-lg">
      <Tabs defaultValue="description" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="description">Details</TabsTrigger>
          <TabsTrigger value="sizing">Size Guide</TabsTrigger>
          <TabsTrigger value="reviews">Reviews (127)</TabsTrigger>
        </TabsList>
        
        <TabsContent value="description" className="mt-8 space-y-8">
          {/* Product Details */}
          <div className="space-y-6">
            <h3 className="font-grotesk text-2xl font-bold text-voin-black">
              Product Details
            </h3>
            
            <p className="text-gray-700 leading-relaxed text-lg">
              {product.description} Crafted with attention to detail and designed for comfort, 
              this T-shirt represents the perfect blend of style and substance.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <h4 className="font-grotesk font-bold text-voin-black">Fabric</h4>
                <p className="text-gray-600">{product.fabric}</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-grotesk font-bold text-voin-black">Fit</h4>
                <p className="text-gray-600">{product.fit}</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-grotesk font-bold text-voin-black">Care Instructions</h4>
                <p className="text-gray-600">{product.care}</p>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t">
            <div className="flex items-start gap-3">
              <Truck className="w-6 h-6 text-voin-red mt-1" />
              <div>
                <h4 className="font-grotesk font-bold text-voin-black mb-1">Fast Shipping</h4>
                <p className="text-sm text-gray-600">3-day delivery across Bangladesh</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <RotateCcw className="w-6 h-6 text-voin-red mt-1" />
              <div>
                <h4 className="font-grotesk font-bold text-voin-black mb-1">Easy Returns</h4>
                <p className="text-sm text-gray-600">7-day hassle-free returns</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Shield className="w-6 h-6 text-voin-red mt-1" />
              <div>
                <h4 className="font-grotesk font-bold text-voin-black mb-1">Quality Guarantee</h4>
                <p className="text-sm text-gray-600">100% satisfaction guaranteed</p>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="sizing" className="mt-8">
          <div className="space-y-6">
            <h3 className="font-grotesk text-2xl font-bold text-voin-black">
              Size Guide
            </h3>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-300 px-4 py-3 text-left font-grotesk font-bold">Size</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-grotesk font-bold">Chest (inches)</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-grotesk font-bold">Length (inches)</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-grotesk font-bold">Shoulder (inches)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-semibold">S</td>
                    <td className="border border-gray-300 px-4 py-3">36-38</td>
                    <td className="border border-gray-300 px-4 py-3">26</td>
                    <td className="border border-gray-300 px-4 py-3">17</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-semibold">M</td>
                    <td className="border border-gray-300 px-4 py-3">38-40</td>
                    <td className="border border-gray-300 px-4 py-3">27</td>
                    <td className="border border-gray-300 px-4 py-3">18</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-semibold">L</td>
                    <td className="border border-gray-300 px-4 py-3">40-42</td>
                    <td className="border border-gray-300 px-4 py-3">28</td>
                    <td className="border border-gray-300 px-4 py-3">19</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-semibold">XL</td>
                    <td className="border border-gray-300 px-4 py-3">42-44</td>
                    <td className="border border-gray-300 px-4 py-3">29</td>
                    <td className="border border-gray-300 px-4 py-3">20</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h4 className="font-grotesk font-bold text-blue-900 mb-2">💡 Sizing Tips</h4>
              <ul className="text-blue-800 space-y-1 text-sm">
                <li>• Measure yourself while wearing a similar fitting T-shirt</li>
                <li>• If you're between sizes, we recommend going one size up</li>
                <li>• All measurements are in inches and represent garment measurements</li>
                <li>• Contact us if you need help choosing the right size</li>
              </ul>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="reviews" className="mt-8">
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="font-grotesk text-2xl font-bold text-voin-black">
                Customer Reviews
              </h3>
              <div className="flex items-center gap-2">
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="font-semibold">4.8 out of 5</span>
                <span className="text-gray-600">(127 reviews)</span>
              </div>
            </div>

            <div className="space-y-6">
              {reviews.map((review) => (
                <div key={review.id} className="border-b border-gray-200 pb-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-semibold text-voin-black">{review.name}</h4>
                        {review.verified && (
                          <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                            Verified Purchase
                          </span>
                        )}
                      </div>
                      <div className="flex gap-1 mb-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star 
                            key={star} 
                            className={`w-4 h-4 ${
                              star <= review.rating 
                                ? 'fill-yellow-400 text-yellow-400' 
                                : 'text-gray-300'
                            }`} 
                          />
                        ))}
                      </div>
                    </div>
                    <span className="text-sm text-gray-500">{review.date}</span>
                  </div>
                  <p className="text-gray-700">{review.comment}</p>
                </div>
              ))}
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </section>
  );
};

export default ProductDescription;
