import { ICategory } from '@src/interface/category.interface';
import { Schema, model } from 'mongoose';



const CategorySchema: Schema = new Schema<ICategory>({
  categoryId: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  description: { type: String },
  parentId: { type: String },
  level: { type: Number, default: 0 },
  imageUrl: { type: String },
  isActive: { type: Boolean, default: true },
  isDeleted: { type: Boolean, default: false },
  createdAt: { type: Date, default: () => Date.now() },
  updatedAt: { type: Date, default: () => Date.now() }
});

export default model<ICategory>('Category', CategorySchema);