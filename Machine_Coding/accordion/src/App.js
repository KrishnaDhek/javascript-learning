import React, { useState } from "react"
import accordionData from "./data/accordion.json"
import "./App.css"


const FAQ = () => {
  const [isOpen, setIsOpen] = useState(null);

  const toggle = (index) => {
    setIsOpen(prev => (prev === index ? null : index));
  }

  return (
    <div className="container">
      <h1>FAQ</h1>
      {accordionData.map((obj, index) => {
       return (<Accordion
          key={index}
          index={index}
          isOpen={isOpen === index}
          toggle={toggle}
          qna={obj}
        />)
      })}
    </div>
  )
}


const Accordion = ({ qna, index, isOpen, toggle }) => {
  return (
    <div className="qna">
      <div className="question" onClick={() => toggle(index)}>
        <h3>{qna.question}</h3>
        <span>{isOpen ? '-' : '+'}</span>
      </div>
      {isOpen && <p className="answer">{qna.answer}</p>}
    </div>
  );
};

export default function App() {
  return (
    <div className="App">
      <FAQ/>
    </div>
  )
}