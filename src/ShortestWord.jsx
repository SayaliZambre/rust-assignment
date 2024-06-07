import React, { useState } from 'react';

function ShortestWord() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const findShortestWord = (s) => {
    return s.split(' ').reduce((shortest, word) => 
      word.length < shortest.length ? word : shortest, s.split(' ')[0]);
  };

  const handleSubmit = () => {
    setResult(findShortestWord(input));
  };

  return (
    <div>
      <h3>Find the shortest word in a string</h3>
      <input 
        type="text" 
        value={input} 
        onChange={(e) => setInput(e.target.value)} 
      />
      <button onClick={handleSubmit}>Find</button>
      {result && <p>Shortest word: {result}</p>}
    </div>
  );
}

export default ShortestWord;
