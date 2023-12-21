import express from "express"
import { createUser, logUser } from "../controllers/user.controller.js";

const router = express.Router();

// // // // // // // // // // // // // // // // // // // // // // // //
// *                         SIGN UP ROUTE                         * //
// // // // // // // // // // // // // // // // // // // // // // // //

router.post("/signup", createUser);

// // // // // // // // // // // // // // // // // // // // // // // //
// *                         SIGN IN ROUTE                         * //
// // // // // // // // // // // // // // // // // // // // // // // //

router.post("/signin", logUser);

export default router;

