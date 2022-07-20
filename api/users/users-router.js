const router = require("express").Router();
const Users = require("./users-model");

router.get("/", async (req, res, next) => {
  try {
    const users = await Users.getAllUsers();
    res.status(200).json(users);
  } catch (err) {
    next(err);
  }
});

router.delete("/delete/:id", async (req, res, next) => {
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

module.exports = router;
