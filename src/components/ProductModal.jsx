import React, { useState } from 'react';
import './ProductCard.css';
import { FaWhatsapp } from "react-icons/fa";

export default function ProductModal({ product, phone, onClose }) {
  const [quantity, setQuantity] = useState(1);

  const priceNumber = parseFloat(product.price.replace(/[^0-9.]/g, '')) || 0;
  const totalPrice = priceNumber * quantity;

  const increaseQty = () => {
    setQuantity(prev => prev + 1);
  };

  const decreaseQty = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  const handleBuyClick = () => {
    const priceNumber = parseFloat(product.price.replace(/[^0-9.]/g, '')) || 0;
    const totalPrice = priceNumber * quantity;

    const message = encodeURIComponent(
      `Hello, I want to buy:\n` +
      `${product.name}\n` +
      `Price: ${product.price}\n` +
      `Quantity: ${quantity}\n` +
      `Total Price: ₹${totalPrice.toLocaleString()}\n` +
      `Model: ${product.details['Model number']}`
    );

    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
  };

  return (
    <div className="modal" style={{ display: 'flex' }}>
      <div className="modal-content">
        <span className="close-btn" onClick={onClose}>&times;</span>
        <h2>{product.name}</h2>

        <ul>
          {Object.entries(product.details).map(([key, value], idx) => (
            <li key={idx}><strong>{key}</strong>: {value}</li>
          ))}
        </ul>

        {/* Quantity Selector */}
        <div className="quantity-control">
          <span className="qty-label">Quantity:</span>
          <button className="qty-btn minus" onClick={decreaseQty}>−</button>
          <span className="qty-number">{quantity}</span>
          <button className="qty-btn plus" onClick={increaseQty}>+</button>
        </div>

        {/* Total Price */}
        <p className="total">Total: ₹{totalPrice.toLocaleString()}</p>

        {/* Buy Button */}
        <button className="buy-btn" onClick={handleBuyClick}>
          <FaWhatsapp style={{ marginRight: '8px', fontSize: '1.2em' }} />
          Buy on WhatsApp
        </button>
      </div>
    </div>
  );
}
