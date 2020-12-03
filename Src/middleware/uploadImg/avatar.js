const multer = require("multer");
const upload = multer();
// const express = require("express");
// const router = express.Router();

const img = upload.single("avatar");

// router.use(upload.single("file"), (err, req, res, next) => {
//   if (err) {
//     req.flash("photoErr", [err.message]);
//     res.redirect("/users/profile");
//   }
// });

const avatarValidation = (err, req, res, next) => {
  if (err) {
    res.status(400).json({
      mag: err,
    });
  } else {
    next();
  }
};
module.exports = {
  img,
  avatarValidation
};
