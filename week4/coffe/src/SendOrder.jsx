import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

// Define the SendOrder component
const SendOrder = () => {
  const cartItems = useSelector((state) => state.cart);
  const navigate = useNavigate();
  const [orderNr, setOrderNr] = useState(null);
  const [eta, setEta] = useState(null);
  const [isSendingOrder, setIsSendingOrder] = useState(false);

  const handleOrder = () => {
    setIsSendingOrder(true);

    // Create an orderDetails object from the cartItems
    const orderDetails = {
      details: {
        order: cartItems.map((item) => ({
          name: item.title,
          price: item.price,
        })),
      },
    };

    console.log("Sending the following order:", orderDetails);

    // Use axios to send a POST request to the API with the orderDetails as the body
    axios
      .post(
        "https://airbean-api-xjlcn.ondigitalocean.app/api/beans/order",
        orderDetails
      )
      .then((response) => {
        console.log(response.data);
        console.log(response.data.orderNr);
        console.log(response.data.eta);
        setOrderNr(response.data.orderNr);
        setEta(response.data.eta);
        navigate("/orderstatus", {
          state: { orderNr: response.data.orderNr, eta: response.data.eta },
        });
      })
      .catch((error) => {
        console.error("there was an error", error);
      })
      .finally(() => setIsSendingOrder(false));
  };

  return (
    <div className="Post">
      {/* When the button is clicked, call the handleOrder function */}

      <button onClick={handleOrder} disabled={isSendingOrder}>
        Take my money
      </button>
    </div>
  );
};

export default SendOrder;
