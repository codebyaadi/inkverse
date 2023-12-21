import { nanoid } from "nanoid"
import jwt from "jsonwebtoken"

import User from "../models/Users.js";

export const generateUsername = async (email) => {
    let username = email.split("@")[0];
    let isUsernameExist = await User.exists({ "personalInfo.username": username });

    isUsernameExist ? username += nanoid(5) : "";

    return username;
}

export const formatDataToSend = (user) => {
    const accessToken = jwt.sign({ id: user._id }, process.env.JWT_SECRET_KEY);
    return {
        accessToken,
        profileImg: user.personalInfo.profileImg,
        username: user.personalInfo.username,
        fullname: user.personalInfo.fullname,
        email: user.personalInfo.email
    }
}