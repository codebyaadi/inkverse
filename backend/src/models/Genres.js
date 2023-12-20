import mongoose from "mongoose";

const genreSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
});

export default mongoose.model("genres", genreSchema);
