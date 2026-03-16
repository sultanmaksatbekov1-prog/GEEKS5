import React from "react";
import ProductCard from "./components/ProductCard";

function App() {
  const images = [
    "https://picsum.photos/200?1",
    "https://picsum.photos/200?2",
    "https://picsum.photos/200?3",
    "https://picsum.photos/200?4",
  ];

  const products = [
    { id: 1, name: "Nike Sneakers" },
    { id: 2, name: "Adidas Hoodie" },
    { id: 3, name: "Puma T-shirt" },
    { id: 4, name: "Reebok Shorts" },
  ];

  return (
    <div>
      <h1>Online Shop</h1>

      <div
        style={{
          display: "flex",
          gap: "20px",
        }}
      >
        {products.map((product) => (
          <ProductCard key={product.id} product={product} images={images} />
        ))}
      </div>
    </div>
  );
}

export default App;
