import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import nodemailer from "nodemailer";
import multer from "multer";
import path from "path";
import dotenv from "dotenv";
import UserReviews from "./models/reviews.js";
import UploadDetail from "./models/uploads.js";

dotenv.config();

const app = express();

// ─── Middleware ────────────────────────────────────────────────────────────────
app.use(express.json());
app.use(cors({
  origin: ["http://localhost:3000","https://project-svaadisht.netlify.app/"],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
}));
app.use(express.static("public"));

// ─── Multer Setup ──────────────────────────────────────────────────────────────
const storage = multer.diskStorage({
  destination: (_req, _file, cb) => cb(null, "public/details"),
  filename: (_req, file, cb) =>
    cb(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname)),
});
const upload = multer({ storage });

// ─── Email Helper ──────────────────────────────────────────────────────────────
async function sendThankYouEmail(name, userEmail) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS, // Use a Gmail App Password, NOT your login password
    },
  });

  await transporter.sendMail({
    from: `"Svaadisht" <${process.env.EMAIL_USER}>`,
    to: userEmail,
    subject: "Thanks for your review! 🍽️",
    html: `
      <div style="font-family:sans-serif;max-width:500px;margin:auto;padding:24px">
        <h2 style="color:#b45309">Svaadisht</h2>
        <p>Dear <strong>${name}</strong>,</p>
        <p>Thank you for submitting your review! We truly appreciate your feedback and hope you enjoyed exploring our website.</p>
        <p style="color:#6b7280">— The Svaadisht Team</p>
      </div>
    `,
  });
}

// ─── Routes ────────────────────────────────────────────────────────────────────

// Health check
app.get("/", (_req, res) => res.json({ status: "Server running ✅" }));

// Upload image
app.post("/uploaddata", upload.single("file"), async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ msg: "No file provided" });
    const result = await UploadDetail.create({ image: req.file.filename });
    return res.status(201).json({ msg: "Uploaded successfully", data: result });
  } catch (err) {
    console.error("Upload error:", err);
    return res.status(500).json({ msg: "Upload failed" });
  }
});

// Get all uploaded images
app.get("/getimage", async (_req, res) => {
  try {
    const data = await UploadDetail.find();
    return res.json(data);
  } catch (err) {
    console.error("Fetch image error:", err);
    return res.status(500).json({ msg: "Failed to fetch images" });
  }
});

// Submit review + send email
app.post("/addsubmit", async (req, res) => {
  try {
    const { name, email, comments } = req.body;

    if (!name || !email || !comments) {
      return res.status(400).json({ msg: "All fields are required" });
    }

    const review = new UserReviews({ name, email, comments });
    await review.save();

    try {
      await sendThankYouEmail(name, email);
    } catch (emailErr) {
      console.error("Email failed (review still saved):", emailErr.message);
      return res.status(207).json({
        msg: "Review saved, but confirmation email could not be sent. Check your EMAIL_PASS in .env (use a Gmail App Password).",
      });
    }

    return res.status(201).json({ msg: "Review submitted and email sent ✅" });
  } catch (err) {
    console.error("Submit error:", err);
    return res.status(500).json({ msg: "Error submitting review" });
  }
});

// Get all reviews
app.get("/getrev", async (_req, res) => {
  try {
    const revdata = await UserReviews.find().sort({ _id: -1 });
    return res.json({ revdata });
  } catch (err) {
    console.error("Fetch review error:", err);
    return res.status(500).json({ msg: "Failed to fetch reviews" });
  }
});

// Delete a review
app.delete("/deleterev/:id", async (req, res) => {
  try {
    const deleted = await UserReviews.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ msg: "Review not found" });
    return res.json({ msg: "Deleted successfully" });
  } catch (err) {
    console.error("Delete error:", err);
    return res.status(500).json({ msg: "Delete failed" });
  }
});

// ─── Start Server ──────────────────────────────────────────────────────────────
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    app.listen(5000, () => {
      console.log("✅ MongoDB connected — server running on http://localhost:5000");
    });
  })
  .catch((err) => console.error("❌ DB connection error:", err));
