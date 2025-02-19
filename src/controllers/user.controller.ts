import { userDetails } from "@src/services/user.service";
import ApiResponse from "@src/utils/ApiResponse";
import { asyncMiddleware } from "@src/utils/asyncHandler";
import { Request, Response } from "express";



export const getUserProfile = asyncMiddleware(async (req:Request, res:Response) => {

try {
    console.log(req.user._id,req.user?.userType);
    
   const user =  await userDetails(req.user._id,req.user?.userType);
    res.status(200).json(new ApiResponse(200, user, "successFullyAuthenticated"));
} catch (error: any) {
    res.status(500).json(new ApiResponse(500, null, error.message));
}})