import { MovieDetailsContext } from "./movieDetailsContext";
import {useState, type ReactNode} from "react";
import type { Movie } from "../types/movieType";


type SelectProviderProps = {
  children: ReactNode;
};

export const MovieDetailsProvider = ({children} :SelectProviderProps) => {
    const [movieDetails, setMovieDetails] = useState<Movie | null>(null);

    return(
        <MovieDetailsContext.Provider value={{movieDetails, setMovieDetails}}>
            {children}
        </MovieDetailsContext.Provider>
    )
    

}