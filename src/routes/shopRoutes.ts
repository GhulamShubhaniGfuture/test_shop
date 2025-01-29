
import Shop from '@src/models/Shop.models';
import express, { Request, Response } from 'express';

const router = express.Router();

router.post("/create-shop", async (req, res) => {
  try {    
    const { name } = req.body;
    const shop =await  Shop.create({ name });    
    res.status(201).json(shop);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

export default router;