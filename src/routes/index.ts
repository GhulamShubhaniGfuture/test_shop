import { Request, Response, Router } from "express";
import { userAuthRoutes } from "./user-auth.routes";
import { userRoutes } from "./user.routes";


export const router: Router= Router();

router.get("/api/v1", (req: Request, res: Response) => {
  res.send("Welcome to the API routes index"); 
})
router.use('/user-auth',userAuthRoutes)
router.use('/user',userRoutes)