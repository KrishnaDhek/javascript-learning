import React, { useCallback, useState } from "react";

export default function SearchBar() {
    const [input, setInput] = useState([]);

    const handleChange = async (e) => {
        const value = e.target.value;
        const res = await fetch(
          `https://demo.dataverse.org/api/search?q=${value}`
        );
        const data = await res.json();
        console.log(data);
        setInput(data.data.items);
    }

    const debounce = (callBack) =>{
        let timer;
        return function (...args) {
            let context = this;
            if (timer) clearTimeout(timer);

            timer = setTimeout(() => {
                timer = null;
                callBack.apply(context, args);
            }, 500);
        }
    }
    const betterHandle = useCallback(debounce(handleChange),[])
    return (
      <div style={{ textAlign: 'center', padding: '0.5rem' }}>
        <input
          placeholder="Search..."
          type="text"
          onChange={betterHandle}
          style={{
            border: '1px solid #ccc',
            padding: '1rem',
            borderRadius: '2rem',
            margin: '1rem',
          }}
        ></input>
        {input.length > 0 && (
          <div
            style={{
                        backgroundColor: "#f5f5f5",
                        padding: '1rem',
                        borderRadius: '1rem',
                boxShadow:'0px 2px 8px rgba(0,0,0,0.3)',
              margin: '1rem',
            }}
          >
            {input.map((item, index) => {
              return (
                <div>
                  <span key={index}>{item.name}</span>
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
}