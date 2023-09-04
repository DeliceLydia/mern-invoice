import express from "express";
import registerUser from "../controlllers/auth/registerController.js";
import verifyUserEmail from "../controlllers/auth/verifyEmailController.js";

const router = express.Router();

router.post("/register", registerUser);
router.get("/verify/:emailToken/:userId", verifyUserEmail);

export default router;