import { movieRepo } from "../../database/repository";

export const findAllMovies = async () => {
  return await movieRepo.getAllMovies();
};
