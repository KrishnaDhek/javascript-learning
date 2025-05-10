import React, { useCallback, useState } from "react";
import "./App.css";
import { FaSearch } from "react-icons/fa";

export default function App() {
  const [search, setSearch] = useState([]);
  const debounce = (func) => {
    let timer;
    return function (...args) {
      const context = this;
      if (timer) clearTimeout(timer);
      timer=setTimeout(() => {
        timer = null;
        func.apply(context, args);
      }, 500);
    }
  }

  const handleChange = (e) => {
    const { value } = e.target;
    fetch(`https://demo.dataverse.org/api/search?q=${value}`).then((response)=>response.json()).then(json =>setSearch(json.data.items))
  }

  const optVersion = useCallback(debounce(handleChange),[]);
  return (
    <div className="App">
      <h1>SearchBar</h1>
      <div className="searchContainer">
        <div className="inputContainer">
          <FaSearch className="searchIcon" />
          <input type="text" placeholder="Search..." onChange={optVersion}/>
        </div>
        {search?.length > 0 && (
          <div className="autocomplete">
            {search.map((item, index) => (
              <span key={index}>{ item.name}</span>
            ))}
          </div>
        )}
      </div>
</div>    
  )
}