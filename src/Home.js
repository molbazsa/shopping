import { useState } from "react";
import ProductList from "./ProductList";

function Home() {
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
    <div className="Home">
      <ProductList title="Minden termék" products={products} />
    </div>
  );
}

export default Home;
