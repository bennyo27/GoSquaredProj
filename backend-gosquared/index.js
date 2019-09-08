// imports
const express = require("express");
var cors = require("cors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// db
const db = require("./data/dataConfig");
// instantiate server
const server = express();
server.use(express.json());
server.use(cors());

// post user
server.post("/users", (req, res) => {
  console.log(req.body);
  const hash = bcrypt.hashSync(req.body.password, 10);
  const password = hash;
  db("users")
    .insert({
      username: req.body.username,
      password: password
    })
    .then(ids => {
      res.status(201).json(ids[0]);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

// jwt secret
const jwtSecret = "gosquared is awesome!";

function generateToken(user) {
  const jwtPayload = {
    ...user
  };
  const jwtOptions = {
    expiresIn: "1h"
  };
  return jwt.sign(jwtPayload, jwtSecret, jwtOptions);
}

server.post("/login", (req, res) => {
  const creds = req.body;
  db("users")
    .where({ username: creds.username })
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(creds.password, user.password)) {
        const token = generateToken(user); // new line
        res.status(200).json({ welcome: user.username, token });
      } else {
        res.status(401).json({ message: "nice try" });
      }
    })
    .catch(err => {
      res.status(500).json({ err });
    });
});

// get users
server.get("/users", (req, res) => {
  db("users")
    .then(users => res.status(200).json(users))
    .catch(err => {
      res.status(500).json(err);
    });
});

// server port
const port = process.env.PORT || 3300;
server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
