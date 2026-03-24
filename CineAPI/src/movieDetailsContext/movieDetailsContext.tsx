import { createContext } from "react";
import type {MovieDetailsContextType} from "../types/movieType"

export const MovieDetailsContext = createContext<MovieDetailsContextType | null>(null);