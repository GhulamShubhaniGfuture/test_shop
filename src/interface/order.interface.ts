import { Document } from "mongoose";




interface IOrderItem {
    productId: string;
    variantId?: string;
    name: string;
    price: number;
    quantity: number;
    image: string;
  }
  
  interface IShippingAddress {
    fullName: string;
    addressLine1: string;
    addressLine2?: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
    phoneNumber: string;
  }
  
  interface IOrder extends Document {
    orderId: string;
    userId: string;
    items: IOrderItem[];
    shippingAddress: IShippingAddress;
    subtotal: number;
    tax: number;
    shippingCost: number;
    discount: number;
    totalAmount: number;
    paymentId?: string;
    paymentMethod: string;
    transactionId?: string;
    status: string; // "pending", "processing", "shipped", "delivered", "cancelled"
    statusHistory: Array<{ 
      status: string;
      timestamp: Date;
      note?: string;
    }>;
    trackingNumber?: string;
    estimatedDelivery?: Date;
    notes?: string;
    isDeleted: boolean;
    createdAt: Date;
    updatedAt: Date;
    sellerId?: string; 
  }


  export {
    IOrderItem,
    IShippingAddress,
    IOrder
  }