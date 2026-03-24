import { useContext } from "react";
import { SelectContext } from "../selectContext/SelectContext";

export const useSelectContext = () => {
  const context = useContext(SelectContext);
  
  if (!context) {
    throw new Error("context not found");
  }

  return context;
};
