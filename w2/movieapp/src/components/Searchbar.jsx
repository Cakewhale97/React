import "../styles/Searchbar.css";
import Button from "@mui/material/Button";

import React, { useState } from "react";

export default function Searchbar({ onSearch }) {
  const [input, setInput] = useState("");

  const handleClick = () => {
    onSearch(input);
  };

  return (
    <>
      <div className="Searchbar">
        <input
          type="text"
          placeholder="Search for a title"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(event) => {
            if (event.key === "Enter") {
              handleClick();
            }
          }}
        />
        <Button size="large" variant="contained" onClick={handleClick}>
          Search
        </Button>
      </div>
      
    </>
  );
}

//Input
