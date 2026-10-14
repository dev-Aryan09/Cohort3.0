import jwt from "jsonwebtoken";
import config from "../config/config.js";

export function generateAccessToken({ userId }) {
  try {
    const token = jwt.sign({ userId }, config.ACCESS_TOKEN_SECRET, {
      expiresIn: "15m",
    });
    return token;
  } catch (error) {
    console.log("Error in creating access token", error);
  }
}

export function generateRefreshToken({ userId }) {
  try {
    const token = jwt.sign({ userId }, config.REFRESH_TOKEN_SECRET, {
      expiresIn: "7d",
    });
    return token;
  } catch (error) {
    console.log("Error in creating refresh token", error);
  }
}
