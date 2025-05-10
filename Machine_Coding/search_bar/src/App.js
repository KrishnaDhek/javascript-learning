import React, { useCallback, useState } from "react"
import "./App.css"



export default function App() {
  const [search, setSearch] = useState([]);

  const debounce = (func) => {
    let time;
    return function(...args){
      const context = this;
      if (time) clearTimeout(time);
      time = setTimeout(() => {
        time = null;
        func.apply(context,args)
      }, 500);
    }
  }

  const handleChange = (e) => {
    const value = e.target.value;
    fetch(`https://demo.dataverse.org/api/search?q=${value}`)
      .then((response) => response.json())
    .then((json)=>setSearch(json.data.items))
  }
const betterHandle = useCallback(debounce(handleChange),[])
  return (
    <div className="App">
      <div className="searchContainer">
        <input type="text" placeholder="Search..."  onChange={betterHandle}/>
        {search?.length > 0 &&
          (<div className="autocomplete">
          {search.map((item, index) => (
            <span key={index}>{item.name}</span>
          ))}
        </div>)}
      </div>
    </div>
  )
}