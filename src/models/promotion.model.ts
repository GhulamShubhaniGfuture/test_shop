

import { IPromotion } from '@src/interface/promostion.interface';
import { Schema, model, Document } from 'mongoose';



// Additional schema for promotions/sales events


const PromotionSchema: Schema = new Schema<IPromotion>({
  promotionId: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  description: { type: String },
  type: { type: String, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  discountType: { type: String, required: true },
  discountValue: { type: Number, required: true },
  bannerImage: { type: String },
  bannerUrl: { type: String },
  isActive: { type: Boolean, default: true },
  includeProducts: [{ type: String }],
  includeCategories: [{ type: String }],
  sellerId: { type: String },
  conditionType: { type: String },
  conditionValue: { type: Object },
  isDeleted: { type: Boolean, default: false },
  createdAt: { type: Date, default: () => Date.now() },
  updatedAt: { type: Date, default: () => Date.now() }
});

export const Promotion = model<IPromotion>('Promotion', PromotionSchema);