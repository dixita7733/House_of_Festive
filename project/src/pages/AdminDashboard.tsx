import React, { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";
import {
  Plus, X, Package, TrendingUp, Users, Star
} from "lucide-react";
import ProductCard from "../components/ProductCard";
import { db } from "../firebase/config";
import {
  collection, addDoc, updateDoc, deleteDoc, doc, Timestamp, onSnapshot
} from "firebase/firestore";

interface Product {
  id: string;
  title: string;
  image: string;
  size: string;
  color: string;
  price: number;
  category: string;
  createdAt: Date;
}

const AdminDashboard: React.FC = () => {
  const { isAdmin } = useAuth();
  const [products, setProducts] = useState<Product[]>([]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [formData, setFormData] = useState({
    title: "",
    image: "",
    size: "",
    color: "",
    price: 0,
    category: "Diwali"
  });

  const categories = [
    "Diwali", "Navratri", "Raksha Bandhan", "Holi", "Ganesh Chaturthi", "Karva Chauth"
  ];

  // Real-time products listener
  useEffect(() => {
    const unsub = onSnapshot(collection(db, "products"), (snapshot) => {
      const data: Product[] = snapshot.docs.map((docSnap) => ({
        id: docSnap.id,
        ...docSnap.data(),
        createdAt: docSnap.data().createdAt?.toDate() || new Date()
      })) as Product[];
      setProducts(data);
    });
    return () => unsub();
  }, []);

  if (!isAdmin) return <Navigate to="/" replace />;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "price" ? parseFloat(value) || 0 : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (editingProduct) {
      await updateDoc(doc(db, "products", editingProduct.id), formData);
      setEditingProduct(null);
    } else {
      await addDoc(collection(db, "products"), {
        ...formData,
        createdAt: Timestamp.now()
      });
    }

    setFormData({ title: "", image: "", size: "", color: "", price: 0, category: "Diwali" });
    setShowAddForm(false);
  };

  const handleEdit = (product: Product) => {
    setEditingProduct(product);
    setFormData({
      title: product.title,
      image: product.image,
      size: product.size,
      color: product.color,
      price: product.price,
      category: product.category
    });
    setShowAddForm(true);
  };

  const handleDelete = async (id: string) => {
    if (confirm("Are you sure you want to delete this product?")) {
      await deleteDoc(doc(db, "products", id));
    }
  };

  const stats = [
    { label: "Total Products", value: products.length, icon: <Package className="w-6 h-6 text-blue-500" /> },
    { label: "Categories", value: categories.length, icon: <Star className="w-6 h-6 text-orange-500" /> },
    { label: "Avg. Price", value: `₹${Math.round(products.reduce((acc, p) => acc + p.price, 0) / (products.length || 1))}`, icon: <TrendingUp className="w-6 h-6 text-green-500" /> },
    { label: "Total Value", value: `₹${products.reduce((acc, p) => acc + p.price, 0)}`, icon: <Users className="w-6 h-6 text-purple-500" /> }
  ];

  return (
    <div className="min-h-screen pt-20 bg-gray-50 mb-[200px]">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#85193C] via-[#85193C] to-[#85193C] py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-white mb-4">Admin Dashboard</h1>
          <p className="text-orange-100 text-lg">Manage your festival products</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 shadow-lg">
              {stat.icon}
              <h3 className="text-2xl font-bold text-gray-800 mb-2">{stat.value}</h3>
              <p className="text-gray-600 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Actions */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-gray-800">Product Management</h2>
          <button
            onClick={() => {
              setShowAddForm(true);
              setEditingProduct(null);
              setFormData({ title: "", image: "", size: "", color: "", price: 0, category: "Diwali" });
            }}
            className="bg-gradient-to-r from-[#85193C] to-red-500 text-white px-6 py-3 rounded-xl flex items-center space-x-2"
          >
            <Plus className="w-5 h-5" />
            <span>Add Product</span>
          </button>
        </div>

        {/* Modal */}
        {showAddForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl max-w-2xl w-full p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold">{editingProduct ? "Edit Product" : "Add New Product"}</h3>
                <button onClick={() => setShowAddForm(false)}>
                  <X className="w-6 h-6 text-gray-500" />
                </button>
              </div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <input name="title" value={formData.title} onChange={handleInputChange} placeholder="Product Title" className="border p-2 w-full" required />
                <input name="image" value={formData.image} onChange={handleInputChange} placeholder="Image URL" className="border p-2 w-full" required />
                <input name="size" value={formData.size} onChange={handleInputChange} placeholder="Size" className="border p-2 w-full" required />
                <input name="color" value={formData.color} onChange={handleInputChange} placeholder="Color" className="border p-2 w-full" required />
                <input type="number" name="price" value={formData.price} onChange={handleInputChange} placeholder="Price" className="border p-2 w-full" required />
                <select name="category" value={formData.category} onChange={handleInputChange} className="border p-2 w-full">
                  {categories.map((cat) => <option key={cat} value={cat}>{cat}</option>)}
                </select>
                <button type="submit" className="bg-[#85193C] text-white px-6 py-3 rounded-lg">
                  {editingProduct ? "Update Product" : "Add Product"}
                </button>
              </form>
            </div>
          </div>
        )}

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} onEdit={handleEdit} onDelete={handleDelete} isAdmin />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
