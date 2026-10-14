import { body, validationResult } from "express-validator";

export const registerValidator = [
  // req.body.name
  body("name")
    .exists()
    .withMessage("Name is required")
    .bail()
    .trim()
    .isString()
    .withMessage("Name must be string")
    .bail()
    .isLength({ min: 3, max: 50 })
    .withMessage("Name must contain characters between 3 to 50"),

  // req.body.email
  body("email")
    .exists()
    .withMessage("Email Address is required")
    .bail()
    .trim()
    .isString()
    .withMessage("Email must be string")
    .bail()
    .isEmail()
    .withMessage("Enter a valid email address"),

  // req.body.password
  body("password")
    .exists()
    .withMessage("Password is required")
    .bail()
    .trim()
    .isString()
    .withMessage("Password must be string")
    .bail()
    .isLength({ min: 6 })
    .withMessage("Password must contains atleast 6 characters"),

  // req.body.confirmPassword
  body("confirmPassword")
    .exists()
    .withMessage("Confirm Password is required")
    .bail()
    .trim()
    .custom((value, { req }) => value === req.body.password)
    .withMessage("Confirm Password must match Password"),

  (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        message: "Invalid Request",
        errors: errors.array(),
      });
    }

    next();
  },
];

export const loginValidator = [
  // req.body.email
  body("email")
    .exists()
    .withMessage("Email Address is required")
    .bail()
    .trim()
    .isString()
    .withMessage("Email must be string")
    .bail()
    .isEmail()
    .withMessage("Enter a valid email address"),

  // req.body.password
  body("password")
    .exists()
    .withMessage("Password is required")
    .bail()
    .trim()
    .isString()
    .withMessage("Password must be string")
    .bail()
    .isLength({ min: 6 })
    .withMessage("Password must contains atleast 6 characters"),

  (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        message: "Invalid Request",
        errors: errors.array(),
      });
    }

    next();
  },
];
