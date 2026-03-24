import { useDetailsContext } from "../hooks/useMovieDetails";

const MovieDetails = () => {
    const { movieDetails } = useDetailsContext();
  console.log(movieDetails);
  return (
    <div>MovieDetails</div>
  )
}

export default MovieDetails