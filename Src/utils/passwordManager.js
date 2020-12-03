const bcrypt = require("bcrypt");

function hash(password) {
  const saltRounds = 10;
  const salt = bcrypt.genSaltSync(saltRounds);
  const hash = bcrypt.hashSync(password, salt);
  return hash;
}

function comparePassword(password, hash) {
  const exist = bcrypt.compareSync(password, hash);

  return exist;
}





module.exports = {
  hash,
  comparePassword,
};
