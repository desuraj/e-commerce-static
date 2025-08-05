import React from 'react';

function generateWhatsApp(product) {
  return encodeURIComponent(`Hello, I want to buy: ${product.name}\nPrice: ${product.price}\nModel: ${product.details['Model number']}`);
}

export default function ProductCard({ product, phone, onClick }) {
  return (
    <div className="product" onClick={(e) => {
      if (!e.target.closest('.buy-btn')) onClick();
    }}>
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p className="price">{product.price}</p>
      <a
        href={`https://wa.me/${phone}?text=${generateWhatsApp(product)}`}
        target="_blank" rel="noreferrer"
      >
        <button className="buy-btn"><i className="fab fa-whatsapp"></i>Buy</button>
      </a>
    </div>
  );
}
