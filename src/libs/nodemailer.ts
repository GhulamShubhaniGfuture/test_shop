import nodemailer from "nodemailer";

import dotenv from 'dotenv';
dotenv.config();



const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com", 
    secure: true,
    port: 465,
    auth: {
      user: process.env.EMAIL_ID,
      pass: process.env.EMAIL_PASSWORD,
    },
  });
  
  export const sendEmail = async (to: string, subject: string, html: string) => {
    const mailOptions = {
      from: process.env.EMAIL_ID,
      to,
      subject,
      html,
    };
  
    try { 
        console.log(mailOptions);
           
      const info = await transporter.sendMail(mailOptions);
      return { success: true, message: "Email sent successfully" };
    } catch (error) {
      console.error("Error sending email:", error);
      throw new Error("Error sending email");
    }
  };
  