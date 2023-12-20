import mongoose, { Schema } from "mongoose";

const commentSchema = mongoose.Schema({
    post_id: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "posts",
    },
    post_author: {
        type: Schema.Types.ObjectId,
        ref: "posts",
        required: true,
    },
    comment: {
        type: String,
        required: true,
    },
    children: {
        type: [Schema.Types.ObjectId],
        ref: "comments",
    },
    commented_by: {
        type: Schema.Types.ObjectId,
        ref: "users",
        required: true,
    },
    isReply: {
        type: Boolean
    },
    parent: {
        type: Schema.Types.ObjectId,
        ref: "comments",
    },
}, {
    timestamps: {
        createdAt: "createdAt",
        updatedAt: "upadatedAt",
    },
});

export default mongoose.model("comments", commentSchema)