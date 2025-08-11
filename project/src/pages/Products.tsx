import React, { useState, useEffect } from 'react';
import { Filter, Search, Grid, List } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { Product, Category } from '../types/Product';
import { collection, getDocs } from 'firebase/firestore';
import { db } from "../firebase/config";

const Products: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<Category>('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const categories: Category[] = [
    'All', 'Diwali', 'Navratri', 'Raksha Bandhan', 'Holi', 'Ganesh Chaturthi', 'Karva Chauth'
  ];

  // Fetch products from Firestore
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'products'));
        const productList = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
          createdAt: doc.data().createdAt?.toDate() || new Date()
        })) as Product[];
        setProducts(productList);
        setFilteredProducts(productList);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  // Filter whenever category or search term changes
  useEffect(() => {
    let filtered = products;

    if (selectedCategory !== 'All') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    if (searchTerm) {
      filtered = filtered.filter(product =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredProducts(filtered);
  }, [products, selectedCategory, searchTerm]);

  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-16 btn-gradient-custom">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Festival <span className="text-yellow-300">Products</span>
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Discover our exclusive collection of handcrafted festival essentials
          </p>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="py-8 bg-white shadow-sm sticky top-20 z-40">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search products..."
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#85193C] focus:border-transparent transition-all duration-300"
              />
            </div>

            {/* Mobile Filter Toggle */}
            <button
              className="md:hidden bg-[#85193C] text-white px-4 py-3 rounded-lg flex items-center space-x-2"
              onClick={() => setIsFilterOpen(!isFilterOpen)}
            >
              <Filter className="w-5 h-5" />
              <span>Filter</span>
            </button>

            {/* View Mode */}
            <div className="flex items-center space-x-2 bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-md transition-colors ${viewMode === 'grid'
                  ? 'bg-[#85193C] text-white'
                  : 'text-gray-600 hover:text-[#85193C]'}`}
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-md transition-colors ${viewMode === 'list'
                  ? 'bg-[#85193C] text-white'
                  : 'text-gray-600 hover:text-[#85193C]'}`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Category Filter */}
          <div className={`mt-6 ${isFilterOpen || !window.matchMedia('(max-width: 768px)').matches ? 'block' : 'hidden'} md:block`}>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 ${selectedCategory === category
                    ? 'bg-gradient-to-r from-[#85193C] to-red-500 text-white shadow-lg'
                    : 'bg-white text-gray-600 border border-gray-200 hover:border-[#85193C] hover:text-[#85193C]'}`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <p className="text-gray-600">
              Showing <span className="font-semibold text-[#85193C]">{filteredProducts.length}</span>
              {searchTerm && <> results for "<span className="font-semibold">{searchTerm}</span>"</>}
              {selectedCategory !== 'All' && <> in <span className="font-semibold">{selectedCategory}</span></>}
            </p>
          </div>

          {filteredProducts.length > 0 ? (
            <div
              className={`grid gap-8 ${viewMode === 'grid'
                ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
                : 'grid-cols-1 max-w-4xl mx-auto'}`}
            >
              {filteredProducts.map((product) => (
                <div key={product.id}>
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="bg-white rounded-2xl p-12 shadow-lg max-w-md mx-auto">
                <div className="text-6xl mb-6">🔍</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">No Products Found</h3>
                <p className="text-gray-600 mb-6">
                  Try adjusting your search criteria or browse our other categories.
                </p>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('All');
                  }}
                  className="bg-gradient-to-r from-[#85193C] to-red-500 text-white px-6 py-3 rounded-lg hover:from-orange-600 hover:to-red-600 transition-all duration-300"
                >
                  Clear Filters
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-16 bg-white mb-[170px]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Shop by Festival
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Find the perfect products for your favorite festivals
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.slice(1).map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className="group bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {category === 'Diwali' ? '🪔' :
                    category === 'Navratri' ? '💃' :
                      category === 'Raksha Bandhan' ? '🎀' :
                        category === 'Holi' ? '🎨' :
                          category === 'Ganesh Chaturthi' ? '🐘' :
                            category === 'Karva Chauth' ? '🌙' : '🎉'}
                </div>
                <h3 className="font-semibold text-gray-800 group-hover:text-orange-600 transition-colors">
                  {category}
                </h3>
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
