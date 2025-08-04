import { Product, Category } from '../types';

export const categories: Category[] = [
  {
    id: '1',
    name: 'Electronics',
    slug: 'electronics',
    image: 'https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg',
    productCount: 45
  },
  {
    id: '2',
    name: 'Fashion',
    slug: 'fashion',
    image: 'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg',
    productCount: 67
  },
  {
    id: '3',
    name: 'Home & Garden',
    slug: 'home-garden',
    image: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg',
    productCount: 89
  },
  {
    id: '4',
    name: 'Sports & Outdoors',
    slug: 'sports-outdoors',
    image: 'https://images.pexels.com/photos/863926/pexels-photo-863926.jpeg',
    productCount: 34
  },
  {
    id: '5',
    name: 'Beauty & Health',
    slug: 'beauty-health',
    image: 'https://images.pexels.com/photos/3785147/pexels-photo-3785147.jpeg',
    productCount: 56
  },
  {
    id: '6',
    name: 'Automotive',
    slug: 'automotive',
    image: 'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg',
    productCount: 23
  },
  {
    id: '7',
    name: 'Toys & Games',
    slug: 'toys-games',
    image: 'https://images.pexels.com/photos/264905/pexels-photo-264905.jpeg',
    productCount: 41
  },
  {
    id: '8',
    name: 'Pet Supplies',
    slug: 'pet-supplies',
    image: 'https://images.pexels.com/photos/1904105/pexels-photo-1904105.jpeg',
    productCount: 28
  }
];

