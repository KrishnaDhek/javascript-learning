import React, { useState } from "react"
import accordionData from "./data/accordion.json"
import "./App.css"

const Accordion = ({ qna, index, isOpen, toggle }) => {
  return (
    <div className="qna">
      <div className="question" onClick={() => toggle(index)}>
        <h1>{qna.question}</h1>
        <span>{isOpen ? '-' : '+'}</span>
      </div>
      {isOpen && <p className="answer">{ qna.answer}</p>}
    </div>
  );
  
}
const FAQ = () => {
  const [isOpen, setIsOpen] = useState(null);

  const toggle = (index) => {
    setIsOpen(prev => (prev === index ? null : index));
  }

  return (
    <div className="container">
      <h1>FAQ</h1>
      {accordionData.map((obj, index) => {
        return (
          <Accordion 
            key={index}
            qna={obj}
            index={index}
            toggle={toggle}
            isOpen={isOpen===index}
        />
        )
      })}
    </div>
  )
}
export default function App() {
  return (
    <div className="App">
      <FAQ/>
    </div>
  )
}