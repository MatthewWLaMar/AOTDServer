const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { Router } = require("express");
const { Comments } = require("../models");
const validateSession = require("../middleware/validate-session");

const router = Router();

/**** CREATE COMMENT ****/
router.post("/", validateSession, function (req, res) {
  const commentEntry = {
    comment: req.body.comments.comment,
    owner_id: req.user.id,
  };
  Comments.create(commentEntry)
    .then((comments) => res.status(200).json(comments))
    .catch((err) => res.status(500).json({ error: err }));
});

/**** DELETE COMMENT ****/
router.delete("/:id", validateSession, function (req, res) {
  const query = { where: { id: req.params.id, owner_id: req.user.id } };

  Comments.destroy(query)
    .then(() => res.status(200).json({ message: "Comment has been removed" }))
    .catch((err) => res.status(500).json({ error: err }));
});

/**** UPDATE COMMENT ****/
router.put("/update/:id", validateSession, function (req, res) {
  const updateComment = {
    comment: req.body.comments.comment,
    owner_id: req.user.id,
  };

  const query = { where: { id: req.params.id, owner_id: req.user.id } };
  Comments.update(updateComment, query)
    .then((comments) => res.status(200).json(comments))
    .catch((err) => res.status(500).json({ error: err }));
});

module.exports = router;
