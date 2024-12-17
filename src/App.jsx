import { useState } from "react";
import { useMovieContext } from "./context/MovieContext";

function App() {
  const { movies, searchMovies } = useMovieContext();
  const [userTerm, setUserTerm] = useState("");

  const handleUserTermChange = (e) => {
    setUserTerm(e.target.value);
  };

  const handleSearchOnSubmit = (e) => {
    e.preventDefault();
    searchMovies(userTerm);
  };

  return (
    <>
      <header>
        <form onSubmit={handleSearchOnSubmit}>
          <input value={userTerm} onChange={handleUserTermChange} type="text" />
          <button>Cerca</button>
        </form>
      </header>
      <main>
        <h1>Movies List</h1>
        {movies.length > 0 ? (
          movies.map((movie) => (
            <ul key={movie.id}>
              <li>titolo: {movie.title}</li>
              <li>Titolo originale: {movie.original_title}</li>
              <li>lingua: {movie.original_language}</li>
              <li>Voto: {movie.vote_average}</li>
            </ul>
          ))
        ) : (
          <p>Non ci sono risultati</p>
        )}
      </main>
    </>
  );
}

export default App;
