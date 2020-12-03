const express = require("express");
const router = express.Router();

const {
  singeUpValidation,
} = require("../../../middleware/userValidator/singnupValidatoe");

const { signup, signin, signout } = require("../../../controllers/auth");
const { img } = require("../../../middleware/uploadImg/avatar");
const {
  singingValidation,
} = require("../../../middleware/userValidator/singninVaildation");
const {
  validateVerify,
} = require("../../../middleware/userValidator/validateVerify");

router.post("/signup", img, singeUpValidation, validateVerify, signup);

router.post("/signin", singingValidation, validateVerify, signin);

router.get("/signout", signout);

module.exports = router;
