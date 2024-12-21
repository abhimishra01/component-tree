import { useState } from 'react';
import { Tree } from 'react-arborist';
import Node from './comps/Node';

const treeData = [
  {
    id: '1',
    name: 'Applications',
    type: 'folder',
    children: [],
  },
  {
    id: '2',
    name: 'Desktop',
    type: 'folder',
    children: [
      { id: '3', name: 'Screenshot1.jpg', type: 'image' },
      { id: '4', name: 'videopal.mp4', type: 'video' },
    ],
  },
  {
    id: '5',
    name: 'Documents',
    type: 'folder',
    children: [],
  },
  {
    id: '6',
    name: 'Downloads',
    type: 'folder',
    children: [
      {
        id: '7',
        name: 'Drivers',
        type: 'folder',
        children: [
          { id: '8', name: 'Printerdriver.dmg', type: 'file' },
          { id: '9', name: 'cameradriver.dmg', type: 'file' },
        ],
      },
      {
        id: '10',
        name: 'Images',
        type: 'folder',
        children: [],
      },
      { id: '11', name: 'chromedriver.dmg', type: 'file' },
    ],
  },
];

const App = () => {
  const [data, setData] = useState(treeData);
  const findNodeById = (nodes, id) => {
    for (const node of nodes) {
      if (node.id === id) return node;
      if (node.children) {
        const child = findNodeById(node.children, id);
        if (child) return child;
      }
    }
    return null;
  };
  const handleToggle = (node) => {
    console.log(node);
    setData((prevData) => {
      const updatedData = [...prevData];
      const targetNode = findNodeById(updatedData, node.id);
      if (targetNode) {
        targetNode.isOpen = !node.isOpen;
      }
      return updatedData;
    });
  };

  return (
    <div
      style={{
        color: '#c9d1d9',
        padding: '10px',
        fontFamily: 'Arial',
        backgroundColor: '#1e1e2e',
      }}
    >
      <h3 style={{ color: '#f0f6fc' }}>EVALUATION</h3>
      <Tree data={data} openByDefault={true} onToggle={handleToggle}>
        {Node}
      </Tree>
    </div>
  );
};

export default App;
