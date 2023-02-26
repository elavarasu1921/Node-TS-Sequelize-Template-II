import { Request, Response } from "express";
import * as fromServ from "./actor-service";

export const getAllActors = async () => {
  return await fromServ.getAllActors();
};

export const addActor = async (req: Request, res: Response) => {
  // const actorData = {
  //   id: 2,
  //   name: "Ila",
  //   age: 23,
  //   address: {
  //     id: 2,
  //     street_name: "test name",
  //     pincode: 634345,
  //   },
  // };
  await fromServ.addActor();
  res.json({ data: "added" });
};
