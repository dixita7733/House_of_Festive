import React from 'react';
import { 
  Palette, 
  Package, 
  Shield, 
  Truck, 
  Gift, 
  Star,
  CheckCircle,
  Phone,
  MessageCircle,
  Clock,
  Award
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Palette className="w-12 h-12 text-orange-500" />,
      title: "Custom Handicraft Design",
      description: "Personalized designs tailored to your specific festival needs and preferences. Our artisans work closely with you to create unique pieces that reflect your vision.",
      features: ["Personalized consultation", "Custom color schemes", "Traditional motifs", "Modern adaptations"],
      color: "from-orange-500 to-red-500"
    },
    {
      icon: <Package className="w-12 h-12 text-blue-500" />,
      title: "Bulk Festival Product Orders",
      description: "Special pricing and dedicated service for bulk orders. Perfect for events, communities, and businesses celebrating festivals on a larger scale.",
      features: ["Volume discounts", "Priority processing", "Flexible delivery", "Corporate packages"],
      color: "from-blue-500 to-purple-500"
    },
    {
      icon: <Shield className="w-12 h-12 text-green-500" />,
      title: "Premium Quality Assurance",
      description: "Every product undergoes rigorous quality checks to ensure you receive only the finest handcrafted items that meet our exacting standards.",
      features: ["Multi-stage inspection", "Durability testing", "Authenticity guarantee", "Satisfaction promise"],
      color: "from-green-500 to-teal-500"
    },
    {
      icon: <Truck className="w-12 h-12 text-purple-500" />,
      title: "Fast and Reliable Shipping",
      description: "Secure packaging and timely delivery across India. We ensure your products reach you safely and on time for your celebrations.",
      features: ["Nationwide delivery", "Secure packaging", "Real-time tracking", "Express options"],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Gift className="w-12 h-12 text-red-500" />,
      title: "Gift Packing & Branding Solutions",
      description: "Beautiful gift wrapping and custom branding options for corporate gifts and special occasions. Make every present memorable.",
      features: ["Custom gift boxes", "Branded packaging", "Ribbon & accessories", "Greeting cards"],
      color: "from-red-500 to-orange-500"
    },
    {
      icon: <Star className="w-12 h-12 text-yellow-500" />,
      title: "Festival Consultation Services",
      description: "Expert guidance on selecting the perfect products for your specific festival celebrations. Get personalized recommendations from our specialists.",
      features: ["Festival expertise", "Product recommendations", "Cultural guidance", "Celebration planning"],
      color: "from-yellow-500 to-orange-500"
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Consultation",
      description: "Discuss your requirements and preferences with our experts"
    },
    {
      step: "02", 
      title: "Design & Planning",
      description: "We create custom designs and plan the perfect solution for you"
    },
    {
      step: "03",
      title: "Crafting",
      description: "Our skilled artisans begin creating your handcrafted products"
    },
    {
      step: "04",
      title: "Quality Check",
      description: "Every item undergoes thorough quality inspection"
    },
    {
      step: "05",
      title: "Delivery",
      description: "Secure packaging and timely delivery to your doorstep"
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-[#85193C] to-red-600">
        <div className="container mx-auto px-4 text-center text-white">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Our <span className="text-yellow-300">Services</span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed mb-8">
              We don't just make products — we create joy
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 inline-block">
              <p className="text-orange-100 font-semibold">15+ Years of Excellence in Festival Services</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Comprehensive Festival Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From custom designs to quality assurance, we provide end-to-end services
              to make your festivals truly special
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className="flex items-start space-x-6">
                  <div className={`bg-gradient-to-r ${service.color} p-4 rounded-2xl group-hover:scale-110 transition-transform duration-300`}>
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-orange-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="grid grid-cols-2 gap-3">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span className="text-sm text-gray-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Our Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From initial consultation to final delivery, we ensure a smooth and transparent process
            </p>
          </div>

          <div className="relative">
            {/* Timeline line for desktop */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-orange-300 via-red-300 to-orange-300 transform -translate-y-1/2"></div>
            
            <div className="grid md:grid-cols-5 gap-8">
              {processSteps.map((step, index) => (
                <div
                  key={index}
                  className="relative group text-center"
                >
                  {/* Step circle */}
                  <div className="relative z-10 bg-white rounded-full border-4 border-[#85193C] w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:border-orange-500 transition-colors duration-300">
                    <span className="text-2xl font-bold text-[#85193C] group-hover:text-orange-700 transition-colors">
                      {step.step}
                    </span>
                  </div>
                  
                  {/* Content */}
                  <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-6 group-hover:shadow-lg transition-all duration-300">
                    <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-orange-600 transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-20 bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.pexels.com/photos/1131555/pexels-photo-1131555.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="Quality Assurance Process"
                className="rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                Why Choose Our Services?
              </h2>
              <div className="space-y-6">
                {[
                  {
                    icon: <Award className="w-6 h-6 text-orange-500" />,
                    title: "Expert Craftsmanship",
                    description: "15+ years of experience with skilled artisans who understand traditional techniques"
                  },
                  {
                    icon: <Clock className="w-6 h-6 text-blue-500" />,
                    title: "Timely Delivery",
                    description: "We respect your celebration schedule and ensure on-time delivery"
                  },
                  {
                    icon: <Shield className="w-6 h-6 text-green-500" />,
                    title: "Quality Guarantee",
                    description: "Every product comes with our satisfaction guarantee and quality assurance"
                  },
                  {
                    icon: <Star className="w-6 h-6 text-yellow-500" />,
                    title: "Personalized Service",
                    description: "Dedicated support team to assist you throughout your journey with us"
                  }
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-white p-3 rounded-lg shadow-md">
                      {benefit.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-2">{benefit.title}</h4>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#85193C]">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Contact us today to discuss your festival needs and discover how we can
              make your celebrations truly memorable.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/916356065766"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-green-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-600 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
              >
                <MessageCircle className="w-5 h-5" />
                <span>WhatsApp Us</span>
              </a>
              <a
                href="tel:+919712923284"
                className="inline-flex items-center space-x-2 bg-white text-[#85193C] px-8 py-4 rounded-full text-lg font-semibold hover:bg-orange-50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl border-2 border-[#85193C]"
              >
                <Phone className="w-5 h-5" />
                <span>Call Now</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
