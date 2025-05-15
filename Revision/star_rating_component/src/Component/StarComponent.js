import React, { useState } from "react";

export default function StarComponent({ starCount }) {
    const [hoverValue, setHoverValue] = useState(0);
    const [starValue, setStarValue] = useState(0);
    
    return (
        <div>
            <h1>Star Component</h1>
            {new Array(starCount).fill("").map((item, index) => {
                return <span key={index}
                    className={(hoverValue === 0 && index < starValue) || (hoverValue > 0 && index < hoverValue) ? "star" : ""}
                    onClick={() => setStarValue(index + 1)}
                    onMouseEnter={() => setHoverValue(index + 1)}
                    onMouseLeave={()=>setHoverValue(0)}
                >&#9733;</span>;
            })}
            

        </div>
    )
}