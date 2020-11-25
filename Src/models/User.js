const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    trim: true,
  },
  Token: {
    type: Array,
  },
  avatar: {
    type: Buffer,
  },
});

module.exports = mongoose.model("User", userSchema);
