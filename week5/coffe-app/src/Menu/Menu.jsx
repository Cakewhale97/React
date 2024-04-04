import "./Menu.css";
import Header from "../component/Header/Header";
import ButtomNav from "../component/ButtomNavigation/ButtomNav";
import Products from "../Menu/Products";

export default function Menu() {
  return (
    <div className="menu">
      <div className="Header">
        <Header />
      </div>
      <div className="menu-items">
        <div>
          <Products />
        </div>
      </div>
      <div className="Footer">
        <ButtomNav />
      </div>
    </div>
  );
}
