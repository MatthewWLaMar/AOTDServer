const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { Router } = require("express");
const { User } = require("../models");
const validateSession = require("../middleware/validate-session");
const user = require("../models/user");

const router = Router();

router.post("/create", function (req, res) {
  user
    .create({
      username: req.body.user.username,
      passwordhash: bcrypt.hashSync(req.body.user.passwordhash, 13),
      email: req.body.user.email,
    })
    .then(function createSuccessful(user) {
      let token = jwt.sign(
        { id: user.id, username: user.username },
        process.env.JWT_SECRET,
        { expiresIn: 60 * 60 * 24 }
      );
      let id = user.id;
      res.json({
        user: user,
        message: "User successfully created",
        sessionToken: token,
        ID: id,
      });
    })
    .catch((err) => res.status(500).json({ error: err }));
});

// router.post('/create', async function (req, res) {
//   try {
//     const createUser = {
//         username: req.body.user.username,
//         passwordhash: bcrypt.hashSync(req.body.user.passwordhash, 13),
//         email: req.body.user.email,
//       }
//       User.create(createUser)
//       .then(function createSuccessful(user) {
//         let token = jwt.sign(
//           { id: user.id, username: user.username },
//           process.env.JWT_SECRET,
//           { expiresIn: 60 * 60 * 24 }
//         );
//         let id = user.id;
//         res.json({
//           user: user,
//           message: "User successfully created",
//           sessionToken: token,
//           ID: id,
//         });
//       });
//   } catch (e) {
//     res.status(500).json({ message: e.message });
//   }
// });

router.post("/login", function (req, res) {
  user
    .findOne({
      where: {
        username: req.body.user.username,
      },
    })
    .then(function loginSuccess(user) {
      if (user) {
        bcrypt.compare(
          req.body.user.passwordhash,
          user.passwordhash,
          function (err, matches) {
            if (matches) {
              let token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
                expiresIn: 60 * 60 * 24,
              });
              let id = user.id;

              res.status(200).json({
                user: user,
                message: "User successfully logged in!",
                sessionToken: token,
                ID: id,
              });
            } else {
              res.status(502).send({ error: "Login Failed" });
            }
          }
        );
      } else {
        res.status(500).json({ error: "User does not exist." });
      }
    })
    .catch((err) => res.status(500).json({ error: err }));
});

module.exports = router;
