import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Mail, Phone, MapPin, Shield } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-orange-600 to-orange-800 rounded-full flex items-center justify-center">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">Mbona</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              A digital bridge connecting families, healing trauma, and restoring identity in Rwanda.
            </p>
            <div className="privacy-notice">
              <p className="text-xs text-orange-200">
                <Shield className="w-4 h-4 inline mr-1" />
                Your privacy and safety are our top priority. All information is optional and secure.
              </p>
            </div>
          </div>

      
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/adoption" className="text-gray-300 hover:text-orange-400 transition-colors">
                  Adopt or Foster
                </Link>
              </li>
              <li>
                <Link to="/survivor-reconnection" className="text-gray-300 hover:text-orange-400 transition-colors">
                  Find Lost Family
                </Link>
              </li>
              <li>
                <Link to="/support" className="text-gray-300 hover:text-orange-400 transition-colors">
                  Support Resources
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-orange-400 transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

      
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/support" className="text-gray-300 hover:text-orange-400 transition-colors">
                  Legal Guidance
                </Link>
              </li>
              <li>
                <Link to="/support" className="text-gray-300 hover:text-orange-400 transition-colors">
                  Counseling Services
                </Link>
              </li>
              <li>
                <Link to="/survivor-reconnection" className="text-gray-300 hover:text-orange-400 transition-colors">
                  Community Stories
                </Link>
                

              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-orange-400 transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

            <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-orange-400" />
                <span className="text-gray-300 text-sm">info@mbona.rw</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-orange-400" />
                <span className="text-gray-300 text-sm">+250 788 123 456</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-orange-400" />
                <span className="text-gray-300 text-sm">Kigali, Rwanda</span>
              </div>
            </div>
          </div>
        </div>

        
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Mbona Platform. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <button className="text-gray-400 hover:text-orange-400 transition-colors text-sm">
                Privacy Policy
              </button>
              <button className="text-gray-400 hover:text-orange-400 transition-colors text-sm">
                Terms of Service
              </button>
              <button className="text-gray-400 hover:text-orange-400 transition-colors text-sm">
                Accessibility
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


