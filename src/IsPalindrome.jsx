import React, { useState } from 'react';

function IsPalindrome() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState(null);

  const checkPalindrome = (s) => {
    return s === s.split('').reverse().join('');
  };

  const handleSubmit = () => {
    setResult(checkPalindrome(input));
  };

  return (
    <div>
      <h3>Check if a string is a palindrome</h3>
      <input 
        type="text" 
        value={input} 
        onChange={(e) => setInput(e.target.value)} 
      />
      <button onClick={handleSubmit}>Check</button>
      {result !== null && <p>{result ? 'Palindrome' : 'Not a palindrome'}</p>}
    </div>
  );
}

export default IsPalindrome;
