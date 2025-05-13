import React, { useState } from "react";
import Accordion from "./Accordion";

import "../App.css"
export default function FAQ({data}) {
     const [isOpen, setIsOpen] = useState();
    const toggle = (index) => {
        setIsOpen((prev) => (prev === index ? null : index));
  }
    return (
        <div className="containerFAQ">
            <h1>FAQ</h1>
            {data.map((obj, index) => {
                return (
                    <Accordion qna={obj} index={index} isOpen={isOpen===index} toggle={toggle} key={index}/>
                )
            })}
            
        </div>
        
    )
}