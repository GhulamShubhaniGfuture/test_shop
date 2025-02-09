import { Router } from "express";
import { userAuthRoutes } from "./user-auth.routes";
import { userRoutes } from "./user.routes";


export const router: Router= Router();

router.use('user-auth/',userAuthRoutes)
router.use('user/',userRoutes)