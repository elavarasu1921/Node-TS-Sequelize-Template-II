import Address from "../models/address";

export const getAllAddress = async () => {
  return await Address.findAll();
};

export const getAddressByPK = async (id: number) => {
  return await Address.findByPk(id);
};
