import { Leaf, Sparkles, Shield } from 'lucide-react';
const QualityShowcase = () => {
  const features = [{
    icon: Leaf,
    title: "100% Organic Cotton",
    description: "Sustainably sourced premium cotton that's gentle on your skin and the environment",
    color: "text-green-600",
    bgColor: "bg-green-50"
  }, {
    icon: Sparkles,
    title: "Handcrafted Design",
    description: "Each design is carefully crafted by our team of artists to ensure uniqueness and quality",
    color: "text-purple-600",
    bgColor: "bg-purple-50"
  }, {
    icon: Shield,
    title: "Soft & Durable Print",
    description: "Our advanced printing technology ensures vibrant colors that last wash after wash",
    color: "text-blue-600",
    bgColor: "bg-blue-50"
  }];
  return <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-grotesk text-4xl md:text-5xl font-bold text-voin-black mb-4">
            Uncompromising Quality
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Every VOIN T-shirt is a testament to our commitment to excellence and sustainability
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => {
          const Icon = feature.icon;
          return <div key={index} className="group text-center p-8 rounded-3xl bg-gray-50 hover:bg-white hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className={`inline-flex items-center justify-center w-20 h-20 ${feature.bgColor} rounded-full mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`w-10 h-10 ${feature.color}`} />
                </div>
                <h3 className="font-grotesk text-2xl font-bold text-voin-black mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>;
        })}
        </div>

        {/* Quality Promise */}
        <div className="bg-gradient-to-r from-voin-black to-gray-800 rounded-3xl p-8 md:p-12 text-center text-white">
          <h3 className="font-grotesk text-3xl md:text-4xl font-bold mb-4">
            Our Quality Promise
          </h3>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            If you're not completely satisfied with the quality of your VOIN T-shirt, 
            we'll replace it or give you a full refund. No questions asked.
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-center">
            <div>
              <div className="font-grotesk text-3xl font-bold text-voin-red mb-2 bg-slate-50">30 Days</div>
              <div className="text-sm opacity-90">Quality Guarantee</div>
            </div>
            <div>
              <div className="font-grotesk text-3xl font-bold text-voin-red mb-2 bg-slate-50">100%</div>
              <div className="text-sm opacity-90">Satisfaction Rate</div>
            </div>
            <div>
              <div className="font-grotesk text-3xl font-bold text-voin-red mb-2 bg-slate-50">5★</div>
              <div className="text-sm opacity-90">Average Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default QualityShowcase;