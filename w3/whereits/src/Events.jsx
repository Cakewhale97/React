import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./styles/Events.css";

function Events() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://my-json-server.typicode.com/zocom-christoffer-wallenberg/where-its-at-api/events"
      );
      const data = await response.json();
      setData(data);
      console.log(data);
    };

    fetchData();
  }, []);

  const handleClick = (item) => {
    navigate("/Buy", { state: { item } });
  };

  return (
    <div className="Events">
      <div className="Event-title">
        <h1>Events</h1>
      </div>
      {data.slice(0, 4).map((item, index) => (
        <div key={index} className="EventContent" onClick={() => handleClick(item)}>          <div className="Event-left">
            <p>{item.when.date}</p>
          </div>

          <div className="Event-right">
            <h2>{item.name}</h2>

            <p>{item.where}</p>
            <p>
              {item.when.from} to {item.when.to}
            </p>
          </div>
          <div className="Event-price">
            <p> {item.price} SEK</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Events;
