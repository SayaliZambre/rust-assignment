import React, { useState } from 'react';

function FirstOccurrence() {
  const [array, setArray] = useState('');
  const [target, setTarget] = useState('');
  const [result, setResult] = useState(null);

  const findFirstOccurrence = (arr, target) => {
    let left = 0, right = arr.length - 1, result = -1;
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (arr[mid] === target) {
        result = mid;
        right = mid - 1;
      } else if (arr[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    return result;
  };

  const handleSubmit = () => {
    const arr = array.split(',').map(Number);
    const num = Number(target);
    setResult(findFirstOccurrence(arr, num));
  };

  return (
    <div>
      <h3>Find first occurrence of a number in a sorted array</h3>
      <input 
        type="text" 
        placeholder="Enter sorted array (comma-separated)" 
        value={array} 
        onChange={(e) => setArray(e.target.value)} 
      />
      <input 
        type="text" 
        placeholder="Enter target number" 
        value={target} 
        onChange={(e) => setTarget(e.target.value)} 
      />
      <button onClick={handleSubmit}>Find</button>
      {result !== null && <p>First occurrence index: {result}</p>}
    </div>
  );
}

export default FirstOccurrence;
