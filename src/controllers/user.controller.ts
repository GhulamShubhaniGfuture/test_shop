import { encryptData } from "@src/libs/encript";
import { userDetails } from "@src/services/user.service";
import ApiResponse from "@src/utils/ApiResponse";
import { asyncMiddleware } from "@src/utils/asyncHandler";
import { Request, Response } from "express";



export const getUserProfile = asyncMiddleware(async (req:Request, res:Response) => {

try {
    
   const user:any =  await userDetails(req.user._id,req?.userId,req.user?.userType);
   console.log(user,"--------");
   
   const data =await encryptData(user)
    console.log(data,"-----data-----");
    
    res.status(200).json(new ApiResponse(200, data, "successFullyAuthenticated"));
} catch (error: any) {
    res.status(500).json(new ApiResponse(500, null, error.message));
}})