import { IAddress } from '@src/interface/address.interface';
import { Schema, model, Document } from 'mongoose';



const AddressSchema: Schema = new Schema<IAddress>({
  addressId: { type: String, required: true, unique: true },
  userId: { type: String, required: true },
  fullName: { type: String, required: true },
  addressLine1: { type: String, required: true },
  addressLine2: { type: String },
  city: { type: String, required: true },
  state: { type: String, required: true },
  postalCode: { type: String, required: true },
  country: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  isDefault: { type: Boolean, default: false },
  addressType: { type: String, default: 'home', enum: ['home', 'work', 'other'] },
  isDeleted: { type: Boolean, default: false },
  createdAt: { type: Date, default: () => Date.now() },
  updatedAt: { type: Date, default: () => Date.now() }
});

export default model<IAddress>('Address', AddressSchema);