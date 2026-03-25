import "./Movies.scss";
import { useState, useEffect } from "react";
import type { ListMovies, Movie } from "../../types/movieType";
import { getMovies, getDetails } from "../../services/moviesService";
import { useSelectContext } from "../../hooks/useSelectContext";
import { useDetailsContext } from "../../hooks/useMovieDetails";

const Movies = () => {
  const [movies, setMovies] = useState<ListMovies | null>(null);
  const [page, setPage] = useState<number>(1);
  const { category } = useSelectContext();
  const { setMovieDetails,  } = useDetailsContext();


  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const data: ListMovies = await getMovies(
          category,
          page,
        );
        setMovies(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchMovies();
  }, [category, page]);

  const fetchDetails = async (id: number) => {
    try {
      const data: Movie = await getDetails(id);
      setMovieDetails(data);
    } catch (error) {
      console.log(error);
    }
  }

  const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

  const nextPage = () => {
    if (movies && movies.page <= movies.total_pages) {
      setPage((prev) => prev + 1);
      scrollToTop();
    }
  };

  const prevPage = () => {
    if (movies && movies.page > 1) {
      setPage((prev) => prev - 1);
      scrollToTop();
    }
  };


  return (
   
    <div className="movies">

      <ul className="cards">
        {movies?.results.map((movie) => (
          <li className="card" key={movie.id} onClick={() => fetchDetails(movie.id)}>
            <img
              className="poster"
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            />
            <p className="title">{movie.original_title}</p>
            <p className="date">{new Date(movie.release_date).toLocaleDateString()}</p>
          </li>
        ))}
      </ul>
      {page > 1 && <button onClick={prevPage}>Prev Page</button>}
      <button onClick={nextPage}>Next Page</button>
    </div>
  );
};

export default Movies;
