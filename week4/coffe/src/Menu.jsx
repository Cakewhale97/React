import "./styles/Menu.css";
import Coffe from "./Coffe";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Menu({ coffeeItems }) {
  const cartItems = useSelector((state) => state.cart);

  return (
    <div className="Menu">
      <div className="Header">
        <div className="Nav">
          <Link to="/nav">
            <h1>🏠</h1>
          </Link>
        </div>
        <div className="Cart">
          <Link to="/cart">
            <h1>🛒</h1>
            <p>{cartItems.length}</p>
          </Link>
        </div>
      </div>
      <h1>Menu</h1>
      <div className="CoffeList">
        <Coffe coffeeItems={coffeeItems} />
      </div>
    </div>
  );
}
