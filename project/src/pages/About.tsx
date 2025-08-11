import React from 'react';
import { Target, Eye, Award, Users, Heart, Star } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    {
      icon: <Heart className="w-8 h-8 md:w-12 md:h-12 text-red-600" />,
      title: "Passion for Tradition",
      description: "We are deeply passionate about preserving and celebrating Indian cultural heritage through our products."
    },
    {
      icon: <Award className="w-8 h-8 md:w-12 md:h-12 text-yellow-600" />,
      title: "Excellence in Craft",
      description: "Every product meets our highest standards of quality, ensuring authentic and durable festival essentials."
    },
    {
      icon: <Users className="w-8 h-8 md:w-12 md:h-12 text-blue-600" />,
      title: "Community Support",
      description: "We support local artisans and communities, creating sustainable livelihoods through traditional crafts."
    },
    {
      icon: <Star className="w-8 h-8 md:w-12 md:h-12 text-green-600" />,
      title: "Customer Delight",
      description: "Your satisfaction and joy during festivals is our ultimate measure of success."
    }
  ];

  return (
    <div className="min-h-screen pt-16 md:pt-20 bg-white">
      {/* Hero Section */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-20 py-12 md:py-20 lg:py-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6 md:space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center rounded-full border border-orange-300 text-xs font-semibold px-4 py-1.5 bg-orange-100 text-orange-800">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                  Celebrating Excellence Since 2009
                </div>

                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-gray-900">
                  About <span className="text-red-600">House of</span>{' '}
                  <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-yellow-400 to-red-600 bg-clip-text text-transparent">Festival</span>
                </h1>

                <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 leading-relaxed">
                  Celebrating traditions with elegance for over 15 years
                </p>
              </div>

              <p className="text-base sm:text-lg text-gray-500 leading-relaxed max-w-2xl">
                We craft unforgettable experiences that honor cultural heritage while embracing modern sophistication. From
                intimate gatherings to grand celebrations, we bring your vision to life with meticulous attention to detail.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="inline-flex items-center justify-center gap-2 text-sm font-medium h-11 rounded-md bg-red-600 hover:bg-red-700 text-white px-8 py-3 transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Plan Your Event
                </button>

                <button className="inline-flex items-center justify-center gap-2 text-sm font-medium h-11 rounded-md border border-red-600 text-red-600 hover:bg-red-50 px-8 py-3 transition-colors duration-300">
                  View Our Work
                </button>
              </div>
            </div>

            {/* Right Stats Grid */}
            <div className="relative mt-8 lg:mt-0">
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {/* Card 1 */}
                <div className="rounded-lg border border-yellow-500 bg-white shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="p-4 sm:p-6 text-center group">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 mx-auto mb-2 md:mb-4 text-yellow-500 group-hover:text-red-600 transition-colors duration-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                    </svg>
                    <h3 className="font-semibold text-lg sm:text-xl mb-1 sm:mb-2 text-yellow-500 group-hover:text-red-600 transition-colors duration-300">
                      5000+
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600">Happy Families</p>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="rounded-2xl border border-red-600 bg-gradient-to-br from-white to-gray-50 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group mt-6 sm:mt-8 md:mt-10">
                  <div className="p-4 sm:p-6 md:p-8 text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 sm:h-10 sm:w-10 md:h-14 md:w-14 text-red-600 group-hover:text-yellow-500 mx-auto mb-2 md:mb-5 transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                    <h3 className="font-semibold text-lg sm:text-xl md:text-2xl text-red-600 group-hover:text-yellow-600 transition-colors duration-300 mb-1 sm:mb-2">
                      50+
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 group-hover:text-gray-700 transition-colors">
                      Awards Won
                    </p>
                  </div>
                </div>

                {/* Card 3 */}
                <div className="group rounded-2xl border-2 border-red-600 bg-white shadow-lg hover:border-yellow-400 transition-all duration-300 transform hover:scale-105">
                  <div className="p-4 sm:p-6 text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 text-red-600 group-hover:text-yellow-400 transition-colors duration-300 mx-auto mb-2 md:mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                    <h3 className="font-semibold text-lg sm:text-xl text-red-600 group-hover:text-yellow-600 transition-colors duration-300 mb-1 sm:mb-2">
                      15+
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                      Years Experience
                    </p>
                  </div>
                </div>

                {/* Card 4 */}
                <div className="rounded-lg border border-yellow-500 bg-white shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="p-4 sm:p-6 text-center group transition-all duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 text-yellow-500 mx-auto mb-2 md:mb-4 group-hover:text-red-600 transition-colors duration-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                    <h3 className="font-semibold text-lg sm:text-xl mb-1 sm:mb-2 text-yellow-500 group-hover:text-red-600 transition-colors duration-300">
                      10K+
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600">Products Made</p>
                  </div>
                </div>
              </div>

              {/* Decorative Gradients */}
              <div className="absolute -top-4 -right-4 w-16 h-16 md:w-24 md:h-24 bg-gradient-to-br from-red-500 to-yellow-400 opacity-20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-8 -left-4 w-20 h-20 md:w-32 md:h-32 bg-gradient-to-br from-yellow-400 to-red-500 opacity-20 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          <div>
            <img
              src="https://images.pexels.com/photos/1131555/pexels-photo-1131555.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Craftsman"
              className="rounded-2xl shadow-xl hover:scale-105 transition-transform duration-500 w-full h-64 md:h-80 lg:h-96 object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-red-600 mb-4 md:mb-6">Our Story</h2>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
              At House of Festival, we blend tradition with craftsmanship. For over 15 years,
              we've collaborated with local artisans from Rajkot to preserve Indian culture.
            </p>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
              Our handmade products are not just festival items; they are a reflection of legacy,
              love, and culture — built to make every celebration truly special.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section
        className="py-16 md:py-24 bg-cover bg-center relative"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/1131555/pexels-photo-1131555.jpeg?auto=compress&cs=tinysrgb&w=1600)',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        <div className="relative container mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-8 md:gap-12 z-10">
          {[{
            icon: <Target className="w-8 h-8 md:w-10 md:h-10 text-yellow-400 group-hover:text-white transition-all duration-300" />,
            title: "Our Mission",
            desc: "To revive the beauty of Indian festivals through handcrafted excellence and empower artisans to thrive in a modern world."
          }, {
            icon: <Eye className="w-8 h-8 md:w-10 md:h-10 text-yellow-400 group-hover:text-white transition-all duration-300" />,
            title: "Our Vision",
            desc: "To be a household name for festival décor, spreading joy and cultural pride globally through traditional craftsmanship."
          }].map((item, index) => (
            <div
              key={index}
              className="group bg-white bg-opacity-90 backdrop-blur-md border border-gray-200 p-6 md:p-8 rounded-3xl shadow-xl hover:shadow-2xl hover:scale-105 transition-transform duration-300"
            >
              <div className="flex justify-center mb-4 md:mb-6">
                <div className="bg-red-600 group-hover:bg-yellow-400 p-3 md:p-4 rounded-full shadow-lg transition-colors duration-300">
                  {item.icon}
                </div>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-center text-yellow-600 group-hover:text-red-600 transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-gray-700 text-center text-base md:text-lg mt-4">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Our Values */}
      <section className="py-12 md:py-20 bg-pink-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-red-600 mb-4">Our Values</h2>
            <p className="text-base sm:text-lg text-gray-600">Principles we live by and stand for.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {values.map((item, i) => (
              <div key={i} className="bg-white p-6 md:p-8 rounded-2xl shadow-md hover:shadow-xl transform transition-transform hover:-translate-y-2 hover:scale-105 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="bg-pink-100 p-3 md:p-4 rounded-full shadow-inner">
                    {item.icon}
                  </div>
                </div>
                <h4 className="text-lg md:text-xl font-bold text-red-600 mb-2">{item.title}</h4>
                <p className="text-gray-600 text-sm md:text-base">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Artisan Partners */}
      <section className="py-12 md:py-20 bg-red-600 text-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Artisan Partners</h2>
            <p className="text-yellow-200 max-w-xl mx-auto text-base sm:text-lg">
              Honoring the masters behind every creation – our artisans.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {[{
              name: 'Master Craftsman',
              specialty: 'Traditional Decorations',
              experience: '25+ Years',
              image: 'https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg?auto=compress&cs=tinysrgb&w=800'
            }, {
              name: 'Heritage Artist',
              specialty: 'Handmade Essentials',
              experience: '20+ Years',
              image: 'https://images.pexels.com/photos/5727790/pexels-photo-5727790.jpeg?auto=compress&cs=tinysrgb&w=800'
            }, {
              name: 'Cultural Designer',
              specialty: 'Festival Accessories',
              experience: '18+ Years',
              image: 'https://images.pexels.com/photos/8088495/pexels-photo-8088495.jpeg?auto=compress&cs=tinysrgb&w=800'
            }].map((a, i) => (
              <div key={i} className="bg-white bg-opacity-10 p-4 md:p-6 rounded-2xl backdrop-blur-lg hover:bg-white hover:bg-opacity-20 transition-all hover:scale-105">
                <img
                  src={a.image}
                  alt={a.name}
                  className="w-20 h-20 md:w-24 md:h-24 object-cover rounded-full mx-auto mb-4 border-4 border-white border-opacity-30"
                />
                <h3 className="text-lg md:text-xl font-bold mb-1 text-center">{a.name}</h3>
                <p className="text-yellow-200 text-center text-sm md:text-base">{a.specialty}</p>
                <p className="text-yellow-200 font-semibold text-center text-sm md:text-base">{a.experience}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-red-600">Our Journey in Numbers</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {[{
              icon: <Award className="w-6 h-6 md:w-8 md:h-8 text-red-600" />, number: '15+', label: 'Years of Excellence'
            }, {
              icon: <Users className="w-6 h-6 md:w-8 md:h-8 text-red-600" />, number: '5000+', label: 'Happy Customers'
            }, {
              icon: <Heart className="w-6 h-6 md:w-8 md:h-8 text-red-600" />, number: '50+', label: 'Artisan Partners'
            }, {
              icon: <Star className="w-6 h-6 md:w-8 md:h-8 text-red-600" />, number: '10000+', label: 'Products Crafted'
            }].map((stat, i) => (
              <div key={i} className="text-center bg-gray-100 p-4 md:p-8 rounded-2xl hover:shadow-xl hover:scale-105 transition-transform">
                <div className="flex justify-center mb-2">{stat.icon}</div>
                <h3 className="text-2xl md:text-3xl font-bold text-red-600">{stat.number}</h3>
                <p className="text-gray-600 text-xs md:text-base">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
