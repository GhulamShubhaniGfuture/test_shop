import { Document } from "mongoose";

interface IPromotion extends Document {
    promotionId: string;
    name: string;
    description: string;
    type: string; // 'sale', 'flash_sale', 'bogo', 'bundle'
    startDate: Date;
    endDate: Date;
    discountType: string; // 'percentage', 'fixed'
    discountValue: number;
    bannerImage?: string;
    bannerUrl?: string;
    isActive: boolean;
    includeProducts: string[]; // Array of productIds
    includeCategories: string[]; // Array of categoryIds
    sellerId?: string; // For seller-specific promotions
    conditionType?: string; // 'buy_x_get_y', 'quantity_discount'
    conditionValue?: Record<string, any>; // Specific parameters based on condition type
    isDeleted: boolean;
    createdAt: Date;
    updatedAt: Date;
  }

export {
    IPromotion 
    }