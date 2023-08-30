import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, increment,decrement] = useCounter(2);
  return (
    <div className="app-container">
      <div className="counter">
        <button className="round-button" onClick={decrement}>-</button>
        <span className="count">{count}</span>
        <button className="round-button" onClick={increment}>+</button>
      </div>
    </div>
  );
}

export default App;
function useCounter(initialCount){
  const [count, setCount] = useState(initialCount);
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  return [count,increment,decrement];
}
