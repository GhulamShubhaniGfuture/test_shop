import { Document } from "mongoose";


interface ICoupon extends Document {
    couponId: string;
    code: string;
    name: string;
    description: string;
    discountType: string; // 'percentage', 'fixed', 'free_shipping'
    discountValue: number;
    minOrderAmount?: number;
    maxDiscountAmount?: number;
    startDate: Date;
    endDate: Date;
    usageLimit?: number; // max number of times coupon can be used overall
    perUserLimit?: number; // max number of times one user can use coupon
    usageCount: number;
    isActive: boolean;
    applicableProducts?: string[]; // Array of productIds
    applicableCategories?: string[]; // Array of categoryIds
    excludedProducts?: string[]; // Array of productIds
    excludedCategories?: string[]; // Array of categoryIds
    appliesTo: string; // 'all', 'products', 'categories'
    userGroups?: string[]; // For targeting specific user segments
    firstTimeOnly?: boolean; // Only for first-time customers
    sellerId?: string; // If coupon is seller-specific
    createdBy: string; // userId of admin who created the coupon
    isDeleted: boolean;
    createdAt: Date;
    updatedAt: Date;
  }

export {
    ICoupon
    }
  