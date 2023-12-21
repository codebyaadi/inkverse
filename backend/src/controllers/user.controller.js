import bcrypt from "bcryptjs";

import User from "../models/Users.js";
import { logInfo } from "../utils/loginfo.utils.js";
import { formatDataToSend, generateUsername } from "../utils/users.utils.js";

// // // // // // // // // // // // // // // // // // // // // // // // // //
// *                          SIGN UP CONTROLLER                         * //
// // // // // // // // // // // // // // // // // // // // // // // // // //

let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; // regex for email
let passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/; // regex for password

export const createUser = async (req, res) => {
    try {
        const { fullname, email, password } = req.body;

        const isEmailExist = await User.exists({ "personalInfo.email": email });

        // Validating the data from client-side
        if (!fullname || !fullname.length) {
            return res.status(403).json({ error: "Enter Full Name" });
        }
        if (fullname.length < 3) {
            return res.status(403).json({ error: "Full Name must be at least 3 characters long" });
        }
        if (!email || !email.length) {
            return res.status(403).json({ error: "Enter email address" });
        }
        if (isEmailExist) {
            return res.status(403).json({ error: "Email already exist" });
        }
        if (!emailRegex.test(email)) {
            return res.status(403).json({ error: "Enter valid email address" });
        }
        if (!passwordRegex.test(password)) {
            return res.status(403).json({ error: "Enter strong password" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const username = await generateUsername(email);

        const user = await User.create({
            personalInfo: {
                fullname,
                email,
                password: hashedPassword,
                username
            }
        });

        return res.status(201).json(formatDataToSend(user));
    } catch (error) {
        logInfo("User Controller - Error: ", error, true);
        return res.status(500).json({ error: "Internal Server Error" });
    }
};

// // // // // // // // // // // // // // // // // // // // // // // // // //
// *                          LOG IN CONTROLLER                          * //
// // // // // // // // // // // // // // // // // // // // // // // // // //

export const logUser = async (req, res) => {
    
}