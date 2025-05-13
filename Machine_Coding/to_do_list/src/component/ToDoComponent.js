import { useState } from "react"
import "../index.css"
export default function TodoComponent() {
    const [input, setInput] = useState("");
    const [inputList, setInputList] = useState([]);

    const handleChange = (e) => {
        console.log(e.target.value);
        setInput(e.target.value);
    }

    const btnClick = () => {
        if (input.trim() === "") {
            return;
        }
        const todoItem = {
            id: Date.now(),
            text: input.trim(),
            complete:false,
        }
        setInputList(prev => [...prev, todoItem]);
        setInput("");
    }

    const deleteClick = (id) => {
        setInputList(inputList.filter(item=>item.id!==id));
       
    }

    const toggleComplete = (id) => {
        setInputList(inputList.map(item => {
            if (item.id === id) {
                return {
                    ...item,
                    complete: !item.complete
                }
            } else {
                return item;
            }
        }))
    }
    return (
        <div>
            <h1>ToDo Component</h1>
            <input type="text" value={input} placeholder="Enter Todo" onChange={(e)=>handleChange(e)}></input>
            <button onClick={() => btnClick()}>Add</button>
            <ul>
                {inputList.map((item, index) => {
                    return (
                      <li key={item.id}>
                        <input type="checkbox" checked={item.complete} onChange={()=>toggleComplete(item.id)}></input>
                            <span className={item.complete?"completed":""}>{item.text}</span>
                            <button onClick={()=>deleteClick(item.id)}>Delete</button>
                        </li>
                        
                    );
                })}
            </ul>
        </div>
    )
}