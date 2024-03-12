import { useState } from "react";

export default function ToggleCounter() {
  const [isHappy, setIsHappy] = useState(true);
  const [count, setCount] = useState(0);
  const toggleIsHappy = () => {
    setIsHappy(!isHappy);
  };
  const incrementCount = () => {
    setCount(count + 2);
  };
  return (
    <div>
      <p style={{ fontSize: 100 }} onClick={toggleIsHappy}>
        {isHappy ? "😊" : "😢"}
      </p>
      <p>{count}</p>
      <button onClick={incrementCount}>+</button>
    </div>
  );
}
