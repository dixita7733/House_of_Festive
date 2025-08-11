import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'aos/dist/aos.css';
import './Home.css';
import backgroundImage from '../assets/banner-bg-2.jpg';
import craftwork from '../assets/craft-work.jpg';

import {
  Sparkles,
  Award,
  MapPin,
  ArrowRight,
  Star,
  Users,
  Shield,
  Heart
} from 'lucide-react';

interface Feature {
  icon: JSX.Element;
  title: string;
  description: string;
}

interface Stat {
  label: string;
  value: string;
  icon: JSX.Element;
}

const Home: React.FC = () => {
  useEffect(() => {
    // AOS.init({
    //   duration: 1000,
    //   once: true,
    //   easing: 'ease-out-cubic'
    // });

    const style = document.createElement('style');
    style.textContent = `
      @keyframes float {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-20px); }
      }
      .animate-float {
        animation: float 6s ease-in-out infinite;
      }
      body {
        font-family: 'Poppins', sans-serif;
      }
    `;
    document.head.appendChild(style);

    const link = document.createElement('link');
    link.href =
      'https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  const features: Feature[] = [
    {
      icon: <Award className="w-8 h-8 theme-color" />,
      title: 'Handcrafted with Precision',
      description:
        'Every product is meticulously crafted by skilled artisans with attention to detail.'
    },
    {
      icon: <Heart className="w-8 h-8 text-red-500" />,
      title: 'Authentic & Cultural',
      description:
        'Traditional designs that honor Indian heritage and festival customs.'
    },
    {
      icon: <MapPin className="w-8 h-8 text-green-500" />,
      title: 'Made in India',
      description:
        'Proudly supporting local artisans and promoting Indian craftsmanship.'
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-500" />,
      title: 'Quality Guaranteed',
      description:
        'Premium materials and quality assurance for lasting celebrations.'
    }
  ];

  const stats: Stat[] = [
    {
      label: 'Years of Excellence',
      value: '15+',
      icon: <Award className="w-6 h-6" />
    },
    {
      label: 'Happy Customers',
      value: '5000+',
      icon: <Users className="w-6 h-6" />
    },
    {
      label: 'Products Crafted',
      value: '10000+',
      icon: <Sparkles className="w-6 h-6" />
    },
    {
      label: 'Festivals Celebrated',
      value: '50+',
      icon: <Star className="w-6 h-6" />
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[130vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '130vh',
              width: '100%',
              filter: 'blur(3px)',
              zIndex: 0
            }}
          ></div>
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Celebrating <span className="theme-color">Traditions</span>
            <br />
            with <span className="theme-color">Elegance</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-orange-100 leading-relaxed">
            Handcrafted Festival Essentials that bring joy and authenticity to
            every celebration
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/products" className="btn-gradient-custom rounded-full">
              <span>Explore Our Products</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/about"
              className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-black theme-color transition-all duration-300 transform hover:scale-105"
            >
              Our Story
            </Link>
          </div>
        </div>

        <div className="absolute top-20 left-10 animate-float">
          <div className="w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full opacity-20"></div>
        </div>
        <div
          className="absolute bottom-20 right-10 animate-float"
          style={{ animationDelay: '2s' }}
        >
          <div className="w-32 h-32 bg-gradient-to-r from-red-400 to-pink-400 rounded-full opacity-20"></div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-[70px] ">
        <div className="container mx-auto px-6 ">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-[-140px] ">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center group hover:scale-105 transition-transform duration-300 z-10">
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="theme-color mb-4 flex justify-center">
                    {stat.icon}
                  </div>
                  <h3 className="text-3xl font-bold text-gray-800 mb-2 transition-colors">
                    {stat.value}
                  </h3>
                  <p className="text-gray-600 text-sm font-medium">
                    {stat.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src={craftwork}
                alt="Traditional Craftwork"
                className="rounded-2xl shadow-2xl hover:shadow-3xl transition-shadow duration-500"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-[#85193C] mb-6">
                Who We Are
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                House of Festival is a passion-driven brand offering premium
                quality products that celebrate Indian culture and festivals.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                With over 15 years of expertise, we've been proudly supporting
                local artisans and spreading joy through our handicrafts.
              </p>

              <Link
                to="/products"
                className="inline-flex items-center space-x-2 btn-gradient-custom px-6 py-3 rounded-full"
              >
                <span>Learn More</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#85193C] mb-4">
              Why Choose Us?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We combine tradition with quality, bringing you authentic festival
              essentials that make every celebration special.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-[#85193C] transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 z-50">
        <div className="container mx-auto px-4 text-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#85193C] mb-6">
              Ready to Celebrate?
            </h2>
            <p className="text-xl text-[#b6a1a8] mb-8 max-w-2xl mx-auto">
              Discover our exclusive collection of handcrafted festival
              essentials and make your celebrations unforgettable.
            </p>
            <Link
              to="/products"
              className="inline-flex items-center space-x-2 bg-white text-[#85193C] px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
            >
              <span>Shop Now</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
