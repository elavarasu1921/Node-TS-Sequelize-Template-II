import { NextFunction, Request, Response } from "express";
import { ApiError } from "../errors/base-error";

export function haltOnTimedout(
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (req.timedout) return next(ApiError.internal());
  next();
}
