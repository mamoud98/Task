const express = require("express");
const router = express.Router();

const { update } = require("../../../controllers/user");
const {
  userValidation,
} = require("../../../middleware/userValidator/updateVildator");

const { verify } = require("../../../utils/JWTManager");
const {
  img,
  avatarValidation,
} = require("../../../middleware/uploadImg/avatar");
const {
  validateVerify,
} = require("../../../middleware/userValidator/validateVerify");

router.put(
  "/update/:userId",
  verify,
  img,
  avatarValidation,
  userValidation,
  validateVerify,
  update
);

module.exports = router;
