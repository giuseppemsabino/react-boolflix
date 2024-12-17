import { createContext, useContext, useState } from "react";

const MovieContext = createContext();

export const MovieContextProvider = ({ children }) => {
  const url = import.meta.env.VITE_BASE_URL;
  const apiKey = import.meta.env.VITE_API_KEY;

  const fetchMovies = (term) => {
    const fetchConfig = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNjMyODI0NjBkZTE5Y2ZmYTc1ZWZiZDk2MzEyN2Q5OCIsIm5iZiI6MTczNDM2MzczNy42NzkwMDAxLCJzdWIiOiI2NzYwNGE1OWE4ZDBlYjU2MGZhYTgxZjkiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.Jql3mTZw7PDMFIy-3uP7w-t1kGp9r7AgCgS1ZChAAzo",
      },
    };
    fetch(`${url}/search/movie?query=${term}`, fetchConfig)
      .then((res) => res.json())
      .then((data) => {
        setGlobalData((prevData) => ({
          ...prevData, 
          movies: data.results, 
        }));
      });
    alert("Hai cercato: " + term);
  };

  const [globalData, setGlobalData] = useState({
    apiUrl: import.meta.env.VITE_BASE_URL,
    movies: [],
    searchMovies: fetchMovies,
    series: [],
  });

  return (
    <MovieContext.Provider value={globalData}>{children}</MovieContext.Provider>
  );
};

export const useMovieContext = () => useContext(MovieContext);
