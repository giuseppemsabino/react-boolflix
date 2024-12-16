import React, { useContext } from "react";
import { MovieContext } from "../context/MovieContext";
import MovieCard from "./MovieCard";

const MovieList = () => {
  const { movies, loading } = useContext(MovieContext); 

  if (loading) {
    return <p>Caricamento in corso...</p>;
  }

  return (
    <div className="movie-list">
      {movies.length > 0 ? (
        movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)
      ) : (
        <p>Nessun film trovato.</p>
      )}
    </div>
  );
};

export default MovieList;
