import React, { useEffect, useState } from 'react';
import './index.css';
import ProductCard from './components/ProductCard';
import ProductModal from './components/ProductModal';
import CONFIG from './config';
import './App.css';

function App() {
  const [products, setProducts] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    fetch('products.json')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch((err) => console.error('Failed to load products', err));
  }, []);

  return (
    <div>
      <header>
        <img src={CONFIG.logo} alt="Logo" />
        <h1>{CONFIG.siteName}</h1>
      </header>

      <div className="container">
        <div className="product-grid">
          {products.map((product, idx) => (
            <div key={idx} className="product-card">
              <img src={product.image} alt={product.name} />
              <h2 className="product-name">{product.name}</h2>
              <p className="price">{product.price}</p>
            </div>
          ))}
        </div>

        <div className="about">
          <h2>About Us</h2>
          <p>We are a small Indian shop selling affordable and quality daily-use products across the country with love and care.</p>
        </div>

        <div className="support">
          <h2>Support</h2>
          <p>WhatsApp: <a href={`https://wa.me/${CONFIG.whatsappNumber}`} target="_blank" rel="noreferrer">+91-9509071647</a></p>
          <p>Email: <a href={`mailto:${CONFIG.email}`}>{CONFIG.email}</a></p>
        </div>

        <div className="social">
          <h2>Follow Us</h2>
          <p>
            <a href="#">Facebook</a> |
            <a href="#">Instagram</a> |
            <a href="#">Twitter</a>
          </p>
        </div>
      </div>


      <footer>&copy; {new Date().getFullYear()} {CONFIG.siteName}. All rights reserved.</footer>

      {selected && (
        <ProductModal
          product={selected}
          phone={CONFIG.whatsappNumber}
          onClose={() => setSelected(null)}
        />
      )}
    </div>
  );
}

export default App;
