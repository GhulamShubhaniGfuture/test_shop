import mongoose from "mongoose";

const shopProductSchema = new mongoose.Schema({
  shopId: { type: mongoose.Schema.Types.ObjectId, ref: "Shop", required: true },
  productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true },
});

const ShopProduct = mongoose.model("ShopProduct", shopProductSchema);
export default ShopProduct;
