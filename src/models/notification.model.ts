import { INotification } from '@src/interface/notification.interface';
import { Schema, model, Document } from 'mongoose';



const NotificationSchema: Schema = new Schema<INotification>({
  notificationId: { type: String, required: true, unique: true },
  userId: { type: String, required: true },
  title: { type: String, required: true },
  message: { type: String, required: true },
  type: { type: String, required: true ,enum: ['system', 'order', 'product', 'user', 'other'] },
  subType: { type: String, enum: ['order_placed', 'order_shipped', 'order_delivered', 'order_cancelled', 'payment_received', 'payment_failed', 'payment_refunded', 'payment_dispute', 'product_reviewed', 'product_wishlist', 'user_followed', 'user_follow_request', 'user_follow_request_accepted', 'user_follow_request_rejected', 'other'] },
  relatedId: { type: String ,},
  priority: { type: String, default: 'medium', enum: ['low', 'medium', 'high'] },
  isRead: { type: Boolean, default: false },
  actionLink: { type: String },
  imageUrl: { type: String },
  expiresAt: { type: Date },
  isEmailSent: { type: Boolean, default: false },
  isSmsSent: { type: Boolean, default: false },
  isPushSent: { type: Boolean, default: false },
  isDeleted: { type: Boolean, default: false },
  createdAt: { type: Date, default: () => Date.now() }
});

NotificationSchema.index({ userId: 1, isRead: 1, createdAt: -1 });

export default model<INotification>('Notification', NotificationSchema);