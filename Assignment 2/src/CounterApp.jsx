import "./counterApp.css";
import React, { useState } from "react";

const CounterApp = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div className="app-wraaper">
      <div className="app">
        <div className="main-data">
          <div className="counter">{counter}</div>
          <div className="buttons">
            <button onClick={() => setCounter(counter + 1)}>Increment</button>
            <button onClick={() => setCounter(counter - 1)}>Decrement</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CounterApp;
