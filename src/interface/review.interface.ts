import { Document } from "mongoose";


interface IReview extends Document {
    reviewId: string;
    userId: string;
    productId: string;
    orderId?: string;
    rating: number;
    title?: string;
    comment: string;
    images?: string[];
    isVerifiedPurchase: boolean;
    likes: number;
    isApproved: boolean;
    isDeleted: boolean;
    createdAt: Date;
    updatedAt: Date;
  }

  export {
    IReview
  }