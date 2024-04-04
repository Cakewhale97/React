import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

const OrderStatus = () => {
  const location = useLocation();
  const { orderNr } = location.state;
  console.log('Received order number:', orderNr); // Log the received order number

  const [eta, setEta] = useState(null);

  useEffect(() => {
    axios
      .get(
        `https://airbean-api-xjlcn.ondigitalocean.app/api/beans/order/status/${orderNr}`
      )
      .then((response) => {
        setEta(response.data.eta);
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  }, [orderNr]);

  return (
    <div>
      <h1>Order Status</h1>
      <p>Your order number is: {orderNr}</p>
      {eta ? (
        <p>Your order will be ready in {eta} minutes.</p>
      ) : (
        <p>Loading order status...</p>
      )}
    </div>
  );
};

export default OrderStatus;
