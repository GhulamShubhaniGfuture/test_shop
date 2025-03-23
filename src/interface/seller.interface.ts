import { Document } from "mongoose";

interface IBankDetails {
    accountHolderName: string;
    accountNumber: string;
    bankName: string;
    branchCode: string;
    swiftCode?: string;
    taxId?: string;
  }
  
  interface IBusinessDocument {
    documentType: string; // 'registration', 'tax', 'identity', 'address', 'other'
    documentName: string;
    documentUrl: string;
    isVerified: boolean;
    uploadedAt: Date;
    verifiedAt?: Date;
  }
  
  interface IBusinessAddress {
    addressLine1: string;
    addressLine2?: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
  }
  
  interface ISeller extends Document {
    sellerId: string;
    userId: string;
    businessName: string;
    businessEmail: string;
    businessPhone: string;
    businessAddress: IBusinessAddress;
    description: string;
    shortDescription?: string;
    logo?: string;
    bannerImage?: string;
    documents: IBusinessDocument[];
    bankDetails: IBankDetails;
    commission: number;
    commissionType: string; // 'percentage', 'fixed'
    isVerified: boolean;
    verificationStatus: string; // 'pending', 'approved', 'rejected'
    rejectionReason?: string;
    rating: number;
    totalRatings: number;
    totalSales: number;
    totalProducts: number;
    paymentMethods: string[];
    shippingMethods: string[];
    returnPolicy?: string;
    storePolicy?: string;
    socialLinks?: {
      website?: string;
      facebook?: string;
      instagram?: string;
      twitter?: string;
      linkedin?: string;
    };
    isActive: boolean;
    isDeleted: boolean;
    createdAt: Date;
    updatedAt: Date;
    approvedAt?: Date;
    lastLogin?: Date;
  }

  export {
    ISeller
  }
  