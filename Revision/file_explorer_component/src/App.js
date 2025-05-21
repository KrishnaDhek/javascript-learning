import React from "react";
import fileData from "./data/data.json";
import FileExplorer from "./component/FileExplorer";
import "./App.css"

export default function App() {
  return (
    <div>
      <h1>File Explorer</h1>
      <FileExplorer fileData={fileData} />
    </div>
  )
}