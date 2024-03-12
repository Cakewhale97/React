import "../styles/Searchbar.css";
import React, { useState } from "react";

export default function Searchbar({ onSearch }) {
  const [input, setInput] = useState("");

  const handleClick = () => {
    onSearch(input);
  };

  return (
    <div className="Searchbar">
      <input
        type="text"
        placeholder="Search for a title"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyPress={event => {
          if (event.key === "Enter") {
            handleClick();
          }
        }}
      />
      <button onClick={handleClick} className="SearchButton">
        Search
      </button>
    </div>
  );
}

//Input
