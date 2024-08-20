import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

interface DecodedToken {
  UserInforamation: {
    username: string;
    user_id: string;
  };
}

interface AuthenticatedRequest extends Request {
  user?: string;
  user_id?: string;
}

const verifyJWT = (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
): void => {
  const authHeaders = req.headers.authorization || req.headers.Authorization;

  if (
    !authHeaders ||
    !(typeof authHeaders === "string") ||
    !authHeaders.startsWith("Bearer ")
  ) {
    res.sendStatus(401);
    return;
  }

  const token = authHeaders.split(" ")[1];

  jwt.verify(
    token,
    process.env.ACCESS_TOKEN_SECRET || "myAccessTokenSecret",
    (err, decoded) => {
      if (err) {
        res.sendStatus(403);
        return;
      }

      const decodedToken = decoded as DecodedToken;
      req.user = decodedToken.UserInforamation.username;
      req.user_id = decodedToken.UserInforamation.user_id;
      next();
    }
  );
};

export default verifyJWT;
