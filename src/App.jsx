import React, { useContext, useState } from 'react';
import { MovieContext, MovieProvider } from './context/MovieContext'; 

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const { fetchMovies } = useContext(MovieContext);

  const handleSearch = () => {
    fetchMovies(query);
  };

  return (
    <div>
      <input 
        type="text" 
        value={query} 
        onChange={(e) => setQuery(e.target.value)} 
        placeholder="Cerca un film"
      />
      <button onClick={handleSearch}>Cerca</button>
    </div>
  );
};

const MovieList = () => {
  const { movies, loading } = useContext(MovieContext);

  if (loading) {
    return <p>Caricamento in corso...</p>;
  }

  return (
    <div>
      {movies.length > 0 ? (
        movies.map((movie) => (
          <div key={movie.id}>
            <h3>{movie.title}</h3>
            <p>{movie.original_title}</p>
            <p>{movie.language}</p>
            <p>{movie.vote_average}</p>
          </div>
        ))
      ) : (
        <p>Nessun film trovato.</p>
      )}
    </div>
  );
};

const App = () => {
  return (
    <MovieProvider>  {/* Avvolge tutto nel provider */}
      <div>
        <h1>BoolFlix</h1>
        <SearchBar />
        <MovieList />
      </div>
    </MovieProvider>
  );
};

export default App;
