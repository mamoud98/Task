const User = require("../models/User");
const { register, authenticate } = require("../utils/passwordManager");
const { accessToken } = require("../utils/JWTManager");
const { validationResult } = require("express-validator");
const { main } = require("../utils/sendingEmail");
const { errors } = require("../utils/errors");

exports.signup = (req, res, next) => {
  User.find({ email: req.body.email })
    .then((result) => {
      if (result.length < 1) {
        const payload = {
          id: req.body._id,
          name: req.body.name,
          email: req.body.email,
        };

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          console.log(errors);
          return res.status(400).json({ errors: errors.array() });
        }

        const user = new User({
          name: req.body.name,
          email: req.body.email,
          Token: accessToken(payload),
          password: register(req.body.password),
          avatar: req.file.buffer,
        });

        req.session.token = accessToken(payload);

        user
          .save()
          .then((result) => {
            res.status(200).json({
              massage: "user is save",
              data: result,
            });
            main(req.body.email);
          })
          .catch((err) => {
            res.status(404).json({
              massage: err.message,
            });
          });
      } else {
        res.status(404).json({
          errors: errors(req.body.email, "Email already registered"),
        });
      }
    })
    .catch((err) => {
      res.status(404).json({
        massage: err.message,
      });
    });
};

exports.signin = (req, res, next) => {
  const { password } = req.body;
  User.find({ email: req.body.email })
    .then((user) => {
      if (user.length >= 1) {
        if (authenticate(password, user[0].password)) {
          const payload = {
            id: req.body._id,
            name: req.body.name,
            email: req.body.email,
          };
          // const errors = validationResult(req);
          // if (!errors.isEmpty()) {
          //   console.log(errors);
          //   return res.status(400).json({ errors: errors.array() });
          // }
          const token = accessToken(payload);

          req.session.token = token;

          res.status(200).json({
            data: user,
            token: token,
          });
        } else {
          res.status(404).json({
            errors: errors("", "wrong  password"),
          });
        }
      } else {
        res.status(404).json({
          errors: errors(req.body.email, "wrong email"),
        });
      }
    })
    .catch((err) => {
      res.status(404).json({
        massage: err.message,
      });
    });
};

exports.signout = (req, res) => {
  req.session = null;
  res.json({
    message: "the log out is done",
  });
};
