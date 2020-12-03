const { validationResult } = require("express-validator");

const validateVerify = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log(errors);
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

module.exports = {
  validateVerify,
};
