const bcrypt = require("bcrypt");

module.exports = {
  authenticate,
  register,
  
};

function register(password) {
  const saltRounds = 10;
  const salt = bcrypt.genSaltSync(saltRounds);
  const hash = bcrypt.hashSync(password, salt);
  return hash;
}

function authenticate(password, hash) {
  const exist = bcrypt.compareSync(password, hash);

  return exist;
}


