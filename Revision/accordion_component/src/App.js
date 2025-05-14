import React from "react";
import FAQ from "./component/FAQ"
import data from "./data/data.json"
import "./App.css"

export default function App() {
  return (
    <div className="App">
      <FAQ data={data}/>
    </div>
  )
}