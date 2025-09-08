import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/ecoquest`);
        console.log(`MONGODB connected for 'ecoquest' || ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("MongoDB connection ERROR: ", error)
    }
}

export default connectDB;