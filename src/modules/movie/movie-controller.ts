import { Request, Response } from "express";
import * as movieServ from "./movie-service";

export const getAllMovies = async (req: Request, res: Response) => {
  const results = await movieServ.findAllMovies();
  res.json({ data: results });
};
