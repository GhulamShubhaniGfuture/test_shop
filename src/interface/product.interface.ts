import { Document } from "mongoose";



interface IProductVariant {
    variantId: string;
    sku: string;
    price: number;
    attributes: Record<string, string>; 
    stockQuantity: number;
    images: string[];
  }
  
  interface IProduct extends Document {
    productId: string;
    name: string;
    description: string;
    basePrice: number;
    categoryId: string;
    subCategoryId?: string;
    brandId?: string;
    tags: string[];
    images: string[];
    featured: boolean;
    avgRating: number;
    totalReviews: number;
    variants: IProductVariant[];
    discount?: {
      percentage: number;
      validUntil: Date;
    };
    sellerId: string;
    isApproved: boolean;
    isDeleted: boolean;
    createdAt: Date;
    updatedAt: Date;
  }

  export {
    IProduct,
    IProductVariant
  }