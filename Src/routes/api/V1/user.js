const express = require("express");
const router = express.Router();
const multer = require("multer");
const upload = multer();

const { update } = require("../../../controllers/user");

const { verify } = require("../../../utils/JWTManager");

router.put("/update/:userId", verify, upload.single("avatar"), update);

module.exports = router;
