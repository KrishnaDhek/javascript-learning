import React from "react";

export default function Accordion({ item, index, isOpen,toggle }) {
   
    return (
        <div className="accordion">
            <div className="question" onClick={()=>toggle(index)}>
                <h1>{item.question}
                    <span>{isOpen?"-":"+" }</span>
                </h1>
            </div>
            {isOpen ? <p className="answer">{ item.answer}</p>:""}
        </div>
    )
}