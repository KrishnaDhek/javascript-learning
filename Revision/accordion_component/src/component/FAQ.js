import React, { useState } from "react";
import Accordion from "./Accordion"

export default function FAQ({ data }) {
    const [isOpen, setIsOpen] = useState(null);

    const toggle = (index) => {
        setIsOpen((prev) => (prev === index ? null : index));
    }
    return (
        <div className="containerFAQ">
            <h1>FAQ</h1>
            {data.map((item, index) => {
               return <Accordion item={item} isOpen={isOpen===index} toggle={toggle} index={index} key={index} />;
           })}
        </div>
    )
}