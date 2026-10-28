
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function increase() {
    setCount(count + 1);
  }

  function decrease() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  function reset() {
    setCount(0);
  }

  return (
    <div className="card">
      <h2>Counter App</h2>

      <h3>{count}</h3>

      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default Counter;
