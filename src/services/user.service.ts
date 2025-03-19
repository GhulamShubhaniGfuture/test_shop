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

export const userDetails = async (id:string|undefined,userId: string|undefined,userType:string) => {
    try {
      console.log(userId,"userId");
      
      if (userId) {

        // const user = await UserModel.findOne({ _id:userId, isDeleted: false }).select('-password -refreshToken -__v');
        const user  = await UserModel.aggregate([
          {
            $match:{
              userId: userId,
              isDeleted: false,
              userType: userType
            },
           
          },{
            $project:{
              _id: 0,
              userId: 1,
              firstName: 1,
              lastName: 1,
              email: 1,
              mobileNumber: 1,
              avatar: 1,
              coverPhoto: 1,
              // isEmailVerified: 1,
              // isPhoneVerified: 1,
              profile: 1,
              userType: 1,
              country: 1,
              createdAt: 1,
              updatedAt: 1,
              lastLogin: 1,
              isBlock: 1,
              isDeleted: 1
            }
          }
        ]);
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
  