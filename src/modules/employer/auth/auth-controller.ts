import { Request, Response } from "express";
import { getAllEmployers } from "./auth-service";

const login = async (req: Request, res: Response) => {
  // const emp = await Employer.create({ id: 1, firstName: "Ila" });
  const results = await getAllEmployers();
  res.json({ data: results });
};

const create = async (req: Request, res: Response) => {
  console.log(req.body);
  res.json({ data: "From Create" });
};

export { login, create };
