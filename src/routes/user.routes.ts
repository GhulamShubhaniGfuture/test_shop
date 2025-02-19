import { getUserProfile } from "@src/controllers/user.controller";
import { authMiddleware } from "@src/middleware/authMiddleware";
import { Router } from "express";



export const userRoutes = Router();

 userRoutes.get("/profile",authMiddleware,getUserProfile );
// userRoutes.put("/profile",authMiddleware,updateUserProfile );    

