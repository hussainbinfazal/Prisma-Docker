import { Request, Response, NextFunction } from "express";
import cookieParser from "cookie-parser";
import jwt from "jsonwebtoken";
export interface CustomRequest extends Request {
  cookies: { [key: string]: string };
  user?: {
    id: string;
    email: string;
    name: string;
    role: string;
    password?: string;
    createdAt?: Date;
    updatedAt?: Date;
  };
}
interface JwtPayload {
  id: string;
  email: string;
  name: string;
  role: string;
}
export const middleware = (
  req: CustomRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    let token: string | undefined;
    if (req.cookies && req.cookies.token) {
      token = req.cookies.token;
    } else if (
      req.headers["authorization"] &&
      req.headers["authorization"].startsWith("Bearer")
    ) {
      token = req.headers["authorization"]?.split(" ")[1];
    }

    if (!token) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    let decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    if (!decodedToken) {
      return res.status(401).json({ message: "Invalid token" });
    }
    req.user = decodedToken;
    next();
  } catch (error) {
    console.error("Error in middleware:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
