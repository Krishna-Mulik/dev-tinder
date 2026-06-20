import dotenv from 'dotenv';
import app from './app';
import { PORT } from './config';
import connectDB from './db';
dotenv.config();

await connectDB();

app.listen(PORT, () => {
    console.log(`dev-tinder backend listening on ${PORT}`);
});

