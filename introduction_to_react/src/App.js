import React, { useEffect, useState } from "react"

export default function App() {

  const [input, setInput] = useState("");
  const [userName, setUserName] = useState([]);
  const [debouncedInput, setDebouncedInput] = useState("");

  useEffect(() => {
    const timer=setTimeout(() => {
      setDebouncedInput(input);
       console.log('Debounced input set:', input); 
    }, 500);

    return () => {
      clearTimeout(timer);
      console.log('Typing... debounce reset');
    }
  }, [input])
  
  const handleChange = (e) => {
   
    setInput(e.target.value)
    
  }

  const btnClick = () => {
    console.log("Button Clicked");
    if (debouncedInput.trim() !== "") {
      setUserName([...userName, debouncedInput]);
      setInput("");
      setDebouncedInput("");
    }
  }
  return (
    <div className="App">
      <h1>Introduction to React</h1>
      <input
        type="text"
        placeholder="username"
        value={input}
        style={{ width: 200, padding: 20, fontSize: 25, borderRadius: 50 }}
        onChange={handleChange}
      />
      <button style={{ borderRadius: 50, width: 100, height: 50 }} onClick={() => btnClick()}>Submit</button>
      <ul>{userName.map((name, index) => {
        return (
          <li key={index}>{ name}</li>
        )
      })}</ul>
    </div>
  );
}