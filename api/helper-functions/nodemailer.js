const nodemailer = require("nodemailer");
const { NODE_SECRET } = require("../../config/secrets");

const tranporter = nodemailer.createTransport({
  serverice: "gmail",
  auth: {
    user: "admin@charles-may.xyz",
    password: NODE_SECRET,
  },
});

const options = {
  from: "admin@charles-may.xyz",
  to: "charlie@charles-may.xyz",
  subject: "Password reset testing",
  text: "wow! It worked ;)",
};

transporter.sendMail(options, () => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(info.response);
});
