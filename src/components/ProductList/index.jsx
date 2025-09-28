import React from "react";
import withLoading from "../../hoc/withLoading";

function ProductList() {
  const products = [
    "iPhone 17 Pro Max",
    "Samsung Galaxy S25 Ultra",
    "Xiaomi 17 Pro Max",
  ];

  return (
    <div
      style={{
        padding: "1.5rem",
        border: "1px solid #e0e0e0",
        borderRadius: "8px",
        backgroundColor: "#f9f9f9",
      }}
    >
      <h3>Products</h3>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {products.map((product) => (
          <li
            key={product}
            style={{
              marginBottom: "8px",
              padding: "5px 0",
              borderBottom: "1px solid #eee",
            }}
          >
            {product}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default withLoading(ProductList);
