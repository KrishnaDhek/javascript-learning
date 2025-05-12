
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
const Home = () => {
    const [trendingProducts, setTrendingProducts] = useState([]);
    useEffect(() => {
      fetch(`https://dummyjson.com/products`)
        .then((response) => response.json())
        .then((response) => {
          const sliceTrending = response.products.slice(0, 6);
          setTrendingProducts(sliceTrending);
        });
    }, []);
    return (
      <div>
        <h2>Home Page</h2>
        <span>Trending Products</span>
        <div className="product">
          {trendingProducts.map((item) => {
            return (
              <div className="productCard" key={item.id}>
                <Link to={`/products/${item.id}`}>
                  <img src={item.thumbnail} alt={item.title}></img>
                  <h3>{item.title}</h3>
                </Link>
              </div>
            );
          })}
        </div>
        <Link to="/products">
          <button style={{width:'100%', padding:10} }>View All Products</button>
        </Link>
      </div>
    );
};
export default Home;