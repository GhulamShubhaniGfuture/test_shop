import { Document } from "mongoose";

interface INotification extends Document {
    notificationId: string;
    userId: string;
    title: string;
    message: string;
    type: string; 
    subType?: string; 
    relatedId?: string; // orderId, paymentId
    priority: string; 
    isRead: boolean;
    actionLink?: string;
    imageUrl?: string;
    expiresAt?: Date;
    isEmailSent?: boolean;
    isSmsSent?: boolean;
    isPushSent?: boolean;
    isDeleted: boolean;
    createdAt: Date;
  }


  export {
    INotification
  }