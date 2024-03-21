import { useNavigate } from "react-router-dom";
import "./styles/Hero.css";

export default function Hero() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/Menu");
  };

  return (
    <div className="Hero" onClick={handleClick}>
      <h1>AIR BEAN</h1>
      <p>DRONEDELIVERY</p>
    </div>
  );
}
