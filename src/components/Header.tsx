import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ShoppingBag, Search, Menu, X, User } from 'lucide-react';
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigation = [{
    name: 'Home',
    href: '/'
  }, {
    name: 'Shop',
    href: '/shop'
  }, {
    name: 'Track Order',
    href: '/track'
  }];
  return <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="font-grotesk text-2xl font-bold text-voin-black">
            VOIN
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map(item => <Link key={item.name} to={item.href} className={`font-medium transition-colors ${location.pathname === item.href ? 'text-voin-red' : 'text-gray-700 hover:text-voin-red'}`}>
                {item.name}
              </Link>)}
          </nav>

          {/* Right Side Icons */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <Search className="w-5 h-5" />
            </Button>
            
            <Link to="/cart">
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingBag className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 bg-voin-red text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  2
                </span>
              </Button>
            </Link>

            {/* Mobile Menu Button */}
            <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && <div className="md:hidden py-4 border-t border-gray-100">
            <nav className="flex flex-col space-y-4">
              {navigation.map(item => <Link key={item.name} to={item.href} className={`font-medium transition-colors ${location.pathname === item.href ? 'text-voin-red' : 'text-gray-700 hover:text-voin-red'}`} onClick={() => setIsMenuOpen(false)}>
                  {item.name}
                </Link>)}
            </nav>
          </div>}
      </div>
    </header>;
};
export default Header;