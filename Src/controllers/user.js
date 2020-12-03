const User = require("../models/User");
const { hash } = require("../utils/passwordManager");
const { validationResult } = require("express-validator");

exports.update = (req, res, next) => {
  const user = {
    name: req.body.name,
    email: req.body.email,
    password: hash(req.body.password),
    avatar: req.file.buffer,
  };


User.find({email:req.body.email}).then(user=>{
  if(user.length>1){
    res.json({
      err:"this email is existed"
    })

  }else{
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
    })
  }
})
};
