import mongoose from "mongoose";
import config from "./config.js";

export async function connectDB() {
  try {
    await mongoose.connect(config.MONGO_URI);
    console.log("DB Connected Successfully");
  } catch (error) {
    console.log("Error in connecting DB", error);
  }
}
