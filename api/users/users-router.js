const router = require("express").Router();
const Users = require("./users-model");

const nodemailer = require("nodemailer");
const { NODE_MAILER_SECRET } = require("../../config/secrets");

const { userOnly } = require("./user-middleware");

router.get("/", async (req, res, next) => {
  try {
    const users = await Users.getAllUsers();
    res.status(200).json(users);
  } catch (err) {
    next(err);
  }
});

router.delete("/delete/:id", userOnly, async (req, res, next) => {
  const { id } = req.params;
  try {
    const user = await Users.deleteUser(id);
    res
      .status(200)
      .json({ message: `User with user_id: ${id} has been deleted` });
  } catch (err) {
    next(err);
  }
});

router.post("/password_reset", (req, res, next) => {
  const transporter = nodemailer.createTransport({
    service: "hotmail",
    auth: {
      user: "cmay_pickem@outlook.com",
      pass: 'Budwiser95!',
    },
  });

  const mailData = {
    from: "cmay_pickem@outlook.com",
    to: "camiv95@gmail.com",
    subject: "Testing Nodemailer",
    text: "This is will only take a second!",
  };

  transporter.sendMail(mailData, (error, info) => {
    if (error) {
      console.log(error);
      return;
    } else {
      console.log("Email sent: " + info.response);
      return;
    }
  });
});

module.exports = router;
