import { useMovieContext } from "../context/MovieContext";



export default function Main(){
  const { movies } = useMovieContext();

  return (
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
  )
}