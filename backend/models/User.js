const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },

    // Removed profileImageUrl as per your request
    education: { type: String, required: true },
    goal: { type: String, required: true },
    experience: { type: String, default: "" }, // Optional
    city: { type: String, default: "" },       // Optional
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
