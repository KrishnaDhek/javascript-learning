import React, { useState } from "react"
import accordionData from "./data/accordion.json"
import "./App.css"


const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(prev =>(prev===index?null:index))
  }
  return (
    <div className="container">
      <h1>FAQs</h1>
      {accordionData.map((obj, index) => {
        return <Accordion key={index} index={index} isOpen={openIndex === index}
          toggleAccordion={toggleAccordion}
          qna={obj} />;
      })}
    </div>
  );
}

const Accordion = ({ qna,index,isOpen,toggleAccordion }) => {
  const [show, setShow] = useState(false);
  return (
    <div className="qna">
      <div className="question" onClick={() => toggleAccordion(index)}>
        <h3>{qna.question}</h3>
        <span>{ isOpen?"-":"+"}</span>
      </div>
      {isOpen ? <p className="answer">{qna.answer}</p>: ""}
    </div>
  );
}
export default function App() {
  return (
    <div className="App">
      <FAQ/>
      
    </div>
  )
}