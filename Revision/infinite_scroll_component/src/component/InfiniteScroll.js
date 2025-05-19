import React, { useEffect, useState } from "react";
export default function InfiniteScroll() {
    const [item, setItem] = useState([]);
    const [page, setPage] = useState(1);
    const limit = 9;

    const fetchData = async () => {
       

        const response = await fetch(
          `https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`
        );
        const data = await response.json();
        setItem((prev) => [...prev, ...data])
        

        setLoading(false);
    }

    useEffect(() => {
        fetchData();
    }, [page])
    
    useEffect(() => {
        const handleScroll = () => {
            if (window.innerHeight + window.scrollY  >= document.documentElement.scrollHeight-10) {
                setPage((prev) => prev + 1);
            }
        }
        
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    },[])

    return (
        <div>
            <h1 style={{textAlign:'center'}}>Infinite Scroll</h1>
            {item.map((i, index) => {
                return (
                    <div key={index} style={{border:'2px solid black', margin:'1rem', padding:'1rem'}}>
                        <h1>{i.id}</h1>
                        <h2>{i.title}</h2>
                        <p>{ i.title}</p>
                    </div>
                )
            })}
           
        </div>
    )
}