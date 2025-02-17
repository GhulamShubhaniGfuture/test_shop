import { IUser } from "@src/interface/user.interface";
import { auth } from "@src/libs/firebase";
import ApiError from "@src/utils/ApiError";


export const createFirebaseUser = async (userData:IUser) => {
    const { email, password, mobileNumber: phoneNumber } = userData;
    if (!email) {
        throw new ApiError(400, "Email is required");
      }
      try {
        await auth.getUserByEmail(email);
      } catch (error: any) {
        if (error.code === "auth/user-not-found") {
          const user = await auth.createUser({
            email,
            phoneNumber,
            password,
            emailVerified: false,
          });
          return user;
        } else {
          throw error;
        }
      }
}