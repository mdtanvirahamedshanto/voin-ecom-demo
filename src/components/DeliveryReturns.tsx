
import { Truck, RotateCcw, CreditCard, Headphones } from 'lucide-react';

const DeliveryReturns = () => {
  const services = [
    {
      icon: Truck,
      title: "3-Day Delivery",
      description: "Fast delivery across Bangladesh",
      details: ["Free delivery on orders above ৳2000", "Express delivery available", "Real-time tracking"],
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      icon: RotateCcw,
      title: "Easy 7-Day Returns",
      description: "Hassle-free return policy",
      details: ["No questions asked", "Free return pickup", "Full refund guarantee"],
      color: "text-green-600",
      bgColor: "bg-green-50"
    },
    {
      icon: CreditCard,
      title: "Cash on Delivery",
      description: "Pay when you receive",
      details: ["100% secure payment", "bKash & Nagad accepted", "No advance payment required"],
      color: "text-purple-600",
      bgColor: "bg-purple-50"
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "We're here to help",
      details: ["WhatsApp support", "Call center available", "Quick response time"],
      color: "text-orange-600",
      bgColor: "bg-orange-50"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-grotesk text-4xl md:text-5xl font-bold text-voin-black mb-4">
            Why Choose VOIN?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We make shopping with us as smooth and enjoyable as wearing our T-shirts
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group text-center p-6 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 ${service.bgColor} rounded-full mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`w-8 h-8 ${service.color}`} />
                </div>
                
                <h3 className="font-grotesk text-xl font-bold text-voin-black mb-3">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>
                
                <ul className="text-sm text-gray-500 space-y-1">
                  {service.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center justify-center gap-2">
                      <div className="w-1 h-1 bg-voin-red rounded-full"></div>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Contact Information */}
        <div className="bg-gradient-to-r from-voin-red to-orange-500 rounded-3xl p-8 md:p-12 text-center text-white">
          <h3 className="font-grotesk text-3xl md:text-4xl font-bold mb-4">
            Need Help? We're Here!
          </h3>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Have questions about our products, delivery, or returns? Our friendly support team is ready to assist you.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
              <h4 className="font-grotesk text-lg font-bold mb-2">WhatsApp</h4>
              <p className="opacity-90">+880 1234-567890</p>
              <p className="text-sm opacity-75 mt-1">24/7 Available</p>
            </div>
            
            <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
              <h4 className="font-grotesk text-lg font-bold mb-2">Email</h4>
              <p className="opacity-90">support@voin.bd</p>
              <p className="text-sm opacity-75 mt-1">Response within 2 hours</p>
            </div>
            
            <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
              <h4 className="font-grotesk text-lg font-bold mb-2">Call Center</h4>
              <p className="opacity-90">16263</p>
              <p className="text-sm opacity-75 mt-1">9 AM - 9 PM</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeliveryReturns;
