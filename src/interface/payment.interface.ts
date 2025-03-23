import { Document } from "mongoose";



interface IPayment extends Document {
    paymentId: string;
    orderId: string;
    userId: string;
    amount: number;
    paymentMethod: string;
    paymentStatus: string;
    transactionId?: string;
    gatewayResponse?: Record<string, any>;
    refundId?: string;
    refundAmount?: number;
    refundStatus?: string;
    refundedAt?: Date;
    notes?: string;
    createdAt: Date;
    updatedAt: Date;
  }


  export {
    IPayment
  }