var nodemailer = require("nodemailer");

const main = (email) => {
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "m2shorafa@gmail.com",
      pass: "**********",
    },
  });

  var mailOptions = {
    from: "m2shorafa@gmail.com",
    to: email,
    subject: "Sending Email using Node.js",
    text: "tanks for make an account",
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};

module.exports = {
  main,
};
