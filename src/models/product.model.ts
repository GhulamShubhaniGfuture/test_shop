import { IProduct } from '@src/interface/product.interface';
import { Schema, model, Document } from 'mongoose';



const ProductSchema: Schema = new Schema<IProduct>({
  productId: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  basePrice: { type: Number, required: true },
  categoryId: { type: String, required: true },
  subCategoryId: { type: String },
  brandId: { type: String },
  tags: [{ type: String }],
  images: [{ type: String }],
  featured: { type: Boolean, default: false },
  avgRating: { type: Number, default: 0 },
  totalReviews: { type: Number, default: 0 },
  variants: [{
    variantId: { type: String, required: true },
    sku: { type: String, required: true },
    price: { type: Number, required: true },
    attributes: { type: Object, required: true },
    stockQuantity: { type: Number, required: true, default: 0 },
    images: [{ type: String }]
  }],
  discount: {
    percentage: { type: Number },
    validUntil: { type: Date }
  },
  sellerId: { type: String, required: true },
  isApproved: { type: Boolean, default: false },
  isDeleted: { type: Boolean, default: false },
  createdAt: { type: Date, default: () => Date.now() },
  updatedAt: { type: Date, default: () => Date.now() }
});

export default model<IProduct>('Product', ProductSchema);