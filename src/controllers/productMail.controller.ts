import { Request, Response } from "express";
import {sendEmail} from "@libs/nodemailer"

export const sendPurchaseDetails = async (req:Request,res:Response)=>{
    try {
        const {date,user,mobileNumber} = req.body;
        const to= 'ghulam.shubhani9909@gmail.com';
        const subject = 'Purchased Products';
        const html = `${user} purchase this product, on this date, ${date}, and his/her mobile number is ${mobileNumber}."` 
        const sendEmailResponse = await sendEmail(to,subject,html)
        if(sendEmailResponse?.success===true){
            res.status(201).json({success:true,message:"email sent successfully"})
        }
    } catch (error) {
        console.log(error,"error----------");
        res.status(500).json('Server error ---------------')
        
    }
}