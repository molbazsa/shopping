function ProductList({ title, products }) {
  return (
    <div className="ProductList">
      <h1>{title}</h1>
      <div className="products">
        {products.map((product) => (
          <div className="product" key={product.id} tabIndex="0">
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
    </div>
  );
}

export default ProductList;
