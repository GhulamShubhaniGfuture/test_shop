import { Document } from "mongoose";


interface IAddress extends Document {
    addressId: string;
    userId: string;
    fullName: string;
    addressLine1: string;
    addressLine2?: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
    phoneNumber: string;
    isDefault: boolean;
    addressType: string;
    isDeleted: boolean;
    createdAt: Date;
    updatedAt: Date;
  }

    export {
        IAddress
    }