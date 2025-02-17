import { userLogin, userLogout, userRegister } from "@src/controllers/user-auth.controller";
import { Router } from "express";


export const userAuthRoutes = Router();

userAuthRoutes.post("/register",userRegister );
userAuthRoutes.post("/login",userLogin );
userAuthRoutes.post("/logout",userLogout );

