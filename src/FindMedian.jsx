import React, { useState } from 'react';

function FindMedian() {
  const [array, setArray] = useState('');
  const [result, setResult] = useState(null);

  const findMedian = (arr) => {
    const n = arr.length;
    if (n % 2 === 1) {
      return arr[Math.floor(n / 2)];
    } else {
      return (arr[Math.floor(n / 2) - 1] + arr[Math.floor(n / 2)]) / 2;
    }
  };

  const handleSubmit = () => {
    const arr = array.split(',').map(Number);
    setResult(findMedian(arr));
  };

  return (
    <div>
      <h3>Find the median of a sorted array</h3>
      <input 
        type="text" 
        placeholder="Enter sorted array (comma-separated)" 
        value={array} 
        onChange={(e) => setArray(e.target.value)} 
      />
      <button onClick={handleSubmit}>Find</button>
      {result !== null && <p>Median: {result}</p>}
    </div>
  );
}

export default FindMedian;
