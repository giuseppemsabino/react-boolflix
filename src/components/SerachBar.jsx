import React, { useState, useContext } from "react";
import { MovieContext } from "../context/MovieContext";

const SearchBar = () => {
  const { fetchMovies } = useContext(MovieContext); 
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    if (query.trim() !== "") {
      fetchMovies(query); 
    }
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Cerca un film..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Cerca</button>
    </div>
  );
};

export default SearchBar;
