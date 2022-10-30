import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String, required: false, default: null }
}, {
  timestamps: true
})

export const User = mongoose.model("User", userSchema)