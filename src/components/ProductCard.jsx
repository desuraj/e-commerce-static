import React from 'react';

function generateWhatsApp(product) {
  return encodeURIComponent(
    `Hello, I want to buy: ${product.name}\nPrice: ${product.price}\nModel: ${product.details['Model number']}`
  );
}

export default function ProductCard({ product, phone, onClick }) {
  const handleBuyClick = (e) => {
    e.stopPropagation(); // Prevent modal open
    window.open(
      `https://wa.me/${phone}?text=${generateWhatsApp(product)}`,
      '_blank'
    );
  };

  return (
    <div className="product" onClick={onClick}>
      <img src={product.image} alt={product.name} />
      {/* Title is now clickable */}
      <h2
        className="product-name"
        style={{ cursor: 'pointer' }}
        onClick={(e) => {
          e.stopPropagation(); // Prevent parent div click
          onClick(); // Opens product details modal
        }}
      >
        {product.name}
      </h2>
      <p className="price">{product.price}</p>
      <button className="buy-btn" onClick={handleBuyClick}>
        <i className="fab fa-whatsapp"></i> Buy
      </button>
    </div>
  );
}
