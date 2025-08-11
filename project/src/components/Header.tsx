import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, User, LogOut } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import LoginModal from './LoginModal';

const Header: React.FC = () => {
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

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <header className="fixed w-full bg-white/95 backdrop-blur-sm shadow-lg z-50">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center ">
              <div className="w-10 h-10 bg-[#85193C] rounded-full flex items-center justify-center mr-[10px]">
                <span className="text-white font-bold text-lg ">HF</span>
              </div>
              <span className="text-xl font-bold text-[#85193C] text-[23px]">House of Festival</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`relative px-4 py-2 rounded-lg transition-all duration-300 hover:bg-orange-50 ${isActive(item.href)
                      ? 'text-[#85193C] bg-orange-50'
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
                <div className="flex items-center space-x-4">
                  <Link
                    to="/admin"
                    className="bg-gradient-to-r from-[#85193C] to-[#c93f6a] text-white px-4 py-2 rounded-lg  transition-all duration-300 transform hover:scale-105"
                  >
                    Admin Dashboard
                  </Link>
                  <button
                    onClick={logout}
                    className="text-gray-600 hover:text-[#85193C] transition-colors"
                    title="Logout"
                  >
                    <LogOut size={20} />
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setIsLoginModalOpen(true)}
                  className="flex items-center space-x-2 text-gray-600 hover:text-[#85193C] transition-colors"
                >
                  <User size={20} />
                  <span>Login</span>
                </button>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-600 hover:text-[#85193C] transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 py-4 border-t border-gray-200">
              <div className="flex flex-col space-y-4 items-center">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`px-4 py-2 rounded-lg transition-all duration-300 ${isActive(item.href)
                        ? 'text-[#85193C] bg-orange-50'
                        : 'text-gray-700 hover:text-[#85193C] hover:bg-orange-50'
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
                      className="bg-gradient-to-r from-[#85193C] to-red-500 text-white px-4 py-2 rounded-lg text-center"
                    >
                      Admin Dashboard
                    </Link>
                    <button
                      onClick={() => {
                        logout();
                        setIsMenuOpen(false);
                      }}
                      className="text-[#85193C] px-4 py-2 text-center"
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
                    className="flex items-center space-x-2 text-gray-600 hover:text-[#85193C] px-4 py-2"
                  >
                    <User size={20} />
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