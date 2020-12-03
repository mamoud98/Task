var jwt = require("jsonwebtoken");

function accessToken(payload) {
  var accesssToken = jwt.sign(
    payload,
    process.env.ACCESS_TOKEN_SECRET,
    {
      expiresIn: 3600,
    }
  );

  return accesssToken;
  
  
}

function verify(req, res, next) {
  let accessToken = req.session.token;

  if (!accessToken) {
    return res.status(403).json({
      massage: "you should make login ",
    });
  }

  let payload;
  try {
    payload = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET);
    next();
  } catch (e) {
    return res.status(401).send({
      massage: "your time is out, Pleas male login again",
    });
  }
}
module.exports = {
  accessToken,
  verify,
};
