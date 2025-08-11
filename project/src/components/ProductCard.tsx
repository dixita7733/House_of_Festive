import React from 'react';
import { MessageCircle, Eye, Heart } from 'lucide-react';
import { Product } from '../types/Product';

interface ProductCardProps {
  product: Product;
  onEdit?: (product: Product) => void;
  onDelete?: (id: string) => void;
  isAdmin?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onEdit,
  onDelete,
  isAdmin = false
}) => {
  const handleWhatsAppInquiry = () => {
    const message = `Hi! I'm interested in the "${product.title}" - Size: ${product.size}, Color: ${product.color}, Price: ₹${product.price}. Please provide more details.`;
    const whatsappUrl = `https://wa.me/916356065766?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden">
      {/* Product Image */}
      <div className="relative overflow-hidden aspect-square">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Overlay with actions */}
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
          <div className="flex space-x-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
            <button className="bg-white text-gray-800 p-2 rounded-full hover:bg-[#85193C] hover:text-white transition-colors transform hover:scale-110">
              <Eye size={18} />
            </button>
            <button className="bg-white text-gray-800 p-2 rounded-full hover:bg-[#85193C] hover:text-white transition-colors transform hover:scale-110">
              <Heart size={18} />
            </button>
          </div>
        </div>

        {/* Category Badge */}
        <div className="absolute top-3 left-3">
          <span className="btn-gradient-custom text-white text-xs font-semibold px-3 py-1 rounded-full">
            {product.category}
          </span>
        </div>
      </div>

      {/* Product Details */}
      <div className="p-6">
        {/* Title + Price in flex */}
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-lg font-bold text-gray-800 line-clamp-2 group-hover:text-[#85193C] transition-colors">
            {product.title}
          </h3>
          <span className="text-xl font-bold text-[#85193C]">
            ₹{product.price}
          </span>
        </div>

        {/* Size & Color */}
        <div className="space-y-2 mb-4">
          <div className="flex items-center justify-between text-sm text-gray-600">
            <span className="font-medium">Size:</span>
            <span className="bg-gray-100 px-2 py-1 rounded-full">{product.size}</span>
          </div>
          <div className="flex items-center justify-between text-sm text-gray-600">
            <span className="font-medium">Color:</span>
            <span className="bg-gray-100 px-2 py-1 rounded-full">{product.color}</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col space-y-3">
          {!isAdmin && (
            <button
              onClick={handleWhatsAppInquiry}
              className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-3 px-4 rounded-xl hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 font-medium"
            >
              <MessageCircle size={18} />
              <span>WhatsApp Inquiry</span>
            </button>
          )}

          {isAdmin && (
            <div className="flex space-x-2">
              <button
                onClick={() => onEdit?.(product)}
                className="flex-1 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors"
              >
                Edit
              </button>
              <button
                onClick={() => onDelete?.(product.id)}
                className="flex-1 bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition-colors"
              >
                Delete
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
