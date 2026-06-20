import mongoose from "mongoose";
import type { Mongoose } from "mongoose";

async function connectDB() {
    try {

        if (!process.env.MONGO_URI) {
            throw new Error('inavlid mongo connection uri');
        }

        const connectionInstance = await mongoose.connect(process.env.MONGO_URI);
        console.log(`\n MongoDB connection established!`);

    } catch (err) {
        console.log(`error connecting database: ${err}`);
        process.exit(1);
    }
}

export default connectDB;
