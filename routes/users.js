const { Router } = require("express");
const User = require("../model/User");

const router = Router();

router.get("/", async (req, res) => {
  const users = await User.find({});
  res.send(users);
});

router.post("/", async (req, res) => {
  const { name, age } = req.body;
  await User.create({ name, age });

  res.send("Malumot saqlandi!");
});

router.delete("/:id", async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.send("O'chirildi!");
});

router.put("/", async (req, res) => {
  const { name, age, id } = req.body;

  await User.findByIdAndUpdate(id, { name, age });

  res.send("O'zgartirildi!");
});

module.exports = router;
