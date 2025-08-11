import React from 'react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen pt-20 bg-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">About House of Festival</h1>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-[#85193C] mb-6">Our Story</h2>
            <p className="text-lg text-gray-600 mb-6">
              House of Festival is a passion-driven brand offering premium quality products 
              that celebrate Indian culture and festivals. With over 15 years of expertise, 
              we've been proudly supporting local artisans and spreading joy through our handicrafts.
            </p>
            <p className="text-lg text-gray-600">
              Based in Rajkot, Gujarat, we specialize in creating authentic festival essentials 
              that bring families together and honor our rich cultural heritage.
            </p>
          </div>
          <div>
            <img 
              src="https://images.pexels.com/photos/1131555/pexels-photo-1131555.jpeg?auto=compress&cs=tinysrgb&w=800" 
              alt="Traditional craftsmanship" 
              className="rounded-lg shadow-lg w-full h-96 object-cover"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center bg-orange-50 p-8 rounded-lg">
            <h3 className="text-3xl font-bold text-[#85193C] mb-2">5000+</h3>
            <p className="text-gray-600">Happy Families</p>
          </div>
          <div className="text-center bg-orange-50 p-8 rounded-lg">
            <h3 className="text-3xl font-bold text-[#85193C] mb-2">50+</h3>
            <p className="text-gray-600">Awards Won</p>
          </div>
          <div className="text-center bg-orange-50 p-8 rounded-lg">
            <h3 className="text-3xl font-bold text-[#85193C] mb-2">15+</h3>
            <p className="text-gray-600">Years Experience</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-[#85193C] mb-6">Our Mission</h2>
            <p className="text-lg text-gray-600">
              To preserve and celebrate Indian cultural heritage by creating premium quality 
              festival products that bring joy, authenticity, and elegance to every celebration.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-[#85193C] mb-6">Our Vision</h2>
            <p className="text-lg text-gray-600">
              To become the most trusted brand for festival essentials, connecting families 
              with their traditions while supporting local artisan communities across India.
            </p>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-[#85193C] mb-8">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Tradition</h3>
              <p className="text-gray-600">Preserving Indian cultural heritage through our products</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Quality</h3>
              <p className="text-gray-600">Excellence in craft and attention to detail</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Community</h3>
              <p className="text-gray-600">Supporting local artisans and communities</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Joy</h3>
              <p className="text-gray-600">Bringing happiness to every celebration</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
