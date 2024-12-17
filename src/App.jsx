import { useState } from "react";
import { useMovieContext } from "./context/MovieContext";



function App(){
  const {apiUrl} = useMovieContext();
  const {useTerm, setUseTerm} = useState('');

  const handleUserTermChange = (e) => {
    setUseTerm(e.target.value)
  }

  const handleSearchOnSubmit = (e) => {
    e.preventDefault();
  }


  return(
    <>
    <header>
      <form >
        <input value={useTerm} onChange={handleUserTermChange} type="text" />
        <button>Cerca</button>
      </form>
    </header>
    <h1>hello</h1>
    <p>{apiUrl}</p>
    </>
  )
}
export default App;

