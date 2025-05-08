import React, { useState } from "react"
import accordionData from "./data/accordion.json"
import "./App.css"

//  Parent Component: Handles state and renders the list of Accordion items
const FAQ = () => {
  // State to track which accordion item is currently open (stores index or null)
  const [isOpen, setIsOpen] = useState(null);

  // Function to toggle the open/close state of an accordion item
  // If clicked item is already open, close it (set to null)
  // Otherwise, open the clicked item (set to its index)
  const toggle = (index) => {
    setIsOpen((prev) => (prev === index ? null : index));
  };

  //return the accordion component which will have the q-a pair
  return (
    <div className="faqContainer">
      <h1>FAQ</h1>
      {/* Map through the data and render each accordion item */}
      {accordionData.map((item, index) => {
        return (
          <Accordion
            key={index}
            qna={item}
            isOpen={isOpen === index}
            toggle={toggle}
            index={index}
          />
        );
      })}
    </div>
  );
}

//Displays individual accordion item (question + answer)
const Accordion = ({qna,isOpen,index, toggle}) => {
  return (
    <div className="container">
      <div className="question" onClick={()=>toggle(index)}>
        <h1>{qna.question}</h1>
        <span>{isOpen ? "-" : "+"}</span>
      </div>
      {isOpen && <p className="answer">{ qna.answer}</p>}
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