const { check, validationResult } = require("express-validator");
const User = require("../../models/User");

const err = [
  check("email").trim().not().isEmpty().withMessage("please Enter your Email"),
  check("email").trim().isEmail().withMessage("please Enter Valid Email"),
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
  // check("email").custom((value, { req }) => {
  //   User.find({ email: value }, (err, user) => {
  //     if (user) {
  //       throw new Error("the email is exist");
  //     } else {
  //       return true;
  //     }
  //   });
  // }),
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
  err,
  // fin,
  // em,
};
