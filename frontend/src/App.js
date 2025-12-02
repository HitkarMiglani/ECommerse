import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Products from './components/Products';
import ProductDetails from './components/ProductDetails';

import './App.css';

function App() {
  return (
    <Layout>
      <div className="App">
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/product/:id" element={<ProductDetails />} />

        </Routes>
      </div>
    </Layout>
  );
}

export default App;
