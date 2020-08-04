const { Schema, model } = require("mongoose");

const users = new Schema({
  name: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  password: { type: String, required: true },
  isConfirm: { type: Boolean, default: false },
});

module.exports = model("User", users);
