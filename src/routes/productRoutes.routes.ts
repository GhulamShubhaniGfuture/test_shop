import { getProductsAndShops, purchaseProduct, storeProduct } from "@controllers/productRoutes.controllers";
import express from "express";

const router = express.Router();

router.get("/products-and-shops", getProductsAndShops);
// @ts-ignore
router.post("/store-product", storeProduct);
// @ts-ignore
router.post("/purchase-product", purchaseProduct);

export default router;
