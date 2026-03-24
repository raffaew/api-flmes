import "./App.scss";
import Header from "./components/Header/Header";
import Movies from "./components/Movies/Movies";
import MovieDetails from "./Modal/MovieDetails";
import { MovieDetailsProvider } from "./movieDetailsContext/movieDetailsProvider";
import { SelectProvider } from "./selectContext/SelectProvider";
function App() {
  return (
    <div className="app">
      <SelectProvider>
        <MovieDetailsProvider >
        <Header />
        <Movies />
        <div className="MovieDetails"> <MovieDetails /></div>
        </MovieDetailsProvider>
      </SelectProvider>
    </div>
  );
}

export default App;
