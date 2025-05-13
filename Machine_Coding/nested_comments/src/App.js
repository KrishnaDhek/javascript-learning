import React, { useState } from "react";
import "./App.css"

const commentObj = {
  id: 1,
  item: []
};

const Comment = ({ commentsData }) => {
  const [input, setInput] = useState("");

  const onAddComment = () => {
    
  }
    return (
    <div>
      <div className="contianer">
        <input
          type="text"
          placeholder="type..."
          className="inputContainer"
          value={input}
          onChange={(e)=>setInput(e.target.value)}
          autoFocus
        />
        <div className="comment" onClick={onAddComment}>Comment</div>
        </div>
        <div className="commentBox">
          <div className="commentActions">
            <span>🔼 Reply</span>
            <span>Edit</span>
            <span>Delete</span>
          </div>
        </div>
    </div>
  );
}
export default function App() {
  const [commentsData,setCommentsData] = useState(commentObj);
  return (
    <div className="App">
      <h1>Nested Comment Component</h1>
      <Comment comment={ commentsData} />
    </div>
  )
}