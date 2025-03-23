

import { ISeller } from '@src/interface/seller.interface';
import { Schema, model } from 'mongoose';


const SellerSchema: Schema = new Schema<ISeller>({
  sellerId: { type: String, required: true, unique: true },
  userId: { type: String, required: true, unique: true },
  businessName: { type: String, required: true },
  businessEmail: { type: String, required: true },
  businessPhone: { type: String, required: true },
  businessAddress: {
    addressLine1: { type: String, required: true },
    addressLine2: { type: String },
    city: { type: String, required: true },
    state: { type: String, required: true },
    postalCode: { type: String, required: true },
    country: { type: String, required: true }
  },
  description: { type: String, required: true },
  shortDescription: { type: String },
  logo: { type: String },
  bannerImage: { type: String },
  documents: [{
    documentType: { type: String, required: true },
    documentName: { type: String, required: true },
    documentUrl: { type: String, required: true },
    isVerified: { type: Boolean, default: false },
    uploadedAt: { type: Date, default: () => Date.now() },
    verifiedAt: { type: Date }
  }],
  bankDetails: {
    accountHolderName: { type: String, required: true },
    accountNumber: { type: String, required: true },
    bankName: { type: String, required: true },
    branchCode: { type: String, required: true },
    swiftCode: { type: String },
    taxId: { type: String }
  },
  commission: { type: Number, default: 0 },
  commissionType: { type: String, default: 'percentage' },
  isVerified: { type: Boolean, default: false },
  verificationStatus: { type: String, default: 'pending' },
  rejectionReason: { type: String },
  rating: { type: Number, default: 0 },
  totalRatings: { type: Number, default: 0 },
  totalSales: { type: Number, default: 0 },
  totalProducts: { type: Number, default: 0 },
  paymentMethods: [{ type: String }],
  shippingMethods: [{ type: String }],
  returnPolicy: { type: String },
  storePolicy: { type: String },
  socialLinks: {
    website: { type: String },
    facebook: { type: String },
    instagram: { type: String },
    twitter: { type: String },
    linkedin: { type: String }
  },
  isActive: { type: Boolean, default: true },
  isDeleted: { type: Boolean, default: false },
  createdAt: { type: Date, default: () => Date.now() },
  updatedAt: { type: Date, default: () => Date.now() },
  approvedAt: { type: Date },
  lastLogin: { type: Date }
});

export default model<ISeller>('Seller', SellerSchema);