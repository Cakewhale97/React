import { useState } from "react";
import "./styles/Box.css";

export default function Box() {
  const [color, setColor] = useState(getRandomColor());

  function getRandomColor() {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
  }

  function handleClick() {
    setColor(getRandomColor());
  }

  return (
    <div
      className="Box"
      style={{ backgroundColor: color }}
      onClick={handleClick}
    ></div>
  );
}
