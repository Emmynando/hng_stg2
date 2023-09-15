import HomePage from "./pages";
import MovieDetails from "./pages/MovieDetail";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path=":id" element={<MovieDetails />} />
    </Routes>
  );
}

export default App;
