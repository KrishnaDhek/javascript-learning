import React from "react";
import "./App.css";
import StarComponent from "./Component/StarComponent"

const starCount = 5;
export default function App() {
  return (
    <div className="App">
      <StarComponent starCount={starCount } />
    </div>
  )
}