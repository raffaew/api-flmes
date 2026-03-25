import "./App.scss";
import Header from "./components/Header/Header";
import Movies from "./components/Movies/Movies";
import MovieDetails from "./modal/MovieDetails";
import { MovieDetailsProvider } from "./movieDetailsContext/movieDetailsProvider";
import { SelectProvider } from "./selectContext/SelectProvider";
function App() {
  return (
    <div className="app">
      <SelectProvider>
        <MovieDetailsProvider >
        <Header />
        <Movies />
         <MovieDetails />
        </MovieDetailsProvider>
      </SelectProvider>
    </div>
  );
}

export default App;
