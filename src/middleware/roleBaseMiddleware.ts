import ApiError from "@src/utils/ApiError";
import {Request,Response, NextFunction } from "express"


export const roleBaseAuthMiddleware = async(...roles: string[])=>{
    return (req:Request, res:Response,next:NextFunction)=>{
        if(!req.user || !req.user.userType){
            return next(new ApiError(401, "Unauthorized: User not logged in."));

        }
        if(!roles.length || !roles.includes(req.user.userType)){
            return next(new ApiError(403, "Forbidden: You do not have permission to access this resource."));
        }
        next();
    }
}