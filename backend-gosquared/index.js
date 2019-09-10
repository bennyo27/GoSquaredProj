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

// Post user
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

// Get users
server.get("/users", (req, res) => {
  db("users")
    .then(users => res.status(200).json(users))
    .catch(err => {
      res.status(500).json(err);
    });
});

// Get user info
server.get("/user", (req, res) => {
  const token = req.headers.authorization;
  if (token) {
    jwt.verify(token, jwtSecret, (err, decodedToken) => {
      if (err) {
        // token verification failed
        res.status(401).json({ message: "invalid token" });
      } else {
        // token is valid
        req.decodedToken = decodedToken; // any sub-sequent middleware of route handler have access to this
        // console.log("\n** decoded token information **\n", req.decodedToken);
      }
    });
  } else {
    res.status(401).json({ message: "no token provided" });
  }
  db("users")
    .where("users.id", req.decodedToken.id)
    .then(users => {
      res.json({
        userConfig: {
          num_drinks: users[0].num_drinks,
          office_temp: users[0].office_temp,
          plant_sched: users[0].plant_sched,
          visitors: users[0].visitors,
          weather: users[0].weather
        }
      });
    })
    .catch(err => res.send(err));
});

// Get data
server.get("/data", (req, res) => {
  const token = req.headers.authorization;
  const value = req.body.value;
  if (token) {
    jwt.verify(token, jwtSecret, (err, decodedToken) => {
      if (err) {
        // token verification failed
        res.status(401).json({ message: "invalid token" });
      } else {
        // token is valid
        req.decodedToken = decodedToken; // any sub-sequent middleware of route handler have access to this
        // console.log("\n** decoded token information **\n", req.decodedToken);
        res.json({
          valuableData: {
            visitors: 1000001,
            office_temp: 75,
            plant_sched: 13,
            weather: 75,
            num_drinks: "too many"
          }
        });
      }
    });
  } else {
    res.status(401).json({ message: "no token provided" });
  }
});

// BELOW ARE THE ENDPOINTS TO UPDATE THE USER'S CONFIG ON WHAT TO DISPLAY ON THEIR DASHBOARD -----------
// update user config for visitors
server.put("/visitors", (req, res) => {
  console.log(req.body);
  const token = req.headers.authorization;
  const value = req.body.value;
  if (token) {
    jwt.verify(token, jwtSecret, (err, decodedToken) => {
      if (err) {
        // token verification failed
        res.status(401).json({ message: "invalid token" });
      } else {
        // token is valid
        req.decodedToken = decodedToken; // any sub-sequent middleware of route handler have access to this
        // console.log("\n** decoded token information **\n", req.decodedToken);
      }
    });
  } else {
    res.status(401).json({ message: "no token provided" });
  }
  db("users")
    .where("users.id", req.decodedToken.id)
    .update({ visitors: value })
    .then(response => {
      res.status(200).json({ message: "Successfully updated" });
    })
    .catch(err => res.send(err));
});

// update user config for office temperature
server.put("/office_temp", (req, res) => {
  const token = req.headers.authorization;
  const value = req.body.value;
  if (token) {
    jwt.verify(token, jwtSecret, (err, decodedToken) => {
      if (err) {
        // token verification failed
        res.status(400).json({ message: "invalid token" });
      } else {
        // token is valid
        req.decodedToken = decodedToken; // any sub-sequent middleware of route handler have access to this
        // console.log("\n** decoded token information **\n", req.decodedToken);
      }
    });
  } else {
    res.status(401).json({ message: "no token provided" });
  }
  db("users")
    .where("users.id", req.decodedToken.id)
    .update({ office_temp: value })
    .then(response => {
      res.status(200).json({ message: "Successfully updated" });
    })
    .catch(err => res.send(err));
});

// update user config for plant schedule
server.put("/plant_sched", (req, res) => {
  const token = req.headers.authorization;
  const value = req.body.value;
  if (token) {
    jwt.verify(token, jwtSecret, (err, decodedToken) => {
      if (err) {
        // token verification failed
        res.status(401).json({ message: "invalid token" });
      } else {
        // token is valid
        req.decodedToken = decodedToken; // any sub-sequent middleware of route handler have access to this
        // console.log("\n** decoded token information **\n", req.decodedToken);
      }
    });
  } else {
    res.status(401).json({ message: "no token provided" });
  }
  db("users")
    .where("users.id", req.decodedToken.id)
    .update({ plant_sched: value })
    .then(response => {
      res.status(200).json({ message: "Successfully updated" });
    })
    .catch(err => res.send(err));
});

// update user config for weather
server.put("/weather", (req, res) => {
  const token = req.headers.authorization;
  const value = req.body.value;
  if (token) {
    jwt.verify(token, jwtSecret, (err, decodedToken) => {
      if (err) {
        // token verification failed
        res.status(401).json({ message: "invalid token" });
      } else {
        // token is valid
        req.decodedToken = decodedToken; // any sub-sequent middleware of route handler have access to this
        // console.log("\n** decoded token information **\n", req.decodedToken);
      }
    });
  } else {
    res.status(400).json({ message: "no token provided" });
  }
  db("users")
    .where("users.id", req.decodedToken.id)
    .update({ weather: value })
    .then(response => {
      res.status(200).json({ message: "Successfully updated" });
    })
    .catch(err => res.send(err));
});

// update user config for number of drinks
server.put("/num_drinks", (req, res) => {
  const token = req.headers.authorization;
  const value = req.body.value;
  if (token) {
    jwt.verify(token, jwtSecret, (err, decodedToken) => {
      if (err) {
        // token verification failed
        res.status(401).json({ message: "invalid token" });
      } else {
        // token is valid
        req.decodedToken = decodedToken; // any sub-sequent middleware of route handler have access to this
        // console.log("\n** decoded token information **\n", req.decodedToken);
      }
    });
  } else {
    res.status(401).json({ message: "no token provided" });
  }
  db("users")
    .where("users.id", req.decodedToken.id)
    .update({ num_drinks: value })
    .then(response => {
      res.status(200).json({ message: "Successfully updated" });
    })
    .catch(err => res.send(err));
});
// -----------------------------------------------------------------------------------------------------

// server port
const port = process.env.PORT || 3300;
server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
