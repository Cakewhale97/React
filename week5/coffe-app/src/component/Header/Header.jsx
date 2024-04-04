import CoffeLogo from "../../assets/coffee-beans.png";
import "/src/component/Header/Header.css";
import MenuIcon from "@mui/icons-material/Menu";
import { useContext } from "react";
import { ThemeContext } from "../Toggle/Toggle";
import Switch from "@mui/material/Switch";

const label = { inputProps: { "aria-label": "Switch demo" } };

export default function Header() {
  const { darkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="nav">
      <div className="logo">
        <img src={CoffeLogo} alt="" />

        <div className="icons">
          <MenuIcon />
          <Switch onClick={toggleTheme}>{darkMode ? "Light" : "Dark"}</Switch>
        </div>
      </div>
    </div>
  );
}
