import { useState } from "react";

function Products() {
  const [products, setProducts] = useState([
    {
      id: 1,
      barcode: 25638425234,
      name: "Snickers",
      description: "csokoládé - 100g",
    },
    { id: 2, barcode: 76787256725, name: "Tomi", description: "mosószer - 1L" },
    {
      id: 3,
      barcode: 65432735432,
      name: "Coca-Cola",
      description: "üdítő - 1,25L",
    },
  ]);

  return (
    <div className="Products">
      {products.map((product) => (
        <div className="product" key={product.id}>
          <div className="product-header">
            <h2>{product.name}</h2>
            <div className="product-codes">
              <span>Cikkszám: {product.id}</span>
              <span>Vonalkód: {product.barcode}</span>
            </div>
          </div>
          <p>{product.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Products;
