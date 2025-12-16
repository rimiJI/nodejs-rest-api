//User 스키마 만들기 (model.js)
import mongoose from "mongoose";

//설계도
const Schema = mongoose.Schema;

export const userSchema = new Schema({
  firstName: { type: String, required: "Enter a first name" },
  lastName: { type: String, required: "Enter a last name" },
  email: { type: String },
  company: { type: String },
  phone: { type: Number },
  created_at: { type: Date, default: Date.now },
});
