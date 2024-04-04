import { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addToCart } from "./Redux/cartSlice"; // Import the addToCart action from your slice

export default function Coffe() {
  // Get the dispatch function from Redux
  const dispatch = useDispatch();

  // Define a state variable for the coffee items
  const [coffeeItems, setCoffeeItems] = useState([]);

  // Define a function to handle adding an item to the cart
  const handleAddToCart = (item) => {
    console.log("Added to cart", item); 
    dispatch(addToCart(item)); // Dispatch the addToCart action with the item as the payload
  };

  // Use the useEffect hook to fetch the coffee items when the component mounts
  useEffect(() => {
    axios
      .get("https://airbean-api-xjlcn.ondigitalocean.app/api/beans/")
      .then((res) => {
        // When the response is received, update the coffeeItems state with the menu items from the response
        setCoffeeItems(res.data.menu);
        console.log(res.data.menu); 
      })
      .catch((error) => {
        console.error("There was a mistake", error);
      });
  }, []); // The empty dependency array means this effect will only run once, when the component mounts

  // Render the component
  return (
    <div className="Coffes">
      {/* Map over the first 6 coffee items and render a div for each one */}
      {coffeeItems.slice(0, 6).map((item, index) => (
        <div className="keyDiv" key={index}>
          <div className="container">
            <div className="AddBtn">
              {/* When the "+" button is clicked, call the handleAddToCart function with the current item */}
              <button onClick={() => handleAddToCart(item)}>+</button>            
            </div>
            <div className="MenuItems">
              {/* Display the item's title and description */}
              <h2>{item.title}</h2>
              <p>{item.desc}</p>
            </div>
            <div className="price">
              {/* Display the item's price */}
              <p>{item.price} kr</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
