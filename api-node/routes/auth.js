const express = require("express");
const User = require("../models/user");

const Router = express.Router();

Router.post("/register", async (req, res) => {
  console.log("test");
  if (
    (req.body.email &&
      req.body.email != "") &&
    (req.body.password &&
      req.body.password != "")
  ) {
    User.create({
      email: req.body.email,
      password: req.body.password,
    })
      .then(async (user) => {
        res.status(200).json({ message: "L'utilisateur a bien été crée." });
      })
      .catch((err) => {
        res.status(500).json({ error: err });
      });
  } else {
    res.status(500).json({ error: "Il manque des paramètres." });
  }
});

Router.post("/login", async (req, res) => {
  if ((req.body.email &&
    req.body.email != "") &&
    (req.body.password &&
      req.body.password != "")
  ) {
    User.findOne({
      where: {
        email: req.body.email,
        password: req.body.password
      }
    })
      .then(async (user) => {
        console.log(user);
        if (user != null) {
          res.status(200).json({ message: "L'utilisateur est connecté." });
        } else {
          res.status(500).json({ error: "Il manque des paramètres." });
        }

      })
      .catch((err) => {
        res.status(500).json({ error: err });
      });

  } else {
    res.status(500).json({ error: "Il manque des paramètres." });
  }
})
module.exports = Router;
