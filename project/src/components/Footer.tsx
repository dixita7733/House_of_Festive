import React from 'react';
import { Phone, MessageCircle, MapPin,  Instagram, Facebook, Twitter } from 'lucide-react';
import footer_house from '../assets/footer-houdse2.png';


const Footer: React.FC = () => {
  return (
    <>
<div className="flex justify-end bg-transparent -mt-[190px] md:-mt-[190px] sm:-mt-[120px] xs:-mt-[80px] relative">
  <img
    src={footer_house}
    className="w-[190px] h-[190px] md:w-[190px] md:h-[190px] sm:w-[140px] sm:h-[140px] xs:w-[100px] xs:h-[100px] z-10"
    alt="Footer House"
  />
</div>

      <footer className="bg-[#85193C] text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-[#FDE047] to-red-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">HF</span>
              </div>
              <span className="text-xl font-bold">House of Festival</span>
            </div>
            <p className="text-orange-100 leading-relaxed">
              Celebrating Traditions with Elegance – Handcrafted Festival Essentials that bring
              joy and authenticity to every celebration.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-orange-200 hover:text-white transition-colors transform hover:scale-110">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-orange-200 hover:text-white transition-colors transform hover:scale-110">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-orange-200 hover:text-white transition-colors transform hover:scale-110">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-orange-200">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About Us', 'Services', 'Products', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`/${link.toLowerCase().replace(' ', '')}`}
                    className="text-orange-100 hover:text-white hover:translate-x-2 transition-all duration-300 block"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-orange-200">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin size={16} className="text-orange-300 mt-1 flex-shrink-0" />
                <p className="text-orange-100 text-sm">
                  Chunaravad - 14, New Thorala Main Road,<br />
                  Rajkot, Gujarat, 360003
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-orange-300" />
                <a href="tel:+919712923284" className="text-orange-100 hover:text-white transition-colors">
                  +91 97129 23284
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MessageCircle size={16} className="text-orange-300" />
                <a
                  href="https://wa.me/916356065766"
                  className="text-orange-100 hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  +91 6356 065 766
                </a>
              </div>
            </div>
          </div>

          {/* Business Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-orange-200">Business Info</h3>
            <div className="space-y-3">
              <div className="bg-orange-800/30 p-3 rounded-lg">
                <p className="text-orange-200 text-sm font-medium">GST Number</p>
                <p className="text-white text-sm font-mono">24DITPM3391G1ZU</p>
              </div>
              <div className="bg-orange-800/30 p-3 rounded-lg">
                <p className="text-orange-200 text-sm font-medium">Years of Excellence</p>
                <p className="text-white text-lg font-bold">15+ Years</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-orange-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-orange-200 text-sm text-center md:text-left">
              © 2024 House of Festival. All rights reserved. Made in India with ❤️
            </p>
            <div className="flex items-center space-x-6 text-sm">
              <a href="#" className="text-orange-200 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-orange-200 hover:text-white transition-colors">
                Terms of Service
              </a>
              <span className="text-orange-300">|</span>
              <span className="text-orange-200">🇮🇳 Proudly Indian</span>
            </div>
          </div>
        </div>
      </div>
    </footer>

    </>

  );
};

export default Footer;