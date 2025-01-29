import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  isSold : { type: Boolean, required: false },
  shopId: { type: mongoose.Schema.Types.ObjectId, ref: "Shop", required: true },
  transactionHash : { type: String },
});

const Product = mongoose.model("Product", productSchema);
export default Product;
