import { Document } from "mongoose";

export interface IUser extends Document {
  userId: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  fiewbaseUid?: string;
  profile?: string;
  googleId?: string;
  mobileNumber?: string;
  country?: {
    countryId: string;
    name: string;
    code: string;
  };
  isEmailVerified?: boolean;
  isPhoneVerified?: boolean;
  acceptedTerms?: boolean;
  accessToken?: string;
  createdAt?: Date;
  updatedAt?: Date;
  lastLogin?: Date;
  userType?: string;
  avatar: string;
  coverPhoto?: string;
  refreshToken?: string;
  isBlock?: boolean;
  isDeleted?: boolean;
  isPasswordCorrect(password: string): Promise<boolean>;
  generateAccessToken(): Promise<string>;
  generateRefreshToken(): string;
}
