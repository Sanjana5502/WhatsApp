import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const user = process.env.USER_NAME;
const pass = process.env.DB_PASSWORD;

const Connection = async () => {
    const uri = process.env.DB_URL;
    try {
        await mongoose.connect(uri);
        console.log('Connected successfully');
    } catch (error) {
        console.log(error);
    }
}

export default Connection;
