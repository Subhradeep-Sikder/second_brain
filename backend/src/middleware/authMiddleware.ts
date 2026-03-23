import { Request, Response, NextFunction } from "express";
import { verifyToken } from "../utils/jwt";

export function authMiddleware(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({
      message: "Authorization header missing"
    });
  }

  // FIX: Safely extract the token whether it has "Bearer " or not
  const token = authHeader.startsWith("Bearer ") 
    ? authHeader.split(" ")[1] 
    : authHeader;

  if (!token) {
    return res.status(403).json({ message: "Token format invalid" });
  }

  try {
    const decoded = verifyToken(token) as any;

    if (!decoded) {
      return res.status(403).json({
        message: "Invalid token"
      });
    }

    // Assigning the userId to the request object
    (req as any).userId = decoded.id; 
    next();
    
  } catch (error) {
    return res.status(403).json({ message: "Token verification failed" });
  }
}