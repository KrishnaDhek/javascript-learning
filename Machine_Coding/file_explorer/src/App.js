import React, { useState } from "react";
import fildeData from "./data/data.json";
import "./App.css";

const List = ({ list }) => {
  const [isExpanded, setIsExpanded] = useState({});
  return (
    <div className="container">
      {list.map((node) => (
        <div key={node.id}>
          {node.isFolder && (<span onClick={() => setIsExpanded((prev) => ({ ...prev, [node.id]: !prev[node.id] }))}>
            {isExpanded?.[node.id]?"-":"+"}
          </span>)}
          <span>{node.childNode ? "🗂️" : "📄"}{node.name}</span>
          {isExpanded?.[node.id] && node?.childNode && (<List list={node.childNode}/>)}
        </div>
      ))}
    </div>
  )
}

export default function App() {
  const [data, setData] = useState(fildeData);
  return (
    <div className="App">
      <h1>File Explorer</h1>
      <List list={data}/>
    </div>
  )
}