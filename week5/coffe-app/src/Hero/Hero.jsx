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
          <h1>Coffe so good your taste buds will love it</h1>
          <p>The best grain, the finest roast, the powerful flavor.</p>
          <Btn />
        </div>
      </div>
    </div>
  );
}
