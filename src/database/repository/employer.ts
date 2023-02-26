import Employer from "../models/employer";

export const findAllEmployers = async () => {
  const results = await Employer.findAll();
  return results;
};
