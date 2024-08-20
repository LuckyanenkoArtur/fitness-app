import { Request, Response, NextFunction } from "express";
import { allowOrigins } from "../config/corsOptions";

const credentials = (req: Request, res: Response, next: NextFunction): void => {
  const origin = req.headers.origin;
  if (origin && typeof origin === "string" && allowOrigins.includes(origin)) {
    res.setHeader("Access-Control-Allow-Credentials", "true");
  }
  next();
};

export default credentials;
