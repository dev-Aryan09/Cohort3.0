import express from "express";
import {
  loginUserController,
  registerUserController,
  rotateTokensController,
} from "../controllers/auth.controller.js";
import {
  loginValidator,
  registerValidator,
} from "../validators/auth.validator.js";

const router = express.Router();

/**
 * @POST /api/auth/register
 * @param req.body = {name, email, passowrd, confirmPassword}
 * @response status code 201 (if successful)
 */
router.post("/register", registerValidator, registerUserController);

/**
 * @POST /api/auth/login
 * @param req.body = {email, passowrd}
 * @response status code 200 (if successful)
 */
router.post("/login", loginValidator, loginUserController);

/**
 * @POST /api/auth/refresh-token
 * @param req.cookies = {refreshToken}
 * @response status code 200 (if successful)
 */
router.post("/refresh-token", rotateTokensController);

export default router;
