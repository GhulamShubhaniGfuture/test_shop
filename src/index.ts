import dotenv from 'dotenv';
dotenv.config();

import app from '@src/app';
import { db } from './config/db';

db();

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
