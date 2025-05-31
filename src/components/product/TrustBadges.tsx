
import { Shield, Truck, RotateCcw } from 'lucide-react';

const TrustBadges = () => {
  const badges = [
    {
      icon: Shield,
      title: "Secure Checkout",
      description: "100% secure payment processing"
    },
    {
      icon: Truck,
      title: "Fast Delivery",
      description: "3-day delivery across Bangladesh"
    },
    {
      icon: RotateCcw,
      title: "Easy Returns",
      description: "7-day hassle-free returns"
    }
  ];

  return (
    <div className="bg-gradient-to-r from-voin-red to-orange-500 rounded-2xl p-8 mb-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {badges.map((badge, index) => {
          const Icon = badge.icon;
          return (
            <div key={index} className="text-center text-white">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4">
                <Icon className="w-8 h-8" />
              </div>
              <h3 className="font-grotesk text-lg font-bold mb-2">{badge.title}</h3>
              <p className="text-white/90">{badge.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TrustBadges;
