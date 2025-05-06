import React, { useEffect, useRef, useState } from "react"
import "./App.css"

const OtpComponent = ({ otpLength }) => {
  const [otpFileds, setOtpFields] = useState(new Array(otpLength).fill(''));
  const ref = useRef([]);
 

  const handleKeyDown = (e,index) => {
    const key = e.key;
    const copyOtpFields = [...otpFileds];
    if (key === "ArrowLeft") {
      if (index > 0) {
        ref.current[index - 1].focus();
      }
    }
    if (key === "ArrowRight") {
      if (index + 1 < otpFileds.length) {
        ref.current[index + 1].focus();
      }
    }
    if (key === "Backspace") {
      copyOtpFields[index] = "";
      setOtpFields(copyOtpFields);
      if (index > 0) {
        ref.current[index - 1].focus();
      }
    }
    console.log(key);
    if (isNaN(key)) {
      return;
    }
    
    copyOtpFields[index] = key;
    if (index + 1 < otpFileds.length) {
      ref.current[index + 1].focus();
    }
    setOtpFields(copyOtpFields);
    
  }

  useEffect(() => {
    ref.current["0"].focus();
  },[])
  return (
    <div className="container">
      {otpFileds.map((value, index) => {
        return <input key={index}
          ref={(currentInput)=>ref.current[index]=currentInput}
          type="text" value={value}
        onKeyDown={(e)=>handleKeyDown(e,index)}
        ></input>
     })}
     
    </div>
  )
}
export default function App() {
 
  return (
    <div className="App">
      <h1>OTP Component</h1>
      <OtpComponent otpLength={4} />
    </div>
  )
}