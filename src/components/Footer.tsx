
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Instagram, Facebook, Mail, Phone, MapPin, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Size Guide', href: '/size-guide' },
    { name: 'Shipping Info', href: '/shipping' },
    { name: 'Return Policy', href: '/returns' },
    { name: 'Terms & Conditions', href: '/terms' },
    { name: 'Privacy Policy', href: '/privacy' }
  ];

  const shopCategories = [
    { name: 'Bold Collection', href: '/shop?mood=bold' },
    { name: 'Calm Vibes', href: '/shop?mood=calm' },
    { name: 'Rebel Soul', href: '/shop?mood=rebel' },
    { name: 'Love Express', href: '/shop?mood=lover' },
    { name: 'New Arrivals', href: '/shop?filter=new' },
    { name: 'Best Sellers', href: '/shop?filter=popular' }
  ];

  return (
    <footer className="bg-black text-white">
      {/* Newsletter Section */}
      <div className="border-b border-gray-800">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="font-grotesk text-3xl font-bold mb-4">
              Stay in the Loop
            </h3>
            <p className="text-gray-400 text-lg mb-8">
              Be the first to know about new drops, exclusive offers, and VOIN community stories
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400 focus:border-white rounded-full px-6"
              />
              <Button className="bg-white hover:bg-gray-200 text-black font-semibold rounded-full px-8">
                Subscribe
              </Button>
            </div>
            
            <p className="text-xs text-gray-500 mt-4">
              By subscribing, you agree to our Privacy Policy and consent to receive updates from VOIN.
            </p>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-6">
            <Link to="/" className="font-grotesk text-3xl font-bold text-white">
              VOIN
            </Link>
            <p className="text-gray-400 leading-relaxed">
              Express your boldness through fashion. Premium T-shirts that speak your language 
              and tell your story.
            </p>
            
            <div className="flex gap-4">
              <Button size="icon" variant="ghost" className="bg-gray-800 hover:bg-white hover:text-black text-white rounded-full">
                <Instagram className="w-5 h-5" />
              </Button>
              <Button size="icon" variant="ghost" className="bg-gray-800 hover:bg-white hover:text-black text-white rounded-full">
                <Facebook className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Shop Section */}
          <div>
            <h4 className="font-grotesk text-xl font-bold mb-6">Shop</h4>
            <ul className="space-y-3">
              {shopCategories.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-grotesk text-xl font-bold mb-6">Support</h4>
            <ul className="space-y-3">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-grotesk text-xl font-bold mb-6">Get in Touch</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-white mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white font-semibold">+880 1234-567890</p>
                  <p className="text-gray-400 text-sm">WhatsApp & Call</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-white mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white font-semibold">support@voin.bd</p>
                  <p className="text-gray-400 text-sm">24/7 Support</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-white mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white font-semibold">Dhaka, Bangladesh</p>
                  <p className="text-gray-400 text-sm">Nationwide Delivery</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <span>© 2024 VOIN. Made with TA Shanto</span>
              <Heart className="w-4 h-4 text-white" />
              <span>in Bangladesh</span>
            </div>
            
            <div className="text-center">
              <p className="text-gray-400 text-sm">
                Design & Developed by <a href="https://mdtanvirahamedshanto.vercel.app" target="_blank" rel="noopener noreferrer" className="text-white hover:underline">ta-shanto</a>
              </p>
            </div>
            
            <div className="flex gap-6 text-sm text-gray-400">
              <Link to="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link to="/sitemap" className="hover:text-white transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* WhatsApp Float Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          size="icon"
          className="w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-2xl animate-pulse hover:animate-none transition-all duration-300 hover:scale-110"
        >
          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
          </svg>
        </Button>
      </div>
    </footer>
  );
};

export default Footer;
