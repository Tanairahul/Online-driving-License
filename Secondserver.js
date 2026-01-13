const express = require("express");
const mongoose = require("mongoose");

const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/vahanDB")
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

const User = mongoose.model(
  "User",
  new mongoose.Schema({
    username: String,
    password: String,
  })
);

// Register (one time)
app.post("/register", async (req, res) => {
  const hash = await bcrypt.hash(req.body.password, 10);
  await User.create({ username: req.body.username, password: hash });
  res.json({ message: "User Registered" });
});

// Login
app.post("/login", async (req, res) => {
  const user = await User.findOne({ username: req.body.username });
  if (!user) return res.json({ message: "Invalid Username" });

  const ok = await bcrypt.compare(req.body.password, user.password);
  if (!ok) return res.json({ message: "Wrong Password" });

  res.json({ message: "Login Successful" });
});

app.listen(5000, () =>
  console.log("Server running at http://localhost:5000")
);
