import React, { useEffect, useState } from "react";
import "./App.css";


const Pagination = ({ products }) => {
  const [page, setPage] = useState(1);

  const selectHandle = (selectedPage) => {
    if(selectedPage>=1 && selectedPage<=products.length/10 && selectedPage !==page)
    setPage(selectedPage);
  };

  return (
    <div className="productsContainer">
      {products.length > 0 && (
        <div className="products">
          {products.slice(page * 10 - 10, page * 10).map((item, index) => (
            <span key={index} className="productsSingle">
              <img src={item.thumbnail} alt={item.title} />
              <span>{item.title}</span>
            </span>
          ))}
        </div>
      )}
      {products.length > 0 && (
        <div className="pagination">
          <span
            onClick={() => selectHandle(page - 1)}
            className={page >1 ? '' : 'paginationDisabled'}
          >
            ⬅️
          </span>
          {[...Array(products.length / 10)].map((_, index) => {
            return (
              <span
                className={page === index + 1 ? 'paginationSelected' : ''}
                onClick={() => selectHandle(index + 1)}
                key={index}
              >
                {index + 1}
              </span>
            );
          })}

          <span
            onClick={() => selectHandle(page + 1)}
            className={page < products.length / 10 ? '' : 'paginationDisabled'}
          >
            ➡️
          </span>
        </div>
      )}
    </div>
  );
}
export default function App() {
  const[products,setProducts]=useState([]);

  const fetchData = async () => {
    const response = await fetch(`https://dummyjson.com/products?limit=100`);
    const data = await response.json();

    if(data && data.products) {
    setProducts(data.products);
   }
  };
  console.log(products);

  useEffect(() => {
    fetchData();
  }, [])
  

  
  
  return (
    <div className="App">
      <h1>Pagination Component</h1>
      <Pagination products={products} />
    </div>
  )
}