import React, { useState } from 'react';

function KthSmallestElement() {
  const [array, setArray] = useState('');
  const [k, setK] = useState('');
  const [result, setResult] = useState(null);

  const findKthSmallest = (arr, k) => {
    return arr.sort((a, b) => a - b)[k - 1];
  };

  const handleSubmit = () => {
    const arr = array.split(',').map(Number);
    const kNum = Number(k);
    setResult(findKthSmallest(arr, kNum));
  };

  return (
    <div>
      <h3>Find the kth smallest element in an array</h3>
      <input 
        type="text" 
        placeholder="Enter array (comma-separated)" 
        value={array} 
        onChange={(e) => setArray(e.target.value)} 
      />
      <input 
        type="number" 
        placeholder="Enter k" 
        value={k} 
        onChange={(e) => setK(e.target.value)} 
      />
      <button onClick={handleSubmit}>Find</button>
      {result !== null && <p>Kth smallest element: {result}</p>}
    </div>
  );
}

export default KthSmallestElement;
