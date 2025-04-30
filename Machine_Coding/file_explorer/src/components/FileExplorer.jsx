import React from 'react';

const RenderTree = ({ node }) => {
  return (
    <li>
      {node.isFolder ? `📁 ${node.name}` : `📄 ${node.name}`}
      {node.isFolder && node.childNode && (
        <ul>
          {node.childNode.map((child, index) => (
            <RenderTree key={index} node={child} />
          ))}
        </ul>
      )}
    </li>
  );
};

const FileExplorer = ({ data }) => {
  return (
    <ul>
      {data.map((node, index) => (
        <RenderTree key={index} node={node} />
      ))}
    </ul>
  );
};

export default FileExplorer;
