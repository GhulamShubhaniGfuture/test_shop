import { IUser } from "@src/interface/user.interface";
import ApiError from "@src/utils/ApiError";
import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";
import jwt, { Secret } from "jsonwebtoken";

const UserSchema: Schema = new Schema<IUser>({
  userId: { type: String, required: true, unique: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  fiewbaseUid: { type: String },
  profile: { type: String },
  googleId: { type: String },
  mobileNumber: { type: String },
  country: {
    countryId: { type: String },
    name: { type: String },
    code: { type: String },
  },
  isEmailVerified: { type: Boolean, default: false },
  isPhoneVerified: { type: Boolean, default: false },
  acceptedTerms: { type: Boolean, default: false },
  accessToken: { type: String },
  refreshToken: { type: String },
  createdAt: { type: Date, default: () => Date.now() },
  updatedAt: { type: Date, default: () => Date.now() },
  lastLogin: { type: Date },
  userType: {
    type: String,
    enum: ["user","superAdmin", "subAdmin", "localAdmin","demo","seller"],
    default: "user",
  },
  avatar: {
    type: String,
    required: [false, "Please provide an avatar"],
  },
  coverPhoto: {
    type: String,
  },
  isBlock:{
    type:Boolean,
    default:false
  },
  isDeleted:{
    type:Boolean,
    default:false
  },
});

UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  try {
    const password = String(this.password);
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(password, salt);
    next();
  } catch (error: unknown) {
    if (error instanceof Error) {
      next(error);
    } else {
      next(new ApiError(500, "Internal Server Error"));
    }
  }
});


UserSchema.methods.isPasswordCorrect = async function (candidatePassword: string) {
    try {
        const isMatch = await bcrypt.compare(candidatePassword, this.password);
        return isMatch;
    } catch (error: unknown) {
        if (error instanceof Error) {
            throw error;
        } else {
            throw new ApiError(500, "Internal Server Error");
        }
    }
}

UserSchema.methods.generateAccessToken = async function (): Promise<string> {
    try {
      return jwt.sign(
        {
          data: {
            _id: this._id,
            userId: this.userId,
            userName: this.userName,
            fullName: this.fullName,
            email: this.email,
            userType: this.userType,
          },
        },
        process.env.JWT_SECRET_KEY as string, 
        { expiresIn: '1d' }
      );
    } catch (error: unknown) {
      if (error instanceof Error) {
        throw error;
      } else {
        throw new ApiError(500, 'Internal Server Error');
      }
    }
  };

  

  UserSchema.methods.generateRefreshToken = async function (): Promise<string> {
    try {
      const secret = process.env.REFRESH_TOKEN_SECRET || "defaultSecret";
      const expiry = process.env.REFRESH_TOKEN_EXPIRY || "15d";
  
      return jwt.sign(
        { data: { _id: this._id.toString() } },
        secret as any,  
        { expiresIn: expiry as any } 
      );
    } catch (error) {
      console.error("Error generating refresh token:", error);
      throw new ApiError(500, "Token not generated");
    }
  };
  

export const UserModel = mongoose.model<IUser>("User", UserSchema);
