import React, { useState } from "react";
import "./App.css";


const StarRating = ({ starCount }) => {
  
  const [starValue, setStarValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(0);

  return (
    <div className="starRating">
      {new Array(starCount).fill(0).map((value, index) => {
        return (
          <span key={index}
            className={
              (hoverValue === 0 && index < starValue) ||
                (hoverValue > 0 && index < hoverValue) ? "star" : ""}
            onClick={() => setStarValue(index + 1)}
            onMouseEnter={() => setHoverValue(index + 1)}
            onMouseLeave={() =>setHoverValue(0)}
          
          >&#9733;</span>
        )
      })}

      <p style={{color:'black', fontWeight:'bold'}}>Rating: {starValue}</p>
    </div>
  )
}
export default function App() {
  return (
    <div className="App">
      <h1>Star Rating Component</h1>
      <StarRating starCount ={5}/>
    </div>
  )
}