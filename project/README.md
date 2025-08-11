# House of Festival - Festival Products Website

A beautiful, fully responsive website for House of Festival - a premium brand offering handcrafted festival essentials celebrating Indian culture and traditions.

## Features

### 🏠 **Complete Website Structure**
- **Home Page**: Welcome banner, brand story, features showcase
- **About Us**: Company mission, vision, values, and artisan showcase  
- **Services**: Comprehensive service offerings with process breakdown
- **Products**: Filterable product catalog with search functionality
- **Contact**: Contact forms, business information, and inquiry options
- **Admin Dashboard**: Full CRUD operations for product management

### 🎨 **Premium Design**
- Warm festival color palette (oranges, golds, deep reds)
- Smooth AOS scroll animations throughout
- Hover effects and micro-interactions
- Mobile-first responsive design
- Premium typography with Inter + Playfair Display fonts
- Professional gradient backgrounds and textures

### 🛡️ **Admin Features**
- Secure login system (Username: `admin`, Password: `admin@1234`)
- Add, edit, and delete products
- Image upload support
- Category management
- Product statistics dashboard
- Real-time inventory updates

### 📱 **WhatsApp Integration**
- Pre-filled inquiry messages for each product
- Direct contact buttons throughout the site
- Automated product information inclusion

### 🔥 **Technical Features**
- **React 18** with TypeScript
- **Firebase** ready (configuration needed)
- **React Router** for navigation
- **AOS** for scroll animations  
- **Lucide React** for icons
- **Tailwind CSS** for styling
- Fully responsive design
- SEO optimized

## Business Information

- **Address**: Chunaravad - 14, New Thorala Main Road, Rajkot, Gujarat, 360003
- **GST Number**: 24DITPM3391G1ZU  
- **WhatsApp**: +91 6356 065 766
- **Phone**: +91 97129 23284

## Setup Instructions

### 1. Firebase Configuration
To enable database functionality, you need to:

1. Create a Firebase project at [Firebase Console](https://console.firebase.google.com)
2. Enable Firestore Database and Authentication
3. Update `src/firebase/config.ts` with your Firebase configuration:

```typescript
const firebaseConfig = {
  apiKey: "your-api-key",
  authDomain: "your-project.firebaseapp.com", 
  projectId: "your-project-id",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "123456789",
  appId: "your-app-id"
};
```

### 2. Development

```bash
# Install dependencies
npm install

# Start development server  
npm run dev

# Build for production
npm run build
```

### 3. Admin Access
- Navigate to the website and click "Login" in the header
- Use credentials: `admin` / `admin@1234`
- Access admin dashboard to manage products

## Product Categories

- Diwali
- Navratri  
- Raksha Bandhan
- Holi
- Ganesh Chaturthi
- Karva Chauth

## Key Components

- **AuthContext**: Manages admin authentication
- **ProductCard**: Reusable product display component
- **Header**: Navigation with admin login
- **Footer**: Business information and links
- **LoginModal**: Secure admin authentication

## Performance Features

- Image optimization from Pexels
- Lazy loading for smooth performance
- Efficient component architecture
- Mobile-optimized layouts
- Fast loading animations

## SEO Optimizations

- Meta tags and descriptions
- Structured data markup ready
- Semantic HTML structure  
- Alt text for all images
- Fast loading performance

---

**House of Festival** - Celebrating Traditions with Elegance 🎉

*Made with ❤️ in India*