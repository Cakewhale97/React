import React from "react";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import "../styles/scroll-down-button.css";

export default function ScrollToContent() {
  const scrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <button onClick={scrollDown} className="scroll-down-button">
      <ArrowDownwardIcon />
    </button>
  );
}
