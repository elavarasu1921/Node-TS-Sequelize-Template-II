import { actorRepo } from "../../database/repository";
import { addressRepo } from "../../database/repository";

export const getAllActors = async () => {
  console.log("from service");
  const address = addressRepo.getAddressByPK(23);
  return await actorRepo.findAllActors();
};

export const addActor = async () => {
  return await actorRepo.createActor();
};
