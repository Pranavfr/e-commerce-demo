import React from 'react';
import { Star, Heart, ShoppingCart, TrendingUp, Zap } from 'lucide-react';
import { Product } from '../../types';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { useCart } from '../../contexts/CartContext';
import { motion } from 'framer-motion';

interface ProductCardProps {
  product: Product;
  onProductClick: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onProductClick }) => {
  const { addItem } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addItem(product);
  };

  const handleProductClick = () => {
    onProductClick(product);
  };

  const discountPercentage = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      <Card hover className="group overflow-hidden p-0 border-0 bg-gradient-to-br from-white to-gray-50 shadow-lg hover:shadow-xl transition-all duration-300" onClick={handleProductClick}>
        <div className="relative aspect-square overflow-hidden">
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          
          {/* Discount Badge */}
          {product.originalPrice && (
            <div className="absolute top-3 left-3 bg-gradient-to-r from-red-500 to-red-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
              -{discountPercentage}%
            </div>
          )}
          
          {/* Dropship Badge */}
          {product.tags.includes('dropship') && (
            <div className="absolute top-3 right-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg flex items-center space-x-1">
              <TrendingUp className="w-3 h-3" />
              <span>DROPSHIP</span>
            </div>
          )}
          
          {/* Wishlist Button */}
          <button 
            onClick={(e) => e.stopPropagation()}
            className="absolute top-12 right-3 p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-all duration-200 hover:bg-white hover:scale-110"
          >
            <Heart className="w-4 h-4 text-gray-600 hover:text-red-500 transition-colors" />
          </button>
          
          {/* Stock Status */}
          {!product.inStock && (
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center">
              <span className="bg-white text-gray-900 px-4 py-2 rounded-lg font-bold shadow-lg">
                Out of Stock
              </span>
            </div>
          )}
          
          {/* Quick Add Button */}
          <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
            <Button
              onClick={handleAddToCart}
              disabled={!product.inStock}
              fullWidth
              size="sm"
              icon={ShoppingCart}
              className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg"
            >
              Quick Add
            </Button>
          </div>
        </div>

        <div className="p-4 space-y-3">
          <div>
            <h3 className="font-semibold text-gray-900 line-clamp-2 group-hover:text-blue-600 transition-colors text-sm">
              {product.name}
            </h3>
            <div className="flex items-center justify-between mt-2">
              <p className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                {product.category}
              </p>
              {product.tags.includes('dropship') && (
                <div className="flex items-center space-x-1 text-xs text-blue-600">
                  <Zap className="w-3 h-3" />
                  <span>Hot</span>
                </div>
              )}
            </div>
          </div>

          {/* Rating */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-1">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3 h-3 ${
                      i < Math.floor(product.rating)
                        ? 'text-yellow-400 fill-current'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <span className="text-xs text-gray-500 ml-1">
                {product.rating} ({product.reviewCount})
              </span>
            </div>
            
            {/* Stock Indicator */}
            <div className="flex items-center space-x-1">
              <div className={`w-2 h-2 rounded-full ${product.inStock ? 'bg-green-500' : 'bg-red-500'}`}></div>
              <span className="text-xs text-gray-500">
                {product.inStock ? 'In Stock' : 'Out of Stock'}
              </span>
            </div>
          </div>

          {/* Price */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="text-lg font-bold text-gray-900">
                ${product.price.toFixed(2)}
              </span>
              {product.originalPrice && (
                <span className="text-sm text-gray-500 line-through">
                  ${product.originalPrice.toFixed(2)}
                </span>
              )}
            </div>
            
            {/* Savings */}
            {product.originalPrice && (
              <div className="text-xs text-green-600 font-medium">
                Save ${(product.originalPrice - product.price).toFixed(2)}
              </div>
            )}
          </div>

          {/* Features Preview */}
          {product.features && product.features.length > 0 && (
            <div className="pt-2 border-t border-gray-100">
              <div className="flex flex-wrap gap-1">
                {product.features.slice(0, 2).map((feature, index) => (
                  <span
                    key={index}
                    className="text-xs bg-blue-50 text-blue-600 px-2 py-1 rounded-full"
                  >
                    {feature}
                  </span>
                ))}
                {product.features.length > 2 && (
                  <span className="text-xs text-gray-500">
                    +{product.features.length - 2} more
                  </span>
                )}
              </div>
            </div>
          )}
        </div>
      </Card>
    </motion.div>
  );
};