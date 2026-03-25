import "./App.scss";
import { useDetailsContext } from "./hooks/useMovieDetails";
import Header from "./components/Header/Header";
import Movies from "./components/Movies/Movies";
import MovieDetails from "./modal/MovieDetails";
import { SelectProvider } from "./selectContext/SelectProvider";
import { useEffect } from "react";
function App() {
  const { movieDetails } = useDetailsContext();

    useEffect(() => {
    if (movieDetails) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [movieDetails]);

  return (
    <div className={`app ${movieDetails ? "overlay" : ""}`}>
      <SelectProvider>
        <Header />
        <Movies />
         <MovieDetails />
      </SelectProvider>
    </div>
  );
}

export default App;
