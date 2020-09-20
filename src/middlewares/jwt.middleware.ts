import jwt from "jsonwebtoken"
import { NextFunction, Request, Response } from "express"

export default function (req: Request, res: Response, next: NextFunction) {
  
  const token = req.headers["authorization"];

  if (!token) return res.status(500).json({
    message: "token_notfinded"
  });

  const authRes = jwt.verify(token, "thisismysercretkey");

  

  return next();

}



