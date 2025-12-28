import axios from "axios";
import type { Movie } from "../types/movie";

interface FetchMoviesProps {
  results: Movie[];
}

export const fetchMovies = async (query: string): Promise<Movie[]> => {
  const response = await axios.get<FetchMoviesProps>(
    "https://api.themoviedb.org/3/search/movie",
    {
      params: {
        query,
        language: "uk-UA",
        include_adult: false,
      },
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
        accept: "application/json",
      },
    }
    
  );

  
  return response.data.results;
};

