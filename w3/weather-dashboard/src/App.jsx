import { useEffect, useState } from "react";
import axios from "axios";
import WeatherForm from "./WeatherForm";
import WeatherDisplay from "./WeatherDisplay";

function App() {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState(localStorage.getItem("favoriteCity") || "London");

  const fetchWeather = async (city) => {
    const apiKey = "16d5776600a0400d0cc2d9ab6f524af4";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
      const response = await axios.get(url);
      setWeather(response.data);
      console.log(response.data);
    } catch (error) {
      console.error(`Error fetching weather: ${error}`);
    }
  };

  const saveFavoriteCity = () => {
    localStorage.setItem("favoriteCity", city);
    console.log(`${city} saved as favorite city`);

  };

  useEffect(() => {
    fetchWeather(city);
  }, [city]);

  return (
    <div className="App">
      <WeatherForm fetchWeather={fetchWeather}  setCity={setCity} />
      {weather && <WeatherDisplay weather={weather} />}
      <button onClick={saveFavoriteCity}>Save as Favorite</button>
    </div>
  );
}

export default App;
