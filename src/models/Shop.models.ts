import mongoose from "mongoose";

const shopSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
});

const Shop = mongoose.model("Shop", shopSchema);
export default Shop;
