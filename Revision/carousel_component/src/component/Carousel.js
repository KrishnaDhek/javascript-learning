import React, { useEffect, useRef, useState } from "react";

export default function Carousel({ data }) {
    const [index, setIndex] = useState(0);
    const len = data.length;
    const ref = useRef(null);

    const handlePrev = () => {
        setIndex((prev) => {
            if (prev === 0) {
                return len - 1;
            } else {
                return prev - 1;
            }
        })
    }

    const handleNext = () => {
        setIndex((prev) => {
            if(prev == len-1){
            return 0;
            } else {
               return prev + 1;
            }
        })
    }

    useEffect(() => {
        ref.current = setInterval(handleNext, 1000);
        return ()=> clearInterval(ref.current)
    },[])
    
    return (
        <div className="carousal" onMouseLeave={() => ref.current = setInterval(handleNext, 1000)}
         onMouseEnter={()=>clearInterval(ref.current)}>
            <div className="leftBtn" onClick={()=>handlePrev()}>{"<"}</div>
            <img src={data[index].url}></img>
            <div className="rightBtn" onClick={() => handleNext()}>{">"}</div>
            <div className="dotContianer">
                {data.map((_, dotIndex) => {
                    return (
                        <span
                            onClick={() => setIndex(dotIndex)}
                            key={dotIndex}
                            className={dotIndex===index?"dot":""}
                        >&#x2022;</span>
                    )
                })}
            </div>
            
        </div>
    )
}