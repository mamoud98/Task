const User = require("../models/User");
const { register } = require("../utils/passwordManager");
const { validationResult } = require("express-validator");

exports.update = (req, res, next) => {
  const user = {
    name: req.body.name,
    email: req.body.email,
    password: register(req.body.password),
    
  };

  User.updateOne({ _id: req.params.userId }, { $set: user })
    .then((newUser) => {
      res.status(201).json({
        massage: "the update is done",
        data: newUser,
      });
    })
    .catch((e) => {
      res.status(404).json({
        err: err,
      });
    });
};
