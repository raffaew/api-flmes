export interface Page {
  page: number;
}

export interface Genre {
  id: number;
  name: string;
}

export interface origin_country {
  name: string;
}

export interface Movie {
  title: string;
  id: number;
  original_title: string;
  overview: string;
  poster_path: string;
  backdrop_path: string;
  vote_average: number;
  release_date: string;
  genres: Genre[];
  origin_country: origin_country[];
  runtime: number;
}

export interface ListMovies {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

export type Categories =
  | "/movie/now_playing"
  | "/movie/popular"
  | "/movie/top_rated"
  | "/movie/upcoming";

export interface MovieContextType {
  category: Categories;
  setCategory: React.Dispatch<React.SetStateAction<Categories>>;
}

export interface MovieDetailsContextType {
  movieDetails: Movie | null;
  setMovieDetails: React.Dispatch<React.SetStateAction<Movie | null>>;
  
}
