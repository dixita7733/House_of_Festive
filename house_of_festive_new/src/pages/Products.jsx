import React from 'react';
import { Star, ShoppingCart, Eye } from 'lucide-react';

const Products = () => {
  const products = [
    {
      id: 1,
      name: "Traditional Diwali Rangoli Set",
      price: "₹1,299",
      originalPrice: "₹1,599",
      rating: 4.8,
      reviews: 124,
      image: "https://images.pexels.com/photos/1131555/pexels-photo-1131555.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Diwali",
      description: "Beautiful handcrafted rangoli stencils with vibrant colors"
    },
    {
      id: 2,
      name: "Navratri Garba Accessories",
      price: "₹899",
      originalPrice: "₹1,199",
      rating: 4.9,
      reviews: 89,
      image: "https://images.pexels.com/photos/1131555/pexels-photo-1131555.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Navratri",
      description: "Complete set of traditional garba dance accessories"
    },
    {
      id: 3,
      name: "Ganesh Chaturthi Decoration",
      price: "₹2,499",
      originalPrice: "₹2,999",
      rating: 4.7,
      reviews: 67,
      image: "https://images.pexels.com/photos/1131555/pexels-photo-1131555.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Ganesh Chaturthi",
      description: "Elegant Lord Ganesha decoration set with flowers"
    },
    {
      id: 4,
      name: "Raksha Bandhan Special Rakhi",
      price: "₹599",
      originalPrice: "₹799",
      rating: 4.9,
      reviews: 156,
      image: "https://images.pexels.com/photos/1131555/pexels-photo-1131555.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Raksha Bandhan",
      description: "Handmade premium rakhi with traditional designs"
    },
    {
      id: 5,
      name: "Karva Chauth Essentials",
      price: "₹1,799",
      originalPrice: "₹2,199",
      rating: 4.8,
      reviews: 94,
      image: "https://images.pexels.com/photos/1131555/pexels-photo-1131555.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Karva Chauth",
      description: "Complete puja thali set with traditional elements"
    },
    {
      id: 6,
      name: "Holi Color Festival Pack",
      price: "₹1,099",
      originalPrice: "₹1,399",
      rating: 4.6,
      reviews: 203,
      image: "https://images.pexels.com/photos/1131555/pexels-photo-1131555.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Holi",
      description: "Natural and safe holi colors in vibrant shades"
    }
  ];

  const categories = ["All", "Diwali", "Navratri", "Ganesh Chaturthi", "Raksha Bandhan", "Karva Chauth", "Holi"];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-[#85193C] to-red-600">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Our <span className="text-yellow-300">Products</span>
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed">
            Discover our exclusive collection of handcrafted festival essentials
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white sticky top-20 z-40 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-2 rounded-full border-2 border-[#85193C] text-[#85193C] hover:bg-[#85193C] hover:text-white transition-all duration-300 font-medium"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group"
              >
                {/* Product Image */}
                <div className="relative overflow-hidden rounded-t-2xl">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {Math.round(((parseFloat(product.originalPrice.replace('₹', '').replace(',', '')) - parseFloat(product.price.replace('₹', '').replace(',', ''))) / parseFloat(product.originalPrice.replace('₹', '').replace(',', ''))) * 100)}% OFF
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 transition-colors">
                      <Eye className="w-5 h-5 text-gray-600" />
                    </button>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <div className="mb-2">
                    <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-xs font-semibold">
                      {product.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-[#85193C] transition-colors">
                    {product.name}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-4">
                    {product.description}
                  </p>

                  {/* Rating */}
                  <div className="flex items-center mb-4">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(product.rating)
                              ? 'text-yellow-400 fill-current'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600 ml-2">
                      {product.rating} ({product.reviews} reviews)
                    </span>
                  </div>

                  {/* Price */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold text-[#85193C]">
                        {product.price}
                      </span>
                      <span className="text-lg text-gray-500 line-through">
                        {product.originalPrice}
                      </span>
                    </div>
                  </div>

                  {/* Add to Cart Button */}
                  <button className="w-full bg-gradient-to-r from-[#85193C] to-red-600 text-white py-3 px-6 rounded-lg hover:from-red-600 hover:to-[#85193C] transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 font-semibold">
                    <ShoppingCart className="w-5 h-5" />
                    <span>Add to Cart</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <button className="bg-white text-[#85193C] px-8 py-3 rounded-full font-semibold border-2 border-[#85193C] hover:bg-[#85193C] hover:text-white transition-all duration-300 transform hover:scale-105">
              Load More Products
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Why Our Products Stand Out
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Each product is carefully crafted with attention to detail and cultural authenticity
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Premium Quality</h3>
              <p className="text-gray-600">
                Only the finest materials and traditional techniques are used in our products
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Eye className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Authentic Designs</h3>
              <p className="text-gray-600">
                Each design is rooted in traditional Indian culture and festivals
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShoppingCart className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Fast Delivery</h3>
              <p className="text-gray-600">
                Quick and secure delivery across India to reach you on time
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
