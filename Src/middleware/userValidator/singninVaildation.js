const { check, validationResult } = require("express-validator");


const signingErr = [
  check("email").trim().not().isEmpty().withMessage("please Enter your Email"),
  check("email").trim().isEmail().withMessage("please Enter Valid Email"),
  check("password")
    .trim()
    .not()
    .isEmpty()
    .withMessage("please Enter your Password"),
];

module.exports = {
    signingErr,
};
