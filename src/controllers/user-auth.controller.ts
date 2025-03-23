import { STATUS_CODES } from "@src/constents/message-status";
import { MESSAGES, USER_MESSAGES } from "@src/constents/messages";
import { IUser } from "@src/interface/user.interface";
import { UserModel } from "@src/models/user.model";
import {  createFirebaseUser } from "@src/services/firebase.service";
import { createUser } from "@src/services/user.service";
import ApiError from "@src/utils/ApiError";
import ApiResponse from "@src/utils/ApiResponse";
import { asyncMiddleware } from "@src/utils/asyncHandler";
import { NextFunction, Request, Response } from "express";

const options = {
    httpOnly:false,
    secure:true,
  }

export const generateAccessRefreshToken = async (_id:string)=>{
    try {
       const user = await UserModel.findById(_id);
         if(!user){
              throw new ApiError(404,USER_MESSAGES.NOT_FOUND);
         }
         if(user.isDeleted===true){
                throw new ApiError(400,USER_MESSAGES.NOT_FOUND);
         } 
         const accessToken = await user.generateAccessToken();
         const refreshToken = await user.generateRefreshToken();

         if(refreshToken && user){
            user.refreshToken = refreshToken;
            await user.save({validateBeforeSave:false});
         }

         return {accessToken,refreshToken};

    } catch (error:any) {
        throw new ApiError(500,error.message);
    }
}

export const userRegister = asyncMiddleware(async (req: Request, res: Response, next: NextFunction) => {
try {
    const {firstName, lastName, email, password, mobileNumber, country,acceptedTerms , userType,countryId,countryCode,countryName} = req.body;
    const userId  = `${firstName.trim()}-${lastName.trim()}-${Math.ceil(Math.random()*100)}-${Date.now()}`;
    console.log(userId);
    
    const firebaseDetails:any = await createFirebaseUser(req.body as IUser);
    console.log(Date.now());
    
    await createUser({
        userId,
        country:{
            countryId:countryId,
            name:countryName,
            code:countryCode
        },
        ...req.body,
        firebaseUID:firebaseDetails.uid,
        createdAt: Date.now()
    } as IUser);

    res.status(STATUS_CODES.SUCCESS).send({
        status: STATUS_CODES.SUCCESS,
        message: USER_MESSAGES.CREATED,
      });
} catch (error: any) {
    const code = error?.statusCode || STATUS_CODES.INTERNAL_SERVER_ERROR;
    const message = error?.message || MESSAGES.ERROR;
    res.status(code).json({ message });
}
})


export const userLogin = asyncMiddleware(async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { email, password, userId } = req.body;

        if (!(email || userId)) {
            throw new ApiError(400, USER_MESSAGES.MISSING_EMAIL);
        }
        if (!password) {
            throw new ApiError(400, USER_MESSAGES.MISSING_PASSWORD);
        }

        const isValidUser = await UserModel.findOne({ $or: [{ email }, { userId }] });

        if (!isValidUser) {
            throw new ApiError(404, USER_MESSAGES.NOT_FOUND);
        }

        const isMatch = await isValidUser.isPasswordCorrect(password as string);
        if (!isMatch) {
            throw new ApiError(400, USER_MESSAGES.NOT_FOUND);
        }

        const { accessToken, refreshToken } = await generateAccessRefreshToken(isValidUser._id as string);

        let loginUser:any = await UserModel.findOne({ _id: isValidUser._id }).select("-password -refreshToken");
        if (loginUser) {
            loginUser = loginUser.toObject(); 
            loginUser.accessToken = accessToken;
        }

        const data=loginUser.data

        return res
            .status(200)
            .cookie("accessToken", accessToken, options)
            .cookie("refreshToken", refreshToken, options)
            .json(new ApiResponse(200, loginUser, "successFullyAuthenticated"));

    } catch (error: any) {
        const code = error?.statusCode || STATUS_CODES.INTERNAL_SERVER_ERROR;
        const message = error?.message || MESSAGES.ERROR;
        return res.status(code).json({ message });    
    }
});

export const userLogout = asyncMiddleware(async (req: Request, res: Response, next: NextFunction) => {
    try {
    const user = await UserModel.findByIdAndUpdate(req.user!._id,{
    refreshToken: null},{new:true});
    if(!user){
        throw new ApiError(404,USER_MESSAGES.NOT_FOUND);
    }
        res.clearCookie("accessToken",options).clearCookie("refreshToken",options);
        res.status(STATUS_CODES.SUCCESS).send({
            status: STATUS_CODES.SUCCESS,
            message: MESSAGES.LOGOUT_SUCCESS,
          });
    } catch (error) {
        
    }  
   
});