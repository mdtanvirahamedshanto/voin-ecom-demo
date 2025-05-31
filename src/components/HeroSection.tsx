
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

const HeroSection = () => {
  const scrollToProducts = () => {
    const productsSection = document.getElementById('featured-drops');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-gray-50 to-gray-100 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 border border-black rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 border border-black rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-black/10 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <h1 className="font-grotesk text-5xl md:text-7xl font-bold text-black leading-tight">
                Express Your
                <span className="text-black block">Boldness</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 max-w-2xl">
                Premium T-shirts that speak your language. 
                Crafted for those who dare to stand out.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="bg-black hover:bg-gray-800 text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg"
                onClick={scrollToProducts}
              >
                Shop Now
                <ArrowDown className="ml-2 w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-black text-black hover:bg-black hover:text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300"
              >
                Our Story
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="flex justify-center lg:justify-start gap-8 pt-8">
              <div className="text-center">
                <div className="font-grotesk text-2xl font-bold text-black">1000+</div>
                <div className="text-sm text-gray-600">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="font-grotesk text-2xl font-bold text-black">24/7</div>
                <div className="text-sm text-gray-600">Support</div>
              </div>
              <div className="text-center">
                <div className="font-grotesk text-2xl font-bold text-black">3 Days</div>
                <div className="text-sm text-gray-600">Fast Delivery</div>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="relative w-full h-96 lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://cdn.kaft.com/static/images/content/banner/1746433654165.jpg"
                alt="VOIN premium T-shirt collection hero image"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              
              {/* Floating Elements */}
              <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2">
                <span className="text-sm font-semibold text-black">New Drop</span>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-black rounded-full opacity-60"></div>
            <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-black/20 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Button
          variant="ghost"
          size="icon"
          onClick={scrollToProducts}
          className="rounded-full bg-white/80 backdrop-blur-sm hover:bg-white"
        >
          <ArrowDown className="w-5 h-5 text-black" />
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
