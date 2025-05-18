import React from "react";

export default function ProgressBar({ progress }) {
    const halfFilled = progress>=50?"white":"black"
    return (
        <div className="container">
            <div className="outerContainer">
                <div className="innerContainer" style={{width: `${progress}%`}}>
                </div>
                <span style={{color:halfFilled}}>{ progress}%</span>
            </div>
        </div>
    )
}