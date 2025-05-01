// import React, { useState } from "react";
// import fileData from "./data/data.json"
// import style from "./App.css"

// // Render list of object
// const List = ({ list }) => {
//   const[isExpanded, setIsExpanded] =useState({})
//   return (
//     <div className="container">
//       {list.map((node) => (
//         <div key={node.id}>
//           {node.isFolder && (
//             <span onClick={() => setIsExpanded((prev) => ({ ...prev, [node.id]: !prev[node.id], }))
//             }
//             >
//               {isExpanded?.[node.id]?"-":"+"}
//             </span>
//           )}
//           <span>{node?.childNode ? "🗂️" : " 📄"}{node.name}</span>
//           {isExpanded?.[node.id] && node?.childNode && <List list={node.childNode} />}
//         </div>
//       ))}
//     </div>
//   );
// }

// export default function App() {
//   const [data, setData] = useState(fileData);
//   return (
//     <div className="App">
//       <h1>File Explorer</h1> 
//       <List list={data} />
//     </div>
//   )
// }


import React, { useState } from 'react';
import fileData from "./data/data.json"
import style from './App.css';


const List = ({ list }) => {
  //Expand & Collaps
  const[isExpanded, setIsExpanded] = useState({})
  return (
    <div className='container'>
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
  const [data, setData] = useState(fileData);
  
  return (
    <div className='App'>
      <h1>File Explorer</h1>
      <List list ={data}/>
   </div>
  )
}