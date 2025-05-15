import React, { useState } from "react";

export default function StarComponent({ starCount }) {
    const [starValue, setStarValue] = useState(0);
    const [hoverValue, setHoverValue] = useState(0);
    return (
        <div>
            
            {new Array(starCount).fill("").map((item,index) => {
                return (
                    <span key={index}
                        className={(hoverValue === 0 && index < starValue) || (hoverValue > 0 && index < hoverValue) ? "star" : ""}
                        
                        onClick={() => setStarValue(index + 1)}
                        onMouseEnter={() => setHoverValue(index + 1)}
                        onMouseLeave={()=>setHoverValue(0)}
                    >&#9733;</span>
                )
            })}
        </div>
    )
}