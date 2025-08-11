import React, { useEffect, useState } from 'react';
import { 
  MapPin, 
  Phone, 
  MessageCircle, 
  Clock,
  Send,
  CheckCircle,
  Building,
  Mail
} from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    product: '',
    message: ''
  });
  const [isSubmitting] = useState(false);
  const [isSubmitted] = useState(false);

  useEffect(() => {
    // AOS.init({
    //   duration: 1000,
    //   once: true,
    //   easing: 'ease-out-cubic'
    // });
  }, []);

  const products = [
    'Diwali Decorations',
    'Navratri Accessories',
    'Raksha Bandhan Items',
    'Holi Colors',
    'Ganesh Chaturthi Items',
    'Karva Chauth Essentials',
    'Custom Design Request',
    'Bulk Order Inquiry',
    'Other'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Create WhatsApp message
    const message = `Hi! Here are my details:
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Product Interest: ${formData.product}
Message: ${formData.message}`;

    const whatsappUrl = `https://wa.me/916356065766?text=${encodeURIComponent(message)}`;
    
    // Open WhatsApp chat
    window.open(whatsappUrl, '_blank');

    // Optionally reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      product: '',
      message: ''
    });
  };

  const handleWhatsAppContact = () => {
    const message = `Hi! I'm interested in your festival products. Please share more details.`;
    const whatsappUrl = `https://wa.me/916356065766?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-r from-red-600 to-red-700">
        <div className="container mx-auto px-4 text-center text-white">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Get in <span className="text-yellow-300">Touch</span>
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto">
              We'd love to hear from you. Reach out for any inquiries about our festival products.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-8">Contact Information</h2>
              
              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start space-x-4 bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="bg-orange-100 p-3 rounded-full">
                    <MapPin className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Our Address</h3>
                    <p className="text-gray-600">
                      Chunaravad - 14, New Thorala Main Road,<br />
                      Rajkot, Gujarat, 360003
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start space-x-4 bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Phone className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Call Us</h3>
                    <a 
                      href="tel:+919712923284" 
                      className="text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      +91 97129 23284
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start space-x-4 bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="bg-green-100 p-3 rounded-full">
                    <MessageCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">WhatsApp Inquiry</h3>
                    <button
                      onClick={handleWhatsAppContact}
                      className="text-gray-600 hover:text-green-600 transition-colors"
                    >
                      +91 6356 065 766
                    </button>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-4 bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="bg-purple-100 p-3 rounded-full">
                    <Mail className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Email Us</h3>
                    <a 
                      href="mailto:info@houseoffestival.com" 
                      className="text-gray-600 hover:text-purple-600 transition-colors"
                    >
                      info@houseoffestival.com
                    </a>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="flex items-start space-x-4 bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="bg-yellow-100 p-3 rounded-full">
                    <Clock className="w-6 h-6 text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Business Hours</h3>
                    <div className="text-gray-600 space-y-1">
                      <p>Monday - Saturday: 9:00 AM - 7:00 PM</p>
                      <p>Sunday: 10:00 AM - 5:00 PM</p>
                    </div>
                  </div>
                </div>

                {/* GST */}
                <div className="flex items-start space-x-4 bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="bg-red-100 p-3 rounded-full">
                    <Building className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">GST Number</h3>
                    <p className="text-gray-600 font-mono">24DITPM3391G1ZU</p>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="mt-8 space-y-4">
                <button
                  onClick={handleWhatsAppContact}
                  className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-4 px-6 rounded-xl hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 font-medium shadow-lg"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Quick WhatsApp Inquiry</span>
                </button>

                <a
                  href="tel:+919712923284"
                  className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-4 px-6 rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 font-medium shadow-lg"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call Now</span>
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Send us a Message</h2>

                {isSubmitted ? (
                  <div className="text-center py-8">
                    <div className="bg-green-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-10 h-10 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-green-600 mb-4">Message Sent!</h3>
                    <p className="text-gray-600">
                      Thank you for contacting us. We'll get back to you within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                          placeholder="+91 XXXXX XXXXX"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Product Interest
                        </label>
                        <select
                          name="product"
                          value={formData.product}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                        >
                          <option value="">Select a product</option>
                          {products.map(product => (
                            <option key={product} value={product}>
                              {product}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Message *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 resize-none"
                        placeholder="Tell us about your requirements, quantity needed, or any specific questions..."
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-red-600 to-red-700 text-white py-4 px-6 rounded-xl hover:from-red-700 hover:to-red-800 focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none font-medium"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center justify-center space-x-2">
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          <span>Sending Message...</span>
                        </div>
                      ) : (
                        <div className="flex items-center justify-center space-x-2">
                          <Send className="w-5 h-5" />
                          <span>Send Message</span>
                        </div>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Find Us</h2>
            <p className="text-lg text-gray-600">Visit our showroom in Rajkot, Gujarat</p>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-12 text-center">
              <MapPin className="w-16 h-16 text-orange-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Visit Our Showroom</h3>
              <p className="text-lg text-gray-600 mb-6 max-w-md mx-auto">
                Come experience our beautiful collection of festival products in person.
              </p>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <p className="font-semibold text-gray-800 mb-2">House of Festival</p>
                <p className="text-gray-600">
                  Chunaravad - 14, New Thorala Main Road,<br />
                  Rajkot, Gujarat, 360003
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
