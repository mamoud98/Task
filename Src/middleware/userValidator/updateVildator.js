const { check, validationResult } = require("express-validator");
const User = require("../../models/User");

const userValidation = [
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
  
];


module.exports = {
  userValidation,
};
