import React, { use, useEffect, useState } from "react";
import "./App.css"

const ProgressBar = ({ progress }) => {
  const halfFilled = progress>=50?"white":"black"
  return (
    <div className="container">
      <div className="progressContainer" style={{width: `${progress}%`}}>
        <span style={{color: halfFilled}}>{progress}%</span>
      </div>
    </div>
  )
}

export default function App() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      })
    }, 100)
   return () => clearInterval(interval);
  },[])
  return (
    <div className="App">
      <h1>Progress Bar</h1>
      <ProgressBar progress={progress}/>
    </div>
  )
}