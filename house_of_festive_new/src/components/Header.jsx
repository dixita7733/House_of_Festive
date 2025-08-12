import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, User, LogOut } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import LoginModal from './LoginModal';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const location = useLocation();
  const { isAdmin, logout } = useAuth();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Products', href: '/products' },
    { name: 'Contact', href: '/contact' }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <header className="fixed w-full bg-white/95 backdrop-blur-sm shadow-lg z-50">
        <nav className="container mx-auto px-4 py-3 lg:py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2 lg:space-x-3">
              <div className="w-8 h-8 lg:w-10 lg:h-10 bg-[#85193C] rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm lg:text-lg">HF</span>
              </div>
              <span className="text-lg lg:text-xl font-bold text-[#85193C]">House of Festival</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`relative px-3 py-2 rounded-lg transition-all duration-300 hover:bg-red-50 text-sm xl:text-base ${
                    isActive(item.href)
                      ? 'text-[#85193C] bg-red-50'
                      : 'text-gray-700 hover:text-[#85193C]'
                  }`}
                >
                  {item.name}
                  {isActive(item.href) && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#85193C] rounded-full"></div>
                  )}
                </Link>
              ))}

              {/* Admin Section */}
              {isAdmin ? (
                <div className="flex items-center space-x-3">
                  <Link
                    to="/admin"
                    className="bg-gradient-to-r from-[#85193C] to-[#b51f50] text-white px-4 py-2 rounded-lg text-sm font-medium hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                  >
                    Admin Dashboard
                  </Link>
                  <button
                    onClick={logout}
                    className="text-gray-600 hover:text-[#85193C] transition-colors p-2 rounded-lg hover:bg-gray-100"
                    title="Logout"
                  >
                    <LogOut size={18} />
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setIsLoginModalOpen(true)}
                  className="flex items-center space-x-2 text-gray-600 hover:text-[#85193C] transition-colors px-3 py-2 rounded-lg hover:bg-gray-100"
                >
                  <User size={18} />
                  <span className="text-sm">Login</span>
                </button>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-gray-600 hover:text-[#85193C] transition-colors p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden mt-4 py-4 border-t border-gray-200">
              <div className="flex flex-col space-y-3">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`px-4 py-3 rounded-lg transition-all duration-300 text-center ${
                      isActive(item.href)
                        ? 'text-[#85193C] bg-red-50'
                        : 'text-gray-700 hover:text-[#85193C] hover:bg-red-50'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}

                {isAdmin ? (
                  <div className="flex flex-col space-y-2 pt-4 border-t border-gray-200">
                    <Link
                      to="/admin"
                      onClick={() => setIsMenuOpen(false)}
                      className="bg-gradient-to-r from-[#85193C] to-[#b51f50] text-white px-4 py-3 rounded-lg text-center font-medium"
                    >
                      Admin Dashboard
                    </Link>
                    <button
                      onClick={() => {
                        logout();
                        setIsMenuOpen(false);
                      }}
                      className="text-[#85193C] px-4 py-3 text-center border border-[#85193C] rounded-lg hover:bg-red-50"
                    >
                      Logout
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => {
                      setIsLoginModalOpen(true);
                      setIsMenuOpen(false);
                    }}
                    className="flex items-center justify-center space-x-2 text-gray-600 hover:text-[#85193C] px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50"
                  >
                    <User size={18} />
                    <span>Login</span>
                  </button>
                )}
              </div>
            </div>
          )}
        </nav>
      </header>

      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
      />
    </>
  );
};

export default Header;