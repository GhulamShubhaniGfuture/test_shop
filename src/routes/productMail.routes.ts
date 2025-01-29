import { sendPurchaseDetails } from "@src/controllers/productMail.controller";
import { Router } from "express";

export const productMailRouter = Router();

productMailRouter.post('/product-mail',sendPurchaseDetails)