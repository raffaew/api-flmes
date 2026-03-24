import axios from "axios";
import type { ListMovies } from "../types/movieType";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
  },
});

export const getMovies = async (
  category: string,
  page: number,
): Promise<ListMovies> => {
  try {
    const { data } = await api.get<ListMovies>(category, {
      params: {
        page: page,
      },
    });
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.status_message || error.message);
    }
    throw new Error("Unexpected error");
  }
};

export const getDetails = async (id: number) => {
  try {
    const { data } = await api.get(`/movie/${id}`);
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.status_message || error.message);
    }
    throw new Error("Unexpected error");
  }
};
