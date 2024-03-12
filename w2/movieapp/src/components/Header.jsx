import Searchbar from "./Searchbar";
import IconButton from "@mui/material/IconButton";
import CameraRollIcon from "@mui/icons-material/CameraRoll";
import MovieApi from "../MovieApi";
import { useState } from "react";
import "../styles/Header.css";

export default function Header({ onSearch }) {
    const [input, setInput] = useState("");

    const handleSearch = () => {
        onSearch(input);
    };
  return (
    <header className="Header">
      <div className="Title">
        <CameraRollIcon className="Icon" />
      </div>
      <div className="Links">
        <a href="#About Us">HOME</a>
        <a href="#Movies">MOVIES</a>
        <a href="#TV">SERIES</a>
      </div>

    </header>
  );
}
