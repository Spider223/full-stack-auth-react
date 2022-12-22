const express = require("express");
const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const router = express.Router();
const jwt = require("jsonwebtoken");
const auth = require("../auth");

router.post("/register", async (req, res) => {
  const { email, password } = req.body;

  console.log("req.body", req.body);

  bcrypt
    .hash(password, 10)
    .then((hashedPassword) => {
      const user = new User({
        email: email,
        password: hashedPassword,
      });

      user
        .save()
        .then((result) => {
          res.status(201).send({
            message: "user sucessfully created",
            result,
          });
        })

        .catch((error) => {
          res.status(500).send({
            message: "Error creating user",
            error,
          });
        });
    })
    .catch((error) => {
      res.status(500).send({
        message: "Password was not hashed sucessfully.",
        error,
      });
    });
});

router.post("/login", (req, res) => {
  // const { email, password } = req.body;

  User.findOne({ email: req.body.email })
    .then((user) => {
      bcrypt.compare(req.body.password, user.password, (err, data) => {
        if (err) throw err;

        const token = jwt.sign(
          {
            userID: user._id,
            userEmail: user.email,
          },
          "RANDOM-TOKEN",
          {
            expiresIn: "24h",
          }
        );

        if (data) {
          return res.status(200).send({
            message: "login sucess",
            email: user.email,
            token,
          });
        } else {
          return res.status(401).send({
            message: "Invalid Credentials",
          });
        }
      });
    })
    .catch((error) => {
      res.status(404).send({
        message: "Email not exist",
        error,
      });
    });
});

router.get("/free-endpoint", (req, res) => {
  res.send({ message: "You are free to acess." });
});

router.get("/auth-endpoint", auth, (req, res) => {
  res.send({ message: "You are authorized to acess." });
});

module.exports = router;
