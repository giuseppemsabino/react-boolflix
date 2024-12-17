
import { useState } from "react";
import { useMovieContext } from "../context/MovieContext";



export default function Header (){
  const {searchMovies } = useMovieContext();
  const [userTerm, setUserTerm] = useState('harry');


    const handleSearchOnSubmit = (e) => {
        e.preventDefault();
        searchMovies(userTerm);
      };


      const handleUserTermChange = (e) => {
        setUserTerm(e.target.value);
      };
    
    return(
        <header>
        <form onSubmit={handleSearchOnSubmit}>
          <input value={userTerm} onChange={handleUserTermChange} type="text" />
          <button>Cerca</button>
        </form>
      </header>
    )
}