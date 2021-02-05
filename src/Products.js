import { useEffect, useState } from "react";

function Products() {
  const title = "Üdv a rendszerben!";
  const [products, setProducts] = useState(50);

  useEffect(() => {
    console.log(`products = ${products} now`);
  }, [products]);

  function handleMinus() {
    setProducts(products - 1);
  }

  function handlePlus() {
    setProducts(products + 1);
  }

  return (
    <div className="Products">
      <h1>{title}</h1>
      <p>Jelenleg {products} terméket tartok számon</p>
      <button onClick={handleMinus}>-</button>
      <button onClick={handlePlus}>+</button>
    </div>
  );
}

export default Products;
