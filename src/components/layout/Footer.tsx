import React from 'react';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin, Globe, Users, Package, TrendingUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const footerLinks = {
    'Dropshipping': ['Become a Dropshipper', 'Supplier Partnership', 'Product Catalog', 'Fulfillment Services', 'Dropship Training'],
    'Customer Service': ['Contact Support', 'FAQ', 'Shipping Info', 'Returns & Refunds', 'Order Tracking'],
    'Company': ['About DropshipHub', 'Careers', 'Press', 'Investors', 'Blog']
  };

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' }
  ];

  const stats = [
    { icon: Users, number: '50K+', label: 'Happy Customers' },
    { icon: Package, number: '1000+', label: 'Products' },
    { icon: TrendingUp, number: '95%', label: 'Satisfaction Rate' },
    { icon: Globe, number: '150+', label: 'Countries Served' }
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 pb-8 border-b border-gray-700">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <stat.icon className="w-5 h-5 text-blue-400" />
                <span className="text-2xl font-bold text-blue-400">{stat.number}</span>
              </div>
              <p className="text-gray-300 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">D</span>
              </div>
              <h3 className="text-2xl font-bold text-blue-400">DropshipHub</h3>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Your premier dropshipping destination. Quality products, competitive pricing, and reliable fulfillment for successful entrepreneurs worldwide.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-200 p-2 bg-gray-800 rounded-lg hover:bg-gray-700"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="space-y-4">
              <h4 className="text-lg font-semibold text-blue-400">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-white transition-colors duration-200 text-sm hover:underline"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-blue-400">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-blue-400" />
                <span className="text-gray-300 text-sm">support@dropshiphub.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-blue-400" />
                <span className="text-gray-300 text-sm">1-800-DROPSHIP</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-blue-400" />
                <span className="text-gray-300 text-sm">Global Fulfillment Network</span>
              </div>
            </div>
            
            {/* Newsletter */}
            <div className="pt-4">
              <h5 className="text-sm font-semibold text-blue-400 mb-2">Newsletter</h5>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter email"
                  className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-l-lg text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="px-3 py-2 bg-blue-600 hover:bg-blue-700 rounded-r-lg text-sm font-medium transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2025 DropshipHub. All rights reserved. Premium dropshipping platform.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                Dropship Agreement
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};