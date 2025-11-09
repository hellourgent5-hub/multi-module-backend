import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// ✅ MongoDB connection
mongoose.connect(process.env.MONGO_URI || "mongodb://localhost:27017/multi_module", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ MongoDB connected"))
.catch(err => console.error("❌ MongoDB connection error:", err));

// ✅ Routes for different modules
app.get("/", (req, res) => {
  res.send("🚀 Multi-Module Backend is live!");
});

// Example modules
app.get("/api/food", (req, res) => res.json({ message: "Food module working 🍔" }));
app.get("/api/grocery", (req, res) => res.json({ message: "Grocery module working 🥦" }));
app.get("/api/parcel", (req, res) => res.json({ message: "Parcel module working 📦" }));

// ✅ Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
