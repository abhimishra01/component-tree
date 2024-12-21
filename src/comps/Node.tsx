import {
  FaFolder,
  FaFolderOpen,
  FaFile,
  FaFileImage,
  FaFileVideo,
} from 'react-icons/fa';

export default function Node({ node, style, dragHandle }) {
  const Icon = node.isOpen
    ? FaFolderOpen
    : node.type === 'folder'
    ? FaFolder
    : node.type === 'image'
    ? FaFileImage
    : node.type === 'video'
    ? FaFileVideo
    : FaFile;

  return (
    <div
      style={{
        ...style,
        display: 'flex',
        alignItems: 'center',
        paddingLeft: `${node.level * 20}px`,
        cursor: 'pointer',
      }}
    >
      <Icon
        style={{
          marginRight: '8px',
          color: node.data.type === 'folder' ? '#f39c12' : '#c9d1d9',
        }}
      />
      {node.data.name}
    </div>
  );
}
