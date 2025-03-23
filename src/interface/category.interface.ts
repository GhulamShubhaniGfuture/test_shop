import { Document } from "mongoose";


interface ICategory extends Document {
    categoryId: string;
    name: string;
    description: string;
    parentId?: string;
    level: number; 
    imageUrl?: string;
    isActive: boolean;
    isDeleted: boolean;
    createdAt: Date;
    updatedAt: Date;
  }

  export {
    ICategory 
    }