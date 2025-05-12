import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
const ProductListing = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch(`https://dummyjson.com/products`)
      .then((response) => response.json())
      .then((response) => {
        setProducts(response.products);
      });
  }, []);
  return (
    <div>
          <h2>Product Listing</h2>
       
        <div className="product">
          {products?.map((item) => {
            return (
              <div className="productCard" key={item.id}>
                <Link to={`/products/${item.id}`}>
                  <img src={item.thumbnail} alt={item.title}></img>
                  <h3>{item.title}</h3>
                  <h3>${item.price}</h3>
                </Link>
              </div>
            );
          })}
        </div>
          
    </div>
  );
};
export default ProductListing;
