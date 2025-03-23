import { IPayment } from '@src/interface/payment.interface';
import { Schema, model, Document } from 'mongoose';



const PaymentSchema: Schema = new Schema<IPayment>({    
  paymentId: { type: String, required: true, unique: true },
  orderId: { type: String, required: true },
  userId: { type: String, required: true },
  amount: { type: Number, required: true },
  paymentMethod: { type: String, required: true,enum: ['cod', 'card', 'paypal','stripe'] },
  paymentStatus: { type: String, required: true, default: 'pending',enum: ['pending', 'success', 'failed', 'cancelled'] },
  transactionId: { type: String },
  gatewayResponse: { type: Object },
  refundId: { type: String },
  refundAmount: { type: Number },
  refundStatus: { type: String },
  refundedAt: { type: Date },
  notes: { type: String },
  createdAt: { type: Date, default: () => Date.now() },
  updatedAt: { type: Date, default: () => Date.now() }
});

export default model<IPayment>('Payment', PaymentSchema);