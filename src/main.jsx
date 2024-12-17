import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { MovieContextProvider } from "./context/MovieContext.jsx";

import "./assets/css/index.css";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <MovieContextProvider>
      <App />
    </MovieContextProvider>
  </StrictMode>
);
