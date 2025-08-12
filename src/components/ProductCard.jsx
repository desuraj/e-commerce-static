import React, { useState } from 'react';
import './ProductCard.css';
import { FaWhatsapp } from "react-icons/fa";




function generateWhatsApp(product, quantity) {
  return encodeURIComponent(
    `Hello, I want to buy: ${product.name}\nPrice: ${product.price}\nQuantity: ${quantity}\nModel: ${product.details['Model number']}`
  );
}

export default function ProductCard({ product, phone, onClick }) {
  const [quantity, setQuantity] = useState(1);

  const priceNumber = parseFloat(product.price.replace(/[^0-9.]/g, '')) || 0;
  const totalPrice = priceNumber * quantity;

  const increaseQty = (e) => {
    e.stopPropagation();
    setQuantity(prev => prev + 1);
  };

  const decreaseQty = (e) => {
    e.stopPropagation();
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  const handleBuyClick = (e) => {
    e.stopPropagation();
    window.open(
      `https://wa.me/${phone}?text=${generateWhatsApp(product, quantity)}`,
      '_blank'
    );
  };

  return (
    <div className="product-card" onClick={onClick}>
      <img src={product.image} alt={product.name} className="product-img" />

      <h2 className="product-name" onClick={(e) => { e.stopPropagation(); onClick(); }}>
        {product.name}
      </h2>

      <p className="price">Price: {product.price}</p>

      {/* Quantity Selector */}
      <div className="quantity-control">
        <button className="qty-btn minus" onClick={decreaseQty}>−</button>
        <span className="qty-number">{quantity}</span>
        <button className="qty-btn plus" onClick={increaseQty}>+</button>
      </div>

      <p className="total">Total: ₹{totalPrice.toLocaleString()}</p>

      {/* Buy Button */}
     <button className="buy-btn" onClick={handleBuyClick}>
  <FaWhatsapp style={{ marginRight: '8px', fontSize: '1.2em' }} />
  Buy on WhatsApp
</button>

    </div>
  );
}

