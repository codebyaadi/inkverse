import mongoose, { Schema } from "mongoose";

const postSchema = mongoose.Schema({
    author: {
        type: Schema.Types.ObjectId,
        ref: "users",
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        enum: ["manga", "manhua", "manhwa"],
        required: true,
    },
    genres: [
        {
            type: Schema.Types.ObjectId,
            ref: "genres",
            required: true,
        },
    ],
    chapters: [
        {
            title: {
                type: String,
                required: true,
            },
            images: [
                {
                    type: String, // Assuming each image is represented by a URL
                    required: true,
                }
            ],
        }
    ],
    price: {
        type: Number,
        required: true,
        min: [0, "Price must be non-negative"],
    },
}, {
    timestamps: {
        createdAt: "createdAt",
        updatedAt: "updatedAt",
    },
});

export default mongoose.model("posts", postSchema);
