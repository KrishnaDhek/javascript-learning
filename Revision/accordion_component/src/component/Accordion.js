import React, { useState } from "react";


export default function Accordion({ qna ,isOpen,index, toggle }) {
   
    return (
      <div className="containerAccordion">
        <div className="question" onClick={()=>toggle(index)}>
          <h1>
            {qna.question}</h1>
            <span>
            { isOpen?"-":"+"}
            
              
            </span>
          
        </div>

        {isOpen ? <p className="answer">{qna.answer}</p> : ''}
      </div>
    );
}