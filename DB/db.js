import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config()
const connectDB = async function () {
    try {
        //mongodb_URI -> From .env file
        await mongoose.connect(process.env.mongodb_URI)
        console.log("MongoDB connected");
    }
    catch (e) {
        console.error(e.message)
        process.exit(1)//terminate the connection when affects error
    }
}
export default connectDB