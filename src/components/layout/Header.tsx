import React, { useState } from 'react';
import { Search, ShoppingCart, User, Menu, X, Heart, Star, Truck, Shield } from 'lucide-react';
import { Button } from '../ui/Button';
import { useCart } from '../../contexts/CartContext';
import { useAuth } from '../../contexts/AuthContext';

interface HeaderProps {
  onCartClick: () => void;
  onLoginClick: () => void;
  currentPage: string;
  onNavigate: (page: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ 
  onCartClick, 
  onLoginClick, 
  currentPage, 
  onNavigate 
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { itemCount } = useCart();
  const { user, isAuthenticated, logout } = useAuth();

  const navigation = [
    { name: 'Home', href: 'home' },
    { name: 'Shop', href: 'shop' },
    { name: 'About', href: 'about' },
    { name: 'Dropship', href: 'dropship' },
    { name: 'Contact', href: 'contact' }
  ];

  const handleNavClick = (page: string) => {
    onNavigate(page);
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-lg">
      {/* Top banner */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-2 px-4 text-center text-xs sm:text-sm">
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-1 sm:space-y-0 sm:space-x-4">
          <div className="flex items-center space-x-2">
            <Truck className="w-3 h-3 sm:w-4 sm:h-4" />
            <span>Free Shipping on Orders Over $50</span>
          </div>
          <div className="hidden sm:flex items-center space-x-2">
            <Shield className="w-4 h-4" />
            <span>30-Day Money Back Guarantee</span>
          </div>
          <div className="hidden lg:flex items-center space-x-2">
            <Star className="w-4 h-4" />
            <span>Premium Dropshipping Quality</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={() => handleNavClick('home')}
              className="flex items-center space-x-2 text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors"
            >
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">D</span>
              </div>
              <span className="hidden sm:block">DropshipHub</span>
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                  currentPage === item.href
                    ? 'text-blue-600 bg-blue-50 border border-blue-200 shadow-sm'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50 border border-transparent'
                }`}
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search dropshipping products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white/80 backdrop-blur-sm"
              />
            </div>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-3">
            <button className="text-gray-600 hover:text-blue-600 transition-colors p-2 rounded-lg hover:bg-gray-50">
              <Heart className="w-5 h-5" />
            </button>
            
            <button
              onClick={onCartClick}
              className="relative text-gray-600 hover:text-blue-600 transition-colors p-2 rounded-lg hover:bg-gray-50"
            >
              <ShoppingCart className="w-5 h-5" />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium">
                  {itemCount}
                </span>
              )}
            </button>

            {isAuthenticated ? (
              <div className="relative group">
                <button className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors p-2 rounded-lg hover:bg-gray-50">
                  <img
                    src={user?.avatar}
                    alt={user?.name}
                    className="w-8 h-8 rounded-full object-cover border-2 border-gray-200"
                  />
                  <span className="text-sm font-medium">{user?.name}</span>
                </button>
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="py-2">
                    <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                      Profile
                    </button>
                    <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                      Orders
                    </button>
                    <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                      Dropship Dashboard
                    </button>
                    <hr className="my-1" />
                    <button
                      onClick={logout}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                    >
                      Sign out
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <Button onClick={onLoginClick} variant="outline" size="sm" icon={User}>
                Sign In
              </Button>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={onCartClick}
              className="relative text-gray-600 hover:text-blue-600 transition-colors p-2"
            >
              <ShoppingCart className="w-5 h-5" />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-blue-600 transition-colors p-2"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden pb-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search dropshipping products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <div className="px-4 py-2 space-y-1">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className={`block w-full text-left px-3 py-2 text-base font-medium rounded-lg transition-colors ${
                  currentPage === item.href
                    ? 'text-blue-600 bg-blue-50 border border-blue-200'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                }`}
              >
                {item.name}
              </button>
            ))}
            <hr className="my-2" />
            {isAuthenticated ? (
              <div className="space-y-1">
                <div className="flex items-center space-x-3 px-3 py-2">
                  <img
                    src={user?.avatar}
                    alt={user?.name}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <span className="text-sm font-medium text-gray-700">{user?.name}</span>
                </div>
                <button className="block w-full text-left px-3 py-2 text-base text-gray-700 hover:bg-gray-50 rounded-lg">
                  Profile
                </button>
                <button className="block w-full text-left px-3 py-2 text-base text-gray-700 hover:bg-gray-50 rounded-lg">
                  Orders
                </button>
                <button className="block w-full text-left px-3 py-2 text-base text-gray-700 hover:bg-gray-50 rounded-lg">
                  Dropship Dashboard
                </button>
                <button
                  onClick={logout}
                  className="block w-full text-left px-3 py-2 text-base text-gray-700 hover:bg-gray-50 rounded-lg"
                >
                  Sign out
                </button>
              </div>
            ) : (
              <Button onClick={onLoginClick} fullWidth variant="outline" icon={User}>
                Sign In
              </Button>
            )}
          </div>
        </div>
      )}
    </header>
  );
};