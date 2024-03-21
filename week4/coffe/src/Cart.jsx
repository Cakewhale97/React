import "./styles/Cart.css";
import { useSelector } from "react-redux";

export default function Cart() {
  const cartItems = useSelector((state) => state.cart);

  return (
    <div className="CartContainer">
      <h1>Cart</h1>
      {cartItems.map((item, index) => (
        <div key={index}>
          <h2>{item.title}</h2>
          <p>{item.desc}</p>
          <p>{item.price}</p>
        </div>
      ))}
    </div>
  );
}
