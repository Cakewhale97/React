import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./styles/Buy.css";

function Buy() {
    const navigate = useNavigate();
  const location = useLocation();
  const name = location.state.item.name;
  const date = location.state.item.when.date + " " + location.state.item.when.from + " - " + location.state.item.when.to;
  const where = location.state.item.where;
  const price = location.state.item.price;
  console.log(name);

  const handleOrder = () => {  
    navigate("/src/Tickets.jsx");
  };

  return (
    <div className="BuyContainer">
      <div className="Content">
        <h3 style={{color: "white", width: 200, marginBottom: 10}}>You are about to score some tickets to</h3>
        <h2 style={{color: "pink", fontSize: 32, margin: 0}}>{name}</h2>
        <h2 style={{color: "#37AEAB", fontSize: 18, margin: 0, marginBottom: 1
}}>{date}</h2>
        <h2 style={{color: "#FFFFFF"}}>{where}</h2>
        <h1>{price} sek</h1>
        <button className="BuyButton" onClick={handleOrder}>BESTÄLL</button>
      </div>
    </div>
  );
}

export default Buy;
