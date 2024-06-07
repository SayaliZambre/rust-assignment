import React, { useState } from 'react';

function LongestCommonPrefix() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const findLongestCommonPrefix = (strs) => {
    if (!strs.length) return '';
    let prefix = strs[0];
    for (let i = 1; i < strs.length; i++) {
      while (strs[i].indexOf(prefix) !== 0) {
        prefix = prefix.substring(0, prefix.length - 1);
        if (prefix === '') return '';
      }
    }
    return prefix;
  };

  const handleSubmit = () => {
    const strs = input.split(',');
    setResult(findLongestCommonPrefix(strs));
  };

  return (
    <div>
      <h3>Find longest common prefix</h3>
      <input 
        type="text" 
        placeholder="Enter strings (comma-separated)" 
        value={input} 
        onChange={(e) => setInput(e.target.value)} 
      />
      <button onClick={handleSubmit}>Find</button>
      {result && <p>Longest common prefix: {result}</p>}
    </div>
  );
}

export default LongestCommonPrefix;
