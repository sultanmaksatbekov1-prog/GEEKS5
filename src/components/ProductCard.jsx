import React from "react";

const ProductCard = ({ product, images }) => {
  const randomImage = images[Math.floor(Math.random() * images.length)];

  const handleBuy = () => {
    console.log("ID:", product.id);
    console.log("Product:", product.name);
  };

  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "15px",
        width: "200px",
        textAlign: "center",
      }}
    >
      <img src={randomImage} alt={product.name} style={{ width: "100%" }} />

      <h3>{product.name}</h3>

      <button onClick={handleBuy}>Buy now</button>
    </div>
  );
};

export default ProductCard;
