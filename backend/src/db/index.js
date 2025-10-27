import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
import { Admin } from "../models/admin.model.js";
import bcrypt from "bcryptjs";

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)



    } catch (error) {
        console.log("MONGODB connection FAILED ", error);
        process.exit(1)
    }
}

// Removed createDefaultAdmin function to avoid hardcoded confidential information

export default connectDB
