import { Document } from "mongoose";


interface ICartItem {
    productId: string;
    variantId?: string;
    quantity: number;
    price: number;
    name: string;
    image: string;
    addedAt: Date;
  }
  
  interface ICart extends Document {
    cartId: string;
    userId: string;
    items: ICartItem[];
    totalItems: number;
    totalAmount: number;
    createdAt: Date;
    updatedAt: Date;
  }


  export {
    ICartItem,
    ICart
    }