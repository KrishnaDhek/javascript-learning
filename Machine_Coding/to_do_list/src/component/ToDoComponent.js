import React, { useState } from "react";
import "../index.css";

export default function ToDoComponent() {
    const [input, setInput] = useState("");
    const [inputList, setInputList] = useState([]);

    const handleChange = (e) => {
          
        setInput(e.target.value);
    }
    const btnAdd = ()=>{
        if (input.trim() === "") return;
        const todoItem = {
            id: Date.now(),
            title: input.trim(),
            complete: false,
        }
        setInputList(prev => [...prev, todoItem]);
        setInput("");
    }
    const deleteBtn = (id) => {
        setInputList(prev =>prev.filter(item=>item.id!==id))
    }

    const toggleChange = (id) => {
        setInputList(prev => prev.map(item=>item.id===id?{...item,complete:!item.complete}:item))
    }

    return (
        <div className="container">
            <h1>ToDo Component</h1>

            <input type="text" value={input} placeholder="Enter ToDo" onChange={(e)=>handleChange(e)}/>
            <button onClick={() => btnAdd()}>Add</button>
            <ul>
                {inputList.map((item) => {
                   return <li key={item.id}>
                        <input type="checkbox" checked={item.complete} onChange={()=>toggleChange(item.id)}></input>
                       <span className={item.complete ? "completed" : ""}>{item.title}</span>
                       <button onClick={()=>deleteBtn(item.id)}>Delete</button>
                    </li>
                })}
            </ul>
        </div>
    )
}