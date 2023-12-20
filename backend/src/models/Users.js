import mongoose, { Schema } from "mongoose";

let profile_imgs_name_list = ["Garfield", "Tinkerbell", "Annie", "Loki", "Cleo", "Angel", "Bob", "Mia", "Coco", "Gracie", "Bear", "Bella", "Abby", "Harley", "Cali", "Leo", "Luna", "Jack", "Felix", "Kiki"];
let profile_imgs_collections_list = ["notionists-neutral", "adventurer-neutral", "fun-emoji"];

const userSchema = mongoose.Schema({
    personalInfo: {
        fullname: {
            type: String,
            required: true,
            lowercase: true,
            minlength: [3, "Fullname must be three letters long"],
        },
        email: {
            type: String,
            required: true,
            lowercase: true,
            unique: true,
        },
        password: String,
        username: {
            type: String,
            unique: true,
            minlength: [3, "Username must be three letters long"],
        },
        bio: {
            type: String,
            maxlength: [200, "Bio should not be greater than 200 letters long"],
            default: "",
        },
        profile_img: {
            type: String,
            default: () => {
                return `https://api.dicebear.com/6.x/${profile_imgs_collections_list[Math.floor(Math.random() * profile_imgs_collections_list.length)]}/svg?seed=${profile_imgs_name_list[Math.floor(Math.random() * profile_imgs_name_list.length)]}`;
            },
        },
    },
    social_links: {
        youtube: {
            type: String,
            default: "",
        },
        instagram: {
            type: String,
            default: "",
        },
        facebook: {
            type: String,
            default: "",
        },
        twitter: {
            type: String,
            default: "",
        },
    },
    account_info: {
        total_posts: {
            type: Number,
            default: 0,
        },
    },
    google_auth: {
        type: Boolean,
        default: false,
    },
    posts: {
        type: [Schema.Types.ObjectId],
        ref: "posts",
        default: [],
    },
}, {
    timestamps: {
        createdAt: "createdAt",
        updatedAt: "updatedAt",
    },
});

export default mongoose.model("users", userSchema);