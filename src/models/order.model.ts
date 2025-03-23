import { IOrder } from '@src/interface/order.interface';
import { Schema, model } from 'mongoose';



const OrderSchema: Schema = new Schema<IOrder>({
  orderId: { type: String, required: true, unique: true },
  userId: { type: String, required: true },
  items: [{
    productId: { type: String, required: true },
    variantId: { type: String },
    name: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true },
    image: { type: String }
  }],
  shippingAddress: {
    fullName: { type: String, required: true },
    addressLine1: { type: String, required: true },
    addressLine2: { type: String },
    city: { type: String, required: true },
    state: { type: String, required: true },
    postalCode: { type: String, required: true },
    country: { type: String, required: true },
    phoneNumber: { type: String, required: true }
  },
  subtotal: { type: Number, required: true },
  tax: { type: Number, default: 0 },
  shippingCost: { type: Number, default: 0 },
  discount: { type: Number, default: 0 },
  totalAmount: { type: Number, required: true },
  paymentId: { type: String },
  paymentMethod: { type: String, required: true },
  transactionId: { type: String },
  status: { type: String, required: true, default: 'pending',enum: ['pending', 'processing', 'shipped', 'delivered', 'cancelled'] },
  statusHistory: [{
    status: { type: String, required: true },
    timestamp: { type: Date, default: () => Date.now() },
    note: { type: String }
  }],
  trackingNumber: { type: String },
  estimatedDelivery: { type: Date },
  notes: { type: String },
  isDeleted: { type: Boolean, default: false },
  createdAt: { type: Date, default: () => Date.now() },
  updatedAt: { type: Date, default: () => Date.now() },
  sellerId: { type: String } 
});

export default model<IOrder>('Order', OrderSchema);