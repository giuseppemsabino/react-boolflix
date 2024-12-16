import { BrowserRouter, Route, Routes } from "react-router-dom"
import { MovieContextProvider } from "./context/MovieContext"
//layout

//contexts

//pages


function App() {
  

  return (
  <MovieContextProvider>
   <BrowserRouter>
   <Routes>
    
   </Routes>
   </BrowserRouter>
   </MovieContextProvider>
  )
}

export default App
