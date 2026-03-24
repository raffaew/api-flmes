import { createContext } from "react";
import type { MovieContextType } from "../types/movieType";

export const SelectContext = createContext<MovieContextType | null>(null);
