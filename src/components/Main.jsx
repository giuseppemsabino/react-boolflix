import { useMovieContext } from "../context/MovieContext";
import ProductionList from "./ProductionList";

export default function Main() {
  const { movies } = useMovieContext();

  return (
    <main>
      <ProductionList productions={movies}>
        <h1>movies</h1>
      </ProductionList>
      <section>
        <h1>Movies List</h1>
        
      </section>
    </main>
  );
}
