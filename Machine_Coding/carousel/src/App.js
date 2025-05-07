import React, { useState,useRef, useEffect} from "react"
import data from "./data/imageData.json"
import "./App.css"

const Carousel = () => {
  const [index, setIndex] = useState(0);
  const dataLength = data.length;
  const ref = useRef(null);

  const handlePrev = () => {
    setIndex((prev) => {
      if (prev == 0) {
        return dataLength - 1;
      } else {
        return prev - 1;
      }
    })
  }

  const handleNext = () => {
    setIndex((prev) => {
      if (prev == dataLength - 1) {
        return 0;
      } else {
        return prev + 1;
      }
    })
  }

  useEffect(() => {
    ref.current = setInterval(handleNext, 1000);
    return ()=>clearInterval(ref.current)
  },[])

  return (
    <div
      onMouseEnter={() => clearInterval(ref.current)}
      onMouseLeave={()=>{ref.current = setInterval(handleNext, 1000)}}
      className="container">
      <div onClick={handlePrev} className="leftBtn">
        {'<'}
      </div>
      <img src={data[index].download_url}></img>
      <div onClick={handleNext} className="rightBtn">
        {'>'}
      </div>
      <div className="dotContainer">
        {data.map((_, dotIndex) => {
          return (
            <span
              key={dotIndex}
              className={`dot ${index === dotIndex ? 'active' : ''}`}
              onClick={() => setIndex(dotIndex)}
            >
              &#x2022;
            </span>
          );
        })}
      </div>
    </div>
  );
}
export default function App() {
  return (
    <div className="App">
      <h1>Carousel</h1>
      <Carousel/>
    </div>
  )
}