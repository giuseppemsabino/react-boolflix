import MovieCards from "./MovieCard";

export default function ProductionList({ productions }) {
  return (
    <section>
      {productions.length > 0 ? (
        productions.map((production) => (
          <MovieCards key={production.id} production={production} />
        ))
      ) : (
        <p>Non ci sono risultati</p>
      )}
    </section>
  );
}

