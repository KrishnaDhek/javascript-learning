import React, { useCallback, useState } from 'react';

export default function SearchBar() {
  const [input, setInput] = useState([]);

  const debounced = (fun) => {
    let timer;
    return function (...args) {
      let context = this;
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        timer = null;
        fun.apply(context, args);
      }, 500);
    };
  };

  const handleChange = async (e) => {
    const value = e.target.value;
    const response = await fetch(
      `https://demo.dataverse.org/api/search?q=${value}`
    );
    const data = await response.json();
    setInput(data.data.items || []);
  };

  const betterHandle = useCallback(debounced(handleChange), []);

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <input
        placeholder="Search..."
        type="text"
        style={{
          width: '250px',
          marginBottom: '1rem',
          padding: '1rem',
          fontSize: '20px',
          borderRadius: '2rem',
          border: '1px solid #ccc',
        }}
        onChange={betterHandle}
      />

      {input.length > 0 && (
        <div
          style={{
            backgroundColor: '#f5f5f5',
            padding: '1rem',
            borderRadius: '1rem',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
          }}
        >
          {input.map((item, index) => (
            <div key={index} style={{ marginBottom: '0.5rem' }}>
              <span>{item.title || item.name}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
