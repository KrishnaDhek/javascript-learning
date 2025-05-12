import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {

    const { id } = useParams();
    const [product, setProduct] = useState(null);
    
    useEffect(() => {
        fetch(`https://dummyjson.com/products/${id}`)
          .then((response) => response.json())
          .then((response) => {
            setProduct(response);
          });
      }, []);
    console.log(product);
  return (
    <div>c
      <h2>{product.title}</h2>
      {product ? (
        <div>
          <img src={product.thumbnail} alt={product.title}></img>
                  <h3>{product.price}</h3>
                  <p>{ product.description}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};
export default ProductDetails;


