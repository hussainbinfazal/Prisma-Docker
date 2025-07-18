import jwt from "jsonwebtoken";
import { Response } from "express";
export const generateToken = (userId: string, res: Response): string => {
  try {
    const token = jwt.sign({ id: userId }, process.env.JWT_SECRET, {
      expiresIn: 30 * 24 * 60 * 60,
      secure: true,
      httpOnly: true,
    });
    res.cookie("token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "none",
      maxAge: 3600000,
    });
    return token;
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error generating token:", error.message);
    }
  }
};
