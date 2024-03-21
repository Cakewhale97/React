import Searchbar from "./Searchbar";
import IconButton from "@mui/material/IconButton";
import CameraRollIcon from "@mui/icons-material/CameraRoll";
import MovieApi from "../MovieApi";
import { useState } from "react";
import "../styles/Header.css";
import { Link } from "react-router-dom";

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
        <Link to="/">Home</Link>
        <Link to="/Movie">Books</Link>
        <Link to="/Series">Series</Link>
      </div>
    </header>
  );
}