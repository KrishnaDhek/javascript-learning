import React, { useEffect, useState } from "react";

const InfinteScroll = () => {
  
  const [page, setPage] = useState(1);
  const [items, setItems] = useState([]);

  const fetchData = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=9&_page=${page}`);
    const data = await response.json();
    console.log(data);
    setItems((prev)=>[...prev,...data])
  }

  useEffect(() => {
    fetchData();
  }, [page]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.offsetHeight) {
        setPage((prev) => prev + 1);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  },[])
  
 
  
  return (
    <div >
      <h1>Infinite Scroll</h1>
      {items.map((item, index) => {
        return (
          <div key={index} style={{ border: '2px solid black', margin:'1rem', padding:'1rem' }}>
            <h1>{item.id}</h1>
            <h2>{item.title}</h2>
            <p>{item.body}</p>
          </div>
        );
      })}
      
    </div>
  )
}
export default function App() {
  return (
    <div className="App">
      <InfinteScroll />
    </div>
  )
}