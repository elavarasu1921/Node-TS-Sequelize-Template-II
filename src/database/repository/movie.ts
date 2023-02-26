import Movie from "../models/movie";

export const getAllMovies = async () => {
  return await Movie.findAll();
};
