import { Request, Response } from "express";
import * as fromServ from "./actor-service";
import { Resources, Roles, ac } from "../../shared/rbac";

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
  const permission = ac.can(Roles.EMPLOYER).readAny(Resources.VIDEO);
  const permission2 = ac.can(Roles.EMPLOYER).readOwn(Resources.VIDEO);
  console.log(permission.granted);
  console.log(permission2.granted);
  res.json({ data: "added" });
};
