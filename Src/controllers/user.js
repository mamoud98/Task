const User = require("../models/User");
const { register } = require("../utils/passwordManager");
const { validationResult } = require("express-validator");

exports.update = (req, res, next) => {
  const user = {
    name: req.body.name,
    email: req.body.email,
    password: register(req.body.password),
    avatar: req.file.buffer,
  };
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log(errors);
    return res.status(400).json({ errors: errors.array() });
  }

  User.updateOne({ _id: req.params.userId }, { $set: user })
    .then((newUser) => {
      res.status(201).json({
        massage: "the update is done",
        data: newUser,
      });
    })
    .catch((err) => {
      res.status(404).json({
        err: err,
      });
    });
};
