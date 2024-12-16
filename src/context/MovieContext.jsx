import React, { createContext, useState } from 'react';

const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = import.meta.env.VITE_BASE_URL;

// Creiamo il contesto
export const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchMovies = (query) => {
    setLoading(true);
    fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}&language=it-IT`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Errore nella risposta dell\'API');
        }
        return response.json();
      })
      .then((data) => {
        setMovies(data.results || []);
      })
      .catch((error) => {
        console.error('Errore nella fetch dei film:', error);
        setMovies([]);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const value = {
    movies,
    loading,
    fetchMovies,
  };

  return <MovieContext.Provider value={value}>{children}</MovieContext.Provider>;
};