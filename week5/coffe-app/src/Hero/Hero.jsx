import "./Hero.css";
import Header from "../component/Header/Header";
import { useNavigate } from "react-router-dom";
import Btn from "../component/Button/Button";

export default function Hero() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/menu");
  };

  return (
    <div className="hero">
      <div className="nav">
        <Header />
      </div>
      <div className="Image"></div>
      <div className="hero-container">
        <div className="hero-Content" onClick={handleClick}>
          <div className="one">
            <h1>Coffe so good </h1>
          </div>
          <div className="two">
            <h1>The Best Grain</h1>
          </div>
          <div className="three">
            <h1>The finest roast</h1>
          </div>
          <div className="four">
            <h1>The powerful flavor</h1>
          </div>
        </div>
        <div className="Btn">
          <Btn />
        </div>
      </div>
    </div>
  );
}
