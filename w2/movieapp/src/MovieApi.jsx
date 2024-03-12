import React, { useState } from "react";
import Searchbar from "./components/Searchbar";
import MovieDetails from "./MovieDetails";
import FilterApi from "./components/FilterApi";
import axios from "axios";

const key = "c22ac6d8";

export default function MovieApi() {
    const [searchTerm, setSearchTerm] = useState("Iron Man");
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [showDetails, setShowDetails] = useState(false);

    const handleSearch = (newSearchTerm) => {
        setSearchTerm(newSearchTerm);
        setShowDetails(false);
    };

    const handleMovieClick = (movie) => {
        axios.get(`https://www.omdbapi.com/?i=${movie.imdbID}&apikey=${key}`)
          .then((response) => {
            setSelectedMovie(response.data);
            setShowDetails(true);
          });
      };

    const handleReturnClick = () => {
        setShowDetails(false);
    };

    return (
        <div>
            <Searchbar onSearch={handleSearch} />
            {showDetails ? (
                <div>
                    <button onClick={handleReturnClick}>Return</button>
                    <MovieDetails movie={selectedMovie} />
                </div>
            ) : (
                <FilterApi searchTerm={searchTerm} onMovieClick={handleMovieClick} />
            )}
        </div>
    );
}