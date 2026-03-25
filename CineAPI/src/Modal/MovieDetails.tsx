import "./MovieDetails.scss";
import { useDetailsContext } from "../hooks/useMovieDetails";
import { FaStar } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";

const MovieDetails = () => {
  const { movieDetails, setMovieDetails } = useDetailsContext();

  console.log(movieDetails);

  const formatRuntime = (runtime?: number) => {
    if (!runtime) return "";

    const hours = Math.floor(runtime / 60);
    const minutes = runtime % 60;

    return `${hours}h${minutes}m`;
  };

  return (
    <div className={!movieDetails ? "hidden" : "movieDetails"}>
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
        <div className="full-info">
          <div className="title-tagline">
            <h1 className="original_title">{movieDetails?.original_title}</h1>
            <p className="tagline">{movieDetails?.tagline}</p>
          </div>

          <div className="info">
            <ul className="listInfo">
              <li>
                <p className="release_date">
                  (
                  {movieDetails?.release_date
                    ? new Date(movieDetails.release_date).getFullYear()
                    : null}
                  )
                </p>
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

            <p className="vote_average">
              <FaStar className="faStar" />
              {movieDetails?.vote_average.toFixed(2)}
            </p>

            <p className="origin_country">
              <span className="bold">Country:</span>{" "}
              {movieDetails?.origin_country.join(", ")}
            </p>
            <p className="original_language">
              <span className="bold">Language:</span>{" "}
              {movieDetails?.original_language}
            </p>
          </div>

          <div className="sinopse">
            <h3>Sinopse</h3>
            <p className="overview">{movieDetails?.overview}</p>
          </div>
        </div>
      </div>

      <div className="closeModal">
        <p onClick={() => setMovieDetails(null)}>
          <IoCloseOutline />
        </p>
      </div>
    </div>
  );
};

export default MovieDetails;
