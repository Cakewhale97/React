import React from "react";
import "./styles/MovieDetails.css";
import { colors } from "@mui/material";

export default function MovieDetails({ movie }) {
  console.log(movie);
  return (
    <div className="MovieContainer">
      <div className="MovieDetails">
        <div className="PosterDetails">
          <img src={movie.Poster} alt="" />
        </div>
        <div className="MovieTitlePlot">
          <h2 style={{ fontSize: "2rem" }}>{movie.Title}</h2>
          <p>{movie.Genre}</p>
          <p>{movie.Actors}</p>
          <p>{movie.Released}</p>
          <p>
            Plot: <br />
            {movie.Plot}
          </p>
        </div>
      </div>
    </div>
  );
}
