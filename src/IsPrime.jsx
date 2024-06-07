import React, { useState } from 'react';

function IsPrime() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState(null);

  const checkPrime = (n) => {
    if (n <= 1) return false;
    if (n <= 3) return true;
    if (n % 2 === 0 || n % 3 === 0) return false;
    for (let i = 5; i * i <= n; i += 6) {
      if (n % i === 0 || n % (i + 2) === 0) return false;
    }
    return true;
  };

  const handleSubmit = () => {
    setResult(checkPrime(Number(input)));
  };

  return (
    <div>
      <h3>Check if a number is prime</h3>
      <input 
        type="number" 
        value={input} 
        onChange={(e) => setInput(e.target.value)} 
      />
      <button onClick={handleSubmit}>Check</button>
      {result !== null && <p>{result ? 'Prime' : 'Not prime'}</p>}
    </div>
  );
}

export default IsPrime;