export const products: Product[] = [
  {
    id: '1',
    name: 'Wireless Bluetooth Headphones',
    description: 'Premium noise-canceling wireless headphones with 30-hour battery life and studio-quality sound. Perfect for dropshipping with high profit margins.',
    price: 29.99,
    originalPrice: 89.99,
    category: 'Electronics',
    images: [
      'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg',
      'https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg',
      'https://images.pexels.com/photos/3587478/pexels-photo-3587478.jpeg'
    ],
    inStock: true,
    stockQuantity: 150,
    rating: 4.8,
    reviewCount: 124,
    features: ['Noise Cancellation', '30h Battery', 'Quick Charge', 'Bluetooth 5.0'],
    tags: ['audio', 'wireless', 'premium', 'dropship']
  },
  {
    id: '2',
    name: 'Smart Fitness Tracker',
    description: 'Advanced fitness tracker with heart rate monitoring, GPS, and 7-day battery life. High-demand dropshipping product.',
    price: 19.99,
    originalPrice: 59.99,
    category: 'Sports & Outdoors',
    images: [
      'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg',
      'https://images.pexels.com/photos/1334544/pexels-photo-1334544.jpeg'
    ],
    inStock: true,
    stockQuantity: 200,
    rating: 4.6,
    reviewCount: 89,
    features: ['Heart Rate Monitor', 'GPS Tracking', '7-day Battery', 'Water Resistant'],
    tags: ['fitness', 'health', 'wearable', 'dropship']
  },
  {
    id: '3',
    name: 'LED Desk Lamp with USB',
    description: 'Sleek LED desk lamp with adjustable brightness and USB charging port. Perfect for home office dropshipping.',
    price: 14.99,
    originalPrice: 39.99,
    category: 'Home & Garden',
    images: [
      'https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg',
      'https://images.pexels.com/photos/1329711/pexels-photo-1329711.jpeg'
    ],
    inStock: true,
    stockQuantity: 300,
    rating: 4.7,
    reviewCount: 67,
    features: ['LED Technology', 'USB Charging', 'Adjustable Brightness', 'Modern Design'],
    tags: ['lighting', 'desk', 'modern', 'dropship']
  },
  {
    id: '4',
    name: 'Premium Cotton T-Shirt',
    description: 'Ultra-soft organic cotton t-shirt with perfect fit and sustainable materials. Fashion dropshipping essential.',
    price: 8.99,
    originalPrice: 24.99,
    category: 'Fashion',
    images: [
      'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg',
      'https://images.pexels.com/photos/1036622/pexels-photo-1036622.jpeg'
    ],
    inStock: true,
    stockQuantity: 500,
    rating: 4.9,
    reviewCount: 203,
    features: ['Organic Cotton', 'Sustainable', 'Pre-shrunk', 'Machine Washable'],
    tags: ['clothing', 'organic', 'comfortable', 'dropship']
  },
  {
    id: '5',
    name: 'Portable Bluetooth Speaker',
    description: 'Compact waterproof speaker with 360-degree sound and 12-hour battery. Best-selling dropshipping audio product.',
    price: 12.99,
    originalPrice: 34.99,
    category: 'Electronics',
    images: [
      'https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg',
      'https://images.pexels.com/photos/3587478/pexels-photo-3587478.jpeg'
    ],
    inStock: true,
    stockQuantity: 250,
    rating: 4.5,
    reviewCount: 156,
    features: ['Waterproof', '360° Sound', '12h Battery', 'Bluetooth 5.0'],
    tags: ['audio', 'portable', 'outdoor', 'dropship']
  },
  {
    id: '6',
    name: 'Ergonomic Office Chair',
    description: 'Professional ergonomic chair with lumbar support and adjustable height. High-ticket dropshipping furniture.',
    price: 89.99,
    originalPrice: 199.99,
    category: 'Home & Garden',
    images: [
      'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg',
      'https://images.pexels.com/photos/509922/pexels-photo-509922.jpeg'
    ],
    inStock: true,
    stockQuantity: 45,
    rating: 4.4,
    reviewCount: 78,
    features: ['Lumbar Support', 'Adjustable Height', 'Breathable Mesh', '5-Year Warranty'],
    tags: ['office', 'ergonomic', 'furniture', 'dropship']
  },
  {
    id: '7',
    name: 'Smartphone Stand & Wireless Charger',
    description: 'Multi-functional smartphone stand with wireless charging capability. Trending dropshipping gadget.',
    price: 9.99,
    originalPrice: 29.99,
    category: 'Electronics',
    images: [
      'https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg',
      'https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg'
    ],
    inStock: true,
    stockQuantity: 400,
    rating: 4.3,
    reviewCount: 92,
    features: ['Wireless Charging', 'Adjustable Angle', 'Fast Charging', 'Universal Compatibility'],
    tags: ['gadget', 'charging', 'smartphone', 'dropship']
  },
  {
    id: '8',
    name: 'Anti-Aging Face Cream',
    description: 'Premium anti-aging face cream with natural ingredients. High-margin beauty dropshipping product.',
    price: 6.99,
    originalPrice: 19.99,
    category: 'Beauty & Health',
    images: [
      'https://images.pexels.com/photos/3785147/pexels-photo-3785147.jpeg',
      'https://images.pexels.com/photos/3785147/pexels-photo-3785147.jpeg'
    ],
    inStock: true,
    stockQuantity: 600,
    rating: 4.7,
    reviewCount: 134,
    features: ['Natural Ingredients', 'Anti-Aging', 'Hydrating', 'Suitable for All Skin Types'],
    tags: ['beauty', 'skincare', 'anti-aging', 'dropship']
  },
  {
    id: '9',
    name: 'Car Phone Mount',
    description: 'Universal car phone mount with suction cup and 360-degree rotation. Essential automotive dropshipping item.',
    price: 4.99,
    originalPrice: 14.99,
    category: 'Automotive',
    images: [
      'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg',
      'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg'
    ],
    inStock: true,
    stockQuantity: 800,
    rating: 4.2,
    reviewCount: 67,
    features: ['Universal Fit', '360° Rotation', 'Strong Suction', 'Easy Installation'],
    tags: ['automotive', 'phone', 'mount', 'dropship']
  },
  {
    id: '10',
    name: 'LED Strip Lights',
    description: 'RGB LED strip lights with remote control and music sync. Popular home decoration dropshipping product.',
    price: 7.99,
    originalPrice: 22.99,
    category: 'Home & Garden',
    images: [
      'https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg',
      'https://images.pexels.com/photos/1329711/pexels-photo-1329711.jpeg'
    ],
    inStock: true,
    stockQuantity: 350,
    rating: 4.6,
    reviewCount: 189,
    features: ['RGB Colors', 'Remote Control', 'Music Sync', 'Easy Installation'],
    tags: ['lighting', 'decoration', 'rgb', 'dropship']
  },
  {
    id: '11',
    name: 'Wireless Earbuds',
    description: 'True wireless earbuds with noise cancellation and touch controls. Hot-selling audio dropshipping product.',
    price: 15.99,
    originalPrice: 49.99,
    category: 'Electronics',
    images: [
      'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg',
      'https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg'
    ],
    inStock: true,
    stockQuantity: 280,
    rating: 4.4,
    reviewCount: 156,
    features: ['True Wireless', 'Noise Cancellation', 'Touch Controls', '24h Battery'],
    tags: ['audio', 'wireless', 'earbuds', 'dropship']
  },
  {
    id: '12',
    name: 'Smart Water Bottle',
    description: 'Smart water bottle with hydration tracking and temperature control. Innovative health dropshipping product.',
    price: 11.99,
    originalPrice: 34.99,
    category: 'Sports & Outdoors',
    images: [
      'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg',
      'https://images.pexels.com/photos/1334544/pexels-photo-1334544.jpeg'
    ],
    inStock: true,
    stockQuantity: 200,
    rating: 4.5,
    reviewCount: 89,
    features: ['Hydration Tracking', 'Temperature Control', 'Bluetooth App', 'BPA Free'],
    tags: ['health', 'water', 'smart', 'dropship']
  }
];

export const featuredProducts = products.slice(0, 6);
export const newArrivals = products.slice(6, 12);
export const bestSellers = products.filter(p => p.rating >= 4.5).slice(0, 8);
export const trendingProducts = products.filter(p => p.tags.includes('dropship')).slice(0, 10);