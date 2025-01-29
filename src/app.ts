
import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import cors from 'cors'
import  shopRouter  from '@src/routes/shopRoutes';
import  productRoutes  from '@src/routes/productRoutes.routes';
import errorHandler from './middleware/errorHandler';
// import { productMailRouter } from '@src/routes/productMail.routes';

dotenv.config();

const app = express();

app.use(cors())
// app.use(cors({
//     origin:[
//     "http://localhost:5173",
//       "http://localhost:5174",
//       "https://localhost:5173",
//       "https://localhost:3000",
//       "https://localhost:3001",
//     ],
//     credentials:true
// }))
app.use(express.json())
app.use(express.urlencoded({limit:"50mb"}))

app.use("/api", productRoutes);
app.use("/api", shopRouter);
// app.use('/v1',productMailRouter)

app.use(errorHandler);



export default app;