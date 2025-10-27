import mongoose, { Schema } from "mongoose";

const logoSchema = new Schema({
    logoFile: {
        type: String,
        required: true
    },
    isPublished: {
        type: Boolean,
        default: true
    }
}, { timestamps: true });

export const Logo = mongoose.model("Logo", logoSchema);
