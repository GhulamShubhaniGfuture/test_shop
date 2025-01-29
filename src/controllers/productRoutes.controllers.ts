import Product from "@src/models/Product.models";
import Shop from "@src/models/Shop.models";
import { ethers, JsonRpcProvider } from "ethers";
import { Request, Response, NextFunction } from "express";



export const getProductsAndShops = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const products = await Product.find().populate("shopId", "name");
    res.json(products);
  } catch (error) {
    next(error);
  }
};

export const storeProduct = async (req: Request, res: Response, next: NextFunction) => {
    try {
      console.log(req.body);
    const { name, price, shopId } = req.body;
    
    const shop = await Shop.findById(shopId);

    if (!shop) {
      return res.status(404).json({ message: " Shop not found" }); 
    }

    const products = await Product.create({ name, price, shopId});
    res.status(201).json({ message: "Product created successfully", products: products });
    } catch (error) {
      console.error("Error creating product:", error);
      next(error);
    }
  };

  export const purchaseProduct = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const provider = new JsonRpcProvider("https://alfajores-forno.celo-testnet.org"); 
      const { productId, userWallet, transactionHash } = req.body;
  
      const product:any = await Product.findById(productId);
      if (!product) {
        return res.status(404).json({ message: "Product not found" });
      }
  
      const transaction:any = await provider.getTransaction(transactionHash);
      console.log(transaction.to,transaction.from,transaction.value,"transaction");
      
      if (!transaction) {  
        return res.status(400).json({ message: "Invalid transaction hash or transaction not found" });
      }
  
      if (!transaction.to || !transaction.from || !transaction.value) {
        return res.status(400).json({ message: "Transaction data missing or malformed" });
      }

      console.log("expectedPrice");
      
  
      const merchantWallet = process.env.MERCHANT_WALLET_ADDRESS as string; 
      const expectedPrice = ethers.parseEther(product.price.toString()).toString(); 
      console.log(expectedPrice);
      
  
      if (
        // transaction.to.toLowerCase() !== merchantWallet.toLowerCase() || 
        transaction.from.toLowerCase() !== userWallet.toLowerCase() || 
        transaction.value.toString() !== expectedPrice
      ) {
        return res.status(400).json({ message: "Transaction verification failed. Data mismatch!" });
      }
      
  
      product.transactionHash = transactionHash;
      product.isSold = true;
      await product.save();
  
      res.json({ message: "Purchase successful!", transactionHash });
    } catch (error:any) {
      console.error("Error processing purchase:", error);
      res.status(500).json({ message: "Internal server error", error: error.message });
    }
  };