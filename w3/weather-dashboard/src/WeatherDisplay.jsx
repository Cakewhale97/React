export default function WeatherDisplay({ weather }) {
  return (
    <div>
      <h2>{weather.name}</h2>
      <p>{weather.weather[0].description}</p>
      <p>Temp: {weather.main.temp} C </p>
      <p>Humidity: {weather.main.humidity}%</p>
    </div>
  );
}
