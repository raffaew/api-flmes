import { SelectContext } from "./SelectContext";
import {useState, type ReactNode} from "react";
import type { Categories } from "../types/movieType";


type SelectProviderProps = {
  children: ReactNode;
};

export const SelectProvider = ({children} :SelectProviderProps) => {
    const [category, setCategory] = useState<Categories>("/movie/top_rated");

    return(
        <SelectContext.Provider value={{category, setCategory}}>
            {children}
        </SelectContext.Provider>
    )
    
}