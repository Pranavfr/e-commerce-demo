import React, { useState } from 'react';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { CartSidebar } from './components/cart/CartSidebar';
import { AuthModal } from './components/auth/AuthModal';
import { HomePage } from './pages/HomePage';
import { ShopPage } from './pages/ShopPage';
import { ProductDetailsPage } from './pages/ProductDetailsPage';
import { CheckoutPage } from './pages/CheckoutPage';
import { ContactPage } from './pages/ContactPage';
import { CartProvider } from './contexts/CartContext';
import { AuthProvider } from './contexts/AuthContext';
import { Product } from './types';
import { Toaster } from 'react-hot-toast';

type Page = 'home' | 'shop' | 'product' | 'cart' | 'checkout' | 'contact' | 'order-success' | 'about' | 'dropship';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setCurrentPage('product');
  };

  const handleCheckout = () => {
    setIsCartOpen(false);
    setCurrentPage('checkout');
  };

  const handleOrderComplete = () => {
    setCurrentPage('order-success');
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <HomePage 
            onNavigate={setCurrentPage} 
            onProductClick={handleProductClick}
          />
        );
      case 'shop':
        return <ShopPage onProductClick={handleProductClick} />;
      case 'product':
        return selectedProduct ? (
          <ProductDetailsPage 
            product={selectedProduct} 
            onBack={() => setCurrentPage('shop')}
          />
        ) : null;
      case 'checkout':
        return (
          <CheckoutPage 
            onBack={() => setCurrentPage('home')}
            onOrderComplete={handleOrderComplete}
          />
        );
      case 'contact':
        return <ContactPage />;
      case 'about':
        return (
          <div className="max-w-4xl mx-auto px-4 py-16">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">About DropshipHub</h1>
              <p className="text-xl text-gray-600">Your Premier Dropshipping Destination</p>
            </div>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
                <p className="text-gray-600 mb-6">
                  At DropshipHub, we connect quality products with discerning customers worldwide. 
                  Our curated selection of dropshipping products offers unbeatable value without compromising on quality.
                </p>
                <p className="text-gray-600 mb-6">
                  We partner with trusted suppliers to bring you the latest trends and essential items 
                  at competitive prices, all backed by our commitment to exceptional customer service.
                </p>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    Quality-assured products from verified suppliers
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    Fast shipping and reliable delivery
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    Competitive pricing with regular discounts
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    24/7 customer support and easy returns
                  </li>
                </ul>
              </div>
            </div>
          </div>
        );
      case 'dropship':
        return (
          <div className="max-w-4xl mx-auto px-4 py-16">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Dropshipping Partnership</h1>
              <p className="text-xl text-gray-600">Join Our Network of Successful Dropshippers</p>
            </div>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">For Suppliers</h2>
                <p className="text-gray-600 mb-6">
                  Partner with DropshipHub to reach millions of customers worldwide. 
                  Our platform provides the tools and support you need to scale your business.
                </p>
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                  Become a Supplier
                </button>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">For Dropshippers</h2>
                <p className="text-gray-600 mb-6">
                  Start your dropshipping business with our proven products and reliable fulfillment. 
                  Access our catalog and start earning today.
                </p>
                <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors">
                  Start Dropshipping
                </button>
              </div>
            </div>
          </div>
        );
      case 'order-success':
        return (
          <div className="max-w-2xl mx-auto px-4 py-16 text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xl">✓</span>
              </div>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Order Confirmed!</h1>
            <p className="text-gray-600 mb-8">
              Thank you for your purchase. You'll receive a confirmation email shortly.
            </p>
            <div className="space-y-4">
              <button
                onClick={() => setCurrentPage('home')}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors mr-4"
              >
                Continue Shopping
              </button>
              <button
                onClick={() => setCurrentPage('home')}
                className="text-blue-600 hover:text-blue-700 transition-colors"
              >
                Track Your Order
              </button>
            </div>
          </div>
        );
      default:
        return <HomePage onNavigate={setCurrentPage} onProductClick={handleProductClick} />;
    }
  };

  return (
    <AuthProvider>
      <CartProvider>
        <div className="min-h-screen bg-gray-50 flex flex-col">
          <Header
            onCartClick={() => setIsCartOpen(true)}
            onLoginClick={() => setIsAuthModalOpen(true)}
            currentPage={currentPage}
            onNavigate={setCurrentPage}
          />
          
          <main className="flex-1 pt-16">
            {renderPage()}
          </main>
          
          <Footer />
          
          <CartSidebar
            isOpen={isCartOpen}
            onClose={() => setIsCartOpen(false)}
            onCheckout={handleCheckout}
          />
          
          <AuthModal
            isOpen={isAuthModalOpen}
            onClose={() => setIsAuthModalOpen(false)}
          />
          
          <Toaster position="top-right" />
        </div>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;