import { ICart } from '@src/interface/cart.interface';
import { Schema, model } from 'mongoose';



const CartSchema: Schema = new Schema<ICart>({
  cartId: { type: String, required: true, unique: true },
  userId: { type: String, required: true, unique: true },
  items: [{
    productId: { type: String, required: true },
    variantId: { type: String },
    quantity: { type: Number, required: true, min: 1 },
    price: { type: Number, required: true },
    name: { type: String, required: true },
    image: { type: String },
    addedAt: { type: Date, default: () => Date.now() }
  }],
  totalItems: { type: Number, default: 0 },
  totalAmount: { type: Number, default: 0 },
  createdAt: { type: Date, default: () => Date.now() },
  updatedAt: { type: Date, default: () => Date.now() }
});

export default model<ICart>('Cart', CartSchema);