import bcrypt from "bcryptjs";
import userModel from "../models/auth.model.js";

/**
 * @description Register an user and save data in DB from req.body
 * @param req.body -> object
 * @param req.body.name -> string
 * @param req.body.email -> string
 * @param req.body.password -> string
 * @param req.body.confirmPassword -> string
 */
export const registerUserController = async (req, res) => {
  const { name, email, password, confirmPassword } = req.body;

  const isUserAlreadyExists = await userModel.findOne({ email });

  if (isUserAlreadyExists) {
    return res.status(409).json({
      message: "Conflict with the provided email",
      errors: [
        {
          field: "email",
          message: "User already exists",
        },
      ],
    });
  }

  try {
    if (password !== confirmPassword) {
      return res.status(400).json({
        message: "Password mismatch",
        errors: [
          {
            field: "password",
            message: "Passwords do not match",
          },
        ],
      });
    }
    const passwordHash = await bcrypt.hash(password, 10);

    const user = await userModel.create({
      name,
      email,
      password: passwordHash,
    });

    return res.status(201).json({
      success: true,
      message: "User created successfully",
      data: {
        user: {
          name: user.name,
          email: user.email,
          id: user._id,
        },
      },
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal Server Error while creating a new user",
      error,
    });
  }
};
