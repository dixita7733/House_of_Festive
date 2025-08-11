import React from 'react';
import { Heart, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#85193C] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mr-3">
                <span className="text-[#85193C] font-bold text-lg">HF</span>
              </div>
              <span className="text-xl font-bold">House of Festival</span>
            </div>
            <p className="text-pink-100 leading-relaxed">
              Celebrating traditions with elegance. Handcrafted festival essentials 
              that bring joy and authenticity to every celebration.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="text-pink-100 hover:text-white transition-colors">About Us</a></li>
              <li><a href="/services" className="text-pink-100 hover:text-white transition-colors">Our Services</a></li>
              <li><a href="/products" className="text-pink-100 hover:text-white transition-colors">Products</a></li>
              <li><a href="/contact" className="text-pink-100 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li className="text-pink-100">Custom Handicraft Design</li>
              <li className="text-pink-100">Bulk Festival Orders</li>
              <li className="text-pink-100">Quality Assurance</li>
              <li className="text-pink-100">Fast Shipping</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-3 text-pink-200" />
                <span className="text-pink-100 text-sm">Rajkot, Gujarat</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-pink-200" />
                <span className="text-pink-100 text-sm">+91 97129 23284</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-pink-200" />
                <span className="text-pink-100 text-sm">info@houseoffestival.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-pink-800 mt-8 pt-8 text-center">
          <p className="text-pink-100 flex items-center justify-center">
            Made with <Heart className="w-4 h-4 mx-2 text-pink-300" /> by House of Festival
          </p>
          <p className="text-pink-200 text-sm mt-2">
            © 2024 House of Festival. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
