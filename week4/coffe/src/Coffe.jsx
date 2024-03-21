import { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addToCart } from "./Redux/cartSlice";

export default function Coffe() {
  const dispatch = useDispatch();

  const [coffeeItems, setCoffeeItems] = useState([]);

  const handleAddToCart = (item) => {
    console.log("Added to cart", item);
    dispatch(addToCart(item));
  };

  useEffect(() => {
    axios
      .get("https://airbean-api-xjlcn.ondigitalocean.app/api/beans/")
      .then((res) => {
        setCoffeeItems(res.data.menu);
        console.log(res.data.menu);
      })
      .catch((error) => {
        console.error("There was a mistake", error);
      });
  }, []);

  return (
    <div className="Coffes">
      {coffeeItems.slice(0, 6).map((item, index) => (
        <div className="keyDiv" key={index}>
          <div className="container">
            <div className="AddBtn">
            <button onClick={() => handleAddToCart(item)}>+</button>            </div>
            <div className="MenuItems">
              <h2>{item.title}</h2>
              <p>{item.desc}</p>
            </div>
            <div className="price">
              <p>{item.price} kr</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
