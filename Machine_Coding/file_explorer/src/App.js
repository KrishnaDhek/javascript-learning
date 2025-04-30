import React from 'react';
import FileExplorer from './components/FileExplorer';
import data from './data/data.json';


function App() {
  console.log(data); // Check if data is correctly imported

  return (
    <div>
      <h1>File Explorer</h1>
      <FileExplorer data={data} />
    </div>
  );
}

export default App;
