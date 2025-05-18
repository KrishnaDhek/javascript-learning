import React, { useEffect, useState } from "react";
import "./App.css"
import ProgressBar  from "./component/ProgressBar";

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
    return ()=>clearInterval(interval)
  },[])
  return (
    <div className="App">
      <h1>Progress Bar Component</h1>
      <ProgressBar progress={progress}/>
    </div>
  )
}