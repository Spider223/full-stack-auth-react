const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Please provide an Email"],
    unique: [true, "Email exist"],
  },

  password: {
    type: String,
    required: [true, "please provide a password"],
    unique: false,
  },
});

const Users = mongoose.model("Users", userSchema);

module.exports = Users;
