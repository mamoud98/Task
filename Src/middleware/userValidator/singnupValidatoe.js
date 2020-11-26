const { check, validationResult } = require("express-validator");


const signupErr = [
  check("email").trim().not().isEmpty().withMessage("please Enter your Email"),
  check("email").trim().isEmail().withMessage("please Enter Valid Email"),
  check("name").trim().not().isEmpty().withMessage("please Enter your name"),
  check("age").trim().not().isEmpty().withMessage("please Enter your age"),
  check("password")
    .trim()
    .not()
    .isEmpty()
    .withMessage("please Enter your Password"),
  check("password")
    .trim()
    .isLength({ min: 5 })
    .withMessage("please Enter your Password more than 5 cher")
    .matches(/\d/)
    .withMessage("must contain a number"),

  check("password-confirm")
    .trim()
    .custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error("password and password-confirm are not match");
      }
      return true;
    }),
];

module.exports = {
  signupErr,
};
