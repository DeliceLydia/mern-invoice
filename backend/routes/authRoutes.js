import express from "express";
import registerUser from "../controlllers/auth/registerController.js";
import verifyUserEmail from "../controlllers/auth/verifyEmailController.js";
import loginUser from "../controlllers/auth/loginController.js";
import {loginLimiter} from '../middleware/apiLimiter.js'
import newAccessToken from "../controlllers/auth/refreshTokenController.js";
 
const router = express.Router();

router.post("/register", registerUser);
router.get("/verify/:emailToken/:userId", verifyUserEmail);
router.post("/login", loginLimiter, loginUser)
router.get('/new_access_token', newAccessToken);

export default router;