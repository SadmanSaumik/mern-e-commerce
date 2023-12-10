const mongoose = require("mongoose");

const dataSchema = mongoose.Schema(
  {
    firstName: { type: String, trim: true, required: true },
    lastName: { type: String, trim: true, required: true },
    email: { type: String, trim: true, required: true, unique: true },
    password: { type: String, trim: true, required: true },
    address: { type: String, trim: true },
    phoneNumber: { type: String, trim: true },
  },
  { timestamps: true, versionKey: false }
);

const userModel = mongoose.Model("users", dataSchema);

module.exports = userModel;
