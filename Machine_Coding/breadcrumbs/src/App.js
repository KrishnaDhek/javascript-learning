
import "./App.css"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/home";
import ProductListing from "./pages/product-listing";
import ProductDetails from "./pages/product-details";

export default function App() {
  
  return (
    <BrowserRouter>
      <div className="App">
        <h1>BreadCrumb Component</h1>

        
       { /* routes */}
        <Routes>
          <Route path="/" element={ <Home/>} />
          <Route path="/products" element={ <ProductListing/>} />
          <Route path="/products/:id" element={<ProductDetails/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}