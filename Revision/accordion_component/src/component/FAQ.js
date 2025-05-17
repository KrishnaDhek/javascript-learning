import React, { useState } from "react";
import Accordion from "./Accordion";

export default function FAQ({ data }) {
    const [isOpen, setIsOpen] = useState(0);
     const toggle = (index) => {
       setIsOpen((prev)=>(prev===index)?null:index);
     };

    return (
        <div>
            <h1>FAQs</h1>
            {data.map((item, index) => {
                return <Accordion item={item} isOpen={ isOpen===index} key={index} index={index} toggle={toggle} />
            })}
        </div>
    )
}