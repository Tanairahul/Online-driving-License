const path = require("path");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const crypto = require("crypto");
const nodemailer = require("nodemailer");
const Razorpay = require("razorpay");
require("dotenv").config();

/* ================= APP INIT ================= */
const app = express();
app.use(cors());
app.use(express.json());



  /* ================= USER SCHEMA ================= */
const User = mongoose.model(
  "User",
  new mongoose.Schema(
    {
      name: String,
      email: { type: String, unique: true },
      idNumber: { type: String, unique: true },
      dob: String,
      address: String,
      vehicleType: String,
      bloodGroup: String,
      phone: String,
      password: String,
      role: { type: String, default: "user" } // admin / user
    },
    { timestamps: true }
  )
);


/* ================= LICENSE SCHEMA ================= */
const License = mongoose.model(
  "License",
  new mongoose.Schema(
    {
      userId: { type: String, unique: true },
      name: String,
      email: String,
      dob: String,
      address: String,
      bloodGroup: String,
      vehicleType: String,
      state: String,
      status: {
        type: String,
        enum: ["PENDING", "APPROVED", "REJECTED"],
        default: "PENDING"
      },
      licenseNumber: String,
      issueDate: String,
      validTill: String,
      paymentDone: { type: Boolean, default: false }
    },
    { timestamps: true }
  )
);

/* ================= CREATE DEFAULT ADMIN ================= */
const createAdminIfNotExists = async () => {
  const adminEmail = "admin@gmail.com";
  const adminPassword = "admin123";

  const admin = await User.findOne({ email: adminEmail });

  if (!admin) {
    await User.create({
      name: "Admin",
      email: adminEmail,
      password: adminPassword,
      role: "admin"
    });
    console.log("✅ Default Admin Created");
  } else {
    console.log("ℹ️ Admin already exists");
  }
};


/* ================= MONGO CONNECT ================= */
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch(err => console.error("❌ Mongo Error:", err));



mongoose
  .connect(process.env.MONGO_URI)
  .then(async () => {
    console.log("✅ MongoDB connected");
    await createAdminIfNotExists(); // 🔥 YE LINE ADD KARO
  })
  .catch(err => console.error("❌ Mongo Error:", err));


/* ================= EMAIL ================= */
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

/* ================= RAZORPAY ================= */
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET
});

/* ================= ROUTES ================= */

/* HEALTH CHECK */
app.get("/api/health", (req, res) => {
  res.json({ success: true });
});

/* ================= USER REGISTER ================= */
/* ================= USER REGISTER ================= */
app.post("/api/register", async (req, res) => {
  try {
    const {
      name,
      email,
      dob,
      address,
      vehicleType,
      bloodGroup,
      phone,
      password
    } = req.body;

    if (!name || !email)
      return res.json({ success: false, message: "All fields required" });

    if (await User.findOne({ email }))
      return res.json({ success: false, message: "Email already exists" });

    const idNumber = "DL-" + crypto.randomBytes(3).toString("hex").toUpperCase();

    const user = await User.create({
      name,
      email,
      dob,
      address,
      vehicleType,
      bloodGroup,
      phone,
      password,
      idNumber
    });

    /* ===== SEND EMAIL AFTER REGISTER ===== */
    await transporter.sendMail({
      from: `"Driving License Portal" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "✅ Registration Successful",
      html: `
        <h2>Hello ${name},</h2>
        <p>Your registration was successful.</p>
        <p><b>User ID:</b> ${idNumber}</p>
        <p>You can now login and apply for your driving license.</p>
        <br/>
        <p>Thank you,<br/>Driving License Team</p>
      `
    });

    res.json({ success: true, userId: idNumber });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Server error" });
  }
});


/* ================= USER LOGIN ================= */
app.post("/api/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email, password });
  if (!user) return res.json({ success: false, message: "Invalid login" });

  res.json({ success: true, user });
});

/* ================= APPLY LICENSE ================= */
app.post("/api/apply-license", async (req, res) => {
  const { userId, name, email, dob, address, bloodGroup, vehicleType, state } = req.body;

  if (await License.findOne({ userId }))
    return res.json({ success: false, message: "License already applied" });

  const license = await License.create({
    userId,
    name,
    email,
    dob,
    address,
    bloodGroup,
    vehicleType,
    state
  });

  res.json({ success: true, license });
});

/* ================= GET USER LICENSE ================= */
app.get("/api/my-license/:userId", async (req, res) => {
  const lic = await License.findOne({ userId: req.params.userId });
  res.json(lic || null);
});

/* ================= PAYMENT ================= */
app.post("/payment", async (req, res) => {
  try {
    const { amount } = req.body;

    const order = await razorpay.orders.create({
      amount: amount * 100,
      currency: "INR",
      receipt: "receipt_" + Date.now()
    });

    res.json({ success: true, order });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Payment failed" });
  }
});

/* ================= ADMIN LOGIN ================= */
app.post("/api/admin/login", async (req, res) => {
  const { email, password } = req.body;

  const admin = await User.findOne({ email, password, role: "admin" });
  if (!admin) return res.json({ success: false, message: "Invalid admin" });

  res.json({ success: true, user: admin });
});

/* ================= ADMIN – GET PENDING ================= */
app.get("/api/admin/pending", async (req, res) => {
  const pending = await License.find({ status: "PENDING" });
  res.json(pending);
});

/* ================= ADMIN – APPROVE / REJECT ================= */
app.post("/api/admin/action", async (req, res) => {
  const { id, action } = req.body;

  const lic = await License.findById(id);
  if (!lic) return res.json({ success: false });

  if (action === "APPROVE") {
    lic.status = "APPROVED";
    lic.licenseNumber = "DL-" + crypto.randomBytes(4).toString("hex").toUpperCase();
    lic.issueDate = new Date().toLocaleDateString();
    lic.validTill = "31-12-2035";

    await transporter.sendMail({
      to: lic.email,
      subject: "🎉 Driving License Approved",
      text: `Your License Number: ${lic.licenseNumber}`
    });
  }

  if (action === "REJECT") {
    lic.status = "REJECTED";
  }

  await lic.save();
  res.json({ success: true });
});

/* ================= REACT BUILD ================= */
app.use(express.static(path.join(__dirname, "build")));
app.get(/^(?!\/api).*/, (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

/* ================= SERVER ================= */
app.listen(5000, () => {
  console.log("🚀 Server running on http://localhost:5000");
});
