import React, { useState } from "react";
export default function FileExplorer({ fileData }) {
    console.log(fileData);
    return (
        <div>
            {fileData.map((item) => {
                return <FolderorFile key={item.id} item={item} />
            })}
        </div>
    )
}

function FolderorFile({ item }) {

    const [isOpen, setIsOpen] = useState(false);

    if (item.isFolder) {
        return (
          <div style={{ marginLeft: '20px' }}>
            <div
              onClick={() => setIsOpen(!isOpen)}
              style={{ cursor: 'pointer', fontSize: '1.5rem' }}
            >
              {isOpen ? '📂' : '📁'} {item.name}
            </div>
            {isOpen && item.childNode && (
              <FileExplorer fileData={item.childNode} />
            )}
          </div>
        );
    }
    else {
        return (
            <div style={{ marginLeft: '20px', fontSize:'1.5rem'}}>
               📄 {item.name }
            </div>
        )
    }
}
