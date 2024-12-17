import { useState } from "react";
import { useMovieContext } from "./context/MovieContext";



function App(){
  const {searchMovies}= useMovieContext();
  const [userTerm, setUserTerm] = useState('');

  const handleUserTermChange = (e) => {
    setUserTerm(e.target.value)
  }

  const handleSearchOnSubmit = (e) => {
    e.preventDefault();

    searchMovies(userTerm);
  }


  return(
    <>
    <header>
      <form onSubmit={handleSearchOnSubmit}>
        <input value={userTerm} onChange={handleUserTermChange} type="text" />
        <button>Cerca</button>
      </form>
    </header>
    <main>
    <h1>hello</h1>
    </main>
    </>
  )
}
export default App;

