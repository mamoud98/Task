const express = require("express");
const router = express.Router();
const multer = require("multer");
const upload = multer();
const { err } = require("../../../middleware/userValidator/singnupValidatoe");

const { signup, signin, signout } = require("../../../controllers/auth");

router.post("/signup", upload.single("avatar"), err, signup);
router.post("/signin", signin);
router.get("/signout", signout);

module.exports = router;
