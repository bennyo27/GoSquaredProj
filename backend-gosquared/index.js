// imports
const express = require("express");
var cors = require("cors");
// db
const db = require("./data/dataConfig");
// instantiate server
const server = express();
server.use(express.json());
server.use(cors());

// post user
server.post("/users", (req, res) => {
  console.log(req.body);
  db("users")
    .insert({
      username: req.body.username,
      password: req.body.password
    })
    .then(ids => {
      res.status(201).json(ids[0]);
    })
    .catch(err => {
      res.status(500).json(err);
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
