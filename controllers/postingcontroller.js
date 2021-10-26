const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { Router } = require("express");
const { Posting } = require("../models");
const validateSession = require("../middleware/validate-session");
const posting = require("../models/posting");

const router = Router();

/**** VIEW ALL POSTS ****/

 router.get("/", async function (req, res) {
  try {
    Posting.findAll()
    .then(postings => res.status(200).json(postings))
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
});

 /**** DELETE UPLOAD ****/
 router.delete("/:id", async function (req, res) {
  try {
    const query = {where: { id: req.params.id, owner_id: req.user.id}};

    Posting.destroy(query)
    .then(() => res.status(200).json({message: "Post has been removed"}))
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
});

/**** CREATE POST ****/
router.post('/posting', async function (req, res) {
  try {
    const postingEntry = {
      description: req.body.posting.description,
      image: req.body.posting.image,
      owner_id: req.user.id,
      likes: 0
  }
  Posting.create(postingEntry)
    .then(posting => res.status(200).json(posting))
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
});

/**** GET YOUR POSTS ****/
router.get('/mine', async function (req, res) {
  try {
    let userid = req.user.id
    Posting.findAll({
        where: { owner_id: userid }
    })
    .then(log => res.status(200).json(log))
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
});

/**** EDIT YOUR POST ****/
router.put('/update/:id', async function (req, res) {
  try {
    const updatePosting = {
      description: req.body.posting.description,
      image: req.body.posting.image,
      owner_id: req.user.id,
    }
    const query = { where: { id: req.params.id, owner_id: req.user.id} };
    Posting.update(updatePosting, query)
    .then((postings) => res.status(200).json(postings))
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
});

/**** UPDATE LIKES ****/
router.put('/updateLikes/:id', async function (req, res) {
  try {
    const updateLikes = {
      likes: req.body.posting.likes
    };
    const query = { where: { id: req.params.id, owner_id: req.params.id} };
    Posting.update(updateLikes, query)
    .then((postings) => res.status(200).json(postings))
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
});

module.exports = router