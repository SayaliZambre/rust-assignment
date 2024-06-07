import React from 'react';
import ReactDOM from 'react-dom';
import IsPalindrome from './IsPalindrome';
import FirstOccurrence from './FirstOccurrence';
import ShortestWord from './ShortestWord';
import IsPrime from './IsPrime';
import FindMedian from './FindMedian';
import LongestCommonPrefix from './LongestCommonPrefix';
import KthSmallestElement from './KthSmallestElement';
import MaxDepth from './MaxDepth';

function App() {
  return (
    <div>
      <h1>React Task Implementations</h1>
      <IsPalindrome />
      <FirstOccurrence />
      <ShortestWord />
      <IsPrime />
      <FindMedian />
      <LongestCommonPrefix />
      <KthSmallestElement />
      <MaxDepth />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
