# E-Commerce Application

A modern, full-stack e-commerce platform featuring product browsing, filtering, pagination, and a responsive UI. Built with the MERN stack (MongoDB, Express.js, React, Node.js).

## ✨ Features

- **Product Catalog**: Browse through a diverse collection of products across multiple categories
- **Advanced Filtering**: Filter products by category and price range
- **Pagination**: Smooth pagination for better user experience with large product catalogs
- **Product Details**: Detailed product pages with descriptions, pricing, ratings, and reviews
- **Responsive Design**: Fully responsive UI that works seamlessly on desktop and mobile devices
- **RESTful API**: Clean and well-documented API endpoints
- **Database Seeding**: Pre-populated database with 40+ sample products across 10 categories

## 🛠️ Tech Stack

### Frontend
- **React** (v18.2.0) - UI library
- **React Router DOM** (v7.9.6) - Client-side routing
- **Axios** - HTTP client for API requests
- **CSS3** - Styling

### Backend
- **Node.js** - Runtime environment
- **Express.js** (v4.18.2) - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** (v8.0.3) - MongoDB object modeling
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variable management
- **Nodemon** - Development auto-restart

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v14 or higher)
- **npm** (v6 or higher)
- **MongoDB** (v4.4 or higher) - Running locally or a MongoDB Atlas account

## 🚀 Quick Start

### Option 1: Install All Dependencies at Once

```bash
npm run install-all
```

### Option 2: Manual Setup

#### Backend Setup

1. Navigate to backend folder:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the backend directory with the following variables:
   ```env
   PORT=5000
   MONGO_URI=mongodb://localhost:27017/ecommerce
   # For MongoDB Atlas, use:
   # MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/ecommerce?retryWrites=true&w=majority
   ```

4. Seed the database with sample products:
   ```bash
   npm run seed
   ```

5. Start the backend server:
   ```bash
   npm run dev
   ```
   Backend will run on http://localhost:5000

#### Frontend Setup

1. Navigate to frontend folder:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the React development server:
   ```bash
   npm start
   ```
   Frontend will run on http://localhost:3000

## 📁 Project Structure

```
ECommerse/
├── backend/
│   ├── config/
│   │   └── db.js              # MongoDB connection configuration
│   ├── models/
│   │   └── Product.js         # Product schema
│   ├── routes/
│   │   └── products.js        # Product API routes
│   ├── seed.js                # Database seeding script
│   ├── server.js              # Express server entry point
│   └── package.json
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Filters.js     # Product filtering component
│   │   │   ├── Footer.js      # Footer component
│   │   │   ├── Header.js      # Header component
│   │   │   ├── Layout.js      # Layout wrapper
│   │   │   ├── Navbar.js      # Navigation bar
│   │   │   ├── Pagination.js  # Pagination component
│   │   │   ├── ProductCard.js # Individual product card
│   │   │   ├── ProductDetails.js # Product details page
│   │   │   └── Products.js    # Product listing page
│   │   ├── App.js             # Main app component
│   │   └── index.js           # React entry point
│   └── package.json
├── package.json               # Root package.json with helper scripts
└── README.md
```

## 🔌 API Endpoints

### Products

| Method | Endpoint | Description | Query Parameters |
|--------|----------|-------------|------------------|
| GET | `/api/products` | Get all products with pagination and filters | `page`, `limit`, `category`, `minPrice`, `maxPrice` |
| GET | `/api/products/categories` | Get all unique product categories | - |
| GET | `/api/products/:id` | Get a single product by ID | - |

#### Example API Requests

**Get all products (with pagination):**
```bash
GET http://localhost:5000/api/products?page=1&limit=20
```

**Filter by category:**
```bash
GET http://localhost:5000/api/products?category=Electronics&page=1&limit=20
```

**Filter by price range:**
```bash
GET http://localhost:5000/api/products?minPrice=50&maxPrice=200
```

**Get product categories:**
```bash
GET http://localhost:5000/api/products/categories
```

**Get single product:**
```bash
GET http://localhost:5000/api/products/:id
```

## 📜 Available Scripts

### Root Directory

- `npm run install-all` - Install dependencies for both frontend and backend
- `npm run seed` - Seed the database with sample products
- `npm run dev:backend` - Start backend in development mode
- `npm run dev:frontend` - Start frontend in development mode
- `npm run start:backend` - Start backend in production mode
- `npm run build:frontend` - Build frontend for production

### Backend (./backend)

- `npm start` - Start the server in production mode
- `npm run dev` - Start the server with nodemon (auto-restart)
- `npm run seed` - Populate database with sample products

### Frontend (./frontend)

- `npm start` - Start React development server
- `npm run build` - Build the app for production
- `npm test` - Run tests
- `npm run eject` - Eject from Create React App (one-way operation)

## 📦 Product Categories

The application includes products in the following categories:
- Electronics
- Clothing
- Home & Kitchen
- Sports & Outdoors
- Books
- Beauty & Personal Care
- Toys & Games
- Automotive
- Pet Supplies

## 🌟 Key Features Explained

### Pagination
Products are paginated with 20 items per page by default. Users can navigate through pages using the pagination controls at the bottom of the product listing.

### Filtering
- **Category Filter**: Filter products by selecting a specific category from the dropdown
- **Price Range Filter**: Set minimum and maximum price constraints to narrow down product selection

### Product Details
Each product displays:
- High-quality product image
- Product name and description
- Price
- Average rating (out of 5 stars)
- Number of reviews
- Stock availability

## 🔧 Environment Variables

### Backend (.env)

Create a `.env` file in the `backend` directory:

```env
# Server Configuration
PORT=5000

# Database Configuration
MONGO_URI=mongodb://localhost:27017/ecommerce

# For MongoDB Atlas (cloud database):
# MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/ecommerce?retryWrites=true&w=majority
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the ISC License.

## 👤 Author

Created with ❤️ by the development team

---

**Note**: Make sure MongoDB is running before starting the backend server. For local MongoDB, you can start it with `mongod` command.

