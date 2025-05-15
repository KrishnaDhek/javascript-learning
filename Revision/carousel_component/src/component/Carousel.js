import React, { useEffect, useRef, useState } from "react";

export default function Carousel({ data }) {
    const [index, setIndex] = useState(0);
    const leng = data.length
    const ref = useRef(null);
    const handlePrev = () => {
        setIndex((prev) => {
            if (prev === 0) {
                return leng - 1;
            }
            else{
                return prev - 1;
            }
        })
    }

    const handleNext = () => {
        setIndex((prev) => {
            if (prev === leng - 1) {
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
      <div className="carousel" onMouseLeave={()=>ref.current = setInterval(handleNext, 1000)} onMouseEnter={()=>clearInterval(ref.current)}>
        <button onClick={() => handlePrev()}>⬅️</button>
          <img
            src={data[index].url}
            key={data[index].id}
            style={{ width: '500px', height: '500px', objectFit: 'cover', margin:'0 20px'}}
          ></img>
            <button onClick={() => handleNext()}>➡️</button>
            <div className="dotContianer">
                {data.map((_, index)=>{
                    return <span key={index}>&#x2022;</span>;
                })}
            </div>
      </div>
    );
}