import { useEffect, useState } from "react";
import ProductList from "./ProductList";

function Home() {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    fetch("http://localhost:4000/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="Home">
      {products && <ProductList title="Minden termék" products={products} />}
    </div>
  );
}

export default Home;
