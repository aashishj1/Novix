const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  email: {
    type: String,
    unique: true,
    required: [true, "Email is required"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
  profilePic: {
    type: String,
    default: null,
  },
  age: {
    type: Number,
    required: [true, "Age is required"],
  },
  gender: {
    type: String,
    enum: ["male", "female"],
    required: [true, "Gender is required"],
  },
  phoneNumber: {
    type: String,
    default: null,
  },
  createdAt: { type: Date, default: Date.now },
});

userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 12);
  }
  next();
});

module.exports = mongoose.model("User", userSchema);
