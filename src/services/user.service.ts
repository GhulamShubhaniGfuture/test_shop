import { IUser } from "@src/interface/user.interface";
import { sanatizeData } from "@src/libs/function";
import { UserModel } from "@src/models/user.model";
import ApiError from "@src/utils/ApiError";



export const getUserByEmail = async (email: string) => {
    const user = await UserModel.findOne({ email, isDeleted: false });
    return user;
  };


export const createUser = async (userData: IUser) => {
    const {
      userId,
      firstName,
      lastName,
      email,
      password,
      mobileNumber,
      googleId,
      isEmailVerified,
      acceptedTerms,
      profile,
      fiewbaseUid,
      userType,
      country,
      createdAt,
    } = userData;
  
    const __user = await getUserByEmail(email as string);
  
    if (__user) {
      throw new ApiError(400, "User already exists");
    }
    
  
    const payload = await sanatizeData({
      userId,
      firstName,
      lastName,
      email,
      password,
      mobileNumber,
      googleId,
      isEmailVerified,
      acceptedTerms,
      profile,
      fiewbaseUid,
      userType,
      country,
      createdAt,
    });
    const user = new UserModel(payload);
  
    const data = await user.save();
  
    if (!data) {
      throw new ApiError(400, "User not created");
    }
    return data;
  };

export const userDetails = async (userId: string,userType:string) => {
    try {
      if (userId) {
        const user = await UserModel.findOne({ _id:userId, isDeleted: false }).select('-password -refreshToken -__v');
        console.log(user);
        
        if (!user) {
          throw new ApiError(404, "User not found");
        } 
        return user;
      }
    } catch (error:any) {
      throw new ApiError(500,error.message);
    }
};
  