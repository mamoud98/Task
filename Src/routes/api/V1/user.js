const express = require("express");
const router = express.Router();
const multer = require("multer");
const upload = multer();

const { update } = require("../../../controllers/user");
const { updateErr } = require("../../../middleware/updateVildator");

const { verify } = require("../../../utils/JWTManager");

router.put(
  "/update/:userId",
  verify,
  upload.single("avatar"),
  updateErr,
  update
);

module.exports = router;
