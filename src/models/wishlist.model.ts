import { IWishlist } from '@src/interface/wishlist.interface';
import { Schema, model, Document } from 'mongoose';



const WishlistSchema: Schema = new Schema<IWishlist>({
  wishlistId: { type: String, required: true, unique: true },
  userId: { type: String, required: true, unique: true },
  items: [{
    productId: { type: String, required: true },
    variantId: { type: String },
    addedAt: { type: Date, default: () => Date.now() }
  }],
  createdAt: { type: Date, default: () => Date.now() },
  updatedAt: { type: Date, default: () => Date.now() }
});

export default model<IWishlist>('Wishlist', WishlistSchema);