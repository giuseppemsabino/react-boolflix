import { createContext, useContext} from "react";

const MovieContext = createContext();

export const MovieContextProvider = ({children}) => {
  const globalData ={
    apiUrl : import.meta.env.VITE_BASE_URL,
    movies: [],
    series: []
  }
  return <MovieContext.Provider value={globalData}>{children}</MovieContext.Provider>
}

export const useMovieContext = ()=> useContext(MovieContext)