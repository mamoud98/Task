const express = require("express");
const router = express.Router();
const multer = require("multer");
const upload = multer();
const { signupErr } = require("../../../middleware/userValidator/singnupValidatoe");
// const { signingErr } = require("../../../middleware/userValidator/singninVaildation");

const { signup, signin, signout } = require("../../../controllers/auth");

router.post("/signup", upload.single("avatar"), signupErr, signup);
// router.post("/signin", signingErr, signin);
router.post("/signin", signin);
router.get("/signout", signout);

module.exports = router;
