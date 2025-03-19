import dotenv from 'dotenv';
dotenv.config();

import app from '@src/app';
import { db } from './config/db';

db();

declare global{
    namespace Express {
        interface Request {
            _id?: string;
            userType?: string;
            user?: any;
            userId?:string;
            userRole?:string;
            cloudinaryResults?:any;
        }
    }
}

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
