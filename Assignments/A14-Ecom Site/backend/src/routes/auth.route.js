import express from "express";
import { registerUserController } from "../controllers/auth.controller.js";
import { registerValidator } from "../validators/auth.validator.js";

const router = express.Router();

/**
 * @POST /api/auth/register
 * @param req.body = {name, email, passowrd, confirmPassword}
 * @response status code 201 (if successful)
 */
router.post("/register", registerValidator ,registerUserController);

export default router;
