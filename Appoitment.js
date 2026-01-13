const express = require("express");
const router = express.Router();
const Appointment = require("../models/Appointment");

router.post("/", async (req, res) => {
  try {
    console.log("Incoming appointment:", req.body); // DEBUG

    const appointment = new Appointment(req.body);
    await appointment.save();

    res.status(201).json({ message: "Appointment saved" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
