import { useState, useEffect } from "react";
import axios from "axios";

const key = "c22ac6d8";
const randomMovies = [
  "Dune",
  "Barbie",
  "Oppenheimer",
  "Poor Things",
  "Past Lives",
];

export default function FetchRandomMoviePoster() {
  const [posterUrl, setPosterUrl] = useState("");

  useEffect(() => {
    const FetchRandomMovie = async () => {
      const FetchRandomPoster =
        randomMovies[Math.floor(Math.random() * randomMovies.length)];
      const result = await axios.get(
        `http://www.omdbapi.com/?t=${encodeURIComponent(
          FetchRandomPoster
        )}&apikey=${key}`
      );
      setPosterUrl(result.data.Poster);
    };

    FetchRandomMovie();
    const intervalId = setInterval(FetchRandomMovie, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="HeroPoster">
      <img src={posterUrl} alt="Movie poster" />
    </div>
  );
}
