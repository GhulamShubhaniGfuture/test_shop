import { IReview } from '@src/interface/review.interface';
import { Schema, model, Document } from 'mongoose';



const ReviewSchema: Schema = new Schema<IReview>({
  reviewId: { type: String, required: true, unique: true },
  userId: { type: String, required: true },
  productId: { type: String, required: true },
  orderId: { type: String },
  rating: { type: Number, required: true, min: 1, max: 5 },
  title: { type: String },
  comment: { type: String, required: true },
  images: [{ type: String }],
  isVerifiedPurchase: { type: Boolean, default: false },
  likes: { type: Number, default: 0 },
  isApproved: { type: Boolean, default: true },
  isDeleted: { type: Boolean, default: false },
  createdAt: { type: Date, default: () => Date.now() },
  updatedAt: { type: Date, default: () => Date.now() }
});

export default model<IReview>('Review', ReviewSchema);