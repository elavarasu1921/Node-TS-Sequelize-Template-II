import { employerRepo } from "../../../database/repository";

export const getAllEmployers = async () => {
  return await employerRepo.findAllEmployers();
};
