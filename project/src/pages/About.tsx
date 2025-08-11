import React, { useEffect } from 'react';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
import { Target, Eye, Award, Users, Heart, Star } from 'lucide-react';
import story from '../assets/story.jpg';
import about_bg from '../assets/about-bg2.jpg';

const About = () => {
  useEffect(() => {
    // AOS.init({ duration: 1000, once: true });
  }, []);

  const values = [
    {
      icon: <Heart className="w-12 h-12 text-[#85193C]" />,
      title: "Passion for Tradition",
      description: "We are deeply passionate about preserving and celebrating Indian cultural heritage through our products."
    },
    {
      icon: <Award className="w-12 h-12 text-[#85193C]" />,
      title: "Excellence in Craft",
      description: "Every product meets our highest standards of quality, ensuring authentic and durable festival essentials."
    },
    {
      icon: <Users className="w-12 h-12 text-[#85193C]" />,
      title: "Community Support",
      description: "We support local artisans and communities, creating sustainable livelihoods through traditional crafts."
    },
    {
      icon: <Star className="w-12 h-12 text-[#85193C]" />,
      title: "Customer Delight",
      description: "Your satisfaction and joy during festivals is our ultimate measure of success."
    }
  ];

  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section className="px-20 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center rounded-full border text-xs font-semibold px-4 py-1.5 bg-orange-100 text-orange-800 border-orange-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
                    <path d="M20 3v4M22 5h-4M4 17v2M5 18H3" />
                  </svg>
                  Celebrating Excellence Since 2009
                </div>

                <h1 className="text-5xl lg:text-7xl font-bold leading-tight text-gray-900">
                  About <span className="text-[#85193C]">House of</span>{' '}
                  <span className="text-7xl font-bold bg-gradient-to-r from-[#fde047] to-[#85193C] bg-clip-text text-transparent">Festival</span>
                </h1>

                <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed">
                  Celebrating traditions with elegance for over 15 years
                </p>
              </div>

              <p className="text-lg text-gray-500 leading-relaxed max-w-2xl">
                We craft unforgettable experiences that honor cultural heritage while embracing modern sophistication. From
                intimate gatherings to grand celebrations, we bring your vision to life with meticulous attention to detail.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="inline-flex items-center justify-center gap-2 text-sm font-medium h-11 rounded-md bg-[#85193C] hover:bg-[#85193C]/90 text-white px-8 py-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M8 2v4M16 2v4M3 10h18M3 4h18v18H3z" />
                    <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01M16 18h.01" />
                  </svg>
                  Plan Your Event
                </button>

                <button className="inline-flex items-center justify-center gap-2 text-sm font-medium h-11 rounded-md border border-primary/30 text-primary hover:bg-primary/5 px-8 py-3">
                  View Our Work
                </button>
              </div>
            </div>

            {/* Right Stats Grid */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                {/* Card 1 */}
                <div className="rounded-lg border border-yellow-500 bg-white/80 backdrop-blur-sm shadow-sm hover:border-[#85193C] hover:shadow-xl transition-all duration-300">
                  <div className="p-6 text-center group">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-12 w-12 mx-auto mb-4 text-[#FACC15] group-hover:text-[#85193C] transition-colors duration-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                    <h3 className="font-semibold mb-2 text-[#FACC15] group-hover:text-[#85193C] transition-colors duration-300">
                      5000+
                    </h3>
                    <p className="text-gray-600 text-foreground/60">Happy Families</p>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="rounded-2xl border border-[#85193C] bg-gradient-to-br from-white/80 to-white/60 backdrop-blur-md shadow-md hover:shadow-yellow-300/60 hover:shadow-1xl active:shadow-inner hover:border-yellow-400 active:border-[#85193C] transition-all duration-300 transform  active:scale-95 group mt-10">
                  <div className="p-8 text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14 text-[#85193C] group-hover:text-yellow-500 mx-auto mb-5 transition-colors duration-300 drop-shadow-md group-hover:drop-shadow-yellow-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526" />
                      <circle cx="12" cy="8" r="6" />
                    </svg>
                    <h3 className="font-semibold text-2xl text-[#85193C] group-hover:text-yellow-600 transition-colors duration-300 mb-2">
                      50+
                    </h3>
                    <p className="text-sm text-gray-600 group-hover:text-[#333] transition-colors">
                      Awards Won
                    </p>
                  </div>
                </div>



                {/* Card 3 */}
                <div className="group rounded-2xl border-2 border-[#85193C] bg-white/80 backdrop-blur-md shadow-md  hover:border-yellow-400  hover:ring-yellow-300 active:border-[#85193C] transition-all duration-300 transform active:scale-95">
                  <div className="p-6 text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-[#85193C] group-hover:text-yellow-400 transition-colors duration-300 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                    </svg>
                    <h3 className="font-semibold text-xl text-[#85193C] group-hover:text-yellow-600 transition-colors duration-300 mb-2">
                      15+
                    </h3>
                    <p className="text-sm text-gray-600 group-hover:text-[#333] transition-colors duration-300">
                      Years Experience
                    </p>
                  </div>
                </div>



                {/* Card 4 */}

                <div className="rounded-lg border border-yellow-500 bg-white/80 backdrop-blur-sm shadow-sm hover:border-[#85193C] hover:shadow-xl transition-all duration-300">
                  <div className="p-6 text-center group transition-all duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-12 w-12 text-[#FACC15] mx-auto mb-4 group-hover:text-[#85193C] transition-colors duration-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                    <h3 className="font-semibold mb-2 text-[#FACC15] group-hover:text-[#85193C] transition-colors duration-300">
                      5000+
                    </h3>
                    <p className="text-sm text-foreground/60">Happy Families</p>
                  </div>

                </div>

              </div>

              {/* Decorative Gradients */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-8 -left-4 w-32 h-32 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div data-aos="fade-right">
            <img
              src={story}
              alt="Craftsman"
              className="rounded-2xl shadow-xl hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div data-aos="fade-left">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#85193C] mb-6">Our Story</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              At House of Festival, we blend tradition with craftsmanship. For over 15 years,
              we’ve collaborated with local artisans from Rajkot to preserve Indian culture.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Our handmade products are not just festival items; they are a reflection of legacy,
              love, and culture — built to make every celebration truly special.
            </p>
          </div>
        </div>
      </section>

{/* Mission & Vision */}
<section
  className="py-24 bg-fixed bg-center bg-cover relative"
  style={{
    backgroundImage: `url(${about_bg })`,

  }}
>
  <div className="absolute inset-0 backdrop-blur-[2px]"></div>

  <div className="relative container mx-auto px-6 grid lg:grid-cols-2 gap-12 z-10">
    {[{
      icon: <Target className="w-10 h-10 text-yellow-400 group-hover:text-white transition-all duration-300" />,
      title: "Our Mission",
      desc: "To revive the beauty of Indian festivals through handcrafted excellence and empower artisans to thrive in a modern world."
    }, {
      icon: <Eye className="w-10 h-10 text-yellow-400 group-hover:text-white transition-all duration-300" />,
      title: "Our Vision",
      desc: "To be a household name for festival décor, spreading joy and cultural pride globally through traditional craftsmanship."
    }].map((item, index) => (
      <div
        key={index}
        data-aos="fade-up"
        data-aos-delay={index * 150}
        className="group bg-white/90 backdrop-blur-md border border-[#85193C]/10 p-8 rounded-3xl shadow-xl hover:shadow-2xl hover:scale-105 transition-transform duration-300"
      >
        <div className="flex justify-center mb-6">
          <div className="bg-[#85193C] group-hover:bg-yellow-400 p-4 rounded-full shadow-lg transition-colors duration-300">
            {item.icon}
          </div>
        </div>
        <h3 className="text-2xl font-bold text-center text-yellow-500 group-hover:text-[#85193C] transition-colors duration-300">
          {item.title}
        </h3>
        <p className="text-gray-700 text-center text-lg mt-4">
          {item.desc}
        </p>
      </div>
    ))}
  </div>
</section>


      {/* Our Values */}
      <section className="py-20 bg-[#FFF7F9]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-4xl font-bold text-[#85193C] mb-4">Our Values</h2>
            <p className="text-lg text-gray-600">Principles we live by and stand for.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((item, i) => (
              <div key={i} data-aos="fade-up" data-aos-delay={i * 100} className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transform transition-transform hover:-translate-y-2 hover:scale-105 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="bg-[#fce8f0] p-4 rounded-full shadow-inner">
                    {item.icon}
                  </div>
                </div>
                <h4 className="text-xl font-bold text-[#85193C] mb-2">{item.title}</h4>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Artisan Partners */}
      <section className="py-20 bg-[#85193C] text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-4xl font-bold mb-4">Our Artisan Partners</h2>
            <p className="text-yellow-300 max-w-xl mx-auto">
              Honoring the masters behind every creation – our artisans.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
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
              <div key={i} data-aos="fade-up" data-aos-delay={i * 150} className="bg-white/10 p-6 rounded-2xl backdrop-blur-lg hover:bg-white/20 transition-all hover:scale-105">
                <img
                  src={a.image}
                  alt={a.name}
                  className="w-24 h-24 object-cover rounded-full mx-auto mb-4 border-4 border-white/30"
                />
                <h3 className="text-xl font-bold mb-1 text-center">{a.name}</h3>
                <p className="text-yellow-200 text-center">{a.specialty}</p>
                <p className="text-yellow-200 font-semibold text-center">{a.experience}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-white mb-[120px]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-4xl font-bold text-[#85193C]">Our Journey in Numbers</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[{
              icon: <Award className="w-8 h-8 text-[#85193C]" />, number: '15+', label: 'Years of Excellence'
            }, {
              icon: <Users className="w-8 h-8 text-[#85193C]" />, number: '5000+', label: 'Happy Customers'
            }, {
              icon: <Heart className="w-8 h-8 text-[#85193C]" />, number: '50+', label: 'Artisan Partners'
            }, {
              icon: <Star className="w-8 h-8 text-[#85193C]" />, number: '10000+', label: 'Products Crafted'
            }].map((stat, i) => (
              <div key={i} data-aos="fade-up" data-aos-delay={i * 100} className="text-center bg-gray-100 p-8 rounded-2xl hover:shadow-xl hover:scale-105 transition-transform">
                <div className="flex justify-center mb-2">{stat.icon}</div>
                <h3 className="text-3xl font-bold text-[#85193C]">{stat.number}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
