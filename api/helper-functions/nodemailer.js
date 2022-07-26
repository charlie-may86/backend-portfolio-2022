const nodemailer = require("nodemailer");
const { NODE_MAILER_SECRET } = require("../../config/secrets");

const transporter = nodemailer.createTransport({
  serverice: "gmail",
  auth: {
    user: "cmay_pickem@outlook.com",
    password: NODE_MAILER_SECRET,
  },
});

const options = {
  from: "cmay_pickem@outlook.com",
  to: "camiv95@gmail.com",
  subject: "Password reset testing",
  text: "wow! It worked ;)",
};

transporter.sendMail(options, function (err, info) {
  if (err) {
    console.log(err);
    return;
  }
  console.log(info.response);
});

