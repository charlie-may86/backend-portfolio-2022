const router = require("express").Router();
const Users = require("./users-model");

const nodemailer = require("nodemailer");

const { userOnly } = require("./user-middleware");

// router.get("/", async (req, res, next) => {
//   try {
//     const users = await Users.getAllUsers();
//     res.status(200).json(users);
//   } catch (err) {
//     next(err);
//   }
// });

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
  const { to, subject, text } = req.body;
  const transporter = nodemailer.createTransport({
    service: "hotmail",
    auth: {
      user: "cmay_pickem@outlook.com",
      pass: process.env.NODE_MAILER_SECRET,
    },
  });

  const mailData = {
    from: "cmay_pickem@outlook.com",
    to: to,
    subject: subject,
    text: text,
  };

  transporter.sendMail(mailData, (error, info) => {
    if (error) {
      console.log(error);
      next();
    } else {
      console.log("Email sent: " + info.response);
      res.status(200).json({ message: "Email Sent" });
    }
  });
});

module.exports = router;
