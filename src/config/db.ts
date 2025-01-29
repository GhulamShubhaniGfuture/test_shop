import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI || "your_mongodb_connection_string";

export const db = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error("MongoDB connection error:", err);
  }
};
