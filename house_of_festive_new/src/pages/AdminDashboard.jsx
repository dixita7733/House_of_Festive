import React, { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";
import {
  Plus, X, Package, TrendingUp, Users, Star, Upload, Save, Edit, Trash2
} from "lucide-react";
import ProductCard from "../components/ProductCard";
import { db, storage } from "../firebase/config";
import {
  collection, addDoc, updateDoc, deleteDoc, doc, Timestamp, onSnapshot, query, orderBy
} from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

const AdminDashboard = () => {
  const { isAdmin } = useAuth();
  const [products, setProducts] = useState([]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [formData, setFormData] = useState({
    title: "",
    image: "",
    size: "",
    color: "",
    price: 0,
    category: "Diwali"
  });
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState("");

  const categories = [
    "Diwali", "Navratri", "Raksha Bandhan", "Holi", "Ganesh Chaturthi", "Karva Chauth"
  ];

  // Real-time products listener
  useEffect(() => {
    const q = query(collection(db, "products"), orderBy("createdAt", "desc"));
    const unsub = onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map((docSnap) => ({
        id: docSnap.id,
        ...docSnap.data(),
        createdAt: docSnap.data().createdAt?.toDate() || new Date()
      }));
      setProducts(data);
    });
    return () => unsub();
  }, []);

  if (!isAdmin) return <Navigate to="/" replace />;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "price" ? parseFloat(value) || 0 : value
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onload = (e) => setImagePreview(e.target.result);
      reader.readAsDataURL(file);
    }
  };

  const uploadImage = async (file) => {
    const storageRef = ref(storage, `products/${Date.now()}_${file.name}`);
    const snapshot = await uploadBytes(storageRef, file);
    return await getDownloadURL(snapshot.ref);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      let imageUrl = formData.image;

      // Upload new image if file is selected
      if (imageFile) {
        imageUrl = await uploadImage(imageFile);
      }

      const productData = {
        ...formData,
        image: imageUrl,
        price: Number(formData.price)
      };

      if (editingProduct) {
        await updateDoc(doc(db, "products", editingProduct.id), productData);
      } else {
        await addDoc(collection(db, "products"), {
          ...productData,
          createdAt: Timestamp.now()
        });
      }

      // Reset form
      setFormData({ title: "", image: "", size: "", color: "", price: 0, category: "Diwali" });
      setImageFile(null);
      setImagePreview("");
      setShowAddForm(false);
      setEditingProduct(null);
    } catch (error) {
      console.error("Error saving product:", error);
      alert("Error saving product. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleEdit = (product) => {
    setEditingProduct(product);
    setFormData({
      title: product.title,
      image: product.image,
      size: product.size,
      color: product.color,
      price: product.price,
      category: product.category
    });
    setImagePreview(product.image);
    setShowAddForm(true);
  };

  const handleDelete = async (id) => {
    if (confirm("Are you sure you want to delete this product?")) {
      try {
        await deleteDoc(doc(db, "products", id));
      } catch (error) {
        console.error("Error deleting product:", error);
        alert("Error deleting product. Please try again.");
      }
    }
  };

  const resetForm = () => {
    setFormData({ title: "", image: "", size: "", color: "", price: 0, category: "Diwali" });
    setImageFile(null);
    setImagePreview("");
    setEditingProduct(null);
    setShowAddForm(false);
  };

  const stats = [
    { label: "Total Products", value: products.length, icon: <Package className="w-6 h-6 text-blue-500" /> },
    { label: "Categories", value: categories.length, icon: <Star className="w-6 h-6 text-[#85193C]" /> },
    { label: "Avg. Price", value: `₹${Math.round(products.reduce((acc, p) => acc + p.price, 0) / (products.length || 1))}`, icon: <TrendingUp className="w-6 h-6 text-green-500" /> },
    { label: "Total Value", value: `₹${products.reduce((acc, p) => acc + p.price, 0).toLocaleString()}`, icon: <Users className="w-6 h-6 text-purple-500" /> }
  ];

  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#85193C] to-[#b51f50] py-8 lg:py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl lg:text-4xl font-bold text-white mb-4">Admin Dashboard</h1>
          <p className="text-red-100 text-lg">Manage your festival products</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6 lg:py-8">
        {/* Stats */}
        <div className="responsive-grid mb-8">
          {stats.map((stat, i) => (
            <div key={i} className="bg-white rounded-2xl p-4 lg:p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center space-x-3 mb-2">
                {stat.icon}
                <h3 className="text-xl lg:text-2xl font-bold text-gray-800">{stat.value}</h3>
              </div>
              <p className="text-gray-600 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 space-y-4 sm:space-y-0">
          <h2 className="text-2xl font-bold text-gray-800">Product Management</h2>
          <button
            onClick={() => {
              resetForm();
              setShowAddForm(true);
            }}
            className="btn-gradient-custom"
          >
            <Plus className="w-5 h-5" />
            <span>Add Product</span>
          </button>
        </div>

        {/* Modal */}
        {showAddForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="flex justify-between items-center p-6 border-b border-gray-200">
                <h3 className="text-2xl font-bold text-gray-800">
                  {editingProduct ? "Edit Product" : "Add New Product"}
                </h3>
                <button onClick={resetForm} className="text-gray-500 hover:text-gray-700">
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <form onSubmit={handleSubmit} className="p-6 space-y-6">
                {/* Image Upload */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">Product Image</label>
                  <div className="flex flex-col space-y-4">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                      className="form-input"
                    />
                    <input
                      type="url"
                      name="image"
                      value={formData.image}
                      onChange={handleInputChange}
                      placeholder="Or paste image URL"
                      className="form-input"
                    />
                    {imagePreview && (
                      <div className="relative w-32 h-32 rounded-lg overflow-hidden border">
                        <img
                          src={imagePreview}
                          alt="Preview"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                  </div>
                </div>

                {/* Product Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">Product Title *</label>
                    <input
                      type="text"
                      name="title"
                      value={formData.title}
                      onChange={handleInputChange}
                      placeholder="Enter product title"
                      className="form-input"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">Category *</label>
                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleInputChange}
                      className="form-input"
                      required
                    >
                      {categories.map((cat) => (
                        <option key={cat} value={cat}>{cat}</option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">Size *</label>
                    <input
                      type="text"
                      name="size"
                      value={formData.size}
                      onChange={handleInputChange}
                      placeholder="e.g., Medium, Large, 12 inches"
                      className="form-input"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">Color *</label>
                    <input
                      type="text"
                      name="color"
                      value={formData.color}
                      onChange={handleInputChange}
                      placeholder="e.g., Red, Golden, Multi-color"
                      className="form-input"
                      required
                    />
                  </div>

                  <div className="space-y-2 md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700">Price (₹) *</label>
                    <input
                      type="number"
                      name="price"
                      value={formData.price}
                      onChange={handleInputChange}
                      placeholder="Enter price"
                      className="form-input"
                      min="0"
                      step="0.01"
                      required
                    />
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-gradient-custom flex-1 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="loading-spinner"></div>
                        <span>{editingProduct ? "Updating..." : "Adding..."}</span>
                      </>
                    ) : (
                      <>
                        <Save className="w-5 h-5" />
                        <span>{editingProduct ? "Update Product" : "Add Product"}</span>
                      </>
                    )}
                  </button>
                  <button
                    type="button"
                    onClick={resetForm}
                    className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Product Grid */}
        <div className="responsive-grid">
          {products.map((product) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onEdit={handleEdit} 
              onDelete={handleDelete} 
              isAdmin 
            />
          ))}
        </div>

        {products.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">📦</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">No Products Yet</h3>
            <p className="text-gray-600 mb-6">Start by adding your first festival product!</p>
            <button
              onClick={() => {
                resetForm();
                setShowAddForm(true);
              }}
              className="btn-gradient-custom"
            >
              <Plus className="w-5 h-5" />
              <span>Add First Product</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;