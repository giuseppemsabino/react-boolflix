import { Children, createContext, useContext, useEffect, useState } from "react";

//apis




//creo il context

const Moviecontext = createContext();

export const MovieContextProvider= ({children}) => {
    const apiKey = import.meta.env.VITE_API_KEY
    // console.log(apiKey);

    const [movieData, setMoviedata] = useState({movies : []})


    useEffect(()=> {

    });

    const fetchMovies = () =>{}
}