import "./MovieDetails.scss";
import { useDetailsContext } from "../hooks/useMovieDetails";

const MovieDetails = () => {
  const { movieDetails, setMovieDetails } = useDetailsContext();

  const formatRuntime = (runtime?: number) => {
    if (!runtime) return "";

    const hours = Math.floor(runtime / 60);
    const minutes = runtime % 60;

    return `${hours}h${minutes}m`;
  };
  

  return (
    <div className="movieDetails">
      <div className="backdrop">
        <img
          className="backdrop_path"
          src={`https://image.tmdb.org/t/p/original${movieDetails?.backdrop_path}`}
          alt=""
        />
      </div>

      <div className="details">
        <img
          src={`https://image.tmdb.org/t/p/w500/${movieDetails?.poster_path}`}
          width={250}
          alt=""
        />
        <div className="info">
          <div className="title">
            <h1 className="original_title">{movieDetails?.original_title}</h1>
            <p className="vote_average">
              {movieDetails?.vote_average.toFixed(2)}
            </p>
            <ul className="listInfo">
              <li>
                <p className="release_date">{movieDetails?.release_date}</p>
              </li>
              <li>
                <p className="genre_name">
                  {movieDetails?.genres.map((genre) => genre.name).join(", ")}
                </p>
              </li>
              <li>
                <p className="runtime">
                  {formatRuntime(movieDetails?.runtime)}
                </p>
              </li>
            </ul>
          </div>
          <div className="sinopse">
            <h3>Sinopse</h3>
            <p className="overview">{movieDetails?.overview}</p>
          </div>
        </div>
      </div>

      <div className="closeModal" >
        <p onClick={() => setMovieDetails(null)}>X</p>
      </div>
    </div>
  );
};

export default MovieDetails;
