import axios from "axios";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../Redux/CartSlice";
import "./Products.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { ProductsImage } from "./ProductsImage";

export default function Products() {
  const dispatch = useDispatch();
  const [coffeItems, setCoffeItems] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleAddToCart = (item) => {
    console.log("added item to cart", item);
    dispatch(addToCart(item));
  };

  useEffect(() => {
    axios
      .get("https://airbean-9pcyw.ondigitalocean.app/api/beans/")
      .then((res) => {
        setCoffeItems(res.data.menu);
        console.log(res.data.menu);
      })
      .catch((error) => {
        console.error("Error fetching data", error);
      });
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % coffeItems.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1) % coffeItems.length);
  };

  if (!coffeItems.length) return null;
  const item = coffeItems[currentIndex];

  return (
    <div className="Products">
      <ArrowBackIcon onClick={handlePrev} />
      <div className="products-container">
        <h3>{item.title}</h3>
        <img src={ProductsImage[item.title]} alt={item.title}  className="ProductsImage" />
        <p>{item.desc}</p>
        <p>{item.price}kr</p>
        <button onClick={() => handleAddToCart(item)}>Add to cart</button>
      </div>
      <ArrowForwardIcon onClick={handleNext} />
    </div>
  );
}
