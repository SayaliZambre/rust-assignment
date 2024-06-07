import React, { useState } from 'react';

function MaxDepth() {
  const [tree, setTree] = useState('');
  const [result, setResult] = useState(null);

  const parseTree = (str) => {
    return JSON.parse(str);
  };

  const findMaxDepth = (node) => {
    if (!node) return 0;
    return 1 + Math.max(findMaxDepth(node.left), findMaxDepth(node.right));
  };

  const handleSubmit = () => {
    const parsedTree = parseTree(tree);
    setResult(findMaxDepth(parsedTree));
  };

  return (
    <div>
      <h3>Find the maximum depth of a binary tree</h3>
      <textarea 
        placeholder="Enter tree as JSON" 
        value={tree} 
        onChange={(e) => setTree(e.target.value)} 
      />
      <button onClick={handleSubmit}>Find</button>
      {result !== null && <p>Maximum depth: {result}</p>}
    </div>
  );
}

export default MaxDepth;
