import { useContext } from "react";
import { MovieDetailsContext } from "../movieDetailsContext/movieDetailsContext";

export const useDetailsContext = () => {
  const context = useContext(MovieDetailsContext);

  if (!context) {
    throw new Error("context not found");
  }
  
  return context;
};
