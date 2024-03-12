// WeatherForm.jsx
import { useState } from "react";

function WeatherForm({ fetchWeather, setCity }) {
    const [inputCity, setInputCity] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        fetchWeather(inputCity);
        setCity(inputCity);
        setInputCity("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputCity}
                onChange={(event) => setInputCity(event.target.value)}
                placeholder="Enter city"
            />
            <button type="submit">Search</button>
        </form>
    );
}

export default WeatherForm;