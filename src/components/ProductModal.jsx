import React from 'react';

export default function ProductModal({ product, phone, onClose }) {
  const message = encodeURIComponent(
    `Hi, I'm interested in:\n${product.name}\nPrice: ${product.price}\nModel: ${product.details['Model number']}`
  );

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
        <a href={`https://wa.me/${phone}?text=${message}`} target="_blank" rel="noreferrer">
          <button className="buy-btn"><i className="fab fa-whatsapp"></i>Buy</button>
        </a>
      </div>
    </div>
  );
}
