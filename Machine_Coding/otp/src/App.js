import React, { useEffect, useRef, useState } from "react"
import "./App.css"

const otpCount = 5;

const OtpComponent = ({ otpCount }) => {
  const [otpInput, setOtpInput] = useState(new Array(otpCount).fill(""));
  //store thr reference to the input array
  const ref = useRef([]);

  useEffect(() => {
    ref.current[0]?.focus()
  },[])

  const handleOnChange = (value, index) => {
    const newValue = value.trim();
    if (isNaN(newValue)) return;
    const newArr = [...otpInput];
    newArr[index] = newValue.slice( - 1);;
    setOtpInput(newArr);
    {newValue && ref.current[index+1]?.focus();}
  }
  
  const handleOnKeyDown = (e, index) => {
    if (!e.target.value && e.key === "Backspace") {
      ref.current[index - 1]?.focus();
    }
    
  }
  return (
    <div>
      {otpInput.map((item, index) => (
        <input className="otpInput" key={index} value={otpInput[index]} type="text"
          ref={(input) => (ref.current[index] = input)}
          onKeyDown={(e)=>handleOnKeyDown(e,index)}
        onChange={(e)=>handleOnChange(e.target.value,index)}></input>
      ))}
    </div>
  )
    
  
}
export default function App() {
  return (
    <div className="App">
      <h1>OTP Component</h1>
      <OtpComponent otpCount={otpCount}/>
    </div>
  )
}