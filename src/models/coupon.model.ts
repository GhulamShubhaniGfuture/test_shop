import { ICoupon } from '@src/interface/coupon.interface';
import { Schema, model, Document } from 'mongoose';


const CouponSchema: Schema = new Schema<ICoupon>({
  couponId: { type: String, required: true, unique: true },
  code: { type: String, required: true, unique: true, uppercase: true },
  name: { type: String, required: true },
  description: { type: String },
  discountType: { type: String, required: true },
  discountValue: { type: Number, required: true },
  minOrderAmount: { type: Number },
  maxDiscountAmount: { type: Number },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  usageLimit: { type: Number },
  perUserLimit: { type: Number },
  usageCount: { type: Number, default: 0 },
  isActive: { type: Boolean, default: true },
  applicableProducts: [{ type: String }],
  applicableCategories: [{ type: String }],
  excludedProducts: [{ type: String }],
  excludedCategories: [{ type: String }],
  appliesTo: { type: String, default: 'all' },
  userGroups: [{ type: String }],
  firstTimeOnly: { type: Boolean, default: false },
  sellerId: { type: String },
  createdBy: { type: String, required: true },
  isDeleted: { type: Boolean, default: false },
  createdAt: { type: Date, default: () => Date.now() },
  updatedAt: { type: Date, default: () => Date.now() }
});





export const Coupon = model<ICoupon>('Coupon', CouponSchema);
