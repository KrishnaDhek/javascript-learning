import React, { useEffect, useState } from "react";
import "./App.css"

const PostData = ({ data, setPageNo }) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (param) => {
        if (param[0].isIntersecting) {
          observer.unobserve(lastImage);
          setPageNo((pageNo) => pageNo + 1);
        }
      },
      { threshold: 0.5 }
    );
  
    const lastImage = document.querySelector('.image-post:last-child');
    if (!lastImage) {
      return;
    }
    observer.observe(lastImage);

    return () => {
      if (lastImage) {
        observer.unobserve(lastImage);
      }
      observer.disconnect();
    };
  }, [data]);
  return (
    <div className="container">
      {data.map((item, index) => {
        return (
          <img
            className="image-post"
            key={`${item.id}-${index}`}
            src={item.download_url}
          />
        );
      })}
    </div>
  );
}

const InfinitScroll = () => {
  const [data, setData] = useState([]);
  const [pageNo, setPageNo] = useState(1);

  useEffect(() => {
    fetch(`https://picsum.photos/v2/list?page=${pageNo}&limit=3`)
      .then((res) => {
        return res.json();
      })
      .then((arr) => setData((oldData) => [...oldData, ...arr]));
  }, [pageNo]);

  return <PostData data={data} setPageNo={setPageNo} />;
}

export default function App() {
  return (
    <div className="App">
      <h1>Infinite Scroll</h1>
      <InfinitScroll />
    </div>
  )
}

