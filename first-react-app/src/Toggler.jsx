import { useState } from "react";

export default function Toggler() {
  const [isHappy, setIsHappy] = useState(true);
  const toggleIsHappy = () => {
    setIsHappy(!isHappy);
  };
  return (
    <p style={{ fontSize: 100 }} onClick={toggleIsHappy}>
      {isHappy ? "😊" : "😢"}
    </p>
  );
}
