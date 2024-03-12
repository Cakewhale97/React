import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../styles/MovieFilter.css"
import "../styles/movie-list.css"

const key = "c22ac6d8";

export default function FilterApi({ searchTerm, onMovieClick }) {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        if (searchTerm) {
            axios.get(`https://www.omdbapi.com/?s=${searchTerm}&apikey=${key}`)
                .then((response) => {
                    setMovies(response.data.Search);
                });
        }
    }, [searchTerm]);

    return (
        <div className='movie-list'>
            {movies.map(movie => (
                <div key={movie.imdbID} onClick={() => onMovieClick(movie)}>
                    <h2>{movie.Title}</h2>
                    <img src={movie.Poster} alt={movie.Title} />
                </div>
            ))}
        </div>
    );
}